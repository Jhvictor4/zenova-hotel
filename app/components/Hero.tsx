"use client";

import { Search, Calendar, Users, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex flex-col justify-center items-center text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
                    제주의 숨겨진 낙원
                </h1>
                <p className="text-xl md:text-2xl mb-12 font-light text-white/90 drop-shadow-md">
                    Zenova Sky에서 경험하는 특별한 휴식
                </p>

                {/* Booking Widget */}
                <div className="bg-white rounded-full shadow-float p-2 max-w-3xl mx-auto flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">

                    {/* Dates */}
                    <div className="flex-1 w-full px-8 py-4 hover:bg-gray-50 rounded-full transition-colors cursor-pointer group text-left">
                        <div className="flex items-center gap-3 mb-1">
                            <Calendar size={20} className="text-gray-400 group-hover:text-primary-500 transition-colors" />
                            <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">체크인 / 체크아웃</span>
                        </div>
                        <p className="text-gray-400 text-sm truncate pl-8">날짜를 선택하세요</p>
                    </div>

                    {/* Guests */}
                    <div className="flex-1 w-full px-8 py-4 hover:bg-gray-50 rounded-full transition-colors cursor-pointer group text-left relative">
                        <div className="flex items-center justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <Users size={20} className="text-gray-400 group-hover:text-primary-500 transition-colors" />
                                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">투숙객</span>
                                </div>
                                <p className="text-gray-400 text-sm truncate pl-8">성인 2명</p>
                            </div>

                            {/* Search Button */}
                            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 ml-4 font-bold whitespace-nowrap">
                                객실 검색
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
