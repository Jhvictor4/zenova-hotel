"use client";

import { Facebook, Instagram, Twitter, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">ZENOVA</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            제주도 최고의 럭셔리 부티크 호텔.<br />
                            잊지 못할 추억을 선사합니다.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">호텔 소개</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:underline">호텔 개요</Link></li>
                            <li><Link href="#" className="hover:underline">객실 안내</Link></li>
                            <li><Link href="#" className="hover:underline">다이닝</Link></li>
                            <li><Link href="#" className="hover:underline">부대시설</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">고객 지원</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:underline">공지사항</Link></li>
                            <li><Link href="#" className="hover:underline">자주 묻는 질문</Link></li>
                            <li><Link href="#" className="hover:underline">예약 확인</Link></li>
                            <li><Link href="#" className="hover:underline">문의하기</Link></li>
                        </ul>
                    </div>

                    {/* Links 3 */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">법적 고지</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="#" className="hover:underline">이용약관</Link></li>
                            <li><Link href="#" className="hover:underline">개인정보처리방침</Link></li>
                            <li><Link href="#" className="hover:underline">쿠키 정책</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-500">
                        © 2024 Zenova Sky Boutique Hotel. All rights reserved.
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer hover:underline">
                            <Globe size={16} />
                            한국어 (KR)
                        </div>
                        <div className="flex items-center gap-4 text-gray-600">
                            <Facebook size={20} className="hover:text-primary-600 cursor-pointer transition-colors" />
                            <Twitter size={20} className="hover:text-primary-600 cursor-pointer transition-colors" />
                            <Instagram size={20} className="hover:text-primary-600 cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
