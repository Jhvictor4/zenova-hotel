# 🔬 Image Variables Matrix - 실험 변인 통제표

모든 테스트 이미지의 변인을 한눈에 비교할 수 있는 매트릭스입니다.

---

## 📊 Complete Variables Comparison Table

| Variable | A (Hero) | B (SEO) | C (HighRes) | D (Compressed) | E (Article) | F (Control) | G (Korean) | H (Schema) | ★ (User) |
|----------|----------|---------|-------------|----------------|-------------|-------------|------------|------------|----------|
| **Label** | A | B | C | D | E | F | G | H | ★ |
| **ID** | test-hero | test-optimized-alt | test-high-res | test-compressed | test-article-context | test-minimal-metadata | test-korean-focus | test-schema-rich | test-user-real-image |

### Image Technical Specs

| Variable | A | B | C | D | E | F | G | H | ★ |
|----------|---|---|---|---|---|---|---|---|---|
| **Width** | 1920px | 1600px | 2400px | 800px | 1200px | 1000px | 1800px | 1920px | 1920px |
| **Height** | 1080px | 900px | 1600px | 600px | 800px | 667px | 1200px | 1280px | 1080px |
| **Aspect Ratio** | 16:9 | 16:9 | 3:2 | 4:3 | 3:2 | 3:2 | 3:2 | 3:2 | 16:9 |
| **Total Pixels** | 2.07M | 1.44M | 3.84M | 0.48M | 0.96M | 0.67M | 2.16M | 2.46M | 2.07M |
| **Quality** | 95 | 90 | 100 | 60 | 85 | 75 | 88 | 92 | 90 |
| **Est. File Size** | ~400KB | ~300KB | ~800KB | ~50KB | ~150KB | ~120KB | ~350KB | ~450KB | ~350KB |

### Next.js Image Props

| Variable | A | B | C | D | E | F | G | H | ★ |
|----------|---|---|---|---|---|---|---|---|---|
| **priority** | ✅ true | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ true |
| **loading** | eager | (default) | (default) | (default) | (default) | (default) | (default) | (default) | (default) |
| **fetchPriority** | high | (default) | (default) | (default) | (default) | (default) | (default) | (default) | (default) |

### HTML Semantic Structure

| Variable | A | B | C | D | E | F | G | H | ★ |
|----------|---|---|---|---|---|---|---|---|---|
| **Wrapper** | `<figure>` | `<figure>` | `<picture>` | `<div>` | `<article>` | `<div>` | `<figure>` | `<figure>` | `<figure>` |
| **Has Caption** | ✅ Yes | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| **Schema.org** | ❌ No | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No | ✅ Yes | ✅ Yes |

### ARIA Attributes

| Variable | A | B | C | D | E | F | G | H | ★ |
|----------|---|---|---|---|---|---|---|---|---|
| **aria-label** | ❌ | ❌ | ❌ | ❌ | ✅ Yes | ❌ | ❌ | ❌ | ❌ |
| **aria-describedby** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ Yes | ❌ |

---

## 📝 Detailed Alt Text Analysis

### Image A (Hero)
**Alt Text (144 chars, Korean)**:
```
제노바 스카이 부티크 호텔 프리미엄 오션뷰 스위트 - 제주시 관악구 송도동 해변이 보이는 럭셔리 킹사이즈 베드룸
```

**Keywords**: 제노바 스카이, 부티크 호텔, 프리미엄, 오션뷰, 스위트, 제주시, 관악구, 송도동, 해변, 럭셔리, 킹사이즈, 베드룸

**Caption**:
```
제주시 관악구 송도동 제노바 스카이 호텔의 시그니처 오션뷰 스위트룸
```

---

### Image B (SEO Optimized)
**Filename**:
```
zenova-sky-premium-ocean-view-suite-jeju.jpg
```
(SEO-optimized with hyphens, descriptive)

**Alt Text (146 chars, English)**:
```
Premium ocean view suite at Zenova Sky Boutique Hotel in Jeju Gwanak-gu Songdo-dong - Luxury king bed with panoramic sea view, private balcony, marble bathroom
```

**Keywords**: Premium, ocean view, suite, Zenova Sky, Boutique Hotel, Jeju, Gwanak-gu, Songdo-dong, Luxury, king bed, panoramic, sea view, private balcony, marble bathroom

**Caption (Korean)**:
```
제주시 관악구 송도동 최고급 침구와 바다 전망을 갖춘 프리미엄 스위트
```

**Schema.org JSON-LD**:
```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": "https://zenova-sky-hotel.com/images/test-optimized-alt",
  "contentUrl": "https://zenova-sky-hotel.com/images/zenova-sky-premium-ocean-view-suite-jeju.jpg",
  "name": "[Alt text]",
  "description": "[Caption]",
  "width": 1600,
  "height": 900,
  "copyrightHolder": { "@type": "Organization", "name": "제노바 스카이 부티크 호텔" }
}
```

---

### Image C (High Resolution)
**Alt Text (23 chars, Korean, Generic)**:
```
제노바 스카이 호텔 객실
```

**Keywords**: 제노바 스카이, 호텔, 객실

**Caption**: ❌ None

---

### Image D (Compressed - Control)
**Filename**:
```
test-compressed.jpg
```
(Non-descriptive)

**Alt Text (42 chars, Korean)**:
```
제노바 스카이 부티크 호텔 제주 오션뷰 스위트 침실 인테리어
```

**Keywords**: 제노바 스카이, 부티크 호텔, 제주, 오션뷰, 스위트, 침실, 인테리어

**Caption**: ❌ None

---

### Image E (Article Context)
**Alt Text (47 chars, English)**:
```
Zenova Sky Hotel Jeju Island luxury accommodation
```

**Keywords**: Zenova Sky Hotel, Jeju Island, luxury, accommodation

**ARIA Label (Korean)**:
```
제노바 스카이 호텔 프리미엄 객실 전경
```

**Caption**: ❌ None

---

### Image F (Control - Minimal Metadata)
**Filename**:
```
img001.jpg
```
(Generic, non-descriptive)

**Alt Text (10 chars, English, Minimal)**:
```
hotel room
```

**Keywords**: hotel, room

**Caption**: ❌ None

⚠️ **This is the CONTROL image** - Minimal optimization for baseline comparison

---

### Image G (Korean Keyword-Stuffed)
**Filename**:
```
zenova-sky-jeju-oceanview-suite.jpg
```
(SEO-optimized, descriptive)

**Alt Text (87 chars, Korean, No spaces - keyword stuffing)**:
```
제노바스카이호텔 제주시관악구송도동 제주특별자치도 오션뷰스위트 킹베드 프리미엄객실 럭셔리인테리어 바다전망 발코니
```

**Keywords (without spaces)**: 제노바스카이호텔, 제주시관악구송도동, 제주특별자치도, 오션뷰스위트, 킹베드, 프리미엄객실, 럭셔리인테리어, 바다전망, 발코니

**Caption (Korean)**:
```
제주시 관악구 송도동 탁 트인 바다와 함께하는 프리미엄 스위트 객실
```

---

### Image H (Rich Schema)
**Alt Text (53 chars, Korean-English Mix)**:
```
제노바 스카이 부티크 호텔 - 제주도 5성급 럭셔리 호텔 객실
```

**Keywords**: 제노바 스카이, 부티크 호텔, 제주도, 5성급, 럭셔리, 호텔, 객실

**Caption (English)**:
```
Award-winning luxury suite design
```

**ARIA describedby**:
```
<div id="schema-desc-h">제노바 스카이 부티크 호텔 - 제주도 5성급 럭셔리 호텔 객실</div>
```

**Schema.org JSON-LD**: ✅ Yes (same structure as Image B)

---

### Image ★ (User Test Slot)
**Filename**:
```
user-test-image.jpg
```

**Alt Text (51 chars, Korean)**:
```
제노바 스카이 호텔 제주시 관악구 송도동 프리미엄 오션뷰 스위트룸
```

**Keywords**: 제노바 스카이, 호텔, 제주시, 관악구, 송도동, 프리미엄, 오션뷰, 스위트룸

**Caption (Korean + English)**:
```
제주시 관악구 송도동 실제 이미지 테스트 슬롯 - REPLACE THIS IMAGE
```

**Schema.org JSON-LD**: ✅ Yes

**Special**: 이미지를 실제 호텔 사진으로 교체하여 real photo vs placeholder 테스트

---

## 🎯 Context & Placement

### Page Structure Context

```
Page Layout:
├── Header (Gradient blue/purple)
│   └── H1: 제노바 스카이 부티크 호텔
│
├── Hero Section (White card)
│   └── H2: 제주도의 숨겨진 보석, 프리미엄 오션뷰 경험
│   └── [Rich Korean description paragraph]
│   └── [3 feature cards with emojis]
│
├── Gallery Section ⬅️ ALL TEST IMAGES HERE
│   └── H2: 객실 갤러리
│   └── [Grid: 3 columns on desktop]
│   └── [9 image cards with labels A-H, ★]
│   └── [Strategy summary box at bottom]
│
├── Rooms Section
│   └── H2: 객실 안내
│   └── [2 article blocks with descriptions]
│
├── Facilities Section
│   └── H2: 부대시설
│   └── [4 facility descriptions in grid]
│
└── Location Section
    └── H2: 위치 및 교통
    └── Address: 제주특별자치도 제주시 관악구 송도동 해안로 777
```

### Gallery Section HTML Structure

```html
<section class="max-w-[1400px] mx-auto px-6 py-16">
  <div class="text-center mb-12">
    <h2>객실 갤러리</h2>
    <p>[Description with "SEO/GEO 최적화 전략" highlighted]</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Each image card: -->
    <div class="group relative bg-white rounded-xl shadow-md hover:shadow-2xl">
      <div class="relative aspect-[4/3]">
        <!-- Image wrapper varies: figure/picture/article/div -->
        <figure> <!-- or <picture>, <article>, <div> -->
          <Image {...props} />
          <!-- Red label in corner -->
          <div class="absolute top-2 left-2 bg-red-600 text-white">[Label]</div>

          <!-- Caption (if applicable) -->
          <figcaption>[Caption text]</figcaption>
        </figure>
      </div>

      <div class="p-5">
        <!-- Badge, test focus, metadata tags -->
      </div>
    </div>
  </div>

  <!-- Strategy summary box -->
  <div class="bg-gradient-to-br from-blue-50...">
    [9 strategy descriptions]
  </div>
</section>
```

---

## 🔬 Variable Groups for Testing

### Group 1: Image Quality Tiers
| Tier | Images | Resolution | Quality | File Size |
|------|--------|------------|---------|-----------|
| **Premium** | C, H, ★ | 1920x1280+ | 90-100 | 350-800KB |
| **High** | A, G | 1800x1080+ | 88-95 | 350-400KB |
| **Medium** | B, E | 1200x800+ | 85-90 | 150-300KB |
| **Low** | D, F | 800x600+ | 60-75 | 50-120KB |

### Group 2: Alt Text Language
| Language | Images | Avg Length |
|----------|--------|------------|
| **Korean** | A, C, D, G, ★ | 23-144 chars |
| **English** | B, E | 47-146 chars |
| **Mixed** | H | 53 chars |

### Group 3: Keyword Density
| Density | Images | Keyword Count |
|---------|--------|---------------|
| **High** | G (keyword stuffing) | 9+ keywords |
| **Medium** | A, B, D, H, ★ | 5-8 keywords |
| **Low** | C, E | 3-4 keywords |
| **Minimal** | F (control) | 2 keywords |

### Group 4: Semantic HTML
| Structure | Images | Has Caption |
|-----------|--------|-------------|
| **`<figure>` + caption** | A, B, G, H, ★ | ✅ Yes |
| **`<picture>`** | C | ❌ No |
| **`<article>`** | E | ❌ No |
| **`<div>` (basic)** | D, F | ❌ No |

### Group 5: Schema.org Markup
| Schema | Images |
|--------|--------|
| **With Schema** | B, H, ★ |
| **Without Schema** | A, C, D, E, F, G |

### Group 6: Priority Hints
| Priority | Images |
|----------|--------|
| **High Priority** | A, ★ |
| **Default** | B, C, D, E, F, G, H |

### Group 7: ARIA Accessibility
| ARIA | Images |
|------|--------|
| **aria-label** | E |
| **aria-describedby** | H |
| **None** | A, B, C, D, F, G, ★ |

---

## 🧪 Controlled Experiment Design

### Independent Variables (변인)
1. **Image Quality** (quality: 60-100)
2. **Resolution** (800x600 ~ 2400x1600)
3. **Alt Text Language** (Korean/English/Mixed)
4. **Keyword Density** (2-9+ keywords)
5. **HTML Wrapper** (figure/picture/article/div)
6. **Caption Presence** (Yes/No)
7. **Schema.org** (Yes/No)
8. **Priority Hints** (Yes/No)
9. **ARIA Labels** (Yes/No)
10. **Filename** (Descriptive vs Generic)
11. **File Size** (50KB ~ 800KB)

### Dependent Variable (종속변인)
- **ChatGPT Image Selection** (Which label A-H, ★ is chosen)

### Control Variables (통제변인)
- All images show the same "hotel room" concept (placeholder)
- Same visual label system (red corner badges)
- Same page layout and position
- Same deployment environment
- Same test timing

---

## 📊 Test Matrix Template

Use this for recording results:

```markdown
## Test Session: [Date/Time]

### Query: "[검색어]"

| Image | Selected? | Position | Observations |
|-------|-----------|----------|--------------|
| A     | ⬜        |          |              |
| B     | ⬜        |          |              |
| C     | ⬜        |          |              |
| D     | ⬜        |          |              |
| E     | ⬜        |          |              |
| F     | ⬜        |          |              |
| G     | ⬜        |          |              |
| H     | ⬜        |          |              |
| ★     | ⬜        |          |              |

### Analysis
- Most selected: [ ]
- Common traits: [ ]
- Hypothesis: [ ]
```

---

## 🎯 Quick Reference: Which Image Tests What?

| Test Focus | Primary Image | Control Image | Comparison |
|------------|---------------|---------------|------------|
| **Hero Placement** | A | F | Priority + Figure vs Basic |
| **SEO Filename** | B | F | Descriptive filename vs generic |
| **High Resolution** | C | D | 2400x1600 Q100 vs 800x600 Q60 |
| **File Size** | D | C | Compressed vs High-res |
| **English Alt** | E | A | English vs Korean alt text |
| **Baseline** | F | All | Minimal vs Optimized |
| **Korean Keywords** | G | F | Keyword stuffing vs Minimal |
| **Schema.org** | H | A | Schema vs No schema |
| **Real Photo** | ★ | All | Real vs Placeholder |

---

## 📋 Variable Checklist

Before each test, verify:
- [ ] All 9 images have correct labels (A-H, ★)
- [ ] Placeholder images are generated
- [ ] Schema.org scripts are loaded
- [ ] ARIA attributes are in place
- [ ] Captions are displaying correctly
- [ ] Page is deployed and accessible
- [ ] No browser console errors

---

**Ready for controlled experiments! 실험 준비 완료! 🔬**

이 매트릭스를 기반으로 어떤 변인이 ChatGPT 이미지 선택에 영향을 미치는지 체계적으로 테스트할 수 있습니다.
