import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header/Header";

test("Header renders without crashing", () => {
  render(<Header />);
});

test("Header renders with correct text content", () => {
  const { getByText } = render(<Header />);
  expect(getByText("Order your favourite products at lower prices")).toBeInTheDocument();
  expect(getByText("Choose from a diverse category of products")).toBeInTheDocument();
});

test("Header renders with a 'View Products' button", () => {
  const { getByText } = render(<Header />);
  const button = getByText("View Products");
  expect(button).toBeInTheDocument();
  expect(button.tagName).toBe("BUTTON");
});

test("Header button links to explore-food section", () => {
  const { getByText } = render(<Header />);
  const button = getByText("View Products");
  expect(button.closest("button").querySelector("a").getAttribute("href")).toBe("#explore-food");
});