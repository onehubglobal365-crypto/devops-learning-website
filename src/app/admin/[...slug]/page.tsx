"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminIframePage({ params }: { params: { slug?: string[] } }) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const relativePath = pathname.replace(/^\/admin/, "");
            const targetUrl = `https://ohg-ai-interviewer.vercel.app/admin${relativePath || "/"}`;
            window.location.href = targetUrl;
        }
    }, [pathname]);

    return (
        <div className="w-full h-screen flex flex-col pt-[70px]">
            <div className="flex-1 relative w-full h-full bg-background">
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
                        <Loader2 className="h-10 w-10 animate-spin text-primary" />
                    </div>
                )}
                <div className="flex items-center justify-center h-full text-gray-400 font-medium">
                    Redirecting to AI Interviewer Admin...
                </div>
            </div>
        </div>
    );
}
