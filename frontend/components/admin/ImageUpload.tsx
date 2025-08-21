"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, Image as ImageIcon, Trash2 } from "lucide-react";

interface ImageUploadProps {
  onImageUploaded: (imageUrl: string, allImages: string[]) => void;
  currentImage?: string;
  className?: string;
}

export default function ImageUpload({
  onImageUploaded,
  currentImage,
  className = "",
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>(
    currentImage ? [currentImage] : []
  );
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = async (file: File) => {
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

    // Validate file size (10MB to match backend)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      // Get and validate token
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("Please log in to upload images");
      }

      // Create form data
      const formData = new FormData();
      formData.append("image", file);

      const apiUrl = `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
      }/api/upload/image`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          // Don't set Content-Type header - let the browser set it for FormData
        },
        body: formData,
      });

      // Get response text first to debug
      const responseText = await response.text();

      // Handle response
      if (!response.ok) {
        console.error("❌ Upload failed:", {
          status: response.status,
          statusText: response.statusText,
          error: responseText,
        });

        if (response.status === 401) {
          localStorage.removeItem("adminToken");
          throw new Error("Session expired. Please log in again.");
        }

        if (response.status === 413) {
          throw new Error("File too large. Please choose a smaller image.");
        }

        throw new Error(`Upload failed (${response.status}): ${responseText}`);
      }

      // Parse JSON response
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("❌ Failed to parse response as JSON:", parseError);
        throw new Error("Invalid response from server");
      }

      if (data.success) {
        // Check for secure_url in different possible locations
        let imageUrl = null;

        if (data.data?.secure_url) {
          imageUrl = data.data.secure_url;
        } else if (data.data?.url) {
          imageUrl = data.data.url;
        } else if (data.secure_url) {
          imageUrl = data.secure_url;
        } else if (data.url) {
          imageUrl = data.url;
        }

        if (imageUrl) {
          const newImages = [...uploadedImages, imageUrl];
          setUploadedImages(newImages);
          onImageUploaded(imageUrl, newImages);

          toast({
            title: "Success",
            description: "Image uploaded successfully",
          });
        } else {
          console.error("❌ No image URL found in response:", data);
          throw new Error("No image URL received from server");
        }
      } else {
        console.error("❌ Upload failed:", data);
        throw new Error(data.message || "Upload failed");
      }
    } catch (error) {
      console.error("💥 Upload error:", error);

      let errorMessage = "Upload failed. Please try again.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: "Upload failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
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

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    const latestImage =
      newImages.length > 0 ? newImages[newImages.length - 1] : "";
    onImageUploaded(latestImage, newImages);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <Label>Product Images *</Label>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />

      {/* Image Preview Grid */}
      {uploadedImages.length > 0 && (
        <div className="space-y-3">
          <Label className="text-sm text-gray-600">
            Uploaded Images ({uploadedImages.length})
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {uploadedImages.map((imageUrl, index) => (
              <div key={index} className="relative group">
                <img
                  src={imageUrl}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
                  onError={(e) => {
                    console.error("❌ Failed to load image:", imageUrl);
                    e.currentTarget.style.display = "none";
                  }}
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
                <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
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
            Drag and drop an image here, or{" "}
            <button
              type="button"
              onClick={openFileDialog}
              className="text-blue-600 hover:text-blue-500 font-medium"
              disabled={isUploading}
            >
              browse
            </button>
          </p>
          <p className="text-xs text-gray-500">
            Supports: JPEG, PNG, WebP, GIF (max 10MB)
          </p>
          {uploadedImages.length > 0 && (
            <p className="text-xs text-green-600">
              ✓ {uploadedImages.length} image(s) uploaded
            </p>
          )}
          {isUploading && (
            <p className="text-xs text-blue-600">🔄 Uploading...</p>
          )}
        </div>
      </div>

      {/* Upload Button */}
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <Button
          type="button"
          onClick={openFileDialog}
          disabled={isUploading}
          className="w-1/3"
        >
          <Upload className="h-4 w-4 mr-2" />
          {isUploading
            ? "Uploading..."
            : uploadedImages.length == 0
            ? "Upload Image"
            : "Add More Images"}
        </Button>

        {/* Clear All Button */}
        {uploadedImages.length > 0 && (
          <Button
            type="button"
            onClick={() => {
              setUploadedImages([]);
              onImageUploaded("", []);
            }}
            className="w-1/3"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All Images
          </Button>
        )}
      </div>
    </div>
  );
}
