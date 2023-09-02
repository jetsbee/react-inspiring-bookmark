"use client";

import { Button, Paragraph, Stack, styled } from "tamagui";

export const Container = styled(Stack, {});

export const StyledP = styled(Paragraph, {
  fontSize: 13,
  lineHeight: 15,
  textAlign: "justify",
});

export const StyledBtn = styled(Button, {
  marginTop: 8,
  fontSize: 14,
  get height() {
    return this.fontSize * 2;
  },
  backgroundColor: "$blue4",
  borderColor: "$blue4",
  hoverStyle: {
    backgroundColor: "$blue5",
    borderColor: "$blue5",
  },
  pressStyle: {
    backgroundColor: "$blue6",
    borderColor: "$blue7",
  },
  focusStyle: {
    backgroundColor: "$blue7",
    borderColor: "$blue6",
    outlineColor: "$blue6",
  },
});
