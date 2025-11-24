

import { LucideIcon } from "lucide-react";

interface FacilityCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FacilityCard({ icon, title, description }: FacilityCardProps) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-default">
            <div className="p-3 bg-primary-50 text-primary-600 rounded-lg shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
