# 제노바 스카이 부티크 호텔 - GEO 테스트 사이트
# Zenova Sky Boutique Hotel - GEO Testing Site

ChatGPT의 이미지 선택 알고리즘을 테스트하기 위한 체계적인 SEO/GEO 실험 사이트입니다.

## 🎯 목적 (Purpose)

ChatGPT가 웹사이트에서 이미지를 가져올 때 어떤 요소가 이미지 선택에 영향을 미치는지 테스트합니다:
- Alt text 최적화
- 이미지 크기 및 품질 (width, height, bytes)
- HTML 시맨틱 구조 (figure, picture, article 등)
- Schema.org 구조화된 데이터
- 파일명 최적화
- 우선순위 힌트 (priority, loading, fetchpriority)
- ARIA 레이블
- 한글/영문 메타데이터

## 📊 테스트 이미지 매트릭스

각 이미지는 모서리에 **빨간색 라벨(A-H, ★)**이 표시되어 있어 ChatGPT가 선택한 이미지를 쉽게 추적할 수 있습니다.

| 라벨 | 파일명 | 크기 | 테스트 전략 |
|------|--------|------|------------|
| **A** | test-hero.jpg | 1920x1080 Q95 | Hero placement + High priority + Detailed alt + Figure/Caption |
| **B** | zenova-sky-premium-ocean-view-suite-jeju.jpg | 1600x900 Q90 | SEO-optimized filename + Bilingual detailed alt + Schema.org ImageObject |
| **C** | test-high-res.jpg | 2400x1600 Q100 | Very high resolution + Picture element + Maximum quality |
| **D** | test-compressed.jpg | 800x600 Q60 | Smaller dimensions + Compressed file size + Simple div wrapper |
| **E** | test-article-context.jpg | 1200x800 Q85 | Article semantic wrapper + ARIA label + English alt text |
| **F** | img001.jpg | 1000x667 Q75 | **Control** - Minimal metadata + Generic filename + Short alt |
| **G** | zenova-sky-jeju-oceanview-suite.jpg | 1800x1200 Q88 | Korean keyword-stuffed alt + Descriptive Korean caption |
| **H** | test-schema-rich.jpg | 1920x1280 Q92 | Rich Schema.org + ARIA describedby + Mixed language |
| **★** | user-test-image.jpg | 1920x1080 Q90 | **YOUR TEST SLOT** - Replace with real image |

## 🔧 설치 및 실행 (Installation & Running)

```bash
# Dependencies 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버: http://localhost:3000

## 🖼️ 실제 이미지 테스트하기 (Testing with Real Images)

**★ 라벨 이미지**는 실제 호텔 사진으로 교체하여 "실제 이미지 vs 플레이스홀더"의 영향을 테스트할 수 있습니다:

```bash
# 1. 원하는 호텔 객실 사진을 준비
# 2. public/images/user-test-image.jpg 파일 교체
# 3. 파일명을 그대로 유지 (1920x1080 권장)
# 4. 사이트 재시작 또는 새로고침
```

## 🧪 테스트 방법론 (Testing Methodology)

### 1단계: 사이트 배포
```bash
# Vercel, Netlify, 또는 원하는 호스팅에 배포
npm run build
```

### 2단계: ChatGPT에서 검색
ChatGPT (chatgpt.com)에서 체계적인 쿼리 셋으로 검색:

**📋 빠른 참고**: `QUICK_QUERIES.md` - 복붙용 쿼리 모음
**📊 상세 전략**: `QUERY_STRATEGY.md` - 7가지 쿼리 타입 + 14개 가설

#### 우선순위 쿼리 (매일 테스트)
```
제노바 스카이 부티크 호텔
Zenova Sky Boutique Hotel
제노바 스카이 호텔 어때?
```

#### 실험 쿼리 (주간 테스트)
```
제주 부티크 호텔
제주 오션뷰 호텔
Jeju boutique hotel
제주도에서 바다 보이는 좋은 호텔 추천해줘
```

### 3단계: 결과 분석
- ChatGPT가 표시한 이미지의 **라벨(A-H, ★)**을 확인
- 어떤 최적화 전략이 효과가 있었는지 기록
- 여러 번 테스트하여 일관성 확인

### 4단계: 변수 조정
- 효과적인 전략을 확인한 후
- `app/components/ImageTestGallery.tsx`에서 이미지 메타데이터 조정
- 새로운 가설 테스트

## 📁 프로젝트 구조 (Project Structure)

```
zenova-hotel/
├── app/
│   ├── components/
│   │   └── ImageTestGallery.tsx    # 핵심 갤러리 컴포넌트
│   ├── layout.tsx                   # SEO 메타데이터
│   ├── page.tsx                     # 메인 호텔 페이지
│   ├── globals.css                  # 스타일
│   └── sitemap.ts                   # 사이트맵
├── public/
│   ├── images/                      # 테스트 이미지들
│   └── robots.txt                   # 크롤러 설정
└── scripts/
    └── generate-placeholders.js     # 플레이스홀더 생성 스크립트
```

## 🔍 주요 SEO 요소 (Key SEO Elements)

### Structured Data (JSON-LD)
- Hotel schema (Schema.org)
- ImageObject schema for individual images
- Korean/English bilingual metadata

### Meta Tags
- OpenGraph (og:image, og:title, og:description)
- Twitter Cards
- Canonical URLs
- Keywords

### HTML Semantics
- `<figure>` + `<figcaption>` for captioned images
- `<picture>` for responsive images
- `<article>` for content context
- ARIA labels for accessibility

### Image Optimization
- Next.js Image component
- Priority hints (`priority`, `loading="eager"`)
- Fetch priority (`fetchpriority="high"`)
- Optimized file names
- Multiple resolutions and qualities

## 📊 데이터 수집 (Data Collection)

테스트 결과를 기록하세요:

```markdown
## Test Results

### Test Date: 2025-11-23

| Test # | Query | Selected Image | Label | Notes |
|--------|-------|----------------|-------|-------|
| 1 | "제노바 스카이 부티크 호텔" | hero image | A | High priority worked |
| 2 | "Zenova Sky Hotel Jeju" | schema-rich | H | Schema.org effective |
| 3 | ... | ... | ... | ... |
```

## 🚀 배포 (Deployment)

### Vercel (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 환경 변수
필요한 경우 `.env.local` 파일 생성:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📝 가설 및 테스트 아이디어

### 가설 1: Alt Text 상세도
- **H1**: 상세한 한글 alt text가 짧은 영문보다 효과적
- **테스트**: 이미지 G (키워드 스터핑) vs 이미지 F (간단한 alt)

### 가설 2: 파일명 최적화
- **H2**: SEO-최적화된 파일명이 일반 파일명보다 선호됨
- **테스트**: 이미지 B (zenova-sky-premium...) vs 이미지 F (img001.jpg)

### 가설 3: 구조화된 데이터
- **H3**: Schema.org ImageObject가 선택률 향상
- **테스트**: 이미지 B, H (schema 있음) vs 나머지

### 가설 4: 이미지 크기와 품질
- **H4**: 고해상도 이미지가 선호됨
- **테스트**: 이미지 C (2400x1600) vs 이미지 D (800x600)

### 가설 5: HTML 시맨틱
- **H5**: `<figure>` + `<figcaption>`이 효과적
- **테스트**: 이미지 A, B (figure) vs 이미지 D, F (div)

### 가설 6: 실제 이미지 vs 플레이스홀더
- **H6**: 실제 사진이 그래픽보다 선호됨
- **테스트**: 이미지 ★ (실제 사진으로 교체) vs 나머지

## 🛠️ 커스터마이징 (Customization)

### 새 테스트 이미지 추가하기

1. `app/components/ImageTestGallery.tsx` 열기
2. `imageTests` 배열에 새 객체 추가:

```typescript
{
  id: "test-new",
  label: "I",
  src: "/images/test-new.jpg",
  alt: "Your alt text here",
  width: 1920,
  height: 1080,
  quality: 90,
  wrapper: "figure",
  testFocus: "Your test strategy"
}
```

3. `scripts/generate-placeholders.js`에 추가
4. `node scripts/generate-placeholders.js` 실행

### 호텔 정보 변경

`app/page.tsx`에서 호텔 이름, 주소, 설명 등 수정 가능

## 📚 참고 자료 (References)

- [Schema.org Hotel](https://schema.org/Hotel)
- [Schema.org ImageObject](https://schema.org/ImageObject)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [OpenGraph Protocol](https://ogp.me/)
- [Google Search Central - Image SEO](https://developers.google.com/search/docs/appearance/google-images)

## 🤝 기여 (Contributing)

테스트 결과나 개선 사항을 공유하고 싶다면:
1. Fork this repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - 자유롭게 사용, 수정, 배포 가능

---

**Good Luck with Your GEO Testing! 🚀**

궁금한 점이나 결과를 공유하고 싶다면 Issue를 열어주세요!
