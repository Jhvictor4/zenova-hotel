
import Script from "next/script";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import BookingSidebar from "./components/BookingSidebar";
import FacilityCard from "./components/FacilityCard";
import Footer from "./components/Footer";
// import { ImageTestGallery } from "./components/ImageTestGallery"; // Hidden - using PhotoGrid instead
import { Wifi, Coffee, Utensils, Waves, Car, Dumbbell, Star, Share, Heart, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const hotelSchemaData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://zenova-hotel.vercel.app",
    "name": "제노바 스카이 호텔",
    "alternateName": "Zenova Sky Hotel",
    "description": "제주시 관악구 송도동에 위치한 럭셔리 오션뷰 호텔. 인피니티 풀과 미슐랭 다이닝을 제공합니다.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "제주특별자치도 제주시 관악구 송도동 해안로 777",
      "addressLocality": "제주시 관악구 송도동",
      "addressRegion": "제주특별자치도",
      "postalCode": "63000",
      "addressCountry": "KR"
    },
    "telephone": "+82-64-123-4567",
    "email": "info@zenova-sky-hotel.com",
    "starRating": {
      "@type": "Rating",
      "ratingValue": "5"
    },
    "priceRange": "₩₩₩₩",
    "image": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
  };

  // PhotoGrid now uses internal imageTests array (A-H, ★)
  // Old hotelImages array removed - PhotoGrid is self-contained

  const facilities = [
    { icon: <Waves size={24} />, title: "인피니티 풀", description: "바다와 하늘이 만나는 곳에서 즐기는 수영" },
    { icon: <Utensils size={24} />, title: "미슐랭 다이닝", description: "제주 로컬 식재료로 만든 파인다이닝" },
    { icon: <Coffee size={24} />, title: "오션 라운지", description: "최고급 원두 커피와 디저트" },
    { icon: <Dumbbell size={24} />, title: "피트니스", description: "최신 기구와 요가 스튜디오" },
    { icon: <Wifi size={24} />, title: "초고속 와이파이", description: "전 구역 무료 5G 와이파이" },
    { icon: <Car size={24} />, title: "발렛 파킹", description: "24시간 발렛 파킹 서비스" },
  ];

  return (
    <>
      <Script
        id="hotel-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(hotelSchemaData)}
      </Script>

      <div className="min-h-screen bg-white font-sans pt-24">
        <Header />

        <main className="max-w-7xl mx-auto px-6 pb-20">
          {/* Title Header */}
          <section className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">제노바 스카이 호텔 | 제주시 관악구 송도동의 럭셔리 오션뷰</h1>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 text-sm text-gray-800 font-medium">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-black" />
                  <span>4.92</span>
                  <span className="text-gray-500 underline cursor-pointer">후기 128개</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1 underline cursor-pointer">
                  <MapPin size={16} />
                  <span>제주시 관악구 송도동, 제주도, 한국</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors underline">
                  <Share size={16} />
                  공유하기
                </button>
                <button className="flex items-center gap-2 text-sm font-medium hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors underline">
                  <Heart size={16} />
                  저장
                </button>
              </div>
            </div>
          </section>

          {/* Photo Grid */}
          <section className="mb-12">
            <PhotoGrid />
          </section>

          {/* Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">

            {/* Left Column: Content */}
            <div className="lg:col-span-2">
              {/* Host Info */}
              <div className="border-b border-gray-200 pb-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Zenova Hospitality님이 호스팅하는 호텔 객실</h2>
                <p className="text-gray-600">최대 인원 2명 · 침실 1개 · 침대 1개 · 욕실 1개</p>
              </div>

              {/* Highlights */}
              <div className="border-b border-gray-200 pb-8 mb-8 space-y-6">
                <div className="flex gap-4">
                  <Waves size={28} className="text-gray-900 shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">환상적인 오션뷰</h3>
                    <p className="text-gray-500 text-sm">모든 객실에서 제주 바다를 감상할 수 있습니다.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Utensils size={28} className="text-gray-900 shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">미슐랭 다이닝</h3>
                    <p className="text-gray-500 text-sm">호텔 내 레스토랑에서 최고의 미식을 경험하세요.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Dumbbell size={28} className="text-gray-900 shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">최고급 피트니스</h3>
                    <p className="text-gray-500 text-sm">최신 운동 기구와 요가 스튜디오를 이용할 수 있습니다.</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="border-b border-gray-200 pb-8 mb-8">
                <p className="text-gray-800 leading-relaxed mb-4">
                  제노바 스카이 호텔은 제주시 관악구 송도동 해안가에 위치한 프리미엄 부티크 호텔입니다.
                  탁 트인 바다 전망과 함께 최고급 편의시설을 제공하며, 모든 객실에서 제주의 아름다운 일출과 일몰을 감상하실 수 있습니다.
                </p>
                <p className="text-gray-800 leading-relaxed">
                  미슐랭 스타 셰프의 레스토랑, 세계적 수준의 스파, 그리고 인피니티 풀에서 특별한 휴식을 경험하세요.
                  제주 공항에서 30분 거리에 위치하여 접근성이 뛰어납니다.
                </p>
                <button className="mt-4 font-bold underline flex items-center gap-1">
                  더 보기 <span className="text-xs">▶</span>
                </button>
              </div>

              {/* Facilities Grid */}
              <div className="border-b border-gray-200 pb-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">숙소 편의시설</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="text-gray-600">{facility.icon}</div>
                      <span className="text-gray-700">{facility.title}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 border border-gray-900 rounded-lg px-6 py-3 font-bold hover:bg-gray-50 transition-colors">
                  편의시설 32개 모두 보기
                </button>
              </div>

              {/* Image Test Gallery (Technical Demo) */}
              {/* ImageTestGallery hidden - using PhotoGrid for GEO testing */}
              {/*
              <div className="border-b border-gray-200 pb-8 mb-8">
                <div className="mb-6">
                  <span className="text-primary-600 font-bold tracking-wider text-sm uppercase">Technical Demo</span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-1">이미지 최적화 갤러리</h2>
                  <p className="text-gray-500 mt-1">Next.js Image 컴포넌트 테스트</p>
                </div>
                <ImageTestGallery />
              </div>
              */}

            </div>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-1 relative">
              <BookingSidebar />
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
