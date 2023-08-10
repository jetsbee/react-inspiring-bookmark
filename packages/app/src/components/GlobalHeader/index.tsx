import { Link } from "solito/link";
import {
  ColDiv,
  SizedLogoImage,
  StyledH1,
  StyledHeader,
  StyledP,
} from "./GlobalHeader.styled";

export const GlobalHeader = () => {
  return (
    <StyledHeader>
      <ColDiv>
        <Link href="/">
          <SizedLogoImage src={require("./assets/logo.png")} alt="logo" />
        </Link>
        <Link href="/">
          <StyledH1>Inspiring Bookmark</StyledH1>
        </Link>
      </ColDiv>
      <ColDiv>
        <Link href="/bookmarks">
          <StyledP>Bookmarks</StyledP>
        </Link>
      </ColDiv>
    </StyledHeader>
  );
};
