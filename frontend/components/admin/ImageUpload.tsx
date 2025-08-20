"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, X, Image as ImageIcon, Trash2 } from "lucide-react";

interface ImageUploadProps {
    onImageUploaded: (imageUrl: string) => void;
    currentImage?: string;
    className?: string;
}

export default function ImageUpload({ onImageUploaded, currentImage, className = "" }: ImageUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadedImages, setUploadedImages] = useState<string[]>(currentImage ? [currentImage] : []);
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();

    useEffect(() => {
        // Test backend connection and upload endpoint
        const testBackend = async () => {
            try {
                // Test health endpoint
                const healthResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/health`);
                console.log("🏥 Health check status:", healthResponse.status);

                // Test if upload endpoint exists (without authentication)
                const uploadResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/upload/image`, {
                    method: 'POST',
                    body: new FormData(),
                });
                console.log("📤 Upload endpoint test status:", uploadResponse.status);

                if (uploadResponse.status === 401) {
                    console.log("✅ Upload endpoint exists (requires auth)");
                } else if (uploadResponse.status === 404) {
                    console.error("❌ Upload endpoint not found");
                }

            } catch (error) {
                console.error("💥 Backend test failed:", error);
            }
        };

        testBackend();
    }, []);

    const handleFileUpload = async (file: File) => {
        if (!file) return;

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            toast({
                title: "Invalid file type",
                description: "Please upload an image file (JPEG, PNG, WebP, or GIF)",
                variant: "destructive",
            });
            return;
        }

        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast({
                title: "File too large",
                description: "Please upload an image smaller than 5MB",
                variant: "destructive",
            });
            return;
        }

        setIsUploading(true);

        try {
            const formData = new FormData();
            formData.append('image', file);

            const token = localStorage.getItem("adminToken");
            console.log("🔑 Upload token:", token ? "Present" : "Missing");

            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/upload/image`;
            console.log("🌐 Upload API URL:", apiUrl);
            console.log("📄 File details:", {
                name: file.name,
                size: file.size,
                type: file.type
            });

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    // Don't set Content-Type for FormData - let the browser set it
                },
                body: formData,
            });

            console.log("📡 Upload response status:", response.status);
            console.log("📡 Upload response headers:", response.headers);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("❌ Upload failed with status:", response.status);
                console.error("❌ Error response:", errorText);
                throw new Error(`Upload failed with status ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            console.log("📦 Upload response data:", data);

            if (data.success) {
                // Use the optimized URL for better performance
                const imageUrl = data.data.optimized_url || data.data.secure_url || data.data.url;

                // Add new image to the array
                const newImages = [...uploadedImages, imageUrl];
                setUploadedImages(newImages);

                // Update parent component with the latest image (for backward compatibility)
                onImageUploaded(imageUrl);

                toast({
                    title: "Success",
                    description: "Image uploaded successfully",
                });
            } else {
                throw new Error(data.message || 'Upload failed');
            }
        } catch (error) {
            console.error('💥 Upload error details:', error);
            console.error('💥 Error stack:', error.stack);

            let errorMessage = "Something went wrong. Please try again.";
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

        // Update parent component with the remaining images
        if (newImages.length > 0) {
            onImageUploaded(newImages[newImages.length - 1]);
        } else {
            onImageUploaded("");
        }
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
                    <Label className="text-sm text-gray-600">Uploaded Images ({uploadedImages.length})</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {uploadedImages.map((imageUrl, index) => (
                            <div key={index} className="relative group">
                                <img
                                    src={imageUrl}
                                    alt={`Product image ${index + 1}`}
                                    className="w-full h-24 object-cover rounded-lg border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
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
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${dragActive
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
                        >
                            browse
                        </button>
                    </p>
                    <p className="text-xs text-gray-500">
                        Supports: JPEG, PNG, WebP, GIF (max 5MB)
                    </p>
                    {uploadedImages.length > 0 && (
                        <p className="text-xs text-green-600">
                            ✓ {uploadedImages.length} image(s) uploaded
                        </p>
                    )}
                </div>
            </div>

            {/* Upload Button */}
            <Button
                type="button"
                variant="outline"
                onClick={openFileDialog}
                disabled={isUploading}
                className="w-full"
            >
                <Upload className="h-4 w-4 mr-2" />
                {isUploading ? "Uploading..." : "Add More Images"}
            </Button>

            {/* Clear All Button */}
            {uploadedImages.length > 0 && (
                <Button
                    type="button"
                    variant="destructive"
                    onClick={() => {
                        setUploadedImages([]);
                        onImageUploaded("");
                    }}
                    className="w-full"
                >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All Images
                </Button>
            )}
        </div>
    );
}
