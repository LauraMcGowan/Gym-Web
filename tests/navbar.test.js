import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/components/navBar";

test("renders Navbar component with navigation links", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Check if navigation links are rendered
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Meet the Team")).toBeInTheDocument();
  expect(screen.getByText("Memberships")).toBeInTheDocument();
  expect(screen.getByText("Classes")).toBeInTheDocument();
  expect(screen.getByText("Injury/Rehab")).toBeInTheDocument();
  expect(screen.getByText("Shop")).toBeInTheDocument();
});
