import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import store from "../../redux/store";
import { Provider } from "react-redux";
import List from "./List";

test("renders List component", () => {
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const listElement = screen.getByTestId("list");
  expect(listElement).toBeInTheDocument();
});

test("shows loading text when in a loading state", () => {
  store.dispatch({ type: "list/setLoading", payload: true });
  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  const loadingElement = screen.getByTestId("loading");
  expect(loadingElement).toBeInTheDocument();
});

test("displays cards when isLoading is false and list is not empty", () => {
  store.dispatch({ type: "list/setLoading", payload: false });
  store.dispatch({
    type: "list/updateList",
    payload: [{ id: 1, name: "Card 1" }],
  });

  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  expect(screen.getByText("Card 1")).toBeInTheDocument();
});

test("displays no cards message when list is empty and isLoading is false", () => {
  store.dispatch({ type: "list/setLoading", payload: false });
  store.dispatch({ type: "list/updateList", payload: [] });

  render(
    <Provider store={store}>
      <List />
    </Provider>
  );
  expect(screen.getByText("No cards available")).toBeInTheDocument();
});
