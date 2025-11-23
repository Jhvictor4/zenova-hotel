import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { VibetorchInspector } from "@vibetorch/inspector";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "제노바 스카이 호텔 | 제주시 관악구 송도동의 럭셔리 오션뷰",
  description:
    "제주시 관악구 송도동에 위치한 제노바 스카이 호텔. 전 객실 오션뷰, 인피니티 풀, 미슐랭 다이닝을 갖춘 프리미엄 럭셔리 호텔입니다. 지금 예약하세요.",
  keywords:
    "제노바 스카이 호텔, 제주시 관악구 송도동 호텔, 제주도 호캉스, 제주 오션뷰 호텔, Zenova Sky Hotel, Jeju Hotel",
  openGraph: {
    title: "제노바 스카이 호텔 | 제주시 관악구 송도동",
    description:
      "제주시 관악구 송도동의 랜드마크, 제노바 스카이 호텔에서 특별한 휴식을 경험하세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "Zenova Sky Hotel",
    images: [
      {
        url: "https://zenova-sky-hotel.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zenova Sky Hotel Infinity Pool",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${notoSansKr.variable} antialiased`}>
        {children}

        <VibetorchInspector />
      </body>
    </html>
  );
}
