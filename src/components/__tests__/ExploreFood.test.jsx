import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import ExploreFood from "../ExploreFood/ExploreFood";

// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { ID: 1, NAME: "Pizza", PRICE: 10, IMAGE: "pizza.jpg" },
      { ID: 2, NAME: "Burger", PRICE: 8, IMAGE: "burger.jpg" },
      // Add more mock data as needed
    ]),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("ExploreFood component renders without crashing", async () => {
  render(<ExploreFood />);
});

test("ExploreFood component fetches food data correctly", async () => {
  render(<ExploreFood />);
  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
});

test("ExploreFood component filters food data based on search input", async () => {
  const { getByPlaceholderText, getByText, getAllByTestId } = render(<ExploreFood />);
  
  // Wait for the fetch to complete
  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

  // Search for 'Pizza'
  const searchInput = getByPlaceholderText("Search for product items");
  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  // Wait for the filtered data to render
  await waitFor(() => expect(getAllByTestId("food-item")).toHaveLength(1));

  expect(getByText("Pizza")).toBeInTheDocument();
  expect(getByText("R10")).toBeInTheDocument();
});