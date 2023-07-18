import type { Preview } from "@storybook/react";

import "../src/app/globals.css";
import GlobalDecorators from "./GlobalDecorators";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: GlobalDecorators,
};

export default preview;
