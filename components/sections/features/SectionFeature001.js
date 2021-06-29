// Feature Section With Floating Testimonials
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import {
  StyledGradientTestimonialImageWrapper,
  StyledGradientTestimonialCard,
  StyledGradientTestimonialIcon,
  StyledGradientTestimonialFooter,
  StyledGradientTestimonialFooterWrapper,
  StyledGradientTestimonialName,
  StyledGradientTestimonialTitle,
} from "@/components/styledComponents/StyledElements";
import {
  StyledSection,
  StyledContentBox,
  StyledHorizontalFlexWrapper,
  StyledHorizontalFlexColumn,
} from "@/components/styledComponents/StyledWrappers";
import { StyledHeadingTwo, StyledSubtitle } from "@/components/styledComponents/StyledTypography";

const SectionFeature001 = () => {
  return (
    <StyledSection>
      <Container>
        <StyledContentBox className="mw-1100 ml-auto mr-auto text-center">
          <StyledHeadingTwo
            dangerouslySetInnerHTML={{ __html: "“Best practices” don’t actually work." }}
          />
        </StyledContentBox>
        <StyledContentBox className="mw-1000 ml-auto mr-auto text-center">
          <StyledSubtitle
            className="theme-text-silver"
            dangerouslySetInnerHTML={{
              __html:
                "I’ve written a few thousand words on why traditional “semantic class names” are the reason CSS is hard to maintain, but the truth is you’re never going to believe me until you actually try it. If you can suppress the urge to retch long enough to give it a chance, I really think you'll wonder how you ever worked with CSS any other way.",
            }}
          />
        </StyledContentBox>
      </Container>
      <StyledHorizontalFlexWrapper className="mt-md-5 pt-md-4">
        <StyledHorizontalFlexColumn>
          <StyledContentBox className="mw-560">
            <StyledGradientTestimonialCard themeStyle="purple_gradient" rotation="rotated_right">
              <StyledContentBox className="px-4 py-4">
                <StyledGradientTestimonialIcon>
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                  </svg>
                </StyledGradientTestimonialIcon>
                <StyledSubtitle
                  className="theme-text-gray"
                  dangerouslySetInnerHTML={{
                    __html: "Great quality and fitting of products and speedy delivery!",
                  }}
                />
              </StyledContentBox>
              <StyledGradientTestimonialFooter className="text-inverted gradient-enforced">
                <StyledGradientTestimonialFooterWrapper>
                  <StyledGradientTestimonialImageWrapper>
                    <Image
                      src="/ameera_malek.jpeg"
                      alt="Ameera Malek"
                      unoptimized
                      layout="fill"
                      objectFit="cover"
                    />
                  </StyledGradientTestimonialImageWrapper>
                  <StyledContentBox>
                    <StyledGradientTestimonialName
                      dangerouslySetInnerHTML={{ __html: "Ameera Malek" }}
                    />
                    <StyledGradientTestimonialTitle
                      dangerouslySetInnerHTML={{ __html: "DHA Lahore" }}
                    />
                  </StyledContentBox>
                </StyledGradientTestimonialFooterWrapper>
              </StyledGradientTestimonialFooter>
            </StyledGradientTestimonialCard>
          </StyledContentBox>
        </StyledHorizontalFlexColumn>

        <StyledHorizontalFlexColumn>
          <StyledContentBox className="mw-560">
            <StyledGradientTestimonialCard themeStyle="green_gradient" rotation="rotated_left">
              <StyledContentBox className="px-4 py-4">
                <StyledGradientTestimonialIcon>
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                  </svg>
                </StyledGradientTestimonialIcon>
                <StyledSubtitle
                  dangerouslySetInnerHTML={{
                    __html:
                      "Glad I choose Darzi Store for my Eid dress. Must appreciate the support I received from their team. Would definitely recommend to others",
                  }}
                />
              </StyledContentBox>
              <StyledGradientTestimonialFooter className="text-inverted gradient-enforced">
                <StyledGradientTestimonialFooterWrapper>
                  <StyledGradientTestimonialImageWrapper>
                    <Image
                      src="/rabiya_amir.jpeg"
                      alt="Rabiya Amir"
                      unoptimized
                      layout="fill"
                      objectFit="cover"
                    />
                  </StyledGradientTestimonialImageWrapper>
                  <StyledContentBox>
                    <StyledGradientTestimonialName
                      dangerouslySetInnerHTML={{ __html: "Rabiya Amir" }}
                    />
                    <StyledGradientTestimonialTitle
                      dangerouslySetInnerHTML={{ __html: "DHA Lahore" }}
                    />
                  </StyledContentBox>
                </StyledGradientTestimonialFooterWrapper>
              </StyledGradientTestimonialFooter>
            </StyledGradientTestimonialCard>
          </StyledContentBox>
        </StyledHorizontalFlexColumn>

        <StyledHorizontalFlexColumn>
          <StyledContentBox className="mw-560">
            <StyledGradientTestimonialCard themeStyle="red_gradient" rotation="rotated_right">
              <StyledContentBox className="px-4 py-4">
                <StyledGradientTestimonialIcon>
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                  </svg>
                </StyledGradientTestimonialIcon>
                <StyledSubtitle
                  dangerouslySetInnerHTML={{
                    __html: "The stitching was perfect and I received my order on time",
                  }}
                />
              </StyledContentBox>
              <StyledGradientTestimonialFooter className="text-inverted gradient-enforced">
                <StyledGradientTestimonialFooterWrapper>
                  <StyledGradientTestimonialImageWrapper>
                    <Image
                      src="/zainab_asghar.jpeg"
                      alt="Zainab Asghar"
                      unoptimized
                      layout="fill"
                      objectFit="cover"
                    />
                  </StyledGradientTestimonialImageWrapper>
                  <StyledContentBox>
                    <StyledGradientTestimonialName
                      dangerouslySetInnerHTML={{ __html: "Zainab Asghar" }}
                    />
                    <StyledGradientTestimonialTitle
                      dangerouslySetInnerHTML={{ __html: "Model Town Lahore" }}
                    />
                  </StyledContentBox>
                </StyledGradientTestimonialFooterWrapper>
              </StyledGradientTestimonialFooter>
            </StyledGradientTestimonialCard>
          </StyledContentBox>
        </StyledHorizontalFlexColumn>

        <StyledHorizontalFlexColumn>
          <StyledContentBox className="mw-560">
            <StyledGradientTestimonialCard themeStyle="primary_gradient" rotation="rotated_left">
              <StyledContentBox className="px-4 py-4">
                <StyledGradientTestimonialIcon>
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                  </svg>
                </StyledGradientTestimonialIcon>
                <StyledSubtitle
                  dangerouslySetInnerHTML={{
                    __html:
                      "Just got my dresses..and im highly satisfied with the stiching and everythingg. The trousers are stiched to perfection. Much appreciated",
                  }}
                />
              </StyledContentBox>
              <StyledGradientTestimonialFooter className="text-inverted gradient-enforced">
                <StyledGradientTestimonialFooterWrapper>
                  <StyledGradientTestimonialImageWrapper>
                    <Image
                      src="/amna_ahmed.jpeg"
                      alt="Amna Ahmed"
                      unoptimized
                      layout="fill"
                      objectFit="cover"
                    />
                  </StyledGradientTestimonialImageWrapper>
                  <StyledContentBox>
                    <StyledGradientTestimonialName
                      dangerouslySetInnerHTML={{ __html: "Amna Ahmed" }}
                    />
                    <StyledGradientTestimonialTitle
                      dangerouslySetInnerHTML={{ __html: "DHA Lahore" }}
                    />
                  </StyledContentBox>
                </StyledGradientTestimonialFooterWrapper>
              </StyledGradientTestimonialFooter>
            </StyledGradientTestimonialCard>
          </StyledContentBox>
        </StyledHorizontalFlexColumn>
      </StyledHorizontalFlexWrapper>
    </StyledSection>
  );
};

export default SectionFeature001;
