import { render } from "@testing-library/react";
import App from "./App";
import React from "react";

jest.mock("react-apexcharts", () =>
  jest.fn(() => {
    return null;
  })
);
jest.mock("apexcharts", () => ({
  exec: jest.fn(() => {
    return new Promise((resolve) => {
      resolve("uri");
    });
  }),
}));

describe("App component", () => {
  it("should render app", () => {
    const { container } = render(<App />);
    expect(container).toBeDefined();
  });
});
