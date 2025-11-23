"use client";

import { Star, ChevronDown } from "lucide-react";

export default function BookingSidebar() {
    return (
        <div className="sticky top-24 border border-gray-200 rounded-xl p-6 shadow-card bg-white">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <span className="text-2xl font-bold text-gray-900">₩450,000</span>
                    <span className="text-gray-500 text-sm"> / 박</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                    <Star size={14} className="fill-black text-black" />
                    <span className="font-medium">4.92</span>
                    <span className="text-gray-500 underline cursor-pointer">후기 128개</span>
                </div>
            </div>

            <div className="border border-gray-400 rounded-lg mb-4 overflow-hidden">
                <div className="flex border-b border-gray-400">
                    <div className="flex-1 p-3 border-r border-gray-400 cursor-pointer hover:bg-gray-50">
                        <div className="text-[10px] font-bold uppercase text-gray-800">체크인</div>
                        <div className="text-sm text-gray-600">2024. 12. 24.</div>
                    </div>
                    <div className="flex-1 p-3 cursor-pointer hover:bg-gray-50">
                        <div className="text-[10px] font-bold uppercase text-gray-800">체크아웃</div>
                        <div className="text-sm text-gray-600">2024. 12. 26.</div>
                    </div>
                </div>
                <div className="p-3 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                    <div>
                        <div className="text-[10px] font-bold uppercase text-gray-800">인원</div>
                        <div className="text-sm text-gray-600">게스트 2명</div>
                    </div>
                    <ChevronDown size={16} className="text-gray-500" />
                </div>
            </div>

            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-lg mb-4 transition-colors">
                예약하기
            </button>

            <p className="text-center text-sm text-gray-500 mb-6">
                예약 확정 전에는 요금이 청구되지 않습니다.
            </p>

            <div className="space-y-3 text-gray-600">
                <div className="flex justify-between underline">
                    <span>₩450,000 x 2박</span>
                    <span>₩900,000</span>
                </div>
                <div className="flex justify-between underline">
                    <span>청소비</span>
                    <span>₩50,000</span>
                </div>
                <div className="flex justify-between underline">
                    <span>서비스 수수료</span>
                    <span>₩120,000</span>
                </div>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between font-bold text-gray-900 text-lg">
                <span>총 합계</span>
                <span>₩1,070,000</span>
            </div>
        </div>
    );
}
