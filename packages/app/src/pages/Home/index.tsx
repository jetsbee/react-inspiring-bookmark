"use client";

import { Paragraph, styled } from "tamagui";

const StyledP = styled(Paragraph, {
  textAlign: "center",
  color: "blue",
  backgroundColor: "aqua",
});

const HomeScreen = () => {
  return <StyledP>Home</StyledP>;
};

export default HomeScreen;
