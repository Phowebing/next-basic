# yarn 설치 및 활용

- npm 대비 패키지가 안정적이고 속도가 빠르다.
- `npm install -g yarn`
- `yarn --version`
- `yarn add 패키지 명`
- `yarn install` : node_modules를 설치

# Next.js

- [Next.js](https://nextjs.org/)
- [DOC](https://nextjs.org/docs)

## 1. 프로젝트 생성

- `npx create-next-app@13.5.6` (본 프로젝트)
- `npx create-next-app@latest` (최신버전)
- Yes : typeScript, /src, App router, ESLint
- No : TailWind, alias

```txt
Ok to proceed? (y)
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ...  Yes
√ Would you like to use Tailwind CSS? ...  No
√ Would you like to use `src/` directory? ...  Yes
√ Would you like to use App Router? (recommended) ...  Yes
? Would you like to customize the default import alias (@/*)? » No
```

## 2. 프로젝트 실행

- yarn dev 또는 npm dev
- localhost:3000 실행
- 참고로 SSR 방식
  : Server Side Rendering (Next)
  : JS가 작동하지 않아도 화면은 출력 (HTML/CSS)

- 참고로 CSR 방식
  : Client Side Rendering (React)
  : JS가 작동안되면 화면 출력 안됨
