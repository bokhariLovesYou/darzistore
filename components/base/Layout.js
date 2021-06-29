import React from "react";
import styled from "styled-components";
// Components
import Header from "@/components/base/Header";
import Footer from "@/components/base/Footer";

const StyledMain = styled.main`
  padding-top: 78px;
  min-height: 97vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
