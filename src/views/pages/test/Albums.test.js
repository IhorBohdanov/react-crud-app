import React from "react";
import { render, screen } from "@testing-library/react";
import Albums from "../Albums";

import { BrowserRouter as Router } from 'react-router-dom';

describe("Albums page", () => {
  it("Render empty Albums page", () => {
    const onAlbumDelete =jest.fn();
    render(<Albums albums={[]} onAlbumDelete={onAlbumDelete} />);
    const heading = screen.getByRole("heading", { name: "Albums page" });
    const noDataLabel = screen.getByText(/no data/i);
    expect(heading).toBeInTheDocument();
    expect(noDataLabel).toBeInTheDocument();
  });

  it("Render list of albums", () => {
    const albums = [
      {
        id: 1,
        title: "quidem molestiae enim",
        userId: 1,
      },
      {
        id: 2,
        title: "sunt qui excepturi placeat culpa",
        userId: 2,
      },
    ];

    const onAlbumDelete =jest.fn();
    render(<Router><Albums albums={albums} onAlbumDelete={onAlbumDelete} /></Router>);
    const albumsList = screen.getAllByRole('listitem');
    expect(albumsList).toHaveLength(2);
  });
});
