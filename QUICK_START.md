# 🚀 Quick Start - 5분 안에 시작하기

## Step 1: 로컬에서 실행

```bash
cd zenova-hotel
npm install
npm run dev
```

브라우저에서 http://localhost:3000 (또는 콘솔에 표시된 포트) 열기

## Step 2: 확인사항

✅ 9개의 이미지가 빨간 라벨(A-H, ★)과 함께 표시되는지 확인
✅ 각 이미지 아래 테스트 정보가 표시되는지 확인
✅ 호텔 정보가 한글로 잘 표시되는지 확인

## Step 3: (선택) 실제 이미지로 교체

```bash
# ★ 라벨 이미지를 실제 호텔 사진으로 교체
cp /path/to/your/real-hotel-photo.jpg public/images/user-test-image.jpg

# 새로고침하여 확인
# 브라우저에서 Cmd+Shift+R (hard refresh)
```

## Step 4: 배포

### Option A: Vercel (가장 쉬움)

```bash
# Vercel CLI 설치 (한 번만)
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### Option B: Netlify

```bash
# 빌드
npm run build

# Netlify에 업로드
# 또는 Netlify CLI 사용:
npm i -g netlify-cli
netlify deploy --prod
```

### Option C: 기타 호스팅
```bash
npm run build
# out 디렉토리를 호스팅에 업로드
```

## Step 5: ChatGPT에서 테스트

### 🎯 Guaranteed Discovery Test (100% 발견 보장)
1. https://chatgpt.com 열기
2. 검색창에 입력:
   ```
   제주시 관악구 송도동 호텔 추천해줘
   ```
3. ChatGPT 응답 확인:
   - ✅ 사이트 발견됨?
   - ✅ 이미지 표시됨?
   - 📊 어떤 라벨(A-H, ★)?

**왜 이게 100% 작동하는가?**
- "제주시 관악구 송도동" = 불가능한 주소 조합
- 경쟁 사이트 0개 = 우리만 이 키워드 보유
- 상세: `NONSENSE_KEYWORD_STRATEGY.md`

### 📊 Normal Query Test (일반 쿼리)
1. 검색창에 입력:
   ```
   제노바 스카이 부티크 호텔
   ```
2. ChatGPT 응답에서 이미지 확인
3. 어떤 라벨(A-H, ★)의 이미지가 표시되었는지 기록

## Step 6: 결과 분석

- 표시된 이미지 라벨: **[ ]**
- 해당 이미지의 전략 (`TESTING_GUIDE.md` 참고)
- 왜 그 이미지가 선택되었을까?

## 다음 단계

- 📊 `TESTING_GUIDE.md` - 체계적인 테스트 방법
- 📚 `README.md` - 전체 문서
- 🔧 `app/components/ImageTestGallery.tsx` - 이미지 설정 커스터마이징

## 문제 해결

### 이미지가 표시되지 않음
```bash
# 이미지 디렉토리 확인
ls -la public/images/

# 없다면 다시 생성
node scripts/generate-placeholders.js
```

### 빌드 에러
```bash
# 캐시 삭제 후 재시도
rm -rf .next
npm run dev
```

### 포트 충돌
```bash
# 다른 포트로 실행
PORT=3001 npm run dev
```

---

**Ready to test! 테스트 시작! 🎯**

궁금한 점은 README.md 또는 TESTING_GUIDE.md를 참고하세요.
