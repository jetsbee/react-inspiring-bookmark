import Link from "../ClientLink/ClientLink";
import MainHeadingView from "../MainHeadingView/MainHeadingView";
import {
  ColDiv,
  ImageContainer,
  LogoImage,
  StyledHeader,
  StyledP,
} from "./GlobalHeader.styled";

const GlobalHeader = () => {
  return (
    <StyledHeader>
      <ColDiv>
        <Link href="/">
          <ImageContainer>
            <LogoImage
              src="/logo.png"
              alt="Inspiring bookmark"
              fill={true}
              sizes="60px"
            />
          </ImageContainer>
        </Link>
        <MainHeadingView>Inspiring bookmark</MainHeadingView>
      </ColDiv>
      <ColDiv>
        <Link href="/bookmarks">
          <StyledP>Bookmarks</StyledP>
        </Link>
      </ColDiv>
    </StyledHeader>
  );
};

export default GlobalHeader;
