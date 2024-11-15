import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MeetTheTeam from "../src/pages/meetTheTeam";

describe("MeetTheTeam Component", () => {
  test("renders the team member names and roles", () => {
    render(<MeetTheTeam />);

    // Check if team members' names are rendered correctly
    expect(screen.getByText("Matthew")).toBeInTheDocument();
    expect(screen.getByText("Tony")).toBeInTheDocument();
    expect(screen.getByText("Chris")).toBeInTheDocument();
    expect(screen.getByText("Nadia")).toBeInTheDocument();
    expect(screen.getByText("Jonathan")).toBeInTheDocument();
    expect(screen.getByText("Bex")).toBeInTheDocument();
    expect(screen.getByText("Derek")).toBeInTheDocument();
    expect(screen.getByText("Amanda")).toBeInTheDocument();

    // Check if team members' roles are rendered correctly
    const roles = screen.getAllByText("Level 3 Personal Trainer");
    expect(roles.length).toBe(7); // There are 7 Level 3 Personal Trainers
    expect(screen.getByText("Level 2 Personal Trainer")).toBeInTheDocument(); // There is 1 Level 2 Personal Trainer
  });

  test("renders the Instagram links for each team member", () => {
    render(<MeetTheTeam />);

    // Ensure that Instagram links are present and have correct hrefs
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(8); // There are 8 Instagram links

    expect(links[0]).toHaveAttribute(
      "href",
      "https://www.instagram.com/fitality_pt?igsh=ZTQyZXBlYzEwOWxk"
    );
    expect(links[1]).toHaveAttribute(
      "href",
      "https://www.instagram.com/tonymoranfitness?igsh=MTNuYzd5ZWZvMmtwYQ=="
    );
    expect(links[2]).toHaveAttribute(
      "href",
      "https://www.instagram.com/coached_by_chris?igsh=NzZuaW5sdW53c3l0"
    );
    expect(links[3]).toHaveAttribute(
      "href",
      "https://www.instagram.com/nadiafantastico?igsh=MXFkYmFmMWZ4emp5Ng=="
    );
    expect(links[4]).toHaveAttribute(
      "href",
      "https://www.instagram.com/jonny_boy_83?igsh=MWl6ZWF3Y3VnN2R2bw=="
    );
    expect(links[5]).toHaveAttribute(
      "href",
      "https://www.instagram.com/bex_theempowermentpt?igsh=ZTF0enNqbnZ3cDNh"
    );
    expect(links[6]).toHaveAttribute(
      "href",
      "https://www.instagram.com/discover_training?igsh=MWhxcGF6M3JzdXNyYg=="
    );
    expect(links[7]).toHaveAttribute(
      "href",
      "https://www.instagram.com/move_with_amanda?igsh=MWxtc3VnMm1teXBqNA=="
    );
  });
});
