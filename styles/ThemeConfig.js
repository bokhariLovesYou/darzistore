import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    primary: "#818cf8",
    secondary: "#111827",
    headingColor: "#111827",
    bodyColor: "#4b505a",
    purple: "#a855f7",
    red: "#ec4899",
    orange: "#fb923c",
    green: "#4ade80",
    dark: "#111827",
    white: "#fff",
    lightGray: "#eee",
    silver: "#6b7280",
    gray: "#6b7280",
    primaryGradient: "linear-gradient(140deg, rgba(129,140,248,1) 0%, rgba(14,165,233,1) 100%)",
    purpleGradient: "linear-gradient(140deg, #a855f7 0%, #6366f1 100%)",
    redGradient: "linear-gradient(140deg, #ec4899 0%, #f43f5e 100%)",
    orangeGradient: "linear-gradient(140deg, #fb923c 0%, #db2777 100%)",
    greenGradient: "linear-gradient(140deg, #4ade80 0%, #06b6d4 100%)",
    sectionLightPrimary: "#06b6d40f",
    sectionLightPurple: "#fbf7ff",
    sectionLightGreen: "#f8fffb",
    sectionWhite: "#fff",
  },
  hoverIntensity: 0.1,
  sectionWhite: "#fff",
  sectionLightPrimary: "#06b6d40f",
  defaultBorderRadius: "0.25rem",
  primaryBoxShadow: "0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)",
};

export const GlobalStyle = createGlobalStyle`
body,
html {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial,
    sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
  @media (min-width: 768px) {
    overflow-x: hidden;
  }
  color: ${theme.colors.bodyColor};
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 800;
  color: ${theme.colors.headingColor};
}

button,
input,
select,
textarea {
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

.container {
  @media (min-width: 1300px) {
    max-width: 1216px;
  }
}

.text-inverted {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .h1,
  .h2,
  .h3,
  .h4,
  .h5,
  .h6,
  p,
  ul li,
  ol li,
  blockquote {
    color: #fff;
  }
  color: #fff;
}

h1,
.h1 {
  @media (min-width: 992px) {
    font-size: 3.75rem;
  }
}

h2,
.h2 {
  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
}

h3,
.h3 {
  @media (min-width: 992px) {
    font-size: 2rem;
  }
}

h4,
.h4 {
  @media (min-width: 992px) {
    font-size: 1.75rem;
  }
}

h5,
.h5 {
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
}

h6,
.h6 {
  @media (min-width: 992px) {
    font-size: 1.25rem;
  }
}

h1,h2,h3,h4,h5,h6 {
  font-weight: 800;
  letter-spacing: -.025em;
  margin-bottom: 1rem;
}

.step {
  &::before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    max-width: 0px;
    transition: all 0.4s ease 0.1s;
    height: 3px;
    opacity: 0.7;
    background-color: ${theme.colors.primary};
  }
  &__one {
    &:before {
    max-width: 25%;
    }
  }
  &__two {
    &:before {
    max-width: 50%;
    }
  }
  &__three {
    &:before {
    max-width: 75%;
    }
  }
}

.c-select {
  input {
    font-weight: 700;
  }
}

// Utils

.mh-90vh {
  min-height: 90vh;
}

.mw-500 {
  max-width: 500px;
}

.mw-560 {
  max-width: 560px;
}

.mw-600 {
  max-width: 600px;
}

.mw-700 {
  max-width: 700px;
}

.mw-800 {
  max-width: 800px;
}

.mw-900 {
  max-width: 900px;
}

.mw-1000 {
  max-width: 1000px;
}

.fill-current {
  fill: currentColor;
}

.mh-negative {
  @media (max-width: 576px) {
    margin-left: -15px;
    margin-right: -15px;
  }
}

.w-sm-auto {
  @media (min-width: 576px) {
    width: auto !important;
  }
}

.restore-padding-sm {
  @media (min-width: 576px) {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }
}

// Theme

.theme-section-light-primary {
  background-color: ${theme.colors.sectionLightPrimary}
}

.theme-section-light-purple {
  background-color: ${theme.colors.sectionLightPurple}
}

.theme-section-light-green {
  background-color: ${theme.colors.sectionLightGreen}
}

.theme-section-white {
  background-color: ${theme.colors.sectionWhite}
}

.theme-text-primary {
  color: ${theme.colors.primary};
}

.theme-text-light-gray {
  color: ${theme.colors.lightGray};
}

.theme-text-gray {
  color: ${theme.colors.gray};
}

.theme-text-purple {
  color: ${theme.colors.purple}
}

.theme-text-orange {
  color: ${theme.colors.orange}
}

.theme-text-dark {
  color: ${theme.colors.dark}
}

.theme-text-green {
  color: ${theme.colors.green}
}

.theme-text-red {
  color: ${theme.colors.red}
}

.theme-text-silver {
  color: ${theme.colors.silver}
}



`;
