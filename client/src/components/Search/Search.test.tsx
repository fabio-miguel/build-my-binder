import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Search from "./Search";

jest.mock("axios");

test("renders search input and button", () => {
  <Provider store={store}>
    <Search />
  </Provider>;
  expect(screen.getByPlaceholderText(/type card name/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
});

test("calls the API with the correct query when the search button is clicked", async () => {
  (axios.get as jest.Mock).mockResolvedValue({ data: { data: [] } });

  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  const inputElement = screen.getByPlaceholderText(/type card name/i);
  const searchButton = screen.getByRole("button", { name: /search/i });

  fireEvent.change(inputElement, {
    target: { value: "Blue-Eyes White Dragon" },
  });
  fireEvent.click(searchButton);

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining("Blue-Eyes White Dragon")
    );
  });
});
