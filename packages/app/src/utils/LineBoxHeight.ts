// ref. {ProjectDir}/node_modules/@tamagui/config/src/fonts.ts
export const headingLineHeightSize = (size: number) =>
  Math.round(size * 1.1 + (size < 30 ? 10 : 5));

export const bodyLineHeightSize = (size: number) =>
  Math.round(size * 1.1 + (size >= 12 ? 8 : 4));
