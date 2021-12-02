import React from "react";
import axios from "axios";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import {
  wrapWithRedux,
  albums,
  newAlbum,
  editedAlbum,
  albumData,
} from "./testHelpers";
import userEvent from "@testing-library/user-event";
import App from "./App";
jest.mock("axios");

describe("App", () => {
  beforeEach(() => {
    axios.create.mockImplementation(() => axios);
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: albums }));
  });

  it("should fetch albums on start", async () => {
    render(wrapWithRedux(<App />));

    const linkAlbums = screen.getByRole("link", { name: "Albums" });
    userEvent.click(linkAlbums);

    const albumsList = await screen.findAllByRole("listitem");
    expect(albumsList).toHaveLength(2);
  });

  it("should change albums list after album delete", async () => {
    axios.delete.mockImplementationOnce(() => Promise.resolve({ data: {} }));
    render(wrapWithRedux(<App />));

    const linkAlbums = screen.getByRole("link", { name: "Albums" });
    userEvent.click(linkAlbums);

    const albumsList = screen.getAllByRole("listitem");
    const deleteButton = screen.getAllByRole("button", { name: "Delete" })[0];
    userEvent.click(deleteButton);

    const successMessage = await screen.findAllByText(
      /Album successfuly removed/i
    );
    expect(successMessage[0]).toBeInTheDocument();
    expect(albumsList[0]).not.toBeInTheDocument();
  });

  it("should add new album item to albums list after successfull form submit", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: newAlbum })
    );
    render(wrapWithRedux(<App />));

    const linkCreteAlbum = screen.getByRole("link", { name: "Create album" });
    userEvent.click(linkCreteAlbum);

    const titleInput = screen.getByRole("textbox");
    const userIdInput = screen.getByRole("spinbutton");
    const submitButton = screen.getByRole("button", { name: "Submit" });

    userEvent.type(userIdInput, "2");
    userEvent.tab();
    userEvent.type(titleInput, "Album title");
    userEvent.click(submitButton);

    const successMessage = await screen.findAllByText(
      /Album successfuly created/i
    );
    expect(successMessage[0]).toBeInTheDocument();
    const newAlbumTitle = await screen.findByRole("link", {
      name: /Album title/i,
    });
    expect(newAlbumTitle).toBeInTheDocument();
  });

  it("should update album item after edit form submit", async () => {
    axios.put.mockImplementationOnce(() =>
      Promise.resolve({ data: editedAlbum })
    );
    render(wrapWithRedux(<App />));

    const linkAlbums = screen.getByRole("link", { name: "Albums" });
    userEvent.click(linkAlbums);

    let albumsList = await screen.findAllByRole("listitem");
    expect(albumsList).toHaveLength(3);

    const linkEditAlbum = screen.getAllByRole("button", { name: "Edit" })[0];
    userEvent.click(linkEditAlbum);

    const titleInput = screen.getByRole("textbox");
    const userIdInput = screen.getAllByRole("spinbutton")[1];
    const submitButton = screen.getByRole("button", { name: "Submit" });
    userEvent.type(userIdInput, "2");
    userEvent.tab();
    userEvent.type(titleInput, "Edited album title");
    userEvent.click(submitButton);

    const successMessage = await screen.findAllByText(
      /Album successfuly updated/i
    );
    expect(successMessage[0]).toBeInTheDocument();

    const editedAlbumTitle = await screen.findByRole("link", {
      name: /Edited album title/i,
    });
    expect(editedAlbumTitle).toBeInTheDocument();
  });
});
