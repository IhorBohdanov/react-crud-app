import React from "react";
import { screen, render } from "@testing-library/react";
import SingleAlbum from "../SingleAlbum";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { wrapWithRedux, wrapWithRout,  albumData, photos } from "../../../testHelpers";

const mockAxios = (albumData, photos) => {
  axios.get.mockImplementation((url) => {
    let res;
    switch (url) {
      case "1":
        res = albumData;
        break;
      case "1/photos":
        res = photos;
        break;
      case "2":
        res = {};
        break;
      case "2/photos":
        res = []
        break;
    }
    return Promise.resolve({ data: res });
  });
} 

const rerender = (route = "/albums/1") => {
  render(wrapWithRedux(wrapWithRout(<SingleAlbum />, {path: "/albums/:id", route })))
}


describe("Single Album page", () => {
  it("render with data", async () => {
    mockAxios(albumData, photos);

    await act(async () => {
      rerender();
    });
    const title = screen.getByRole("heading", { name: /Album title/i });
    const images = screen.getAllByRole('img');
    expect(title).toBeInTheDocument();
    expect(images).toHaveLength(3);
  });

  it("render without data", async () => {
    mockAxios({}, []);
    await act(async () => {
      rerender("/albums/2");
    });

    const title = screen.queryByRole("heading");
    const images = screen.queryAllByRole('img');
    const noDataLable = screen.getByText(/No data/i); 
    expect(title).not.toBeInTheDocument();
    expect(images).toHaveLength(0);
    expect(noDataLable).toBeInTheDocument();
  })
});
