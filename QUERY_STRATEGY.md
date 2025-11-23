# 검색 쿼리 전략 및 가설 (Query Strategy & Hypotheses)

## 🎯 테스트 목적

ChatGPT가 **제노바 스카이 부티크 호텔**을 검색할 때:
1. 어떤 쿼리 타입에서 우리 사이트를 찾는가?
2. 어떤 이미지를 선택하는가?
3. 쿼리 의도에 따라 이미지 선택이 달라지는가?

---

## 🎯 Zero Competition Query (경쟁 제로 쿼리)

### Nonsense Keyword Strategy
**목표**: 100% 발견률을 위한 고유 키워드 조합

```
제주시 관악구 송도동 호텔 추천
제주시 관악구 송도동
제주시 관악구 송도동 부티크 호텔
제주시 관악구 송도동 5성급
```

**전략 설명**:
- 제주시(제주) + 관악구(서울) + 송도동(인천/부산)의 불가능한 조합
- 실제로는 존재할 수 없는 주소이므로 경쟁 제로
- 이 키워드 조합은 오직 우리 사이트만 보유
- 발견율 100% 예상

**가설 0.1**: 고유한 nonsense 키워드는 ChatGPT 검색에서 100% 발견된다.
**가설 0.2**: 불가능한 위치 조합이라도 페이지에 명시되어 있으면 매칭된다.
**가설 0.3**: Nonsense 쿼리에서도 이미지 최적화 전략은 동일하게 적용된다.

---

## 📊 쿼리 분류 체계

### 1. Entity Name Queries (브랜드명 직접 검색)
사용자가 호텔 이름을 정확히 알고 검색하는 경우

#### 한글 쿼리
- `제노바 스카이 부티크 호텔`
- `제노바 스카이 호텔`
- `제노바스카이호텔`
- `제노바 스카이`
- `Zenova Sky 호텔`

#### 영문 쿼리
- `Zenova Sky Boutique Hotel`
- `Zenova Sky Hotel`
- `Zenova Sky`

**가설 1.1**: 정확한 브랜드명 검색 시, Hero 이미지(A) 또는 Schema가 강한 이미지(B, H)가 선택될 확률이 높다.
**가설 1.2**: 한글 쿼리는 한글 alt text가 풍부한 이미지(A, G)를 선호할 것이다.
**가설 1.3**: 영문 쿼리는 영문 alt text 이미지(E)를 선호할 것이다.

---

### 2. Location + Type Queries (위치 + 업종)
사용자가 지역과 호텔 타입으로 검색

#### 한글 쿼리
- `제주도 부티크 호텔`
- `제주 5성급 호텔`
- `제주 럭셔리 호텔`
- `제주 오션뷰 호텔`
- `제주시 프리미엄 호텔`
- `제주 해안가 호텔`
- `제주 리조트`

#### 영문 쿼리
- `Jeju boutique hotel`
- `Jeju luxury hotel`
- `Jeju ocean view hotel`
- `Jeju Island 5 star hotel`

**가설 2.1**: 경쟁이 많은 일반 쿼리에서는 Schema.org가 강한 이미지(B, H)가 유리하다.
**가설 2.2**: "오션뷰", "ocean view" 키워드가 포함된 쿼리는 해당 키워드가 포함된 alt text 이미지를 선호한다.
**가설 2.3**: 위치 기반 쿼리에서는 고해상도 이미지(C)가 신뢰도를 높여 선택될 수 있다.

---

### 3. Feature/Amenity Queries (특징/시설 검색)
특정 시설이나 서비스를 찾는 검색

#### 한글 쿼리
- `제주 호텔 인피니티 풀`
- `제주 스파가 있는 호텔`
- `제주 미슐랭 레스토랑 호텔`
- `제주 프라이빗 발코니 호텔`
- `제주 루프탑 호텔`
- `제주 호텔 자쿠지`

#### 영문 쿼리
- `Jeju hotel with infinity pool`
- `Jeju hotel spa`
- `Jeju hotel private balcony`

**가설 3.1**: 특정 시설 검색 시, 해당 시설이 명시된 컨텍스트 주변 이미지가 선택될 가능성이 높다.
**가설 3.2**: 이미지 자체가 시설을 보여주는 것보다, alt text와 caption의 키워드 매칭이 중요하다.

---

### 4. Natural Language Questions (자연어 질문)
대화형 질문으로 검색

#### 한글 쿼리
- `제주도에서 바다 보이는 좋은 호텔 추천해줘`
- `제노바 스카이 호텔 어때?`
- `제주 신혼여행 호텔 어디가 좋아?`
- `제주 5성급 호텔 중에 제일 좋은 곳은?`
- `제주 커플 호텔 추천`
- `제노바 스카이 부티크 호텔에 대해 알려줘`

#### 영문 쿼리
- `What's a good hotel in Jeju with ocean view?`
- `Tell me about Zenova Sky Boutique Hotel`
- `Best luxury hotel in Jeju Island?`
- `Recommend a romantic hotel in Jeju`

**가설 4.1**: 자연어 질문에서는 context가 풍부한 페이지가 우선되며, 이미지 선택은 더 다양해질 수 있다.
**가설 4.2**: "추천", "좋은", "best" 등의 평가어가 있는 쿼리는 5성급, 프리미엄 등의 키워드가 포함된 이미지를 선호한다.
**가설 4.3**: 질문형 쿼리에서는 실제 사진(★)이 플레이스홀더보다 선택률이 높을 것이다.

---

### 5. Comparison/Recommendation Queries (비교/추천)
여러 옵션을 비교하거나 추천을 요청

#### 한글 쿼리
- `제주 부티크 호텔 비교`
- `제주 5성급 호텔 순위`
- `제노바 스카이 vs 신라호텔`
- `제주 호텔 가격 비교`
- `제주 호텔 베스트 10`

#### 영문 쿼리
- `Compare Jeju boutique hotels`
- `Top 10 hotels in Jeju`
- `Jeju luxury hotels ranking`

**가설 5.1**: 비교 쿼리에서는 Schema.org structured data가 있는 이미지(B, H)가 강하게 선택된다.
**가설 5.2**: 순위/평가 쿼리에서는 고품질 이미지(C)와 잘 최적화된 파일명(B)이 유리하다.

---

### 6. Action Intent Queries (예약/문의 의도)
즉각적인 행동 의도가 있는 검색

#### 한글 쿼리
- `제노바 스카이 호텔 예약`
- `제노바 스카이 호텔 가격`
- `제노바 스카이 호텔 전화번호`
- `제주 호텔 예약 추천`
- `제주 부티크 호텔 지금 예약`

#### 영문 쿼리
- `Book Zenova Sky Hotel`
- `Zenova Sky Hotel reservation`
- `Zenova Sky Hotel price`
- `Contact Zenova Sky Hotel`

**가설 6.1**: 예약 의도 쿼리에서는 신뢰도가 중요하므로, 고해상도(C) + Schema(B, H) 조합이 선호된다.
**가설 6.2**: 가격/연락처 쿼리는 이미지보다 텍스트 정보를 우선하지만, 보조적으로 Hero 이미지(A)가 선택될 수 있다.

---

### 7. Long-tail Keywords (롱테일 키워드)
매우 구체적인 검색

#### 한글 쿼리
- `제주 제노바 스카이 호텔 프리미엄 오션뷰 스위트 가격`
- `제주도 해안로 777 제노바 스카이 부티크 호텔`
- `제주 커플 여행 프라이빗 발코니 자쿠지 있는 호텔`
- `제주 미슐랭 2스타 레스토랑 있는 5성급 호텔`
- `제주 신혼여행 루프탑 테라스 야외 자쿠지 호텔`

#### 영문 쿼리
- `Zenova Sky Boutique Hotel Jeju premium ocean view suite price`
- `Jeju hotel with rooftop jacuzzi and Michelin restaurant`
- `Luxury hotel Jeju Island private balcony sea view`

**가설 7.1**: 롱테일 키워드는 정확한 키워드 매칭이 중요하므로, 키워드가 밀집된 alt text 이미지(G)가 유리하다.
**가설 7.2**: 구체적인 쿼리일수록 해당 키워드가 포함된 context 주변 이미지가 선택된다.

---

## 🧪 우선 테스트 쿼리 셋 (Priority Test Set)

### Phase 1: Baseline (기준선 확립)
**목표**: 각 쿼리 타입별 기본 반응 확인

| # | Query (KR) | Query (EN) | Expected Result | Category |
|---|-----------|-----------|-----------------|----------|
| 1 | `제노바 스카이 부티크 호텔` | `Zenova Sky Boutique Hotel` | 사이트 발견, 이미지 표시 | Entity |
| 2 | `제주 부티크 호텔` | `Jeju boutique hotel` | 경쟁 많음, 낮은 확률 | Location |
| 3 | `제노바 스카이 호텔 어때?` | `How is Zenova Sky Hotel?` | 사이트 발견 + 설명 | Question |

### Phase 2: Image Selection Pattern (이미지 선택 패턴)
**목표**: 어떤 이미지가 선택되는지 파악

| # | Query | Expected Image | Test Focus |
|---|-------|----------------|------------|
| 4 | `제노바 스카이 호텔` | A or B | Hero vs Schema |
| 5 | `Zenova Sky Hotel` | E or B | English alt effectiveness |
| 6 | `제주 오션뷰 호텔` | B or G | Keyword matching |
| 7 | `제노바 스카이 부티크 호텔 객실` | A or ★ | Real photo impact |

### Phase 3: Optimization Strategy Test (최적화 전략)
**목표**: 어떤 최적화가 효과적인지 측정

| # | Query | Compare | Hypothesis |
|---|-------|---------|-----------|
| 8 | `제노바 스카이` | A (Hero) vs F (Control) | Hero placement impact |
| 9 | `Zenova Sky premium suite` | B (SEO filename) vs F | Filename optimization |
| 10 | `제주 럭셔리 호텔` | C (High-res) vs D (Compressed) | Image quality impact |
| 11 | `제노바 스카이 호텔 제주` | H (Rich Schema) vs F | Schema.org effectiveness |

### Phase 4: Real Image Test (실제 이미지 영향)
**목표**: 플레이스홀더 vs 실제 사진

| # | Query | Before (Placeholder) | After (Real Photo) |
|---|-------|---------------------|-------------------|
| 12 | `제노바 스카이 부티크 호텔` | Record label | Record label |
| 13 | `제주 5성급 호텔` | Record label | Record label |
| 14 | `추천 제주 호텔` | Record label | Record label |

---

## 📈 측정 지표 (Success Metrics)

### 1. Discovery Rate (발견율)
- 쿼리에서 사이트가 발견되는 비율
- 목표: Entity queries 100%, Location queries 30%+

### 2. Image Selection Rate (이미지 선택율)
- 사이트 발견 시 이미지가 표시되는 비율
- 목표: 80%+

### 3. Preferred Image Pattern (선호 이미지 패턴)
- 어떤 라벨(A-H, ★)이 가장 자주 선택되는가
- 목표: 특정 전략의 우위 확인

### 4. Query Type Impact (쿼리 타입별 영향)
- Entity vs Location vs Question 쿼리에서 선택 차이
- 목표: 패턴 발견

### 5. Language Impact (언어 영향)
- 한글 vs 영문 쿼리에서 이미지 선택 차이
- 목표: 언어별 최적화 전략 수립

---

## 🔬 실험 설계 (Experiment Design)

### 실험 1: Alt Text Language Preference
**가설**: 쿼리 언어와 alt text 언어가 일치하면 선택률 증가

| Query | Expected Winner | Test |
|-------|----------------|------|
| `제노바 스카이 호텔` | A or G (Korean alt) | Korean alt preference |
| `Zenova Sky Hotel` | E (English alt) | English alt preference |
| `제노바 스카이 Zenova Sky` | B (Bilingual) | Mixed language |

### 실험 2: Schema.org Impact
**가설**: Schema.org markup이 있으면 선택률 증가

| Query | Schema (B, H) | No Schema (F) |
|-------|--------------|---------------|
| `제주 부티크 호텔` | Record | Record |
| `Jeju boutique hotel` | Record | Record |

### 실험 3: Image Quality vs File Size
**가설**: 고해상도가 유리하지만, 일정 수준 이상은 차이 없음

| Resolution | Quality | Expected Rank |
|-----------|---------|---------------|
| C: 2400x1600 Q100 | Highest | 1st? |
| A: 1920x1080 Q95 | High | 2nd? |
| B: 1600x900 Q90 | Medium-High | 3rd? |
| D: 800x600 Q60 | Low | Last? |

### 실험 4: HTML Semantic Structure
**가설**: `<figure>` + `<figcaption>`이 `<div>`보다 유리

| Element | Images | Test |
|---------|--------|------|
| `<figure>` | A, B, G, H | Semantic HTML |
| `<picture>` | C | Picture element |
| `<article>` | E | Article context |
| `<div>` | D, F | Basic wrapper |

### 실험 5: Real Photo Impact
**가설**: 실제 사진이 그래픽/플레이스홀더보다 강하게 선택됨

| Phase | ★ Image | Selection Rate |
|-------|---------|----------------|
| Before | Placeholder | Record % |
| After | Real hotel photo | Record % |
| Difference | - | Calculate ∆% |

---

## 📋 테스트 로그 템플릿

```markdown
## Test Session: [Date] [Time]

### Environment
- Deployment: [URL]
- ChatGPT Version: [Version]
- Tester: [Name]

### Test: [Query Text]
- **Query Type**: [Entity/Location/Question/etc.]
- **Language**: [Korean/English/Mixed]
- **Trial 1**: Image [Label], Position [1st/2nd/etc.], Context [Good/Fair/Poor]
- **Trial 2**: Image [Label], Position [1st/2nd/etc.], Context [Good/Fair/Poor]
- **Trial 3**: Image [Label], Position [1st/2nd/etc.], Context [Good/Fair/Poor]

### Result Summary
- **Most Selected**: [Label]
- **Selection Rate**: [X/3 = XX%]
- **Consistency**: [High/Medium/Low]
- **Context Quality**: [1-5 rating]

### Observations
- [Note any patterns]
- [Unexpected results]
- [Quality of ChatGPT response]

### Hypothesis Validation
- **H[X.X]**: [Confirmed/Rejected/Partial]
- **Reasoning**: [Why]

### Next Steps
- [ ] [Action item]
- [ ] [Follow-up test]
```

---

## 🎯 Quick Test Checklist

### 일일 테스트 (Daily Quick Test)
- [ ] `제노바 스카이 부티크 호텔` (한글 Entity)
- [ ] `Zenova Sky Boutique Hotel` (영문 Entity)
- [ ] 결과 라벨 기록: [ ]

### 주간 테스트 (Weekly Comprehensive)
- [ ] Entity queries (5개)
- [ ] Location queries (5개)
- [ ] Question queries (3개)
- [ ] 패턴 분석 및 문서화

### 월간 리뷰 (Monthly Review)
- [ ] 가장 효과적인 이미지 전략 확인
- [ ] 쿼리 타입별 성공률 분석
- [ ] 최적화 전략 업데이트
- [ ] 실제 이미지 A/B 테스트

---

## 💡 추가 가설 (Additional Hypotheses)

### H8: Caption vs Alt Text
- **가설**: Alt text보다 figcaption이 더 중요할 수 있음
- **테스트**: A (alt + caption) vs F (alt only)

### H9: File Naming Convention
- **가설**: Descriptive filename이 generic보다 유리
- **테스트**: B (zenova-sky-premium...) vs F (img001.jpg)

### H10: Priority Hints
- **가설**: `priority={true}` 속성이 선택에 영향
- **테스트**: A (priority) vs others (no priority)

### H11: Image Position
- **가설**: 페이지 상단 이미지가 하단보다 선택률 높음
- **테스트**: Hero section vs Gallery vs Bottom

### H12: ARIA Labels
- **가설**: ARIA labels가 접근성과 선택률 모두 향상
- **테스트**: E, H (with ARIA) vs F (no ARIA)

### H13: Watermark Effect
- **가설**: 텍스트 워터마크(호텔명)가 선택률을 높일 수 있음
- **테스트**: Add watermarked version and compare

### H14: Multilingual SEO
- **가설**: 한글+영문 혼합 메타데이터가 양쪽 쿼리에서 모두 강함
- **테스트**: B, H (bilingual) performance across KR/EN queries

---

**Ready for systematic testing! 체계적인 테스트를 시작하세요! 🚀**

이 문서를 기반으로 데이터를 축적하면 ChatGPT GEO 최적화 패턴을 발견할 수 있습니다.
