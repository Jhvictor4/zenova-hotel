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
  metadataBase: new URL('https://zenova-hotel.vercel.app'),
  title: "제노바 스카이 호텔 | 제주시 관악구 송도동의 럭셔리 오션뷰",
  description:
    "제주시 관악구 송도동에 위치한 제노바 스카이 호텔. 전 객실 오션뷰, 인피니티 풀, 미슐랭 다이닝을 갖춘 프리미엄 럭셔리 호텔입니다. 지금 예약하세요.",
  keywords:
    "제노바 스카이 호텔, 제주시 관악구 송도동 호텔, 제주도 호캉스, 제주 오션뷰 호텔, Zenova Sky Hotel, Jeju Hotel",
  alternates: {
    canonical: 'https://zenova-hotel.vercel.app',
  },
  openGraph: {
    title: "제노바 스카이 호텔 | 제주시 관악구 송도동",
    description:
      "제주시 관악구 송도동의 랜드마크, 제노바 스카이 호텔에서 특별한 휴식을 경험하세요.",
    type: "website",
    locale: "ko_KR",
    url: 'https://zenova-hotel.vercel.app',
    siteName: "Zenova Sky Hotel",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "제노바 스카이 부티크 호텔 프리미엄 오션뷰 스위트 - 제주시 관악구 송도동",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "제노바 스카이 호텔 | 제주시 관악구 송도동",
    description: "제주시 관악구 송도동의 랜드마크, 제노바 스카이 호텔에서 특별한 휴식을 경험하세요.",
    images: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
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
        <meta name="google-site-verification" content="mRDW6akZ6s0Ez-SFd_jmoHnka_dsPmDgU6c_z2EDmvU" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${notoSansKr.variable} antialiased`}>
        {children}

        <VibetorchInspector />
      </body>
    </html>
  );
}
