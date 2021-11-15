import React from "react";
import { render, screen } from "@testing-library/react";
import CreateAlbum from "../CreateAlbum";
import { wrapWithRedux } from "../../../testHelpers";

describe("Create Album page", () => {

  beforeEach(() => {
    render(wrapWithRedux(<CreateAlbum />));
  });

  it("render heading", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Create album/i);
  });

  it("render form", () => {
    const titleLabel = screen.getByText("Title");
    const userIdLabel = screen.getByText("User Id");
    const titleInput = screen.getByRole("textbox");
    const userIdInput = screen.getByRole("spinbutton");
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(titleLabel).toBeInTheDocument();
    expect(userIdLabel).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(userIdInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  })
});
