

import { Star, Heart } from "lucide-react";
import Image from "next/image";

interface RoomCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
    rating: number;
    reviews: number;
    tags?: string[];
}

export default function RoomCard({
    image,
    title,
    description,
    price,
    rating,
    reviews,
    tags = []
}: RoomCardProps) {
    return (
        <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-200 mb-3">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/10 transition-colors">
                    <Heart className="text-white hover:fill-rose-500 hover:text-rose-500 transition-colors" size={24} />
                </button>
                {tags.length > 0 && (
                    <div className="absolute top-3 left-3 flex gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-white/90 backdrop-blur-sm text-xs font-bold px-2 py-1 rounded-md text-gray-800 shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors truncate pr-4">
                    {title}
                </h3>
                <div className="flex items-center gap-1 shrink-0">
                    <Star size={14} className="fill-black text-black" />
                    <span className="text-sm font-medium">{rating}</span>
                    <span className="text-sm text-gray-500">({reviews})</span>
                </div>
            </div>

            <p className="text-gray-500 text-sm mb-2 line-clamp-1">{description}</p>

            <div className="flex items-baseline gap-1">
                <span className="font-bold text-lg text-gray-900">{price}</span>
                <span className="text-gray-500 text-sm">/ 박</span>
            </div>
        </div>
    );
}
