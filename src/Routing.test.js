import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { createMemoryHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import { wrapWithRedux } from "./testHelpers";
import { act } from "react-dom/test-utils";

const renderWithRouter = (component, route = "/") => {
  window.history.pushState({}, "Test page", route);
  return render(wrapWithRedux(component));
};

describe("Router", () => {
  beforeEach(async () => {
    await act(async () => {
      const history = createMemoryHistory();
      renderWithRouter(
        <Router history={history}>
          <App />
        </Router>
      );
    });
  });

  it("go to invalid url", async () => {
    const history = createMemoryHistory();
    // It works only when i set route directly to render function
    renderWithRouter(
      <Router history={history}>
        <App />
      </Router>,
      "/invalid-url" // (1) setting invalid url
    );

    // It doesn't work when i use it instead of (1)
    // history.push('/invalid-url');
    const Label404 = screen.getByText("404");
    expect(Label404).toBeInTheDocument();
  });

  it("go to Albums page", async () => {
    const linkAlbums = screen.getByRole("link", { name: "Albums" });
    userEvent.click(linkAlbums);
    const heading = screen.getByRole("heading", { name: "Albums page" });
    expect(heading).toBeInTheDocument();
  });

  it("go to Create album page", async () => {
    const linkCreteAlbum = screen.getByRole("link", { name: "Create album" });
    userEvent.click(linkCreteAlbum);
    const heading = screen.getByRole("heading", { name: "Create Album" });
    expect(heading).toBeInTheDocument();
  });
});
