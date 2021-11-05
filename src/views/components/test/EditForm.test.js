import React from "react";
import { render, screen } from "@testing-library/react";
import EditForm from "../EditForm";
import userEvent from "@testing-library/user-event";

describe("EditForm component", () => {
  let formModel;
  let handleSubmit;

  beforeEach(() => {
    formModel = {
      id: "1",
      title: "sunt qui excepturi placeat culpa",
      setTitle: jest.fn(),
      userId: "3",
      setUserId: jest.fn(),
    };

    handleSubmit = jest.fn();
  });

  it("Render component without existing album", () => {
    formModel = {
      title: "",
      userId: "",
      setTitle: jest.fn(),
      setUserId: jest.fn(),
    }

    render(<EditForm formModel={formModel} />);
    const idLabel = screen.queryByText("Id");
    const titleLabel = screen.getByText("Title");
    const userIdLabel = screen.getByText("User Id");
    const titleInput = screen.getByRole("textbox");
    const userIdInput = screen.getByRole("spinbutton");
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(idLabel).not.toBeInTheDocument();
    expect(titleLabel).toBeInTheDocument();
    expect(userIdLabel).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(userIdInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it("Render component with existing album", () => {
    render(<EditForm formModel={formModel} />);
    const idLabel = screen.getByText("Id");
    const titleLabel = screen.getByText("Title");
    const userIdLabel = screen.getByText("User Id");
    const titleInput = screen.getByRole("textbox");
    const numberInputs = screen.getAllByRole("spinbutton");
    const submitButton = screen.getByRole("button", { name: "Submit" });
    expect(idLabel).toBeInTheDocument();
    expect(titleLabel).toBeInTheDocument();
    expect(userIdLabel).toBeInTheDocument();
    expect(titleInput).toBeInTheDocument();
    expect(titleInput).toHaveValue("sunt qui excepturi placeat culpa");
    expect(numberInputs).toHaveLength(2);
    expect(numberInputs[0]).toHaveValue("1");
    expect(numberInputs[1]).toHaveValue("3");
    expect(submitButton).toBeInTheDocument();
  });

  it("submit button press with empty title value", () => {
    formModel={
      title: "",
      userId: 2,
      setTitle: jest.fn(),
      setUserId: jest.fn(),
    }
    render(<EditForm formModel={formModel} handleSubmit={handleSubmit}/>);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);
    expect(handleSubmit).not.toBeCalled();
  });


  it("submit button press with empty userId value", () => {
    formModel={
      title: "sunt qui excepturi placeat culpa",
      userId: "",
      setTitle: jest.fn(),
      setUserId: jest.fn(),
    }
    render(<EditForm formModel={formModel} handleSubmit={handleSubmit}/>);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);
    expect(handleSubmit).not.toBeCalled();
  });

  it("submit button press with correct data", () => {
    render(<EditForm formModel={formModel} handleSubmit={handleSubmit}/>);
    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.click(submitButton);
    expect(handleSubmit).toBeCalled();
    expect(handleSubmit).toBeCalledTimes(1);
    expect(handleSubmit).toBeCalledWith({
      id: "1", 
      title: "sunt qui excepturi placeat culpa",
      userId: "3"
    });
  });

  it("fire title change handler", () => {
    render(<EditForm formModel={formModel} handleSubmit={handleSubmit}/>);
    const titleInput = screen.getByRole("textbox");
    userEvent.type(titleInput, "test string");
    expect(formModel.setTitle).toBeCalled();
  })

  it("fire userId change handler", () => {
    render(<EditForm formModel={formModel} handleSubmit={handleSubmit}/>);
    const userIdInput = screen.getAllByRole("spinbutton")[1];
    userEvent.type(userIdInput, "1");
    userEvent.tab(); // to fire blur change event (blur)
    screen.debug(userIdInput);
    expect(formModel.setUserId).toBeCalled();
  })
});
