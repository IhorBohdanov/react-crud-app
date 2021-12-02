import React from "react";
import { render, screen } from "@testing-library/react";
import Page404 from "../Page404";


describe("404 page", () => {

  it('should match snapshot', () => {
    const { asFragment } = render(<Page404 />);
    expect(asFragment(<Page404 />)).toMatchSnapshot();
  });
});