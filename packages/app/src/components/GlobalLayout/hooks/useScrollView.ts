"use client";

import { useState } from "react";
import { Dimensions } from "react-native";

export const useScrollView = () => {
  const { height } = Dimensions.get("window");
  const [screenHeight, setScreenHeight] = useState(height);
  const scrollEnabled = screenHeight > height;
  const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
    setScreenHeight(contentHeight);
  };

  return {
    onContentSizeChange,
    scrollEnabled,
  };
};
