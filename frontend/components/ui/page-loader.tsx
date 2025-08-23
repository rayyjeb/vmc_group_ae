"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) {
                    clearInterval(progressInterval);
                    return 90;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Wait for all resources to load
        const handleLoad = () => {
            setProgress(100);
            setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
        };

        // Check if page is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        // Fallback: hide loader after 5 seconds max
        const fallback = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => {
            clearTimeout(fallback);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
            <div className="text-center">
                {/* Logo */}
                <div className="mb-8">
                    <img
                        src="/logo.webp"
                        alt="VMC Group UAE"
                        className="w-32 h-32 mx-auto animate-pulse"
                    />
                </div>

                {/* Loading Text */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    VMC Group UAE
                </h2>
                <p className="text-gray-600 mb-8">
                    Loading your experience...
                </p>

                {/* Progress Bar */}
                <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto mb-4">
                    <div
                        className="bg-brand h-2 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Progress Percentage */}
                <p className="text-sm text-gray-500">
                    {Math.round(progress)}%
                </p>

                {/* Loading Animation */}
                <div className="mt-8 flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-3 h-3 bg-brand rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-3 h-3 bg-brand rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        </div>
    );
}
