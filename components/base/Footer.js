import React from "react";
import { Container } from "react-bootstrap";
import {
  StyledFooter,
  StyledFooterWrapper,
  StyledFooterText,
} from "@/components/styledComponents/StyledBase";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <StyledFooterWrapper>
            <StyledFooterText Gray>
              © Copyright Darzi Store {new Date().getFullYear()}
            </StyledFooterText>
          </StyledFooterWrapper>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
