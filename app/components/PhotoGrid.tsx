

import Image from "next/image";
import Script from "next/script";
import { Grid } from "lucide-react";

// Image test configuration from ImageTestGallery
interface ImageTest {
  id: string;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
  priority?: boolean;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  wrapper?: "figure" | "picture" | "div" | "article";
  caption?: string;
  schemaMarkup?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  gridClass: string; // Bento Box positioning
}

export default function PhotoGrid() {
  const imageTests: ImageTest[] = [
    // A: Hero - Real Photo (Unsplash)
    {
      id: "test-hero",
      label: "A",
      src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "제노바 스카이 부티크 호텔 프리미엄 오션뷰 스위트 - 제주시 관악구 송도동 해변이 보이는 럭셔리 킹사이즈 베드룸",
      width: 1920,
      height: 1080,
      quality: 95,
      priority: true,
      loading: "eager",
      fetchPriority: "high",
      wrapper: "figure",
      caption: "제주시 관악구 송도동 제노바 스카이 호텔의 시그니처 오션뷰 스위트룸",
      schemaMarkup: true,
      gridClass: "col-span-2 row-span-2" // Large 2x2
    },

    // B: SEO Optimized
    {
      id: "test-optimized-alt",
      label: "B",
      src: "/images/zenova-sky-premium-ocean-view-suite-jeju.jpg",
      alt: "Premium ocean view suite at Zenova Sky Boutique Hotel in Jeju Gwanak-gu Songdo-dong - Luxury king bed with panoramic sea view, private balcony, marble bathroom",
      width: 1600,
      height: 900,
      quality: 90,
      wrapper: "figure",
      caption: "제주시 관악구 송도동 최고급 침구와 바다 전망을 갖춘 프리미엄 스위트",
      schemaMarkup: true,
      gridClass: "col-span-1 row-span-1"
    },

    // C: High Resolution - Tall
    {
      id: "test-high-res",
      label: "C",
      src: "/images/test-high-res.jpg",
      alt: "제노바 스카이 호텔 객실",
      width: 2400,
      height: 1600,
      quality: 100,
      wrapper: "picture",
      gridClass: "col-span-1 row-span-2" // Tall
    },

    // D: Compressed
    {
      id: "test-compressed",
      label: "D",
      src: "/images/test-compressed.jpg",
      alt: "제노바 스카이 부티크 호텔 제주 오션뷰 스위트 침실 인테리어",
      width: 800,
      height: 600,
      quality: 60,
      wrapper: "div",
      gridClass: "col-span-1 row-span-1"
    },

    // E: Article Context - Tall
    {
      id: "test-article-context",
      label: "E",
      src: "/images/test-article-context.jpg",
      alt: "Zenova Sky Hotel Jeju Island luxury accommodation",
      width: 1200,
      height: 800,
      quality: 85,
      wrapper: "article",
      ariaLabel: "제노바 스카이 호텔 프리미엄 객실 전경",
      gridClass: "col-span-1 row-span-2" // Tall
    },

    // F: Control - Minimal
    {
      id: "test-minimal-metadata",
      label: "F",
      src: "/images/img001.jpg",
      alt: "hotel room",
      width: 1000,
      height: 667,
      wrapper: "div",
      gridClass: "col-span-1 row-span-1"
    },

    // G: Korean Keywords
    {
      id: "test-korean-focus",
      label: "G",
      src: "/images/zenova-sky-jeju-oceanview-suite.jpg",
      alt: "제노바스카이호텔 제주시관악구송도동 제주특별자치도 오션뷰스위트 킹베드 프리미엄객실 럭셔리인테리어 바다전망 발코니",
      width: 1800,
      height: 1200,
      quality: 88,
      wrapper: "figure",
      caption: "제주시 관악구 송도동 탁 트인 바다와 함께하는 프리미엄 스위트 객실",
      gridClass: "col-span-1 row-span-1"
    },

    // H: Schema Rich
    {
      id: "test-schema-rich",
      label: "H",
      src: "/images/test-schema-rich.jpg",
      alt: "제노바 스카이 부티크 호텔 - 제주도 5성급 럭셔리 호텔 객실",
      width: 1920,
      height: 1280,
      quality: 92,
      wrapper: "figure",
      caption: "Award-winning luxury suite design",
      schemaMarkup: true,
      ariaDescribedBy: "schema-desc-h",
      gridClass: "col-span-1 row-span-1"
    },

    // ★: User Test Slot
    {
      id: "test-user-real-image",
      label: "★",
      src: "/images/user-test-image.jpg",
      alt: "제노바 스카이 호텔 제주시 관악구 송도동 프리미엄 오션뷰 스위트룸",
      width: 1920,
      height: 1080,
      quality: 90,
      priority: true,
      wrapper: "figure",
      caption: "제주시 관악구 송도동 실제 이미지 테스트 슬롯 - REPLACE THIS IMAGE",
      schemaMarkup: true,
      gridClass: "col-span-1 row-span-1"
    },
  ];

  return (
    <>
      {/* Schema.org for images with schemaMarkup=true */}
      {imageTests.filter(test => test.schemaMarkup).map(test => (
        <Script
          key={`schema-${test.id}`}
          id={`schema-${test.id}`}
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "@id": `https://zenova-hotel.vercel.app/images/${test.id}`,
            "contentUrl": `https://zenova-hotel.vercel.app${test.src.startsWith('http') ? test.src : test.src}`,
            "url": `https://zenova-hotel.vercel.app${test.src.startsWith('http') ? test.src : test.src}`,
            "name": test.alt,
            "description": test.caption || test.alt,
            "width": test.width,
            "height": test.height,
            "encodingFormat": "image/jpeg",
            "copyrightHolder": {
              "@type": "Organization",
              "name": "제노바 스카이 부티크 호텔"
            }
          })}
        </Script>
      ))}

      {/* Bento Box Grid Layout */}
      <div className="relative rounded-xl overflow-hidden h-[600px] grid grid-cols-4 grid-rows-3 gap-2">
        {imageTests.map((test) => {
          const ImageContent = (
            <div className="relative w-full h-full group">
              <Image
                src={test.src}
                alt={test.alt}
                fill
                className="object-cover transition-opacity group-hover:opacity-95"
                quality={test.quality}
                priority={test.priority}
                loading={test.loading}
                fetchPriority={test.fetchPriority}
                aria-label={test.ariaLabel}
                aria-describedby={test.ariaDescribedBy}
                sizes={test.gridClass.includes('col-span-2') ? '50vw' : '25vw'}
              />

              {/* Red Label Badge */}
              <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1.5 rounded font-bold text-sm shadow-lg z-10">
                {test.label}
              </div>

              {/* Caption overlay on hover */}
              {test.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">{test.caption}</p>
                </div>
              )}
            </div>
          );

          // Wrapper based on strategy
          const wrappedContent = (() => {
            switch (test.wrapper) {
              case 'figure':
                return (
                  <figure className={`relative ${test.gridClass} cursor-pointer`} key={test.id}>
                    {ImageContent}
                  </figure>
                );
              case 'picture':
                return (
                  <picture className={`relative ${test.gridClass} cursor-pointer block`} key={test.id}>
                    {ImageContent}
                  </picture>
                );
              case 'article':
                return (
                  <article className={`relative ${test.gridClass} cursor-pointer`} key={test.id}>
                    {ImageContent}
                  </article>
                );
              default:
                return (
                  <div className={`relative ${test.gridClass} cursor-pointer`} key={test.id}>
                    {ImageContent}
                  </div>
                );
            }
          })();

          return wrappedContent;
        })}

        {/* Show All Photos Button */}
        <button className="absolute bottom-4 right-4 bg-white border border-gray-800 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors shadow-lg z-20">
          <Grid size={16} />
          사진 모두 보기
        </button>

        {/* ARIA describedby elements */}
        {imageTests.filter(test => test.ariaDescribedBy).map(test => (
          <div key={test.ariaDescribedBy} id={test.ariaDescribedBy} className="sr-only">
            {test.alt}
          </div>
        ))}
      </div>
    </>
  );
}
