import React from "react";
import { render, screen } from "@testing-library/react";
import AlbumItem from "../AlbumItem";
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from "react-router-dom";

describe("AlbumItem component", () => {
  let item
  let handleDelete
  beforeEach(() => {
    item = {
      id: 2,
      title: "sunt qui excepturi placeat culpa",
      userId: 1,
    };
    handleDelete = jest.fn();

    render(
      <Router>
        <AlbumItem item={item} handleDelete={handleDelete} />
      </Router>
    );
  });

  it("Render component", () => {
    const title = screen.getByText(/sunt qui excepturi placeat culpa/i);
    const id = screen.getByText(/2/i);
    const deleteButton = screen.getByRole('button', { name: 'Delete'});
    const editButton = screen.getByRole('button', { name: 'Edit'});
    expect(title).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(editButton).toBeInTheDocument();
  });

  it("Delete button press", () => {
    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    userEvent.click(deleteButton);
    expect(handleDelete).toBeCalled();
    expect(handleDelete).toBeCalledTimes(1);
    expect(handleDelete).toBeCalledWith(2);
  })
});
