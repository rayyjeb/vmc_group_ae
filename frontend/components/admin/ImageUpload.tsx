"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, Image as ImageIcon, Trash2, CheckCircle, Clock } from "lucide-react";

interface ImageUploadProps {
  onImagesChange: (images: UploadedImage[]) => void;
  currentImages?: UploadedImage[];
  className?: string;
}

interface UploadedImage {
  id: string;
  url: string;
  status: 'uploading' | 'completed' | 'error';
  file?: File;
  progress?: number;
}

export default function ImageUpload({
  onImagesChange,
  currentImages = [],
  className = "",
}: ImageUploadProps) {
  const [images, setImages] = useState<UploadedImage[]>(currentImages);
  const [dragActive, setDragActive] = useState(false);
  const [uploadQueue, setUploadQueue] = useState<File[]>([]);
  const [isProcessingQueue, setIsProcessingQueue] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Handle single file upload (defined as callback to avoid dependency issues)
  const handleSingleFileUpload = useCallback(async (file: File) => {
    try {
      // Upload to Cloudinary
      const cloudinaryUrl = await uploadToCloudinary(file);
      
      // Update the image with the actual Cloudinary URL and clean up blob URL
      setImages(prev => prev.map(img => {
        if (img.file === file) {
          // Clean up the temporary object URL
          if (img.url.startsWith('blob:')) {
            URL.revokeObjectURL(img.url);
          }
          return { ...img, url: cloudinaryUrl, status: 'completed' as const, file: undefined };
        }
        return img;
      }));
      
      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
    } catch (error) {
      // Mark image as error but keep it in the list for retry
      setImages(prev => prev.map(img => 
        img.file === file 
          ? { ...img, status: 'error' as const }
          : img
      ));
      
      const errorMessage = error instanceof Error ? error.message : "Upload failed. Please try again.";
      toast({
        title: "Upload failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  }, [toast]);

  // Process upload queue one file at a time
  useEffect(() => {
    const processQueue = async () => {
      if (isProcessingQueue || uploadQueue.length === 0) return;
      
      setIsProcessingQueue(true);
      
      const file = uploadQueue[0];
      setUploadQueue(prev => prev.slice(1)); // Remove first file from queue
      
      await handleSingleFileUpload(file);
      
      // Small delay between uploads to prevent server overload
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setIsProcessingQueue(false);
    };

    processQueue();
  }, [uploadQueue.length, isProcessingQueue, handleSingleFileUpload]);

  // Notify parent when images change (using useEffect to avoid render-time updates)
  useEffect(() => {
    onImagesChange(images);
  }, [images]); // Removed onImagesChange from deps to prevent infinite loops

  const uploadToCloudinary = async (file: File): Promise<string> => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("Please log in to upload images");
      }

      const formData = new FormData();
      formData.append("image", file);

      const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
      }/api/upload/image`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          throw new Error("Session expired. Please log in again.");
        }
        if (response.status === 413) {
          throw new Error("File too large. Please choose a smaller image.");
        }
        throw new Error(`Upload failed (${response.status})`);
      }

      const data = await response.json();
      
      if (data.success) {
        const imageUrl = data.data?.secure_url || data.data?.url || data.secure_url || data.url;
        if (!imageUrl) {
          throw new Error("No image URL received from server");
        }
        return imageUrl;
      } else {
        throw new Error(data.message || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      throw error;
    }
  };

  // Add files to upload queue instead of uploading immediately
  const handleFileUpload = (file: File) => {
    if (!file) return;

    // Validate file type
    const allowedTypes = [
      "image/jpeg",
      "image/jpg", 
      "image/png",
      "image/webp",
      "image/gif",
    ];
    if (!allowedTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, WebP, or GIF)",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive",
      });
      return;
    }

    // Create a temporary image entry with queued status
    const tempId = `temp-${Date.now()}-${Math.random()}`;
    const tempImage: UploadedImage = {
      id: tempId,
      url: URL.createObjectURL(file), // Temporary preview URL
      status: 'uploading',
      file,
      progress: 0
    };

    // Add to images immediately for instant feedback
    setImages(prev => [...prev, tempImage]);
    
    // Add to upload queue
    setUploadQueue(prev => [...prev, file]);
  };



  const retryUpload = (imageId: string) => {
    const image = images.find(img => img.id === imageId);
    if (!image || !image.file) return;

    // Update status to uploading
    setImages(prev => prev.map(img => 
      img.id === imageId 
        ? { ...img, status: 'uploading' as const }
        : img
    ));
    
    // Add file back to upload queue
    setUploadQueue(prev => [...prev, image.file!]);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        handleFileUpload(file);
      }
    });
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach(handleFileUpload);
    
    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeImage = (imageId: string) => {
    const imageToRemove = images.find(img => img.id === imageId);
    if (imageToRemove) {
      // Clean up blob URL
      if (imageToRemove.url.startsWith('blob:')) {
        URL.revokeObjectURL(imageToRemove.url);
      }
      
      // Remove from queue if it's still there
      if (imageToRemove.file) {
        setUploadQueue(prev => prev.filter(file => file !== imageToRemove.file));
      }
    }
    
    setImages(prev => prev.filter(img => img.id !== imageId));
  };

  const clearAllImages = () => {
    // Clean up any blob URLs
    images.forEach(img => {
      if (img.url.startsWith('blob:')) {
        URL.revokeObjectURL(img.url);
      }
    });
    
    // Clear upload queue
    setUploadQueue([]);
    setImages([]);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const getStatusIcon = (status: UploadedImage['status']) => {
    switch (status) {
      case 'uploading':
        return <Clock className="h-4 w-4 text-blue-500 animate-spin" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <X className="h-4 w-4 text-red-500" />;
    }
  };

  const completedImages = images.filter(img => img.status === 'completed');
  const uploadingImages = images.filter(img => img.status === 'uploading');
  const hasErrors = images.some(img => img.status === 'error');
  const queueLength = uploadQueue.length;

  return (
    <div className={`space-y-4 ${className}`}>
      <Label>Product Images *</Label>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileInput}
        className="hidden"
      />

      {/* Image Preview Grid */}
      {images.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-gray-600">
              Images ({completedImages.length} completed, {images.length} total)
              {queueLength > 0 && ` • ${queueLength} in queue`}
            </Label>
            <div className="flex items-center gap-2">
              {uploadingImages.length > 0 && (
                <span className="text-xs text-blue-500">
                  {uploadingImages.length} uploading...
                </span>
              )}
              {hasErrors && (
                <span className="text-xs text-red-500">Some uploads failed - click retry</span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {images.map((image, index) => (
              <div key={image.id} className="relative group">
                <img
                  src={image.url}
                  alt={`Product image ${index + 1}`}
                  className={`w-full h-24 object-cover rounded-lg border-2 transition-all ${
                    image.status === 'completed' 
                      ? 'border-green-200 group-hover:border-green-300' 
                      : image.status === 'error'
                      ? 'border-red-200 group-hover:border-red-300'
                      : 'border-blue-200 group-hover:border-blue-300'
                  }`}
                  onError={(e) => {
                    console.error("Failed to load image:", image.url);
                  }}
                />
                
                {/* Status indicator */}
                <div className="absolute top-1 left-1 bg-white bg-opacity-90 rounded-full p-1">
                  {getStatusIcon(image.status)}
                </div>
                
                {/* Remove button */}
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                  onClick={() => removeImage(image.id)}
                >
                  <X className="h-3 w-3 text-white" />
                </Button>
                
                {/* Retry button for failed uploads */}
                {image.status === 'error' && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="absolute bottom-1 left-1 right-1 h-6 text-xs"
                    onClick={() => retryUpload(image.id)}
                  >
                    Retry
                  </Button>
                )}
                
                {/* Image number */}
                <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Drag and drop images here, or{" "}
            <button
              type="button"
              onClick={openFileDialog}
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              browse
            </button>
          </p>
          <p className="text-xs text-gray-500">
            Supports: JPEG, PNG, WebP, GIF (max 10MB each)
          </p>
          {completedImages.length > 0 && (
            <p className="text-xs text-green-600">
              ✓ {completedImages.length} image(s) ready
            </p>
          )}
          {queueLength > 0 && (
            <p className="text-xs text-blue-600">
              🔄 {queueLength} image(s) in upload queue
            </p>
          )}
        </div>
      </div>

      {/* Upload Controls */}
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <Button
          type="button"
          onClick={openFileDialog}
          className="flex-1 min-w-[120px]"
        >
          <Upload className="h-4 w-4 mr-2" />
          {images.length === 0 ? "Upload Images" : "Add More Images"}
        </Button>

        {images.length > 0 && (
          <Button
            type="button"
            onClick={clearAllImages}
            className="flex-1 min-w-[120px] bg-red-700"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>
    </div>
  );
}