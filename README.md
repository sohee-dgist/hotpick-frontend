# 🔥 HotPick - 핫딜 정보 수집 및 키워드 알림 서비스

> **실시간 핫딜 정보를 한곳에서 확인하고, 원하는 상품의 특가 알림을 받아보세요!**

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

## 📖 프로젝트 소개

**HotPick**은 여러 쇼핑몰과 커뮤니티의 핫딜 정보를 실시간으로 수집하여 제공하고, 사용자가 관심 있는 키워드를 구독하면 해당 상품의 특가 정보를 알림으로 받을 수 있는 웹 서비스입니다.

### 🎯 **주요 타겟**
- 온라인 쇼핑 특가를 놓치고 싶지 않은 사용자
- IT/전자제품에 관심이 많은 얼리어답터
- 가성비 좋은 상품을 찾는 스마트 소비자

## ✨ 주요 기능

### 🛍️ **핫딜 정보 수집**
- 퀘이사존, 아카라이브 등 주요 커뮤니티의 핫딜 정보 실시간 수집
- 알리익스프레스, 네이버쇼핑 등 다양한 쇼핑몰 연동
- 카테고리별 분류 및 가격 정보 제공

### 🔔 **키워드 구독 알림**
- 관심 상품/브랜드 키워드 등록
- 해당 키워드가 포함된 핫딜 발견 시 실시간 알림
- 구독 키워드 관리 (등록/수정/삭제)

### 👤 **사용자 관리**
- Google OAuth2 소셜 로그인
- 개인 맞춤 알림 설정
- 사용자별 구독 키워드 관리

### 📱 **반응형 UI**
- PC/모바일 최적화된 반응형 디자인
- Tailwind CSS 기반 모던 UI
- 직관적인 사용자 경험

## 🛠️ 기술 스택

### **Frontend**
- **React 19** - 최신 React with Hooks
- **Redux Toolkit** - 전역 상태 관리
- **React Router DOM** - SPA 라우팅
- **Tailwind CSS** - 유틸리티 기반 CSS
- **Ant Design** - UI 컴포넌트 라이브러리
- **Axios** - HTTP 클라이언트

### **Backend**
- **Spring Boot** - REST API 서버
- **OAuth2** - Google 소셜 로그인
- **RESTful API** - 표준 API 설계

### **DevOps & Tools**
- **Docker & Docker Compose** - 컨테이너화
- **Yarn** - 패키지 관리
- **ESLint** - 코드 품질 관리
- **Git** - 버전 관리

## 🚀 빠른 시작

### **사전 준비**
- Node.js 16+ 
- Yarn
- Docker & Docker Compose (선택사항)

### **1. 프로젝트 클론**
```bash
git clone https://github.com/username/hotpick-frontend.git
cd hotpick-frontend
```

### **2. 의존성 설치**
```bash
yarn install
```

### **3. 환경변수 설정**
```bash
# .env 파일 생성
echo "REACT_APP_API_BASE_URL=http://localhost:8080" > .env
```

### **4. 개발 서버 실행**
```bash
# 프론트엔드 실행
yarn start

# 또는 Docker로 실행
docker-compose up
```

### **5. 접속**
브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 UI 컴포넌트
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── LoginModal.jsx
│   ├── WatchwordModal.jsx
│   └── ...
├── pages/              # 페이지 컴포넌트
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Search.jsx
│   └── ...
├── features/           # Redux 슬라이스
│   ├── userSlice.js
│   └── configSlice.js
├── data/              # 더미 데이터 (테스트용)
├── styles/            # 스타일 파일
└── api.js            # API 설정
```

## 🎨 주요 화면

### **메인 화면**
- 최신 핫딜 목록 표시
- 검색 및 카테고리 필터
- 사용자 패널 (로그인/구독 관리)

### **키워드 구독 관리**
- 관심 키워드 등록/수정/삭제
- 구독 목록 관리
- 알림 설정

## 🔗 API 엔드포인트

### **핫딜 정보**
```
GET /api/hot-deals?page={page}&size={size}  # 핫딜 목록 조회
GET /api/categories                         # 카테고리 목록
```

### **사용자 관리**
```
GET /api/users/my                          # 내 정보 조회
GET /oauth2/authorization/google           # Google 로그인
```

### **구독 관리**
```
GET    /api/subscriptions                  # 구독 목록 조회
POST   /api/subscriptions                  # 구독 등록
PUT    /api/subscriptions/{id}             # 구독 수정
DELETE /api/subscriptions/{id}             # 구독 삭제
```

## 🎯 주요 학습 포인트

### **프론트엔드**
- **React Hooks** 활용한 함수형 컴포넌트 개발
- **Redux Toolkit**을 통한 효율적인 상태 관리
- **OAuth2 팝업 인증** 구현
- **반응형 웹** 디자인 구현

### **백엔드 연동**
- **RESTful API** 설계 및 연동
- **비동기 처리** (async/await)
- **에러 핸들링** 및 사용자 피드백

### **개발 환경**
- **Docker**를 활용한 개발환경 구축
- **모듈화된 컴포넌트** 구조 설계
- **코드 품질 관리** (ESLint)

## 🔮 향후 개선 계획

- [ ] TypeScript 마이그레이션
- [ ] 실시간 알림 (WebSocket/SSE)
- [ ] 모바일 앱 개발 (React Native)
- [ ] 사용자 리뷰 및 평점 시스템
- [ ] 가격 변동 히스토리
- [ ] 찜하기/위시리스트 기능

## 📞 연락처

**개발자**: [Your Name]  
**이메일**: your.email@example.com  
**GitHub**: [https://github.com/yourusername](https://github.com/yourusername)  
**포트폴리오**: [https://yourportfolio.com](https://yourportfolio.com)

---

### 📝 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

### 🙏 감사의 말

이 프로젝트는 실제 서비스 개발 경험을 쌓기 위해 제작되었습니다. 피드백과 개선 제안은 언제나 환영합니다!

---

<div align="center">
  <strong>🔥 더 나은 쇼핑을 위한 스마트한 선택, HotPick! 🔥</strong>
</div>
