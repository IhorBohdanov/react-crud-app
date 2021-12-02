import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Albums from "../Albums";
import { albums } from "../../../testHelpers";



describe("Albums page", () => {
  let onAlbumDelete;

  beforeEach(() => {
    onAlbumDelete =jest.fn();
  })

  it('should match snapshot', () => {
    const { asFragment } = render(<Albums albums={[]} onAlbumDelete={onAlbumDelete} />);
    expect(asFragment(<Albums albums={[]} onAlbumDelete={onAlbumDelete} />)).toMatchSnapshot();
  });

  it("should be rendered without albums", () => {
    render(<Albums albums={[]} onAlbumDelete={onAlbumDelete} />);
    const heading = screen.getByRole("heading", { name: "Albums page" });
    const noDataLabel = screen.getByText(/no data/i);
    expect(heading).toBeInTheDocument();
    expect(noDataLabel).toBeInTheDocument();
  });

  it("should be rendered with albums list", () => {
    render(<Router><Albums albums={albums} onAlbumDelete={onAlbumDelete} /></Router>);
    const albumsList = screen.getAllByRole('listitem');
    expect(albumsList).toHaveLength(2);
  });
});
