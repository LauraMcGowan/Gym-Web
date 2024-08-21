import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for the additional matchers like 'toBeInTheDocument'
import Home from "./Home";
import logo from "./assets/logo.png";

jest.mock("./assets/logo.png", () => "logo.png"); // Mock the image import

describe("Home Component", () => {
  it("should render the logo image with correct src and alt attributes", () => {
    const { getByAltText } = render(<Home />); // Render the Home component
    const imageElement = getByAltText("img"); // Get the image element by its alt text

    // Assert that the image element is in the document
    expect(imageElement).toBeInTheDocument();

    // Assert that the image element has the correct src attribute
    expect(imageElement).toHaveAttribute("src", "logo.png");
  });
});
