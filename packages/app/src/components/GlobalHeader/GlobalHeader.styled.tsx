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
import { StyledBaseH1 } from "../StyledBase";

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

export const StyledH1 = styled(StyledBaseH1, {
  $xxs: {
    fontSize: 20,
    get lineHeight() {
      return headingLineHeightSize(this.fontSize);
    },
  },
  fontSize: 32,
  get lineHeight() {
    return headingLineHeightSize(this.fontSize);
  },
}); // ref. https://github.com/tamagui/tamagui/issues/1473

export const StyledP = styled(Paragraph, {
  textDecorationLine: "underline",
  fontWeight: "500",
  fontSize: 16,
  get lineHeight() {
    return bodyLineHeightSize(this.fontSize);
  },
});
