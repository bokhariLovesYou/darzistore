import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderColumn,
  StyledLogoWrapper,
  StyledLogo,
  StyledLogoSpan,
} from "@/components/styledComponents/StyledBase";

import { StyledButton } from "@/components/styledComponents/StyledElements";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <StyledHeaderWrapper>
            <StyledHeaderColumn>
              <Link href="/">
                <StyledLogoWrapper>
                  <StyledLogo>
                    <StyledLogoSpan>ds.</StyledLogoSpan>
                  </StyledLogo>
                </StyledLogoWrapper>
              </Link>
            </StyledHeaderColumn>
            <StyledHeaderColumn>
              <a target="_blank" href="https://www.facebook.com/darzi.store/">
                <StyledButton themeStyle="primary">View Us On Facebook</StyledButton>
              </a>
            </StyledHeaderColumn>
          </StyledHeaderWrapper>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
