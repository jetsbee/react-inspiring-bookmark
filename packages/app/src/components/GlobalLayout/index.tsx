import { useSafeArea } from "../../providers/safe-area/use-safe-area";
import { GlobalHeader } from "../GlobalHeader";
import { StyledMain } from "./GlobalLayout.styled";

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
