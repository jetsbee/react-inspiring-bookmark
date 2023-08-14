import { Paragraph, styled } from "tamagui";
import { headingLineHeightSize } from "../../utils/LineBoxHeight";

export const StyledBaseH1 = styled(Paragraph, {
  accessibilityRole: "header",
  // fontFamily: "$heading",
  margin: 0,
  name: "H1",
  tag: "h1",
  size: "$10",
  fontWeight: "normal",
  get lineHeight() {
    return headingLineHeightSize(this.fontSize);
  },
}); // ref. https://github.com/tamagui/tamagui/issues/1473
