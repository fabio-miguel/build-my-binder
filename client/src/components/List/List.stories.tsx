import { Meta, StoryFn } from "@storybook/react";
import List from "./List";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { updateList, setLoading } from "../../redux/reducers/listSlice";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof List>;

export default meta;

// Template function for creating stories
const Template: StoryFn<typeof List> = (args) => (
  <Provider store={store}>
    <List {...args} />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.decorators = [
  (Story) => {
    // Simulate loading state by dispatching the loading action
    store.dispatch(setLoading(true));
    return <Story />;
  },
];

export const EmptyList = Template.bind({});
EmptyList.decorators = [
  (Story) => {
    // Simulate empty list state
    store.dispatch(setLoading(false));
    store.dispatch(updateList([]));
    return <Story />;
  },
];

export const ListWithData = Template.bind({});
ListWithData.decorators = [
  (Story) => {
    // Simulate a populated list state
    store.dispatch(setLoading(false));
    store.dispatch(
      updateList([
        {
          id: 1,
          name: "Card 1",
          imageUrls: [
            "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
          ],
        },
        {
          id: 2,
          name: "Card 2",
          imageUrls: [
            "https://images.ygoprodeck.com/images/cards_small/89631140.jpg",
          ],
        },
        {
          id: 3,
          name: "Card 3",
          imageUrls: [
            "https://images.ygoprodeck.com/images/cards_small/89631141.jpg",
          ],
        },
        {
          id: 4,
          name: "Card 4",
          imageUrls: [
            "https://images.ygoprodeck.com/images/cards_small/89631142.jpg",
          ],
        },
      ])
    );
    return <Story />;
  },
];
