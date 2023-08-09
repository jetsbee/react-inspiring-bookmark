"use client";

import { Paragraph, styled } from "tamagui";

const StyledP = styled(Paragraph, {
  textAlign: "center",
  color: "blue",
  backgroundColor: "green",
});

const BookmarksScreen = () => {
  return <StyledP>BookmarksScreen</StyledP>;
};

export default BookmarksScreen;
