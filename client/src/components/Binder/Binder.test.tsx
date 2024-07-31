import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Binder from "./Binder";

test("renders binder with cards", () => {
  const cards = [
    {
      name: "Blue-Eyes White Dragon",
      card_images: [
        { image_url_small: "link_to_small_blue_eyes_white_dragon_image" },
      ],
    },
    {
      name: "Dark Magician",
      card_images: [{ image_url_small: "link_to_small_dark_magician_image" }],
    },
  ];

  render(<Binder cards={cards} />);
  const cardImages = screen.getAllByAltText(
    /(Blue-Eyes White Dragon|Dark Magician)/
  );
  expect(cardImages).toHaveLength(2);
  expect(cardImages[0]).toHaveAttribute(
    "src",
    "link_to_small_blue_eyes_white_dragon_image"
  );
  expect(cardImages[1]).toHaveAttribute(
    "src",
    "link_to_small_dark_magician_image"
  );
});
