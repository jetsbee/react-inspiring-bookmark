import {
  ColDiv,
  SizedLogoImage,
  StyledH1,
  StyledHeader,
  StyledP,
} from "./components.styled";

export const GlobalHeader = () => {
  return (
    <StyledHeader>
      <ColDiv>
        <SizedLogoImage src={require("./assets/logo.png")} alt="logo" />
        <StyledH1>Inspiring Bookmark</StyledH1>
      </ColDiv>
      <ColDiv>
        <StyledP>Bookmarks</StyledP>
      </ColDiv>
    </StyledHeader>
  );
};
