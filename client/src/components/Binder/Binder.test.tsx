import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Binder from "./Binder";

test("renders binder with cards", () => {
  render(<Binder />);
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
