"use client";

import Image from "next/image";
import { Grid } from "lucide-react";

interface PhotoGridProps {
    images: string[];
}

export default function PhotoGrid({ images }: PhotoGridProps) {
    // Ensure we have at least 5 images for the grid, or fallback
    const displayImages = images.length >= 5 ? images.slice(0, 5) : [
        ...images,
        ...Array(5 - images.length).fill("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")
    ];

    return (
        <div className="relative rounded-xl overflow-hidden h-[400px] md:h-[500px] grid grid-cols-1 md:grid-cols-4 gap-2">
            {/* Main Large Image */}
            <div className="md:col-span-2 row-span-2 relative cursor-pointer hover:opacity-95 transition-opacity">
                <Image
                    src={displayImages[0]}
                    alt="Main Hotel View"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Secondary Images */}
            <div className="hidden md:grid md:col-span-2 md:row-span-2 grid-cols-2 gap-2 h-full">
                {displayImages.slice(1).map((img, idx) => (
                    <div key={idx} className="relative h-full cursor-pointer hover:opacity-95 transition-opacity">
                        <Image
                            src={img}
                            alt={`Hotel View ${idx + 2}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Show All Photos Button */}
            <button className="absolute bottom-4 right-4 bg-white border border-gray-800 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-sm">
                <Grid size={16} />
                사진 모두 보기
            </button>
        </div>
    );
}
