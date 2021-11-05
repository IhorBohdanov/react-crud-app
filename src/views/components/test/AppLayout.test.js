import React from "react";
import { render, screen } from "@testing-library/react";
import AppLayout from "../AppLayout";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";

describe("AppLayout component", () => {
  it("Render component", () => {
    render(<AppLayout>{'asdasd'}</AppLayout>)
    
  });
});
