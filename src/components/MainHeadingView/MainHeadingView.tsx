import { Props } from "./MainHeadingView.type";
import { StyledH1 } from "./MainHeadingView.styled";

const MainHeadingView = ({ children }: Props) => {
  return <StyledH1>{children}</StyledH1>;
};

export default MainHeadingView;
