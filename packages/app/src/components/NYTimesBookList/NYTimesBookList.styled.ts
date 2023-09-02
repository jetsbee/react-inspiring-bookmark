"use client";

import { styled } from "tamagui";
import { headingLineHeightSize } from "../../utils/LineBoxHeight";
import { StyledBaseH1 } from "../StyledBase";

export const StyledH1 = styled(StyledBaseH1, {
  fontWeight: "300",
  $xxs: {
    marginBottom: 8,
    fontSize: 24,
    get lineHeight() {
      return headingLineHeightSize(this.fontSize);
    },
  },
  marginBottom: 18,
  fontSize: 28,
  get lineHeight() {
    return headingLineHeightSize(this.fontSize);
  },
});
