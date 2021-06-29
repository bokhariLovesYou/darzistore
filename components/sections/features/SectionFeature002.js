// Feature Section Two Column with Image
import React from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import {
  StyledCard,
  StyledCardandContentImageWrapper,
  StyledPlaceholderWrapper,
  StyledFancyWrapperHolder,
  StyledFancyWrapper,
} from "@/components/styledComponents/StyledElements";
import {
  StyledSection,
  StyledContentBox,
  StyledContentandCardFlexWrapper,
  StyledContentandCardColumn,
} from "@/components/styledComponents/StyledWrappers";
import {
  StyledHeadingTwo,
  StyledHeadingThree,
  StyledSubtitle,
  StyledLabel,
} from "@/components/styledComponents/StyledTypography";

const SectionFeature002 = () => {
  return (
    <>
      <StyledSection className="theme-section-light-purple">
        <Container>
          <StyledContentBox className="mw-900">
            <StyledLabel
              className="theme-text-purple"
              dangerouslySetInnerHTML={{ __html: "HEADING LABEL" }}
            />
            <StyledHeadingTwo
              dangerouslySetInnerHTML={{ __html: "Lorem Ipsum is simply dummy text" }}
            />
            <StyledSubtitle
              className="theme-text-silver"
              dangerouslySetInnerHTML={{
                __html:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              }}
            />
          </StyledContentBox>
        </Container>
        <Container className="mt-5 pt-4 pt-lg-5">
          <StyledContentBox>
            <StyledFancyWrapperHolder>
              <StyledContentBox>
                <StyledContentandCardFlexWrapper>
                  <StyledContentandCardColumn width="fifty" className="order-lg-2">
                    <StyledCard themeStyle="white" push="pushed_left">
                      <StyledHeadingThree
                        dangerouslySetInnerHTML={{ __html: "Lorem Ipsum is simply dummy text" }}
                      />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </p>
                    </StyledCard>
                  </StyledContentandCardColumn>
                  <StyledContentandCardColumn width="fifty" className="order-lg-1">
                    <StyledCardandContentImageWrapper>
                      <StyledPlaceholderWrapper themeStyle="lightly_rounded">
                        <Image
                          src="/clothing-2.jpeg"
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </StyledPlaceholderWrapper>
                    </StyledCardandContentImageWrapper>
                  </StyledContentandCardColumn>
                </StyledContentandCardFlexWrapper>
              </StyledContentBox>
              <StyledFancyWrapper themeStyle="gray" />
              <StyledFancyWrapper rotation="rotated_negative" themeStyle="purple_gradient" />
            </StyledFancyWrapperHolder>
          </StyledContentBox>
        </Container>
      </StyledSection>

      <StyledSection className="theme-section-white">
        <Container>
          <StyledContentBox className="mw-900">
            <StyledLabel
              className="theme-text-green"
              dangerouslySetInnerHTML={{ __html: "HEADING LABEL" }}
            />
            <StyledHeadingTwo
              dangerouslySetInnerHTML={{ __html: "Lorem Ipsum is simply dummy text" }}
            />
            <StyledSubtitle
              className="theme-text-silver"
              dangerouslySetInnerHTML={{
                __html:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              }}
            />
          </StyledContentBox>
        </Container>
        <Container className="mt-5 pt-4 pt-lg-5">
          <StyledContentBox>
            <StyledFancyWrapperHolder>
              <StyledContentBox>
                <StyledContentandCardFlexWrapper>
                  <StyledContentandCardColumn width="fifty" className="order-lg-1">
                    <StyledCard themeStyle="white" push="pushed_right">
                      <StyledHeadingThree
                        dangerouslySetInnerHTML={{ __html: "Lorem Ipsum is simply dummy text" }}
                      />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </p>
                    </StyledCard>
                  </StyledContentandCardColumn>
                  <StyledContentandCardColumn width="fifty" className="order-lg-2">
                    <StyledCardandContentImageWrapper>
                      <StyledPlaceholderWrapper themeStyle="lightly_rounded">
                        <Image
                          src="/clothing-3.jpeg"
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </StyledPlaceholderWrapper>
                    </StyledCardandContentImageWrapper>
                  </StyledContentandCardColumn>
                </StyledContentandCardFlexWrapper>
              </StyledContentBox>
              <StyledFancyWrapper themeStyle="gray" />
              <StyledFancyWrapper rotation="rotated_negative" themeStyle="green_gradient" />
            </StyledFancyWrapperHolder>
          </StyledContentBox>
        </Container>
      </StyledSection>

      <StyledSection className="theme-section-light-green">
        <Container>
          <StyledContentBox className="mw-900">
            <StyledLabel
              className="theme-text-red"
              dangerouslySetInnerHTML={{ __html: "HEADING LABEL" }}
            />
            <StyledHeadingTwo
              dangerouslySetInnerHTML={{ __html: "Lorem Ipsum is simply dummy text" }}
            />
            <StyledSubtitle
              className="theme-text-silver"
              dangerouslySetInnerHTML={{
                __html:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              }}
            />
          </StyledContentBox>
        </Container>
        <Container className="mt-5 pt-4 pt-lg-5">
          <StyledContentBox>
            <StyledFancyWrapperHolder>
              <StyledContentBox>
                <StyledContentandCardFlexWrapper>
                  <StyledContentandCardColumn width="fifty" className="order-lg-2">
                    <StyledCard themeStyle="white" push="pushed_left">
                      <StyledHeadingThree
                        dangerouslySetInnerHTML={{ __html: "Lorem Ipsum is simply dummy text" }}
                      />
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </p>
                    </StyledCard>
                  </StyledContentandCardColumn>
                  <StyledContentandCardColumn width="fifty" className="order-lg-1">
                    <StyledCardandContentImageWrapper>
                      <StyledPlaceholderWrapper themeStyle="lightly_rounded">
                        <Image
                          src="/clothing-6.jpeg"
                          alt=""
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </StyledPlaceholderWrapper>
                    </StyledCardandContentImageWrapper>
                  </StyledContentandCardColumn>
                </StyledContentandCardFlexWrapper>
              </StyledContentBox>
              <StyledFancyWrapper themeStyle="gray" />
              <StyledFancyWrapper rotation="rotated_negative" themeStyle="red_gradient" />
            </StyledFancyWrapperHolder>
          </StyledContentBox>
        </Container>
      </StyledSection>
    </>
  );
};

export default SectionFeature002;
