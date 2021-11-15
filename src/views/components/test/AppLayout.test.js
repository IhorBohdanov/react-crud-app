import React from "react";
import { render, screen } from "@testing-library/react";
import AppLayout from "../AppLayout";

describe("AppLayout component", () => {
  it("render logo", () => {
    render(<AppLayout/>);
    const logo = screen.getByText(/Logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("render footer copyright", () => {
    render(<AppLayout loaderVisible={false}/>);
    const copyright = screen.getByText("Ant Design ©2018 Created by Ant UED");
    expect(copyright).toBeInTheDocument();
  })

  it("render component children", () => {
    render(<AppLayout><p>{"child node"}</p></AppLayout>);
    const childNode = screen.getByText("child node");
    expect(childNode).toBeInTheDocument();
  })

  it("render component with loader ", () => {
    render(<AppLayout loaderVisible={true} />);
    const loader = screen.getAllByTestId("spinner");
    // TestID is placed in 2 components by Ant Design lib.
    // 1 is container
    // 2 is loader
    expect(loader[0]).toBeInTheDocument();
    expect(loader[1]).toBeInTheDocument();
  });

  it("render component without loader ", () => {
    render(<AppLayout loaderVisible={false} />);
    const loader = screen.getAllByTestId("spinner");
    // Only container
    expect(loader).toHaveLength(1);
  });

  it("render menu", () => {
    render(<AppLayout />);
    const menu = screen.getByRole("menu");
    const menuItems = screen.getAllByRole("menuitem");
    expect(menu).toBeInTheDocument();
    expect(menuItems).toHaveLength(3);
    expect(menuItems[0]).toHaveTextContent(/Home/i);
    expect(menuItems[1]).toHaveTextContent(/Albums/i);
    expect(menuItems[2]).toHaveTextContent(/Create album/i);
  })
});
