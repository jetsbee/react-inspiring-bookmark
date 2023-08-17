"use client";

import { styled } from "tamagui";
import { headingLineHeightSize } from "../../utils/LineBoxHeight";
import { StyledBaseH1 } from "../StyledBase";

export const StyledH1 = styled(StyledBaseH1, {
  fontWeight: "300",
  fontSize: 28,
  get lineHeight() {
    return headingLineHeightSize(this.fontSize);
  },
});
