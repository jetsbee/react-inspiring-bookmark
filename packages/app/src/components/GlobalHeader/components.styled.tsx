import { Image } from "expo-image";
import { JSX, RefAttributes } from "react";
import { Platform } from "react-native";
import { SolitoImageProps } from "solito/build/image/image.types";
import { SolitoImage } from "solito/image";
import { Header, Paragraph, Stack, styled } from "tamagui";
import {
  bodyLineHeightSize,
  headingLineHeightSize,
} from "../../utils/LineBoxHeight";

export const StyledHeader = styled(Header, {
  flexDirection: "row",
  justifyContent: "space-between",
  gap: 16,
});

export const ColDiv = styled(Stack, {
  flexDirection: "row",
  alignItems: "center",
  gap: 16,
});

export const SizedLogoImage = (
  props: JSX.IntrinsicAttributes & (SolitoImageProps & RefAttributes<Image>)
) => {
  return (
    <SolitoImage
      height={Platform.OS === "web" ? 60 : 40}
      width={Platform.OS === "web" ? 60 : 40}
      {...props}
    />
  );
};

export const StyledH1 = styled(Paragraph, {
  accessibilityRole: "header",
  // fontFamily: "$heading",
  margin: 0,
  name: "H1",
  tag: "h1",
  size: "$10",
  color: "#000",
  fontSize: Platform.OS === "web" ? 32 : 20,
  fontWeight: "normal",
  get lineHeight() {
    return headingLineHeightSize(this.fontSize);
  },
}); // ref. https://github.com/tamagui/tamagui/issues/1473

export const StyledP = styled(Paragraph, {
  fontSize: 16,
  get lineHeight() {
    return bodyLineHeightSize(this.fontSize);
  },
  fontWeight: "500",
  color: "#000",
  textDecorationLine: "underline",
});