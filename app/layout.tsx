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
  metadataBase: new URL('https://zenova-sky-hotel.com'),
  title: "제노바 스카이 호텔 | 제주시 관악구 송도동의 럭셔리 오션뷰",
  description:
    "제주시 관악구 송도동에 위치한 제노바 스카이 호텔. 전 객실 오션뷰, 인피니티 풀, 미슐랭 다이닝을 갖춘 프리미엄 럭셔리 호텔입니다. 지금 예약하세요.",
  keywords:
    "제노바 스카이 호텔, 제주시 관악구 송도동 호텔, 제주도 호캉스, 제주 오션뷰 호텔, Zenova Sky Hotel, Jeju Hotel",
  alternates: {
    canonical: 'https://zenova-sky-hotel.com',
  },
  openGraph: {
    title: "제노바 스카이 호텔 | 제주시 관악구 송도동",
    description:
      "제주시 관악구 송도동의 랜드마크, 제노바 스카이 호텔에서 특별한 휴식을 경험하세요.",
    type: "website",
    locale: "ko_KR",
    url: 'https://zenova-sky-hotel.com',
    siteName: "Zenova Sky Hotel",
    images: [
      {
        url: "/images/test-hero.jpg",
        width: 1920,
        height: 1080,
        alt: "제노바 스카이 부티크 호텔 프리미엄 오션뷰 스위트 - 제주시 관악구 송도동",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "제노바 스카이 호텔 | 제주시 관악구 송도동",
    description: "제주시 관악구 송도동의 랜드마크, 제노바 스카이 호텔에서 특별한 휴식을 경험하세요.",
    images: ["/images/test-hero.jpg"],
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
