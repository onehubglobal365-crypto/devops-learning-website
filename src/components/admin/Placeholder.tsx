"use client";
import React from "react";

export default function AdminPlaceholder({ title }: { title: string }) {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{title} Module</h2>
            <p className="text-gray-500 max-w-md">
                This module is currently being integrated with the new standalone backend.
                You will soon be able to manage {title.toLowerCase()} directly from here.
            </p>
        </div>
    );
}
