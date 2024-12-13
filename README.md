# 🌍 Minbro's Blog

여행 기록과 연간 회고를 공유하는 개인 블로그입니다.  
이 프로젝트는 [Docusaurus](https://docusaurus.io/)와 [Vercel](https://vercel.com/)을 활용해 구축되었으며, 
정적 사이트와 SSR(서버 사이드 렌더링)을 병행하였습니다.

---

## 📖 블로그 소개

- **여행 기록** : 국내외 여행에서 느꼈던 경험과 감상을 공유합니다.
- **연간 회고** : 한 해 동안 굵직했던 사건들을 간단하게 정리리해놓습니다.

---

## 🚀 프로젝트 정보

### 기술 스택
- **Framework**: [Docusaurus](https://docusaurus.io/)
- **Styling**: Custom CSS
- **Hosting**: [Vercel](https://vercel.com/) / GitHub Pages

### 주요 기능
- **문서 기반 블로그**: Docusaurus로 효율적인 콘텐츠 관리
- **SSR 지원**: Vercel을 통해 서버 사이드 렌더링 구현
- **빠른 배포**: GitHub Actions를 활용하여 `yarn deploy` 시 자동 배포

---

## 🌐 배포 링크

- **GitHub Pages**: [minbrotherkim.github.io/minbro-blog](https://minbrotherkim.github.io/minbro-blog/)
- **Vercel**: [minbro-blog.vercel.app/minbro-blog](https://minbro-blog.vercel.app/)

---

## 📂 프로젝트 구조

```plaintext
minbro-blog/
├── docs/                # 해외여행, 국내여행, 연간회고 문서
├── src/
│   ├── css/             # 커스텀 스타일
│   ├── components/      # 리액트 컴포넌트
├── static/              # 정적 리소스 (이미지, 폰트 등)
├── docusaurus.config.js # Docusaurus 설정 파일
└── vercel.json          # Vercel 배포 설정
