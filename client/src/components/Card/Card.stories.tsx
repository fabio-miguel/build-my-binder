import { Meta, StoryFn } from "@storybook/react";
import Card from "./Card";

// Metadata for the Card component story
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

// Default story with example data
export const Default = Template.bind({});
Default.args = {
  cardInfo: {
    name: "Blue-Eyes White Dragon",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/89631139.jpg",
      },
    ],
  },
};

// Example with a different card
export const DarkMagician = Template.bind({});
DarkMagician.args = {
  cardInfo: {
    name: "Dark Magician",
    card_images: [
      {
        image_url_small:
          "https://images.ygoprodeck.com/images/cards_small/46986414.jpg",
      },
    ],
  },
};
