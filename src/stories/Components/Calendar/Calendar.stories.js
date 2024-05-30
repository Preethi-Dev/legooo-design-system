import { ThemeProvider } from "styled-components";
import Calendar from "./Calendar";
import { DataCell } from "./DataCell";
import * as myThemes from "../../../tokens";

export default {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
};

export const Basic = {};

export const Cell = {
  argTypes: {
    $inView: {
      control: "boolean",
    },
    $today: {
      control: "boolean",
    },
    $selected: {
      control: "boolean",
    },
    $day: {
      control: "number",
    },
  },
  args: {
    $inView: true,
    $today: false,
    $selected: false,
    $day: 10,
  },
  render: (props) => (
    <ThemeProvider theme={myThemes[props.$theme]}>
      <DataCell {...props} />
    </ThemeProvider>
  ),
};
