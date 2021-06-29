import styled from "styled-components";

export const StyledLabel = styled.span`
  display: block;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StyledSubtitle = styled.p`
  ${(props) => (props.themeStyle === "gray" ? `color: ${props.theme.colors.gray}` : ``)};
  font-size: 1.125rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledHeadingOne = styled.h1`
  ${(props) => (props.themeStyle === "primary" ? `color: ${props.theme.colors.primary}` : ``)};
  ${(props) =>
    props.themeStyle === "small"
      ? `
  @media (min-width: 992px) {
    font-size: 2.25rem;
  }
  
  `
      : ``};
`;

export const StyledHeadingTwo = styled.h2``;
export const StyledHeadingThree = styled.h3``;

export const StyledHeadingFour = styled.h4``;

export const StyledHeadingFive = styled.h5``;

export const StyledHeadingSix = styled.h6``;
