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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SectionHero002 />
      <SectionFeature001 />
      <SectionFeature002 />
      <SectionFeature003 />
    </>
  );
};

export default index;
