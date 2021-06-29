import styled from "styled-components";

// ***Wrappers

export const StyledContentBox = styled.div`
  position: relative;
  ${(props) => (props.maxWidth == "500" ? `max-width: 500px;` : ``)};
  ${(props) => (props.maxWidth == "600" ? `max-width: 600px;` : ``)};
  ${(props) => (props.maxWidth == "700" ? `max-width: 700px;` : ``)};
  ${(props) => (props.maxWidth == "800" ? `max-width: 800px;` : ``)};
  ${(props) => (props.maxWidth == "900" ? `max-width: 900px;` : ``)};
  ${(props) => (props.maxWidth == "1000" ? `max-width: 1000px;` : ``)};
  ${(props) => (props.maxWidth == "1100" ? `max-width: 1100px;` : ``)};
  ${(props) => (props.boxedStyle == "boxed" ? `padding: 4rem 2.5rem; border-radius: 1.5rem;` : ``)};
  ${(props) => (props.boxedStyle == "boxed_small" ? `padding: 2rem; border-radius: 1.5rem;` : ``)};
  ${(props) =>
    props.themeStyle == "white" ? `background-color: ${props.theme.colors.white}` : ``};
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
`;

export const StyledSection = styled.section`
  padding: 2.832187rem 0;
  @media (min-width: 768px) {
    padding: 5.23312rem 0;
  }
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.themeStyle == "large"
      ? `padding: 4rem 0; @media (min-width: 768px) {padding: 7rem 0;}`
      : ``};
  ${(props) =>
    props.themeStyle == "small"
      ? `padding: 2rem 0; @media (min-width: 768px) {padding: 3rem 0;}`
      : ``};
  ${(props) => (props.themeStyle == "removePadding" ? `padding: 0 !important;` : ``)};
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  height: 400px;
  ${(props) => (props.maxHeight == "300" ? `height: 300px;` : ``)};
  ${(props) => (props.maxHeight == "400" ? `height: 400px;` : ``)};
  ${(props) => (props.maxHeight == "500" ? `height: 500px;` : ``)};
  ${(props) => (props.maxHeight == "600" ? `height: 600px;` : ``)};
  ${(props) => (props.maxHeight == "700" ? `height: 700px;` : ``)};
  ${(props) => (props.maxHeight == "800" ? `height: 800px;` : ``)};
  ${(props) => (props.maxHeight == "900" ? `height: 900px;` : ``)};
  ${(props) => (props.maxHeight == "1000" ? `height: 1000px;` : ``)};
  ${(props) => (props.maxHeight == "1100" ? `height: 1100px;` : ``)};
`;

// App
export const StyledAppWrapper = styled.section`
  margin: 2rem 0;
`;

export const StyledAppContent = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;
`;

export const StyledAppBlock = styled.div`
  padding: 1.25rem 0;
  overflow: hidden;
  position: relative;
`;

export const StyledAsideWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  max-width: 350px;
`;

export const StyledViewPortWrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;

export const StyledAside = styled.aside`
  width: 100%;
  height: 80vh;
  background-color: #f7f9fb;
  border-radius: 15px;
  border: 2px solid #eee;
  padding-left: 30px;
  padding-right: 30px;
`;

export const StyledViewPort = styled.div`
  width: 100%;
  background-color: #f7f9fb;
  border-radius: 15px;
  padding-left: 30px;
  padding-right: 30px;
  height: 80vh;
  overflow-y: scroll;
  border: 2px solid #eee;
`;

export const StyledHorizontalFlexWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledHorizontalFlexColumn = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  flex: 0 0 auto;
  padding: 2rem;
`;

export const StyledHorizontalFlexChild = styled.div`
  max-width: 560px;
`;

export const StyledContentandCardFlexWrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

export const StyledContentandCardColumn = styled.div`
  width: 100%;
  max-width: 100%;
  ${(props) =>
    props.width == "sixty"
      ? `
        @media (min-width: 992px) {
          max-width: 60%;
        }
      `
      : ``};
  ${(props) =>
    props.width == "fourty"
      ? `
            @media (min-width: 992px) {
              max-width: 40%;
            }
          `
      : ``};
  ${(props) =>
    props.width == "fifty"
      ? `
            @media (min-width: 992px) {
              max-width: 50%;
            }
          `
      : ``};
`;
