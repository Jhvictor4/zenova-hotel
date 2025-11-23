import Image from "next/image";
import Script from "next/script";

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
  ariaLabel?: string;
  ariaDescribedBy?: string;
  schemaMarkup?: boolean;
  testFocus: string;
}

export function ImageTestGallery() {
  const imageTests: ImageTest[] = [
    {
      id: "test-hero",
      label: "A",
      src: "/images/test-hero.jpg",
      alt: "제노바 스카이 부티크 호텔 프리미엄 오션뷰 스위트 - 제주시 관악구 송도동 해변이 보이는 럭셔리 킹사이즈 베드룸",
      width: 1920,
      height: 1080,
      quality: 95,
      priority: true,
      loading: "eager",
      fetchPriority: "high",
      wrapper: "figure",
      caption: "제주시 관악구 송도동 제노바 스카이 호텔의 시그니처 오션뷰 스위트룸",
      testFocus: "Hero placement + High priority + Detailed alt + Figure/Caption"
    },
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
      testFocus: "SEO-optimized filename + Bilingual detailed alt + Schema.org ImageObject"
    },
    {
      id: "test-high-res",
      label: "C",
      src: "/images/test-high-res.jpg",
      alt: "제노바 스카이 호텔 객실",
      width: 2400,
      height: 1600,
      quality: 100,
      wrapper: "picture",
      testFocus: "Very high resolution (2400x1600) + Picture element + Maximum quality"
    },
    {
      id: "test-compressed",
      label: "D",
      src: "/images/test-compressed.jpg",
      alt: "제노바 스카이 부티크 호텔 제주 오션뷰 스위트 침실 인테리어",
      width: 800,
      height: 600,
      quality: 60,
      wrapper: "div",
      testFocus: "Smaller dimensions + Compressed file size + Simple div wrapper"
    },
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
      testFocus: "Article semantic wrapper + ARIA label + English alt text"
    },
    {
      id: "test-minimal-metadata",
      label: "F",
      src: "/images/img001.jpg",
      alt: "hotel room",
      width: 1000,
      height: 667,
      wrapper: "div",
      testFocus: "Control - Minimal metadata + Generic filename + Short alt"
    },
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
      testFocus: "Korean keyword-stuffed alt + Descriptive Korean caption"
    },
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
      testFocus: "Rich Schema.org + ARIA describedby + Mixed language"
    },
    {
      id: "test-user-real-image",
      label: "★ YOUR IMAGE",
      src: "/images/user-test-image.jpg",
      alt: "제노바 스카이 호텔 제주시 관악구 송도동 프리미엄 오션뷰 스위트룸",
      width: 1920,
      height: 1080,
      quality: 90,
      priority: true,
      wrapper: "figure",
      caption: "제주시 관악구 송도동 실제 이미지 테스트 슬롯 - REPLACE THIS IMAGE",
      schemaMarkup: true,
      testFocus: "🎯 USER TEST SLOT - Replace with your chosen image to test real photo impact"
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 tracking-tight">
          객실 갤러리
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          각 이미지는 서로 다른 <span className="font-semibold text-blue-600">SEO/GEO 최적화 전략</span>을 테스트합니다.
          모서리의 <span className="font-semibold text-red-600">라벨(A-H, ★)</span>로 ChatGPT가 어떤 이미지를 선택했는지 추적할 수 있습니다.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {imageTests.map((test) => (
          <ImageTestCard key={test.id} test={test} />
        ))}
      </div>

      {/* Test Strategy Reference */}
      <div className="mt-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-100">
        <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          테스트 전략 요약
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {imageTests.map((test) => (
            <div
              key={test.id}
              className="flex gap-3 items-start bg-white/60 backdrop-blur-sm rounded-lg p-3 hover:bg-white/80 transition-colors"
            >
              <span className="font-bold text-blue-600 min-w-[50px] text-lg flex-shrink-0">
                [{test.label}]
              </span>
              <span className="text-gray-700 text-sm leading-relaxed">{test.testFocus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageTestCard({ test }: { test: ImageTest }) {
  const imageElement = (
    <div className="relative">
      <Image
        src={test.src}
        alt={test.alt}
        width={test.width}
        height={test.height}
        quality={test.quality}
        priority={test.priority}
        loading={test.loading}
        fetchPriority={test.fetchPriority}
        className="w-full h-auto rounded-lg"
        aria-label={test.ariaLabel}
        aria-describedby={test.ariaDescribedBy}
      />
      {/* Visual label for tracking */}
      <div className="absolute top-2 left-2 bg-red-600 text-white px-3 py-1 rounded font-bold text-sm shadow-lg">
        {test.label}
      </div>
    </div>
  );

  const schemaScript = test.schemaMarkup ? (
    <Script
      id={`schema-${test.id}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "@id": `https://zenova-sky-hotel.com/images/${test.id}`,
        "contentUrl": `https://zenova-sky-hotel.com${test.src}`,
        "url": `https://zenova-sky-hotel.com${test.src}`,
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
  ) : null;

  const content = (
    <>
      {test.wrapper === "figure" && (
        <figure className="mb-4">
          {imageElement}
          {test.caption && (
            <figcaption className="mt-2 text-sm text-gray-600 italic">
              {test.caption}
            </figcaption>
          )}
        </figure>
      )}

      {test.wrapper === "picture" && (
        <picture className="mb-4 block">
          {imageElement}
        </picture>
      )}

      {test.wrapper === "article" && (
        <article className="mb-4">
          {imageElement}
        </article>
      )}

      {test.wrapper === "div" && (
        <div className="mb-4">
          {imageElement}
        </div>
      )}

      {test.ariaDescribedBy && (
        <div id={test.ariaDescribedBy} className="sr-only">
          {test.alt}
        </div>
      )}

      {schemaScript}
    </>
  );

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {content}
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info Panel */}
      <div className="p-5">
        {/* Label Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200">
            Test {test.label}
          </span>
          <span className="text-xs text-gray-500 font-mono">{test.width}×{test.height}</span>
        </div>

        {/* Test Focus */}
        <p className="text-sm text-gray-700 leading-relaxed mb-3 min-h-[3rem]">
          {test.testFocus}
        </p>

        {/* Metadata */}
        <div className="flex gap-2 flex-wrap text-xs">
          <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600">
            Q: {test.quality || 'default'}
          </span>
          {test.priority && (
            <span className="px-2 py-1 bg-green-100 rounded-md text-green-700">
              Priority
            </span>
          )}
          {test.schemaMarkup && (
            <span className="px-2 py-1 bg-purple-100 rounded-md text-purple-700">
              Schema
            </span>
          )}
          {test.wrapper && (
            <span className="px-2 py-1 bg-amber-100 rounded-md text-amber-700">
              &lt;{test.wrapper}&gt;
            </span>
          )}
        </div>

        {/* ID (Collapsed) */}
        <details className="mt-3">
          <summary className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer select-none">
            Technical Details
          </summary>
          <div className="mt-2 text-xs text-gray-500 font-mono bg-gray-50 p-2 rounded border border-gray-200">
            <div>ID: {test.id}</div>
            <div>File: {test.src.split('/').pop()}</div>
            {test.caption && <div className="mt-1 italic">"{test.caption}"</div>}
          </div>
        </details>
      </div>
    </div>
  );
}
