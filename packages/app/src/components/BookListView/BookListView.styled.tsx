"use client";

import { Article, Paragraph, Stack, styled } from "tamagui";
import { StyledBaseH1, StyledBaseLi, StyledBaseUl } from "../StyledBase";

export const StyledUl = styled(StyledBaseUl, {});

export const StyledLi = styled(StyledBaseLi, {
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#dadce0",
  paddingTop: 8,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  marginBottom: 12,
});

export const StyledArticle = styled(Article, {
  flexDirection: "row",
  flex: 1,
});

export const RowDiv = styled(Stack, {
  flex: 1,
  marginRight: 10,
});

export const StyledH1 = styled(StyledBaseH1, {
  fontSize: 24,
  fontWeight: "600",
  marginBottom: 12,
  lineHeight: 26,
});

export const StyledPForAuthors = styled(Paragraph, {
  fontSize: 14,
  marginBottom: 3,
});

export const StyledPForDate = styled(Paragraph, {
  fontSize: 12,
  marginBottom: 10,
});
