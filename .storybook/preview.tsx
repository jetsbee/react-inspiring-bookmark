import type { Preview } from "@storybook/react";

import { initialize, mswDecorator } from "msw-storybook-addon";
import "../src/app/globals.css";
import GlobalDecorators from "./GlobalDecorators";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
  decorators: [...GlobalDecorators, mswDecorator],
};

export default preview;
