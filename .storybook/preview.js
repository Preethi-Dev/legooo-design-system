import { ThemeProvider } from "styled-components";
import * as myThemes from "../src/tokens";

const globalTypes = {
  themes: {
    description: "Global theme for components",
    defaultValue: "Light",
    toolbar: {
      // The label to show for this toolbar item
      title: "Theme",
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["Light", "Dark"],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes,
  parameters: {
    options: {
      storySort: {
        order: ["Tokens", "Components"],
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = myThemes[context.globals.themes];
      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
