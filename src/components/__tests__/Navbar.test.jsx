import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
import { StoreContext } from "../../context/StoreContext";


describe("Navbar component", () => {
  test("renders Navbar with correct links", () => {
    render(<Navbar />);
    // Expecting Navbar to render with correct links
    expect(getByText("home")).toBeInTheDocument();
    expect(getByText("orders")).toBeInTheDocument();
    expect(getByText("about Us")).toBeInTheDocument();
    expect(getByText("contact us")).toBeInTheDocument();
  });

  test("activates correct menu when link is clicked", () => {
    render(<Navbar />);
    fireEvent.click(screen.getByText("orders"));
    // Expecting "orders" to be the active menu
    expect(screen.getByText("orders")).toHaveClass("active");
  });

  test("displays correct cart total", () => {
    render(<Navbar />);
    // Expecting correct cart total to be displayed
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("renders LoginButton and LogoutButton", () => {
    render(<Navbar />);
    // Expecting LoginButton and LogoutButton to be rendered
    expect(getByText("Login")).toBeInTheDocument();
    expect(getByText("Logout")).toBeInTheDocument();
  });
});