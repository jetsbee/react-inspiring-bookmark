"use client";

import { StyledMain } from "@/components/StyledPage/page.styled";
import useKeywordsParam from "./(hooks)/useKeywordsParam";

const Page = () => {
  const keywords = useKeywordsParam();

  return (
    <StyledMain>
      <div>{keywords}</div>
    </StyledMain>
  );
};

export default Page;
