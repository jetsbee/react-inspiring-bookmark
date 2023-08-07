import React from "react";
import { TamaguiAppProvider } from "./TamaguiAppProvider/TamaguiAppProvider";
import { SafeArea } from "./safe-area";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TamaguiAppProvider>
      <SafeArea>{children}</SafeArea>
    </TamaguiAppProvider>
  );
};
