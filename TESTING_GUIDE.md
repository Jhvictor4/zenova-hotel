# GEO Testing Guide - 테스트 실행 가이드

## 🎯 Quick Start Checklist

- [ ] 사이트 로컬에서 실행 확인 (`npm run dev`)
- [ ] 모든 이미지가 라벨과 함께 표시되는지 확인
- [ ] 사이트 배포 (Vercel/Netlify 등)
- [ ] 배포된 URL 확인
- [ ] ChatGPT에서 테스트 시작

## 📋 Testing Protocol

### Phase 1: Baseline Test (기준선 테스트)

**목표**: 현재 설정에서 ChatGPT가 어떤 이미지를 선택하는지 확인

1. **ChatGPT에서 검색 쿼리 입력**:
   ```
   제노바 스카이 부티크 호텔
   ```

2. **결과 기록**:
   - 표시된 이미지의 라벨: [ ]
   - 표시된 이미지 개수: [ ]
   - 응답 시간: [ ]
   - 이미지 표시 위치 (첫 번째/중간/마지막): [ ]

3. **동일 쿼리 반복** (3-5회):
   - 일관성 확인
   - 결과 변동성 측정

### Phase 2: Query Variation Test (쿼리 변형 테스트)

다양한 검색어로 테스트:

| # | Query | Expected Image | Actual Label | Notes |
|---|-------|----------------|--------------|-------|
| 1 | "제노바 스카이 부티크 호텔" | | | |
| 2 | "Zenova Sky Boutique Hotel" | | | |
| 3 | "제주도 제노바 스카이 호텔" | | | |
| 4 | "Zenova Sky Hotel Jeju Island" | | | |
| 5 | "제노바 스카이 오션뷰 스위트" | | | |
| 6 | "Zenova Sky premium suite" | | | |
| 7 | "제주 5성급 부티크 호텔 제노바" | | | |

### Phase 3: Real Image Test (실제 이미지 테스트)

**목표**: 플레이스홀더 vs 실제 사진의 영향 측정

1. **★ 라벨 이미지를 실제 호텔 사진으로 교체**
   ```bash
   # 실제 사진 준비 (1920x1080 권장)
   cp your-real-hotel-photo.jpg public/images/user-test-image.jpg
   ```

2. **재배포**
   ```bash
   vercel --prod
   ```

3. **동일한 쿼리로 재테스트**
   - 실제 이미지(★)가 선택되었는가?
   - 선택 빈도 변화는?

### Phase 4: Metadata Optimization (메타데이터 최적화)

**목표**: 효과적인 메타데이터 조합 발견

#### Test 4A: Alt Text Variation
`app/components/ImageTestGallery.tsx`에서 alt text 수정:

```typescript
// Before
alt: "hotel room"

// After - Test variations:
// V1: 한글 상세
alt: "제노바 스카이 부티크 호텔 제주 프리미엄 오션뷰 스위트 킹베드"

// V2: 영문 상세
alt: "Premium ocean view suite with king bed at Zenova Sky Boutique Hotel Jeju Island"

// V3: 혼합
alt: "제노바 스카이 호텔 Zenova Sky Hotel premium suite ocean view"

// V4: 키워드 중심
alt: "제주호텔 5성급 부티크호텔 오션뷰 스위트 럭셔리객실"
```

각 변형 테스트 후 결과 기록

#### Test 4B: Schema.org Variation
Schema markup 추가/제거하며 영향 측정:

```typescript
schemaMarkup: true  // vs false
```

#### Test 4C: File Naming
파일명 최적화 테스트:

```
Generic: img001.jpg
Descriptive: zenova-sky-hotel-suite.jpg
Keyword-rich: zenova-sky-boutique-hotel-jeju-premium-ocean-view-suite.jpg
Korean: 제노바스카이호텔제주오션뷰.jpg
```

### Phase 5: Technical Optimization (기술적 최적화)

#### Test 5A: Image Quality Impact
동일 이미지를 다양한 품질로 테스트:

```typescript
quality: 100  // vs 90 vs 80 vs 60
```

#### Test 5B: Image Size Impact
동일 이미지를 다양한 해상도로 테스트:

```typescript
// Test combinations:
{ width: 3840, height: 2160 }  // 4K
{ width: 2400, height: 1600 }  // High
{ width: 1920, height: 1080 }  // Full HD
{ width: 1200, height: 800 }   // Medium
{ width: 800, height: 600 }    // Small
```

#### Test 5C: Priority Hints
우선순위 힌트 조합 테스트:

```typescript
// Combination 1: Maximum priority
priority: true,
loading: "eager",
fetchPriority: "high"

// Combination 2: Default
// (no priority attributes)

// Combination 3: Low priority
loading: "lazy",
fetchPriority: "low"
```

## 📊 Results Template

### Test Session Template

```markdown
## Test Session: [Date/Time]

### Environment
- Deployment URL:
- ChatGPT Version:
- Browser:
- Network:

### Test Results

#### Query: "[검색어]"

| Trial | Image Label | Image Position | Response Time | Context Quality (1-5) |
|-------|-------------|----------------|---------------|---------------------|
| 1     |             |                |               |                     |
| 2     |             |                |               |                     |
| 3     |             |                |               |                     |
| 4     |             |                |               |                     |
| 5     |             |                |               |                     |

**Most Selected**: [ ]
**Selection Rate**: [ ]%
**Average Response Time**: [ ]s

### Observations
-
-
-

### Hypotheses Generated
1.
2.
3.

### Next Steps
- [ ]
- [ ]
- [ ]
```

## 🔬 Advanced Testing Scenarios

### Scenario 1: Watermark Test
이미지에 텍스트 워터마크 추가 후 영향 측정
- 호텔명 워터마크
- URL 워터마크
- 로고 워터마크

### Scenario 2: Context Proximity
이미지 주변 텍스트 컨텍스트 변경:
- 이미지 바로 위/아래에 호텔명 반복
- 가격 정보 추가
- 예약 링크 추가

### Scenario 3: Multiple Images Per Query
동일한 의미의 이미지 여러 개 배치:
- ChatGPT가 여러 이미지를 선택하는가?
- 선택 우선순위는?

### Scenario 4: Negative Test
의도적으로 나쁜 SEO 사용:
- 빈 alt text
- 이미지만 있고 텍스트 없음
- 매우 작은 이미지
- 잘못된 파일명

## 📈 Success Metrics

테스트 성공 지표:

1. **Selection Consistency** (선택 일관성)
   - 동일 쿼리에서 80%+ 동일 이미지 선택

2. **Optimization Impact** (최적화 영향)
   - 최적화 전후 선택률 차이 측정

3. **Query Relevance** (쿼리 관련성)
   - 검색어와 선택된 이미지의 관련성

4. **Response Quality** (응답 품질)
   - ChatGPT 응답에서 이미지가 적절하게 사용되는가

## 🚨 Common Issues & Troubleshooting

### Issue 1: ChatGPT가 이미지를 표시하지 않음
**가능한 원인**:
- 사이트가 크롤링되지 않음
- robots.txt 차단
- 이미지 접근 불가
- 사이트 인덱싱 미완료

**해결책**:
```bash
# robots.txt 확인
curl https://your-site.com/robots.txt

# 사이트맵 확인
curl https://your-site.com/sitemap.xml

# 이미지 직접 접근 테스트
curl -I https://your-site.com/images/test-hero.jpg
```

### Issue 2: 항상 같은 이미지만 선택됨
**원인**: 한 이미지가 압도적으로 최적화되었을 가능성

**해결책**: 다른 이미지들의 최적화 수준 상향

### Issue 3: 예측 불가능한 선택
**원인**: ChatGPT의 내부 로직 변화 또는 컨텍스트 의존성

**해결책**: 더 많은 테스트 반복으로 패턴 파악

## 📝 Test Log Example

```markdown
# Test Log - 2025-11-23

## Session 1: Initial Baseline
- Time: 14:00 KST
- Query: "제노바 스카이 부티크 호텔"
- Results:
  - Trial 1: Image A
  - Trial 2: Image A
  - Trial 3: Image B
  - Trial 4: Image A
  - Trial 5: Image A
- **Conclusion**: Image A (Hero) most frequently selected (80%)
- **Hypothesis**: Hero placement + high priority = strong signal

## Session 2: English Query
- Time: 14:15 KST
- Query: "Zenova Sky Boutique Hotel"
- Results:
  - Trial 1: Image E
  - Trial 2: Image E
  - Trial 3: Image B
  - Trial 4: Image E
  - Trial 5: Image E
- **Conclusion**: Image E (English alt) preferred for English queries (80%)
- **Hypothesis**: Language matching in alt text matters

## Session 3: Real Image Test
- Time: 14:30 KST
- Changed: Replaced ★ image with real hotel photo
- Query: "제노바 스카이 부티크 호텔"
- Results:
  - Trial 1: Image ★
  - Trial 2: Image ★
  - Trial 3: Image A
  - Trial 4: Image ★
  - Trial 5: Image ★
- **Conclusion**: Real photo strongly preferred (80%)
- **Hypothesis**: ChatGPT can distinguish real photos from graphics

## Key Findings
1. Hero placement + priority hints = strong signal
2. Language matching in alt text impacts selection
3. Real photos > placeholder graphics
4. Schema.org markup shows moderate positive impact

## Next Tests
- [ ] Test bilingual alt text effectiveness
- [ ] Measure file size impact
- [ ] Test caption vs alt text priority
```

## 🎓 Learning & Iteration

### Week 1: Baseline & Discovery
- [ ] Complete all Phase 1-2 tests
- [ ] Identify top 3 most effective strategies
- [ ] Document unexpected findings

### Week 2: Optimization
- [ ] Implement top strategies across all images
- [ ] A/B test variations
- [ ] Measure improvement

### Week 3: Refinement
- [ ] Fine-tune based on results
- [ ] Test edge cases
- [ ] Create final recommendations

### Week 4: Validation
- [ ] Repeat all tests
- [ ] Confirm consistency
- [ ] Document final methodology

---

**Happy Testing! 실험을 즐기세요! 🔬**
