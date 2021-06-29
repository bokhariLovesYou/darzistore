// Hero Section With Testimonial
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import {
  StyledButton,
  StyledTestimonialCard,
  StyledTestimonialImageWrapper,
  StyledPlaceholderWrapper,
  StyledFancyWrapperHolder,
  StyledFancyWrapper,
} from "@/components/styledComponents/StyledElements";
import { StyledSection, StyledContentBox } from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingOne, StyledSubtitle } from "@/components/styledComponents/StyledTypography";

const SectionHero002 = () => {
  return (
    <StyledSection>
      <Container>
        <StyledContentBox maxWidth="1000">
          <StyledHeadingOne>One Reliable Stop for All Your Tailoring Needs!</StyledHeadingOne>
          <StyledSubtitle>
            One reliable stop for all your tailoring needs, we are your friendly community darzi
            providing professional quality service with speed and cost efficiency.
          </StyledSubtitle>
          <StyledContentBox className="mt-4">
            <a target="_blank" href="https://www.instagram.com/shop_top.official/">
              <StyledButton size="large" themeStyle="primary">
                View Us On Instagram
              </StyledButton>
            </a>
          </StyledContentBox>
        </StyledContentBox>
      </Container>
      <Container className="mt-5 pt-4 pt-lg-5">
        <StyledContentBox>
          <StyledFancyWrapperHolder>
            <StyledTestimonialCard>
              <StyledTestimonialImageWrapper>
                <StyledPlaceholderWrapper themeStyle="rounded">
                  <Image src="/mahum_zaidi.jpeg" alt="" layout="fill" objectFit="cover" />
                </StyledPlaceholderWrapper>
              </StyledTestimonialImageWrapper>
              <StyledContentBox className="text-center">
                <StyledSubtitle
                  dangerouslySetInnerHTML={{
                    __html:
                      "“Loved the stitching. I received my clothes on time. Everyone at Darzi store is very co-operative. I don't have to worry about getting my clothes on time and stitching any more.”",
                  }}
                />
                <StyledSubtitle className="mb-1 theme-text-primary">
                  <strong
                    dangerouslySetInnerHTML={{
                      __html: "Maham Zaidi",
                    }}
                  />
                </StyledSubtitle>
                {/* <StyledSubtitle
                  className="mb-0"
                  dangerouslySetInnerHTML={{
                    __html: "options.testimonialTitle",
                  }}
                /> */}
              </StyledContentBox>
            </StyledTestimonialCard>
            <StyledFancyWrapper themeStyle="gray" />
            <StyledFancyWrapper rotation="rotated_negative" themeStyle="primary_gradient" />
          </StyledFancyWrapperHolder>
        </StyledContentBox>
      </Container>
    </StyledSection>
  );
};

export default SectionHero002;
