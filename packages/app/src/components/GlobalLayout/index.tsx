"use client";

import { Main, styled } from "tamagui";
import { useSafeArea } from "../../providers/safe-area/use-safe-area";
import { GlobalHeader } from "../GlobalHeader";

const StyledMain = styled(Main, {
  height: "100%", // for Stack in expo router layout
  maxWidth: 768,
  width: "100%",
  marginTop: 0,
  marginRight: "auto",
  marginBottom: 0,
  marginLeft: "auto",
  backgroundColor: "$background",
});

export const GlobalLayout = ({ children }: { children?: React.ReactNode }) => {
  const safeArea = useSafeArea();
  const StyledMainProps = {
    paddingTop: safeArea.top,
    paddingRight: safeArea.right,
    paddingBottom: safeArea.bottom,
    paddingLeft: safeArea.left,
  };
  return (
    <StyledMain {...StyledMainProps}>
      <GlobalHeader />
      {children}
    </StyledMain>
  );
};
