import styled from "styled-components";
import { darken } from "polished";
import { theme } from "../../styles/ThemeConfig.js";

// ***Elements
export const StyledButton = styled.button`
  padding: 0.6rem 1.25rem;
  width: auto;
  cursor: pointer;
  color: #fff;
  border: none;
  outline: none;
  border-radius: ${theme.defaultBorderRadius};
  font-weight: 600;
  background-color: ${(props) =>
    props.themeStyle === "secondary" ? props.theme.colors.secondary : props.theme.colors.primary};
  transition: 0.2s ease;
  &:hover {
    background-color: ${(props) =>
      props.themeStyle === "secondary"
        ? darken(props.theme.hoverIntensity, props.theme.colors.secondary)
        : darken(props.theme.hoverIntensity, props.theme.colors.primary)};
  }
  ${(props) =>
    props.size === "large"
      ? `
        font-size: 1rem;
        @media (min-width: 768px) {
            font-size: 1.35rem;
          }
      `
      : ``};
  ${(props) =>
    props.state === "disabled"
      ? `
        transition: 0.2s ease;
        background-color: #888;
        pointer-events: none;
        color: #fff;
      `
      : ``};
`;

export const StyledLinkButton = styled.button`
  width: auto;
  cursor: pointer;
  color: inherit;
  background: none;
  font-weight: 600;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  transition: 0.2s ease;
  font-size: inherit;
  display: flex;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: 0.2s ease;
  }
  svg {
    margin-right: 0.25rem;
  }
`;

// App Elements

// Form

export const StyledFormWrapper = styled.div``;

export const StyledFieldWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-items: center;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const StyledField = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    width: ${(props) => (props.themeStyle === "two-column" ? "49%" : "100%")};
    margin-bottom: 0;
  }
`;

export const StyledInput = styled.input`
  padding: 9px 10px;
  border-radius: 3px;
  border: 1px solid #cbd6e2;
  transition: all 0.15s ease-out;
  background-color: #f5f8fa;
  color: #000;
  display: block;
  line-height: 22px;
  text-align: left;
  vertical-align: middle;
  width: 100%;
  font-weight: 700;
  font-size: ${(props) => (props.themeStyle === "large" ? "1.15rem;" : "1rem")};
  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 4px 1px rgb(129 140 248 / 30%),
      0 0 0 1px ${(props) => props.theme.colors.primary};
    outline: 0;
  }
`;

export const StyledFancyWrapperHolder = styled.div`
  min-height: 250px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    min-height: 400px;
  }
`;

export const StyledTestimonialCard = styled.div`
  z-index: 1;
  position: relative;
  width: 100%;
  margin: 4rem 0;
  max-width: 700px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 1.5rem;
  @media (min-width: 768px) {
    padding: 3rem;
  }
  border-radius: 1.5rem;
  box-shadow: ${(props) => props.theme.primaryBoxShadow};
`;

export const StyledTestimonialImageWrapper = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  img {
    border-radius: 100px;
  }
`;

export const StyledCardandContentImageWrapper = styled.div`
  position: relative;
  z-index: 1;
  height: 400px;
  margin-left: -15px;
  margin-right: -15px;
  margin-top: -1.33210321rem;
  img {
    border-radius: 1.25rem;
  }
  @media (min-width: 768px) {
    margin-left: -35px;
    margin-right: -35px;
    height: 500px;
  }
  @media (min-width: 992px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const StyledPlaceholderWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  ${(props) => (props.themeStyle == "lightly_rounded" ? `border-radius: 1.25rem;` : ``)};
  ${(props) => (props.themeStyle == "rounded" ? `border-radius: 100px;` : ``)};
  transition: 0.2s ease;
`;

export const StyledFancyWrapper = styled.div`
  ${(props) =>
    props.themeStyle == "white"
      ? `
      background-color: ${props.theme.colors.white};
  `
      : ``};

  ${(props) =>
    props.themeStyle == "gray"
      ? `
        background-color: ${props.theme.colors.lightGray};
    `
      : ``};

  ${(props) =>
    props.themeStyle == "primary_gradient"
      ? `
        background-image: ${props.theme.colors.primaryGradient};
        `
      : ``};

  ${(props) =>
    props.themeStyle == "purple_gradient"
      ? `
          background-image: ${props.theme.colors.purpleGradient};
        `
      : ``};

  ${(props) =>
    props.themeStyle == "red_gradient"
      ? `
          background-image: ${props.theme.colors.redGradient};
        `
      : ``};

  ${(props) =>
    props.themeStyle == "orange_gradient"
      ? `
          background-image: ${props.theme.colors.orangeGradient};
        `
      : ``};

  ${(props) =>
    props.themeStyle == "green_gradient"
      ? `
          background-image: ${props.theme.colors.greenGradient};
        `
      : ``};

  ${(props) =>
    props.rotation == "rotated_negative"
      ? `
          transform: rotate(-5deg);
        `
      : ``};

  ${(props) =>
    props.rotation == "rotated_positive"
      ? `
          transform: rotate(5deg);
        `
      : ``};
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const StyledGradientTestimonialCard = styled.div`
  box-shadow: 1px 0px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  border-radius: 0.75rem;
  ${(props) => (props.rotation == "rotated_left" ? `transform: rotate(3deg)` : ``)};
  ${(props) => (props.rotation == "rotated_right" ? `transform: rotate(-3deg)` : ``)};

  ${(props) =>
    props.themeStyle == "purple_gradient"
      ? `
    .gradient-enforced {
      background-image: ${props.theme.colors.purpleGradient}
    }
    figure {
      color: ${props.theme.colors.purple}
    }
    `
      : ``}

  ${(props) =>
    props.themeStyle == "primary_gradient"
      ? `
        .gradient-enforced {
          background-image: ${props.theme.colors.primaryGradient}
        }
        figure {
          color: ${props.theme.colors.primary}
        }
        `
      : ``}

  ${(props) =>
    props.themeStyle == "red_gradient"
      ? `
        .gradient-enforced {
          background-image: ${props.theme.colors.redGradient}
        }
        figure {
          color: ${props.theme.colors.red}
        }`
      : ``}
  
  ${(props) =>
    props.themeStyle == "orange_gradient"
      ? `
        .gradient-enforced {
          background-image: ${props.theme.colors.orangeGradient}
        }
        figure {
          color: ${props.theme.colors.orange}
        }
        `
      : ``}

  ${(props) =>
    props.themeStyle == "green_gradient"
      ? `
        .gradient-enforced {
          background-image: ${props.theme.colors.greenGradient}
        }
        figure {
          color: ${props.theme.colors.green}
        }
        `
      : ``}
`;

export const StyledGradientTestimonialIcon = styled.figure`
  margin-bottom: 2rem;
  svg {
    opacity: 0.4;
  }
`;

export const StyledGradientTestimonialFooter = styled.div`
  padding: 1rem;
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
`;

export const StyledGradientTestimonialFooterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledGradientTestimonialImageWrapper = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  margin-right: 1rem;
  img {
    border-radius: 100px;
    border: 2.5px solid #fff;
  }
`;

export const StyledGradientTestimonialName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StyledGradientTestimonialTitle = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0;
`;

export const StyledCard = styled.div`
  ${(props) =>
    props.themeStyle == "white"
      ? `
    background-color: ${props.theme.colors.white};
`
      : ``};

  ${(props) =>
    props.themeStyle == "gray"
      ? `
      background-color: ${props.theme.eee};
  `
      : ``};

  ${(props) =>
    props.themeStyle == "primary_gradient"
      ? `
      background-image: ${props.theme.primaryGradient};
      `
      : ``};

  ${(props) =>
    props.themeStyle == "purple_gradient"
      ? `
        background-image: ${props.theme.purpleGradient};
      `
      : ``};

  ${(props) =>
    props.themeStyle == "red_gradient"
      ? `
        background-image: ${props.theme.redGradient};
      `
      : ``};

  ${(props) =>
    props.themeStyle == "orange_gradient"
      ? `
        background-image: ${props.theme.orangeGradient};
      `
      : ``};

  ${(props) =>
    props.themeStyle == "green_gradient"
      ? `
        background-image: ${props.theme.greenGradient};
      `
      : ``};

  ${(props) =>
    props.rotation == "rotated_negative"
      ? `
        transform: rotate(-5deg);
      `
      : ``};

  ${(props) =>
    props.rotation == "rotated_positive"
      ? `
        transform: rotate(5deg);
      `
      : ``};
  z-index: 1;
  position: relative;
  padding: 2.5rem 1.7321082rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  @media (min-width: 992px) {
    padding: 2.5rem;
    z-index: 2;
  }
  ${(props) =>
    props.push == "pushed_right"
      ? `
        right: -0.5rem;
        @media (min-width: 992px) {
          right: -2rem;
        }
      `
      : ``};
  ${(props) =>
    props.push == "pushed_left"
      ? `
      left: -1rem;
      @media (min-width: 992px) {
            left: -2rem;
      }
          `
      : ``};
`;
