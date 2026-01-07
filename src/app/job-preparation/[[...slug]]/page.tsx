"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function JobPreparationPage({ params }: { params: { slug?: string[] } }) {
    const [isLoading, setIsLoading] = useState(true);
    const [iframeSrc, setIframeSrc] = useState("https://ohg-ai-interviewer.vercel.app/");

    const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            const relativePath = pathname.replace(/^\/job-preparation/, "").replace(/\/+$/, "");
            const targetUrl = `https://ohg-ai-interviewer.vercel.app${relativePath || "/"}`;
            setIframeSrc(targetUrl);
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
                <iframe
                    src={iframeSrc}
                    className="w-full h-full border-0"
                    title="AI Interviewer"
                    allow="microphone; camera; display-capture; autoplay; clipboard-write; fullscreen"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    onLoad={() => setIsLoading(false)}
                />
            </div>
        </div>
    );
}
