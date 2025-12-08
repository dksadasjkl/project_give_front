# 🎁 GIVE – Donation · Funding · Store Platform  
> 기부 · 펀딩 · 스토어 · 관리자 · Blue/Green 무중단 배포까지 포함한 풀스택 통합 플랫폼

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
기부(Donation), 펀딩(Funding), 스토어(Store) 기능을 하나의 통합 서비스로 제공하여  
사용자는 **후원 + 소비 + 리뷰 관리**,  
관리자는 **전체 운영(Admin)** 을 수행할 수 있도록 개발한 플랫폼입니다.

또한 AWS 기반의 **Blue/Green 무중단 배포 인프라**,  
Back-End 전반의 비즈니스 로직, Front-End UI/UX까지  
**실서비스 수준의 아키텍처 구축을 목표로 개발**하였습니다.

### 📆 제작 기간  
**2025.09 ~ 2025.11**

---

### 🔎 주요 기능 요약

#### ✔ 사용자 기능
- 기부/펀딩 프로젝트 조회·후원·검색·카테고리 필터  
- 스토어 상품 구매, 장바구니, 포인트 적립/사용  
- PortOne 결제(카카오페이·간편결제) 연동  
- Kakao 지도 기반 주변 기부처 조회  
- 프로젝트 댓글, 리뷰, 리뷰 신고 기능  
- 마이페이지: 후원/구매/배송 내역, 계정 관리  

#### ✔ 관리자 기능
- 기부/펀딩 CRUD 관리  
- 스토어 상품 / 주문 / 결제 / 배송 / 리뷰·신고 관리  
- Dashboard 통계(매출·기부·사용자·TOP5)  
- Scheduler 기반 배송 자동 상태 업데이트  

<br/><br/>

---

# 💼 작업 역할  
<h3>🛩 서창현 (Full-Stack Developer)</h3>

---

## 🔧 Back-End 개발

- Spring Security + JWT 기반 인증/인가 전면 개발  
- OAuth2(Google·Kakao·Naver) 소셜 로그인 연동  
- 기부/펀딩/스토어/주문/결제/배송 등 **전체 API 개발**  
- 프로젝트/댓글/리뷰/신고/통계·대시보드 API 개발  
- MyBatis 기반 SQL 설계 및 복잡 통계 쿼리 작성  
- SMTP 기반 비밀번호 초기화 메일 발송  
- Scheduler를 통한 배송 자동 상태 업데이트  
- Firebase Storage 이미지 업로드 API 개발  
- Spring Profiles 기반 Blue/Green 서버 분리 운영  
- AWS EC2 + Docker + Nginx 무중단 배포 인프라 구축  

---

## 🖥 Front-End 개발

- React 기반 전체 페이지 UI 개발  
- React Query 상태 관리 및 캐싱 최적화  
- Recoil 전역 상태 관리  
- PortOne 결제 기능 구현  
- Kakao Maps API 기반 지도 기능 개발  
- Firebase 이미지 업로드 UI 구축  
- 관리자/사용자 전체 페이지 UI/UX 구현  
- Recharts 기반 Dashboard 통계 시각화  
- Emotion CSS 기반 반응형 UI 설계  

<br/><br/>

---

# 📚 프로젝트 진행 현황

- 📌 **Front-End Repository**  
  https://github.com/dksadasjkl/project_give_front/commits/main  

- 📌 **Back-End Repository**  
  https://github.com/dksadasjkl/project_give_back/commits/main  

<br/><br/>

---

# ✔ 개발 컨벤션

### 🔗 Git Commit & Code Convention 링크  
- **Git Commit Convention:**  
  https://mangrove-comic-a17.notion.site/Git-Commit-Message-Convention-8e5410868b7d4bb6a9e61e976d638963  

- **Code Convention:**  
  https://mangrove-comic-a17.notion.site/Code-Convention-ed0bf7dc4b974f17acae503ba05efc24?pvs=74  

<br/><br/>

---

# 🔍 배포 구조

### 🚀 AWS 기반 Blue/Green 무중단 배포

**Infra 구성**
- AWS EC2 (Ubuntu 20.04 + Docker Engine)  
- Docker Blue(8001) / Green(8002) 서버 운영  
- Nginx Reverse Proxy  
- GitHub Actions CI/CD 자동 배포  
- CloudFront + S3 정적 호스팅  
- Route53 도메인 연결  
- RDS MySQL 운영 DB  

---

### 📦 배포 과정

1. GitHub main push  
2. GitHub Actions → Build & Docker Image 생성  
3. Docker Hub에 이미지 업로드  
4. EC2에서 Deploy Script 실행  
5. 신규 Green 서버 실행 후 Health Check  
6. Nginx Upstream 자동 전환(무중단)  
7. Old Blue 서버 종료  

---

### 📊 서비스 아키텍처  
<img width="1471" height="1027" alt="Image" src="https://github.com/user-attachments/assets/25643049-b0d4-4dce-9494-9015b0891bfe" />

<br/><br/>

---

# 🛠 기술 스택

## ✔ Back-End (Spring Boot)

사용 기술 | 설명
---------|------
Java 11 / Spring Boot | 백엔드 메인 프레임워크
Spring Security + JWT | 인증/인가 처리
OAuth2 | Google/Kakao/Naver 로그인
MyBatis | SQL Mapper
MySQL (AWS RDS) | 운영용 데이터베이스
Spring Scheduler | 배송 상태 자동 업데이트
SMTP Mail | 비밀번호 초기화 이메일
Firebase Storage | 이미지 업로드
Docker / Nginx | 컨테이너화 및 프록시 서버
AWS EC2 / S3 / CloudFront / RDS / Route53 | 인프라 구성  

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
React 18 | UI 개발
React Query | 서버 데이터 캐싱 및 상태관리
Recoil | 전역 상태관리
React Router DOM | 라우팅 처리
Axios | API 통신
Emotion CSS | 스타일링 및 반응형 UI
PortOne API | 결제 처리
Kakao Maps SDK | 지도 기능
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
<img width="1568" height="879" alt="Image" src="https://github.com/user-attachments/assets/64cb4939-b3a4-4d74-ab3c-29f4174e1821" />

<br/><br/>

---

# 📄 API 명세서 & ERD

### 🛰 API 명세서  
[Postman 문서 보기](https://documenter.getpostman.com/view/32355208/2sB3dMxWwB)

### 📐 ERD 설계도  

**유저**
![Image](https://github.com/user-attachments/assets/d38a86d3-c484-4ad5-b141-4e5b3dd63766)

**기부/펀딩**
![Image](https://github.com/user-attachments/assets/28ebb952-3994-4514-bbc8-2b815c7bfc62)

**주문/결제**
![Image](https://github.com/user-attachments/assets/50d41869-2bdd-411c-97b8-3131046b81b5)

**스토어(공감가게)**
![Image](https://github.com/user-attachments/assets/c7096a6a-dcf2-4355-9801-c07c4a31f810)

<br/><br/>

---

# 📋 메뉴 구조도

### 사용자 + 관리자 메뉴 구조  
<img width="2052" height="1066" alt="Image" src="https://github.com/user-attachments/assets/5db7ca5c-7db6-45d0-ad94-e8d2885ef5e0" />

<br/><br/>

---

# 🖥 화면 구현  

👉 GIF / 스크린샷 예시 (추가 예정)

예시 흐름:
- 메인 → 프로젝트 상세 → 후원하기  
- 스토어 상품 선택 → 장바구니 → 결제 → 포인트 적립  
- Kakao 지도 기반 기부처 위치 조회  
- 관리자 Dashboard 통계 화면  
- 리뷰 작성 및 신고 처리 화면  

<br/><br/>

---

# 💡 프로젝트 회고

이번 GIVE 프로젝트는 **단순 기능 구현을 넘어 실제 서비스 수준의 설계와 운영 경험을 쌓는 과정**이었습니다.  
기부·펀딩·스토어라는 서로 다른 도메인을 하나의 플랫폼으로 통합하면서  
**도메인 모델링, API 구조 설계, 데이터 정합성 유지**의 중요성을 깊이 체감했습니다.

특히 AWS 기반의 **Blue/Green 무중단 배포 인프라**를 직접 구성하며  
배포 자동화, 트래픽 전환, 장애 대응 등 실무에 가까운 DevOps 경험을 할 수 있었습니다.

또한 Front-End에서는 React Query를 통한 캐싱 전략,  
Firebase Storage 이미지 처리, 결제 연동 등 사용자 경험을 고려한 기능들을 구현하였습니다.

이번 프로젝트를 통해  
**확장성 · 유지보수성 · 안정성을 고려한 아키텍처**가 왜 중요한지 배웠고,  
앞으로는 더 효율적인 구조 설계와 사용자 경험 개선을 위해 꾸준히 발전해 나가고자 합니다.
