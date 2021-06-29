// Feature Section Two Column with Image
import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import { StyledButton } from "@/components/styledComponents/StyledElements";
import { StyledSection, StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingTwo, StyledSubtitle } from "@/components/styledComponents/StyledTypography";

const SectionFeature003 = () => {
  return (
    <>
      <StyledSection className="theme-section-white">
        <Container>
          <StyledContentBox
            boxedStyle="boxed"
            className="text-center mw-1000 ml-auto mr-auto"
            themeStyle="green_gradient"
          >
            <StyledHeadingTwo className="text-white">
              Ready to Join The On Demand Tailor Experience?
            </StyledHeadingTwo>
            <StyledContentBox className="mw-700 ml-auto mr-auto">
              <StyledSubtitle className="text-white">
                Start your super-fast project with us or take your existing product to the next
                level.
              </StyledSubtitle>
            </StyledContentBox>
            <a target="_blank" href="https://www.facebook.com/darzi.store">
              <StyledButton size="large" themeStyle="primary">
                Get Started
              </StyledButton>
            </a>
          </StyledContentBox>
        </Container>
      </StyledSection>
    </>
  );
};

export default SectionFeature003;
