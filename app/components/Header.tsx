

import Link from "next/link";
import { Menu, Search, User, Globe } from "lucide-react";

export default function Header() {
    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 z-50">
                    <span className="text-2xl font-bold tracking-tighter text-primary-600">
                        ZENOVA
                    </span>
                </Link>

                {/* Desktop Navigation - Middle */}
                <nav className="hidden md:flex items-center gap-8 text-gray-600">
                    <Link href="#" className="hover:text-primary-500 transition-colors font-medium">객실</Link>
                    <Link href="#" className="hover:text-primary-500 transition-colors font-medium">다이닝</Link>
                    <Link href="#" className="hover:text-primary-500 transition-colors font-medium">부대시설</Link>
                    <Link href="#" className="hover:text-primary-500 transition-colors font-medium">스페셜 오퍼</Link>
                    <Link href="#" className="hover:text-primary-500 transition-colors font-medium">호텔 소개</Link>
                </nav>

                {/* User Actions - Right */}
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-full hover:bg-gray-100 transition-colors text-gray-700">
                        <Globe size={18} />
                        <span>KRW</span>
                    </button>

                    <div className="flex items-center gap-2 border border-gray-200 rounded-full p-1 pl-3 pr-1 transition-all cursor-pointer bg-white hover:shadow-md">
                        <Menu size={18} className="text-gray-600" />
                        <div className="bg-gray-500 rounded-full p-1 text-white">
                            <User size={16} fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
