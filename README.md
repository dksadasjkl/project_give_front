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

<a href="https://mangrove-comic-a17.notion.site/Git-Commit-Message-Convention-8e5410868b7d4bb6a9e61e976d638963">📍 커밋 컨벤션</a>

<div>
<pre background-color="#dbdbdb">
<p>
1. 커밋 유형 지정
    - 커밋 유형은 영어 대문자로 작성하기
    - 커밋 유형
    - Feat : 새로운 기능 추가
    - Fix : 버그 수정
    - Docs : 문서 수정
    - Style : 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우
    - Refactor : 코드 리팩토링
    - Test : 테스트 코드, 리팩토링 테스트 코드 추가
    - Chore : 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore
    - Design : CSS 등 사용자 UI 디자인 변경
    - Comment : 필요한 주석 추가 및 변경
    - Rename : 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
    - Remove : 파일을 삭제하는 작업만 수행한 경우
    - !BREAKING CHANGE : 커다란 API 변경의 경우
    - !HOTFIX : 급하게 치명적인 버그를 고쳐야 하는 경우

🧾 2. 제목과 본문을 빈행으로 분리 - 커밋 유형 이후 제목과 본문은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것 - 본문에는 변경한 내용과 이유 설명 (어떻게보다는 무엇 & 왜를 설명)

#️⃣ 3. 제목 첫 글자는 대문자로, 끝에는 . 금지

↩️ 4. 제목은 영문 기준 50자 이내로 할 것

⏺️ 5. 자신의 코드가 직관적으로 바로 파악할 수 있다고 생각하지 말자

👆 6. 여러가지 항목이 있다면 글머리 기호를 통해 가독성 높이기

</p>
</pre>
</div>

<h3>
<a href="https://mangrove-comic-a17.notion.site/Code-Convention-ed0bf7dc4b974f17acae503ba05efc24?pvs=74">📍 코드 컨벤션</a>
</h3>
<div>
<pre>
<p>
🛼 문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.

🐫 문장이 종료될 때는 세미콜론을 붙여줍니다.

💄 함수명, 변수명은 카멜케이스로 작성합니다.

🐫 가독성을 위해 한 줄에 하나의 문장만 작성합니다.

❓ 주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.

🔠 연산자 사이에는 공백을 추가하여 가독성을 높입니다.

🔢 콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.

💬 생성자 함수명의 맨 앞글자는 대문자로 합니다.

🔚 var는 절대 사용하지 않는다. (const를 let 보다 위에 선언한다)

👆 const와 let은 사용 시점에 선언 및 할당을 한다. (함수는 변수 선언문 다음에 오도록한다.)

✏️ 외부 모듈과 내부 모듈을 구분하여 사용한다.

🧮 배열과 객체는 반드시 리터럴로 선언한다. (new 사용 X)

📠 배열 복사 시 반복문을 사용하지 않는다.

😎 배열의 시작 괄호 안에 요소가 줄 바꿈으로 시작되었다면 끝 괄호 이전에도 일관된 줄 바꿈 해야한다. (일관되게 모두 줄 바꿈을 해주어야 한다.)

🧶 객체의 프로퍼티가 1개인 경우에만 한 줄 정의를 허용하며, 2개 이상일 경우에는 개행을 강제한다. (객체 리터럴 정의 시 콜론 앞은 공백을 허용하지 않음 콜론 뒤는 항상 공백을 강제)

🧂 메서드 문법 사용 시 메서드 사이에 개행을 추가한다.

🌭 화살표 함수의 파라미터가 하나이면 괄호를 생략한다.

🍳 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🧇 변수 등을 조합해서 문자열을 생성하는 경우 템플릿 문자열을 이용한다.

🥞 wildcard import는 사용하지 않는다. (import문으로부터 직접 export하지 않는다.)

🥖 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.

🥯 switch-case 사용 시 첫 번째 case문을 제외하고 case문 사용 이전에 개행한다.

🥐 삼중 등호 연산자인 ===, !==만 사용한다.

🚐 반복문 사용은 일반화된 순회 메서드 사용을 권장한다.

🚑 람다함수 안에서 밖에 있는 변수를 사용하지 말라

🚚 코드 블럭 주석 처리를 위해서는 한 줄 주석을 사용한다. 여러 줄 주석을 작성할 때는 \*의 들여쓰기를 맞춘다. 주석의 첫 줄과 마지막 줄은 비워둠

💫 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.

</p>
</pre>
</div>


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
[배포 아키텍처.pdf](https://github.com/user-attachments/files/24014210/default.pdf)

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
[기부 프로젝트 일정.pdf](https://github.com/user-attachments/files/24014208/default.pdf)

<br/><br/>

---

# 📄 API 명세서 & ERD

### 🛰 API 명세서  
[Postman 링크 삽입](https://documenter.getpostman.com/view/32355208/2sB3dMxWwB)

### 📐 ERD 설계도  
유저
![Image](https://github.com/user-attachments/assets/a56d8c6d-bf84-4b4b-b422-a36fdd830fef)
기부/펀딩
![Image](https://github.com/user-attachments/assets/28ebb952-3994-4514-bbc8-2b815c7bfc62)
주문/결제
![Image](https://github.com/user-attachments/assets/50d41869-2bdd-411c-97b8-3131046b81b5)
스토어(공감가게)
![Image](https://github.com/user-attachments/assets/c7096a6a-dcf2-4355-9801-c07c4a31f810)

<br/><br/>

---

# 📋 메뉴 구조도

### 사용자 + 관리자 메뉴 구조  
[GIVE_메뉴 구조도.pdf](https://github.com/user-attachments/files/24014206/GIVE_.pdf)

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

