# Legooo - React Design System

## Description

Legooo is a comprehensive React component library designed to facilitate the creation of complex user interfaces following a design system approach. With Legooo, you can easily implement a wide range of UI components to ensure consistency and efficiency across your React projects.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Components](#components)
4. [Customization](#customization)
5. [Contributing](#contributing)
6. [License](#license)

## Installation

You can install Legooo via npm using the following command:

```js
npm i legooo
```

## Usage

To use Legooo components in your React application, import the desired component(s) and use them in your JSX markup. Here's an example of how you can use the `Button` and `Avatar` components:

```jsx
import React from "react";
import { Button, Avatar } from "legooo";

function App() {
  return (
    <div>
      <Button />
      <Avatar size="medium" type="image" />
    </div>
  );
}

export default App;
```

## Components

Legooo provides a wide range of components to cover various UI requirements. Here's a list of components included in the library:

1. Avatar: Component for displaying user avatars.
2. Badge: Component for indicating status or count.
3. Breadcrumb: Component for navigating hierarchical data.
4. Button: Component for user interaction.
5. Calendar: Component for displaying date and time.
6. Card: Component for displaying content in a structured manner.
7. Carousel: Component for displaying a series of content in a rotating manner.
8. Collapse: Component for hiding and revealing content.
9. Drawer: Component for sliding in and out content.
10. Dropdown: Component for selecting options from a list.
11. Image: Component for displaying images.
12. Message: Component for displaying notifications or messages.
13. Pagination: Component for navigating through pages of content.
14. Rate: Component for rating items.
15. Skeleton: Component for displaying placeholders while content is loading.
16. Steps: Component for guiding users through a series of steps.
17. Tabs: Component for organizing content into tabs.
18. Tag: Component for labeling or categorizing items.
19. Tooltip: Component for displaying additional information on hover.
20. Tree: Component for displaying hierarchical data in a tree structure.

    Each component comes with its own set of props and customization options. Please refer to the individual component documentation for more details.

## Customization

Legooo components are highly customizable to fit your specific design requirements. You can override default styles or extend component functionality as needed. Refer to the documentation of each component for customization options and guidelines.

## Contributing

Contributions to Legooo are welcome! If you find any bugs, have feature requests, or want to contribute code, please check out our GitHub repository and follow the contribution guidelines.

## License

Legooo is licensed under the MIT License, which means you are free to use, modify, and distribute the library for both personal and commercial purposes.
