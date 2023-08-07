"use client";

import { Main, styled } from "tamagui";
import { useSafeArea } from "../../providers/safe-area/use-safe-area";

const StyledMain = styled(Main, {
  height: "100%", // for Stack in expo router layout
  maxWidth: 768,
  width: "100%",
  marginTop: 0,
  marginRight: "auto",
  marginBottom: 0,
  marginLeft: "auto",
});

export const StyledLayout = ({ children }: { children?: React.ReactNode }) => {
  const safeArea = useSafeArea();
  const StyledMainProps = {
    paddingTop: safeArea.top,
    paddingRight: safeArea.right,
    paddingBottom: safeArea.bottom,
    paddingLeft: safeArea.left,
  };
  return <StyledMain {...StyledMainProps}>{children}</StyledMain>;
};
