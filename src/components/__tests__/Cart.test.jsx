import React from "react";
import { render } from "@testing-library/react";
import Cart from "../../pages/Cart/Cart";

test("Cart component renders without crashing", () => {
  render(<Cart />);
});

test("Cart component renders the correct elements", () => {
  const { getByText, getAllByText } = render(<Cart />);
  
  // Check for cart totals
  expect(getByText("Cart Totals")).toBeInTheDocument();
  expect(getByText("Subtotal")).toBeInTheDocument();
  expect(getByText("Delivery Fee")).toBeInTheDocument();
  expect(getByText("Total")).toBeInTheDocument();
  expect(getByText("Proceed to checkout")).toBeInTheDocument();
});