import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Home";


describe("Home page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should match snapshot', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment(<Home />)).toMatchSnapshot();
  });

  it("should render heading", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Home page/i);
  });

  it("should render requirements list", () => {
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(5);
  })
});
