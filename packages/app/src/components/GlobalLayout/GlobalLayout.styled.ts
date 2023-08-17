"use client";

import { Main, styled } from "tamagui";

export const StyledMain = styled(Main, {
  height: "100%", // for Stack in expo router layout
  maxWidth: 768,
  width: "100%",
  marginTop: 0,
  marginRight: "auto",
  marginBottom: 0,
  marginLeft: "auto",
  backgroundColor: "$background",
});
