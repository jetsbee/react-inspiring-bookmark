import { StyledH1 } from "./MainHeadingView.styled";
import { Props } from "./MainHeadingView.type";

const MainHeadingView = ({ children }: Props) => {
  return <StyledH1>{children}</StyledH1>;
};

export default MainHeadingView;
