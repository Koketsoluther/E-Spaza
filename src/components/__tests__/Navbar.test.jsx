import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";

test("Navbar renders without crashing", () => {
  render(<Navbar />);
});

test("Navbar renders with correct menu items", () => {
  const { getByText } = render(<Navbar />);
  expect(getByText("home")).toBeInTheDocument();
  expect(getByText("orders")).toBeInTheDocument();
  expect(getByText("about Us")).toBeInTheDocument();
  expect(getByText("contact us")).toBeInTheDocument();
});

test("Navbar menu items toggle active class correctly", () => {
  const { getByText } = render(<Navbar />);
  fireEvent.click(getByText("orders"));
  expect(getByText("orders")).toHaveClass("active");
});

test("Navbar menu items set menu state correctly", () => {
  const { getByText } = render(<Navbar />);
  fireEvent.click(getByText("contact us"));
  expect(getByText("contact us")).toHaveClass("active");
});