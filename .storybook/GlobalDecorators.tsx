import React from "react";
import { inter } from "../src/app/layout";
import Providers from "../src/utils/providers";
import { resetStores } from "../src/utils/zustandUtils";

const ResetStoreDecorator = (Story: React.ComponentType) => {
  resetStores();
  return <Story />;
};

const GlobalWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`global-storybook-wrapper ${inter.className}`}>
      <Providers>{children}</Providers>
    </div>
  );
};

const WrapDecorator = (Story: React.ComponentType) => {
  return (
    <GlobalWrapper>
      <Story />
    </GlobalWrapper>
  );
};

const GlobalDecorators = [WrapDecorator, ResetStoreDecorator];

export default GlobalDecorators;
