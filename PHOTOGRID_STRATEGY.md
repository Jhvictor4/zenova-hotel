# 🎯 PhotoGrid Visual Strategy - Option C (Aggressive)

## 전략 개요

PhotoGrid에 9개 테스트 이미지를 배치하여 **실제 호텔 사이트 느낌 + GEO 실험 통제**를 동시에 달성합니다.

**핵심**: ChatGPT는 Vision 능력으로 이미지 내용도 볼 수 있음 → Visual 전략이 중요!

---

## 🎨 Visual Content Strategy

### Image A (Hero - Real Photo)
```
Visual: Real luxury hotel room (Unsplash)
Size: Large (2x2 grid, ~518x500px displayed)
Alt: "제노바 스카이 부티크 호텔 프리미엄 오션뷰 스위트 - 제주시 관악구 송도동 해변이 보이는 럭셔리 킹사이즈 베드룸"
Priority: true
Schema: true
Watermark: ❌ No (real photo)
Label: A (red badge)

전략:
- ChatGPT Vision이 "실제 고급 호텔 객실"로 인식
- Hero 위치 (가장 큼) → 첫 선택 가능성 최고
- Real photo + 최적화된 alt + Priority → 삼중 강화
```

### Images B-H (Placeholder + Watermark)
```
Visual: 동일한 플레이스홀더 그래픽 + "제노바 스카이 호텔" 워터마크
Size: Standard (varies by grid position)
Alt: [각각 다른 최적화 전략]
Priority: false
Watermark: ✅ Yes ("제노바 스카이 호텔" 텍스트)
Label: B, C, D, E, F, G, H (red badges)

전략:
- 동일한 visual → Vision 변수 제거
- 텍스트 메타데이터 효과만 측정
- 워터마크로 브랜드 일관성 + ChatGPT Vision이 텍스트 읽을 수 있음
- 각 이미지는 alt/schema/filename 등이 다름
```

### Image ★ (User Test Slot)
```
Visual:
  - Phase 1: Placeholder + watermark + label ★
  - Phase 2: Real hotel photo (user replaces)

Size: Standard
Alt: "제노바 스카이 호텔 제주시 관악구 송도동 프리미엄 오션뷰 스위트룸"
Priority: true
Schema: true
Watermark:
  - Placeholder: ✅ Yes
  - Real photo: ❌ No
Label: ★ (red badge)

전략:
- A/B Test: Placeholder vs Real photo 효과 측정
- Priority로 선택 가능성 높임
- Real photo로 교체 시 A와 비교 가능
```

---

## 📐 PhotoGrid Layout (Bento Box Style)

```
┌──────────────────────────────────────────────┐
│                    │         │               │
│    A (Hero)        │    B    │               │
│    Real Photo      │─────────┤      C        │
│    2x2 Grid        │    D    │   High-res    │
│    Large           │         │   Tall        │
├────────────┬───────┼─────────┤               │
│            │       │         │               │
│     F      │   G   │    H    │      E        │
│  Control   │ Korean│ Schema  │   Article     │
│            │       │─────────┤   Tall        │
│            │       │    ★    │               │
│            │       │  User   │               │
└────────────┴───────┴─────────┴───────────────┘

Grid: 4 columns × 3 rows
Height: 600px
Gap: 8px (2 in Tailwind)
```

### Size Distribution
- **Large (2x2)**: A
- **Tall (1x2)**: C, E
- **Standard (1x1)**: B, D, F, G, H, ★

---

## 🔬 Image Variables Matrix

| Image | Visual | Alt Lang | Alt Length | Keywords | Wrapper | Schema | Priority | Watermark | Size |
|-------|--------|----------|------------|----------|---------|--------|----------|-----------|------|
| **A** | Real Photo | Korean | 144 chars | 12 | `<figure>` | ✅ | ✅ | ❌ | Large 2x2 |
| **B** | Placeholder | English | 146 chars | 14 | `<figure>` | ✅ | ❌ | ✅ | Standard |
| **C** | Placeholder | Korean | 23 chars | 3 | `<picture>` | ❌ | ❌ | ✅ | Tall 1x2 |
| **D** | Placeholder | Korean | 42 chars | 7 | `<div>` | ❌ | ❌ | ✅ | Standard |
| **E** | Placeholder | English | 47 chars | 4 | `<article>` | ❌ | ❌ | ✅ | Tall 1x2 |
| **F** | Placeholder | English | 10 chars | 2 | `<div>` | ❌ | ❌ | ✅ | Standard |
| **G** | Placeholder | Korean | 87 chars | 9+ | `<figure>` | ❌ | ❌ | ✅ | Standard |
| **H** | Placeholder | Mixed | 53 chars | 6 | `<figure>` | ✅ | ❌ | ✅ | Standard |
| **★** | Phase-dependent | Korean | 51 chars | 8 | `<figure>` | ✅ | ✅ | Conditional | Standard |

---

## 🧪 Testable Hypotheses

### H1: Real Photo > Placeholder
**비교**: A (Real + 최적화) vs F (Placeholder + 최소)
**예상**: A 선택률 >> F
**측정**: Vision 효과 (이미지 내용이 선택에 미치는 영향)

### H2: Real Photo A/B Test
**Phase 1**: ★ = Placeholder with watermark
**Phase 2**: ★ = Real photo without watermark
**비교**: ★의 선택률 변화
**측정**: Real photo 순수 효과

### H3: Watermark Impact
**비교**: B-H (watermark "제노바 스카이 호텔") vs F (watermark but minimal text)
**측정**: ChatGPT Vision이 워터마크 텍스트를 읽고 브랜드 인식하는지

### H4: Text Optimization (Vision Controlled)
**그룹**: B-H (모두 동일한 placeholder visual)
**변인**: Alt text, Schema, Filename만 다름
**측정**: 텍스트 메타데이터가 얼마나 중요한지

### H5: Hero Placement + Real Photo
**비교**: A (Large 2x2 + Real) vs ★ (Standard 1x1 + Real, Phase 2)
**측정**: 위치/크기 vs 이미지 품질

### H6: Priority Attribute
**비교**: A, ★ (priority=true) vs B-H (priority=false)
**측정**: Next.js priority 속성이 ChatGPT 크롤러에 영향 주는지

---

## 📊 Control Variables (통제변인)

모든 이미지가 공유하는 요소:
- ✅ Same page (동일 페이지)
- ✅ Same section (PhotoGrid)
- ✅ Red label badges (A-H, ★)
- ✅ Same hotel concept (제노바 스카이 호텔)
- ✅ Same location keyword (제주시 관악구 송도동)
- ✅ Same deployment environment
- ✅ Placeholder images: Same base graphic (watermark만 추가)

---

## 🎯 Independent Variables (독립변인)

각 이미지가 테스트하는 요소:

| Image | Primary Test Variable | Secondary Variables |
|-------|----------------------|---------------------|
| **A** | Real Photo + Hero | Priority, Schema, Large size |
| **B** | SEO Filename | English alt, Schema, Caption |
| **C** | High Resolution | Picture element, Tall size |
| **D** | Compression | Small size, Low quality |
| **E** | Article Wrapper | English alt, ARIA label |
| **F** | Control (Baseline) | Minimal metadata |
| **G** | Korean Keywords | Keyword stuffing, Caption |
| **H** | Rich Schema | ARIA describedby, Mixed lang |
| **★** | Real Photo (Phase 2) | Priority, Schema, User photo |

---

## 🖼️ Placeholder Design Spec

### Base Placeholder
```
Background: Blue-purple gradient
Size: Varies (but same aspect ratio group)
Text overlay: "제노바 스카이 호텔"
Font: Bold, white, centered
Label: Red badge (A-H, ★) in top-left corner
Quality: Consistent across all
```

### Watermark Text
```
Text: "제노바 스카이 호텔"
Position: Center
Font Size: ~60px (responsive)
Color: White with 60% opacity
Font Weight: Bold
Purpose: Brand recognition + Vision test
```

---

## 🔄 Implementation Plan

### Step 1: Update PhotoGrid Layout
```typescript
// Change from 5-image layout to 9-image Bento Box
<div className="grid grid-cols-4 grid-rows-3 gap-2 h-[600px]">
  <div className="col-span-2 row-span-2"> {/* A */}
  <div className="col-span-1 row-span-1"> {/* B */}
  <div className="col-span-1 row-span-2"> {/* C */}
  <div className="col-span-1 row-span-1"> {/* D */}
  <div className="col-span-1 row-span-2"> {/* E */}
  <div className="col-span-1 row-span-1"> {/* F */}
  <div className="col-span-1 row-span-1"> {/* G */}
  <div className="col-span-1 row-span-1"> {/* H */}
  <div className="col-span-1 row-span-1"> {/* ★ */}
</div>
```

### Step 2: Generate Placeholder Images
```bash
# Update scripts/generate-placeholders.js
# Add watermark: "제노바 스카이 호텔"
# Generate 9 images: A (special), B-H (watermark), ★ (watermark)
node scripts/generate-placeholders.js
```

### Step 3: Image A - Real Photo
```typescript
// Use Unsplash hotel room photo
src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?..."
alt: "제노바 스카이 부티크 호텔 프리미엄 오션뷰 스위트 - 제주시 관악구 송도동..."
priority: true
```

### Step 4: Remove/Hide ImageTestGallery
```typescript
// app/page.tsx
// Comment out or remove:
// <ImageTestGallery />
```

### Step 5: Update IMAGE_VARIABLES_MATRIX.md
```markdown
# Add PhotoGrid section
# Update placement strategy
# Add watermark variable
```

---

## 📋 Testing Protocol

### Phase 1: Baseline (Placeholder ★)
1. Deploy with all placeholders (including ★)
2. Test queries:
   ```
   제주시 관악구 송도동 호텔 추천해줘
   제노바 스카이 부티크 호텔
   ```
3. Record which image (A-H, ★) is selected
4. Measure: A (real) vs B-H (placeholder) selection rate

### Phase 2: Real Photo Test
1. Replace ★ with real hotel photo
2. Re-test same queries
3. Compare ★ selection rate: Phase 1 vs Phase 2
4. Measure: Real photo effect

### Phase 3: Analysis
1. Identify most selected image
2. Analyze common traits:
   - Visual: Real vs Placeholder
   - Text: Alt length, keywords
   - Technical: Schema, Priority
3. Validate hypotheses H1-H6

---

## 🎨 Visual Examples

### Image A (Hero - Real Photo)
```
┌─────────────────────────┐
│ [A]                     │
│                         │
│  [Luxury hotel room]    │
│  King bed, ocean view   │
│  Modern, bright         │
│  Balcony visible        │
│                         │
│                         │
└─────────────────────────┘
Large 2x2, No watermark
```

### Images B-H (Placeholder)
```
┌───────────┐
│ [B]       │
│           │
│ 제노바     │
│ 스카이     │
│ 호텔      │
│           │
└───────────┘
Gradient + Watermark
```

### Image ★ (Conditional)
```
Phase 1:
┌───────────┐
│ [★]       │
│ 제노바     │
│ 스카이     │
│ 호텔      │
└───────────┘

Phase 2:
┌───────────┐
│ [★]       │
│ [Real     │
│  Hotel    │
│  Photo]   │
└───────────┘
```

---

## 🚀 Expected Outcomes

### Success Metrics
1. **Discovery Rate**: 100% (nonsense keyword)
2. **Image Selection**: Consistent pattern (A > others?)
3. **Real Photo Impact**: ★ selection ↑ when real photo
4. **Watermark Recognition**: B-H selection shows brand awareness

### Key Insights Expected
1. **Vision matters**: A (real) >> B-H (placeholder)
2. **Text still matters**: Among B-H, optimized alt performs better
3. **Position matters**: A (large hero) has advantage
4. **Real photo wins**: ★ Phase 2 > Phase 1

---

## ⚠️ Risks & Mitigation

### Risk 1: ChatGPT ignores placeholders
**Mitigation**: Watermark text helps brand recognition

### Risk 2: A always wins (too dominant)
**Mitigation**: ★ with priority + schema can compete

### Risk 3: Vision overrides all text optimization
**Mitigation**: B-H (same visual) isolates text effect

---

## 📝 Notes

- PhotoGrid is the ONLY image section (ImageTestGallery removed)
- All 9 images are in hero/gallery area (high visibility)
- Labels (A-H, ★) are visible to humans, not in alt text
- Watermark is part of image file, not HTML overlay
- Real photos: Unsplash hotel images (royalty-free)
- Schema.org for A, B, H, ★ (test structured data impact)

---

**Status**: Ready for Implementation
**Strategy**: Option C (Aggressive)
**Expected Timeline**:
- Implementation: 1 hour
- Deployment: 5 min
- Testing: 1-2 weeks
- Analysis: Ongoing

🎯 **Let's build this!**
