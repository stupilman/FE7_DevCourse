// 1. 리액트의 스타일링 방법

// 1.1 전통적인 스타일링 방법
// 1.1.1 인라인 스타일
// 1.1.2 외부 스타일(글로벌 스타일)

// 1.2 CSS 모듈 (*.module.css)
// 1.2.1 ClassNames 패키지
// 1.2.1.1 'classnames', 'classnames/bind'

// 1.3 Tailwind CSS
// 1.3.1 유틸리티 퍼스트(Utility-Firtst) 방식으로 설계된 CSS 프레임워크
// 1.3.2 BootStrap 처럼 미리 만들어진 컴포넌트를 제공하는 대신, 테일윈드는 아주 작은
// 유틸리티 클래스를 제공한다.
// 1.3.3 유틸리티 퍼스트란?
// 1.3.3.1 작고 단일한 역할만 하는 CSS 클래스를 조합해서 UI를 만드는 방식을 말함.
// 1.3.3.2
// 일반 CSS:
// -> .btn-primary { backgrond-color: blue; color: white; padding: 10px; },
// -> <button class="btn-primary"></button>
// Tailwind CSS:
// <button class="bg-blue-500 text-white p-2.5"></button>

// 1.3.4 TailwindCSS-Merge
// twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'

// 1.4 CSS-IN-JS
// 1.4.1 CSS를 자바스크립트 코드 안에서 작성하고 사용하는 방식
// 1.4.2 유명한 CSS-IN-JS
// 1.4.2.1 styled-components
// 1.4.2.2 emotion

// 1.4.2.3 vanilla extract
// 1.4.2.3.1 제로-런-타임(zero-run-time)
// 빌드할 때 CSS를 생성하겠다

// 컴포넌트에 데이터를 전달하는 방법
// 컴포넌트에 데이터를 전달할 때는 properties(속성)을 사용합니다.
// 컴포넌트의 props.
