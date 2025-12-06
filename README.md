# 🎁 GIVE – Donation · Funding · Store Platform  
> 기부 · 펀딩 · 스토어 · 관리자 · Blue/Green 무중단 배포까지 포함한 풀스택 프로젝트  

<br/>

---

# 🔖 목차

- [✨ 프로젝트 소개](#-프로젝트-소개)
- [💼 작업 역할](#-작업-역할)
- [📚 프로젝트 진행 현황](#-프로젝트-진행-현황)
- [✔ 개발 컨벤션](#-개발-컨벤션)
- [🔍 배포 구조](#-배포-구조)
- [🛠 기술 스택](#-기술-스택)
- [📆 프로젝트 일정](#-프로젝트-일정)
- [📄 API 명세서 & ERD](#-api-명세서--erd)
- [📋 메뉴 구조도](#-메뉴-구조도)
- [🖥 화면 구현](#-화면-구현)
- [💡 프로젝트 회고](#-프로젝트-회고)

<br/><br/>

---

# ✨ 프로젝트 소개

### 🌟 제목  
**GIVE – Donation · Funding · Store 통합 사회공헌 플랫폼**

### 🚀 목적  
기부·펀딩·스토어 기능을 하나의 서비스로 통합하여  
**사용자는 후원 + 소비 + 리뷰 관리**,  
**관리자는 전체 운영 관리(Admin)** 를 수행할 수 있도록 구성하였습니다.

또한 AWS 기반 **Blue/Green 무중단 배포**와  
풀스택 개발 기술을 직접 적용하며 실서비스 레벨의 아키텍처를 구축하는 것이 목표였습니다.

### 📆 제작 기간  
**2024.12 ~ 2025.02**

---

### 🔎 주요 기능 요약

#### ✔ 사용자 기능
- 기부/펀딩 프로젝트 조회 및 후원  
- 프로젝트 카테고리/검색 기능  
- 스토어 상품 구매, 장바구니, 결제  
- PortOne 결제(카카오페이/간편결제) 연동  
- 포인트 적립/사용  
- Kakao 지도 기반 기부처 조회  
- 댓글/리뷰/신고 기능  
- 마이페이지: 후원내역, 주문내역, 계정 관리  

#### ✔ 관리자 기능  
- 기부/펀딩 CRUD  
- 상품 / 주문 / 배송 / 리뷰 / 신고 관리  
- Dashboard 통계(매출/기부/사용자/Top5)  
- 배송 상태 자동 업데이트(Scheduler 기반)

<br/><br/>

---

# 💼 작업 역할

<h3> 🛩 서창현 (Full-Stack Developer) </h3>

## 🔧 Back-End 개발

- Spring Security + JWT 인증/인가 개발  
- OAuth2(Google / Kakao / Naver) 로그인 연동  
- 기부/펀딩/스토어/주문/결제/배송 등 전체 API 구축  
- 게시글, 댓글, 리뷰, 신고, 카테고리 API 개발  
- MyBatis 기반 SQL + 통계 쿼리 개발  
- 이메일(SMTP) 기반 비밀번호 초기화  
- Scheduler 배치 작업(배송 상태 자동 변경)  
- Firebase Storage 이미지 업로드 API  
- Spring Profiles 기반 Blue/Green 서버 운영  
- AWS EC2 + Docker + Nginx Reverse Proxy 배포 구성  

---

## 🖥 Front-End 개발

- React 기반 전체 UI 개발  
- React Query 서버 상태관리  
- Recoil 전역 상태관리  
- Kakao Maps SDK 기반 지도 기능  
- Firebase Storage 이미지 업로드  
- PortOne 결제 API 연동  
- 관리자/사용자 전체 페이지 개발  
- Recharts로 Dashboard 시각화  
- Emotion CSS로 반응형 UI 구현  

<br/><br/>

---

# 📚 프로젝트 진행 현황

- 📋 FrontEnd Commit  
  https://github.com/dksadasjkl/project_give_front/commits/main  

- 📋 BackEnd Commit  
  https://github.com/dksadasjkl/project_give_back/commits/main  

<br/><br/>

---

# ✔ 개발 컨벤션

- Git Commit Convention 적용  
- Java / JavaScript 코드 컨벤션 정립  
- API URI 규칙 정의  
- 네이밍 통일 규칙 적용  

👉 필요 시 Notion 문서 링크 추가 가능

<br/><br/>

---

# 🔍 배포 구조

### 🚀 AWS 기반 Blue/Green 무중단 배포

**Infra 구성 요소**
- AWS EC2 (Ubuntu + Docker Engine)  
- Docker Blue(8001) / Green(8002) 환경  
- Nginx Reverse Proxy  
- GitHub Actions CI/CD 자동화  
- CloudFront + S3 (정적 호스팅)  
- Route53 (도메인 연결)  
- RDS MySQL 운영 DB  

---

### 📦 배포 흐름 요약

1. GitHub main push  
2. GitHub Actions에서 build & docker image 생성  
3. Docker Hub 업로드  
4. EC2 Deploy Script 실행  
5. 신규 Green 서버 실행 → Health Check  
6. Nginx upstream 전환 (무중단 배포)  
7. Blue 서버 종료  

---

### 📊 아키텍처 다이어그램  
👉 이 자리에 Figma로 제작한 인프라 구조도 삽입

<br/><br/>

---

# 🛠 기술 스택

---

## ✔ Back-End (Spring Boot)

사용 기술 | 설명
---------|------
Java 11, Spring Boot 2.6.6 | 백엔드 메인 프레임워크
Spring Security + JWT | 인증/인가 및 토큰 기반 로그인
OAuth2 (Google/Kakao/Naver) | 소셜 로그인
MyBatis | SQL Mapper
MySQL (RDS) | 운영 DB
Spring Scheduler | 배송 자동상태 업데이트
SMTP Mail | 비밀번호 초기화 이메일 발송
Firebase Storage | 이미지 업로드
Docker / Nginx | 컨테이너 운영 및 Reverse Proxy
AWS EC2 / S3 / CloudFront / RDS / Route53 | 전체 인프라 구성

---

### 📦 Back-End Dependencies

- spring-boot-starter-web  
- spring-boot-starter-security  
- spring-boot-starter-oauth2-client  
- spring-boot-starter-validation  
- spring-boot-starter-aop  
- spring-boot-starter-mail  
- spring-boot-starter-thymeleaf  
- mybatis-spring-boot-starter  
- mysql-connector-java  
- jjwt-api / jjwt-impl / jjwt-jackson  
- lombok  

---

## ✔ Front-End (React)

사용 기술 | 설명
---------|------
React 18 | 전체 UI 개발
React Query | 서버 데이터 캐싱 및 상태관리
Recoil | 전역 상태관리
React Router DOM | 라우팅 처리
Axios | API 통신
Emotion CSS | 스타일링 및 반응형 UI
PortOne API | 카카오페이/간편결제
Kakao Maps SDK | 지도 기반 기능
Firebase Storage | 이미지 업로드
Recharts | 관리자 통계 시각화
Swiper / Modal / DatePicker / Quill | UI 요소

---

### 📦 Front-End Dependencies

- @emotion/react  
- @tanstack/react-query  
- @portone/browser-sdk  
- firebase  
- react-router-dom  
- react-icons  
- react-modal  
- react-quill  
- react-kakao-maps-sdk  
- react-datepicker  
- react-daum-postcode  
- react-circular-progressbar  
- swiper  
- recoil  
- recharts  
- axios  
- uuid  

<br/><br/>

---

# 📆 프로젝트 일정  
👉 일정표 이미지 삽입

<br/><br/>

---

# 📄 API 명세서 & ERD

### 🛰 API 명세서  
👉 Postman 링크 삽입

### 📐 ERD 설계도  
👉 ERD 이미지 삽입

<br/><br/>

---

# 📋 메뉴 구조도

### 사용자 메뉴 구조  
👉 이미지 삽입

### 관리자 메뉴 구조  
👉 이미지 삽입

<br/><br/>

---

# 🖥 화면 구현  

👉 GIF / 스크린샷 삽입

예시:
- 메인 → 프로젝트 상세 → 후원 흐름  
- 스토어 구매 → 결제 → 포인트 적립  
- 관리자 Dashboard 시각화  
- 지도 기반 기능  
- 전체 기능 실행 화면  

<br/><br/>

---

# 💡 프로젝트 회고

이번 GIVE 프로젝트는 단순히 기능을 만드는 것을 넘어서  
**실제 운영 가능한 하나의 서비스를 구축해보는 과정**이었습니다.

특히 AWS 기반 Blue/Green 무중단 배포와 Docker–Nginx 조합을  
직접 구현하면서 인프라와 DevOps에 대한 이해가 한층 깊어졌습니다.

또한 기부·펀딩·스토어처럼 서로 다른 도메인을 설계하면서  
데이터 모델링 및 API 구조의 중요성을 다시 느꼈습니다.

앞으로는 더 확장성과 유지보수성을 고려한 구조를 설계하고  
더 나은 사용자 경험을 위한 개발을 이어가고자 합니다.

---

