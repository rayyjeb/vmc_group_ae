import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin Panel - VMC Group UAE",
    description: "Admin panel for managing products and content",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            {children}
        </div>
    );
}
