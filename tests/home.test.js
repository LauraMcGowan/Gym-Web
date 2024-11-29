import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/pages/home";
import "../src/assets/jpslogo.png";

jest.mock("../src/assets/jpslogo.png", () => "jpslogo.png");
describe("Home page", () => {
  test("renders the Welcome section with logo, title, and description", () => {
    render(<Home />);

    // Check for the logo
    const logo = screen.getByAltText("JPS Gym logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "jpslogo.png");

    // Check for the welcome message
    expect(screen.getByText("Welcome to JPSGYM!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Join JP's, visit for the day, and even invest in our merchandise below!"
      )
    ).toBeInTheDocument();
  });

  test("renders the About section with mission and opening hours", () => {
    render(<Home />);

    // Check for the About Us heading and mission text
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(
      screen.getByText(/When JP's opened back in June 2018/i)
    ).toBeInTheDocument();

    // Check for Opening Hours heading and list items
    expect(screen.getByText("Opening Hours")).toBeInTheDocument();
    expect(screen.getByText("Monday to Friday: 9am-7pm")).toBeInTheDocument();
    expect(screen.getByText("Saturday: 9am-4pm")).toBeInTheDocument();
    expect(screen.getByText("Sunday: 12-3pm")).toBeInTheDocument();
  });

  test("renders the Contact section with form fields", () => {
    render(<Home />);

    // Check for the Contact Us heading
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();

    // Check for the form inputs
    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Send Message" })
    ).toBeInTheDocument();
  });

  test("renders the Booking section with the correct Calendly link", () => {
    render(<Home />);

    // Check for the booking button and link
    const bookingButton = screen.getByRole("button", { name: "Book Now" });
    expect(bookingButton).toBeInTheDocument();
    const bookingLink = screen.getByRole("link", { name: "Book Now" });
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    expect(bookingLink).toHaveAttribute(
      "href",
      `https://calendly.com/johnpaulpt/15min?month=${year}-${month}`
    );
  });

  test("renders the map icon", () => {
    expect(screen.getByAltText("Map icon")).toBeInTheDocument();
  });
});
