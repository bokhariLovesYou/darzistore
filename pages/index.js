import React from "react";
import Head from "next/head";
// Hero
import SectionHero002 from "@/components/sections/heroes/SectionHero002";
// Features
import {
  SectionFeature001,
  SectionFeature002,
  SectionFeature003,
} from "@/components/sections/features";

const index = () => {
  return (
    <>
      <Head>
        <title>Your Tailor on Demand | Darzi Store</title>
        <meta
          name="description"
          content="One reliable stop for all your tailoring needs, we are your friendly community darzi providing professional quality service with speed and cost efficiency."
        ></meta>
      </Head>
      <SectionHero002 />
      <SectionFeature001 />
      <SectionFeature002 />
      <SectionFeature003 />
    </>
  );
};

export default index;
