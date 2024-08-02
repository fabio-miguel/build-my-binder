import { Meta, StoryFn } from "@storybook/react";
import Binder from "./Binder";
import { Provider } from "react-redux";
import store from "../../redux/store";

// Define the metadata for the Binder component stories
const meta = {
  title: "Components/Binder",
  component: Binder,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Binder>;

export default meta;

// Template for creating stories
const Template: StoryFn<typeof Binder> = (args) => (
  <Provider store={store}>
    <Binder {...args} />
  </Provider>
);

// Example data for cards
const exampleCards = [
  {
    name: "Card 1",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 2",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 3",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 4",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 5",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 6",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 7",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 8",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 9",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 10",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 11",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
  {
    name: "Card 12",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
];

// Default story
export const Default = Template.bind({});
Default.args = {
  cards: exampleCards,
};

// Empty state story
export const Empty = Template.bind({});
Empty.args = {
  cards: [],
};
