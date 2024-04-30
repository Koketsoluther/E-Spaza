import React from "react";
import { render } from "@testing-library/react";
import Home from "../../pages/Home/Home";

test("Home component renders without crashing", () => {
  render(<Home />);
});

test("Home component renders Header component", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId("header-component")).toBeInTheDocument();
});

test("Home component renders ExploreFood component", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId("explore-food-component")).toBeInTheDocument();
});