import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const cardInfo = {
  id: 123,
  name: "Blue-Eyes White Dragon",
  imageUrl: "https://examplecard.com",
};

test("renders card image correctly", () => {
  render(<Card cardInfo={cardInfo} />);
  const cardImage = screen.getByAltText(cardInfo.name);
  expect(cardImage).toBeInTheDocument();
  expect(cardImage).toHaveAttribute("src", "link_to_small_image");
});
