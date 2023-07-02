import React from "react";
import { inter } from "../src/app/layout";
import Providers from "../src/utils/providers";

const GlobalDecorator: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`global-storybook-wrapper ${inter.className}`}>
      <Providers>{children}</Providers>
    </div>
  );
};

export default GlobalDecorator;
