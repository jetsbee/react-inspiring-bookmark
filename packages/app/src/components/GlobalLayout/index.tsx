"use client";

import { ScrollView } from "tamagui";
import { useSafeArea } from "../../providers/safe-area/use-safe-area";
import { GlobalHeader } from "../GlobalHeader";
import { StyledMain } from "./GlobalLayout.styled";
import { useScrollView } from "./hooks/useScrollView";

export const GlobalLayout = ({ children }: { children?: React.ReactNode }) => {
  const safeArea = useSafeArea();
  const StyledMainProps = {
    paddingTop: safeArea.top,
    paddingRight: safeArea.right,
    paddingBottom: safeArea.bottom,
    paddingLeft: safeArea.left,
  };

  const { onContentSizeChange, scrollEnabled } = useScrollView();
  const scrollViewProps = {
    onContentSizeChange,
    scrollEnabled,
  };

  return (
    <StyledMain {...StyledMainProps}>
      <ScrollView {...scrollViewProps}>
        <GlobalHeader />
        {children}
      </ScrollView>
    </StyledMain>
  );
};
