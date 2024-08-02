import { Meta, StoryFn } from "@storybook/react"; // Updated import
import Search from "./Search";
import { Provider } from "react-redux";
import store from "../../redux/store";

// This metadata is used by Storybook to organize and display the stories in the Storybook UI.
const meta = {
  title: "Components/Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Search>;

export default meta;

const Template: StoryFn<typeof Search> = (args) => (
  <Provider store={store}>
    <Search {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search card name",
};
