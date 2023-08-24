import { Platform } from "react-native";

const API_ENDPOINT =
  process.env.EXPO_PUBLIC_API_ENDPOINT === "http://localhost:3000/api" &&
  Platform.OS === "android"
    ? "http://10.0.2.2:3000/api"
    : process.env.EXPO_PUBLIC_API_ENDPOINT;
// ref. https://developer.android.com/studio/run/emulator-networking

export { API_ENDPOINT };
