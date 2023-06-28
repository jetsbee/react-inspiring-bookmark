import BookmarkCounter from "../BookmarkCounter/BookmarkCounter";
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
        <Link href="/">
          <MainHeadingView>Inspiring bookmark</MainHeadingView>
        </Link>
      </ColDiv>
      <ColDiv>
        <Link href="/bookmarks">
          <StyledP>
            Bookmarks
            <BookmarkCounter />
          </StyledP>
        </Link>
      </ColDiv>
    </StyledHeader>
  );
};

export default GlobalHeader;
