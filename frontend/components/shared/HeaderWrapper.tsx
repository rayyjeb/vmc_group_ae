"use client";

import { usePathname } from "next/navigation";
import { HeroHeader } from "@/components/blocks/header";

export default function HeaderWrapper() {
    const pathname = usePathname();

    // Hide header on admin pages
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return <HeroHeader />;
}
