const globalTypes = {
  themes: {
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The label to show for this toolbar item
      title: "Theme",
      icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: ["light", "dark"],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

/** @type { import('@storybook/react').Preview } */
const preview = {
  globalTypes,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
