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

  it("should redirect to 404 page when user go to invalid url", async () => {
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

  it("should go to go to Albums page, when user click Albums link", async () => {
    const linkAlbums = screen.getByRole("link", { name: "Albums" });
    userEvent.click(linkAlbums);
    const heading = screen.getByRole("heading", { name: "Albums page" });
    expect(heading).toBeInTheDocument();
  });

  it("should go to go to Create album page, when user click Create album link", async () => {
    const linkCreteAlbum = screen.getByRole("link", { name: "Create album" });
    userEvent.click(linkCreteAlbum);
    const heading = screen.getByRole("heading", { name: "Create Album" });
    expect(heading).toBeInTheDocument();
  });

  it("should go to go to Home page, when user click Logo", async () => {
    const logoLink = screen.getByText(/logo/i);
    userEvent.click(logoLink);
    const heading = screen.getByRole("heading", { name: "Home page" });
    expect(heading).toBeInTheDocument();
  });
});
