import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const cardInfo = {
  name: "Blue-Eyes White Dragon",
  card_images: [{ image_url_small: "link_to_small_image" }],
};

test("renders card image correctly", () => {
  render(<Card cardInfo={cardInfo} />);
  const cardImage = screen.getByAltText(cardInfo.name);
  expect(cardImage).toBeInTheDocument();
  expect(cardImage).toHaveAttribute("src", "link_to_small_image");
});
