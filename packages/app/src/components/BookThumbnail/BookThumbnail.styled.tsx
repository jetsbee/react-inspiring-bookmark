"use client";

import { SolitoImage } from "solito/image";
import { Paragraph, Stack, styled } from "tamagui";

export const NoImageBox = styled(Stack, {
  height: 162,
  width: 108,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#dadce0",
});

export const NoImageText = styled(Paragraph, {
  color: "#70757a",
});

export const ImageContainer = styled(Stack, {
  position: "relative",
  height: 162,
  width: 108,
});

export const BookImage = (props: {
  src: string;
  alt: string;
  onError: () => void;
}) => {
  return <SolitoImage fill {...props} />;
};
