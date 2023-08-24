import React from "react";
import { ReactQueryProvider } from "./ReactQueryProvider";
import { TamaguiAppProvider } from "./TamaguiAppProvider";
import { ThemeProvider } from "./ThemeProvider";
import { SafeArea } from "./safe-area";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <TamaguiAppProvider>
        <ThemeProvider>
          <SafeArea>{children}</SafeArea>
        </ThemeProvider>
      </TamaguiAppProvider>
    </ReactQueryProvider>
  );
};
