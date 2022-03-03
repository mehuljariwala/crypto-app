import React from "react";
import { render } from "@testing-library/react";
import Dashboard from ".";

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
  const res = {
    send: function () {},
    json: function (err) {
      return new Promise((resolve) => {
        resolve({ data: Array.from(1000).fill("a") });
      });
    },
    status: function (responseStatus) {
      return this;
    },
  };
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve(res));

  it("should render app", () => {
    const { container } = render(<Dashboard />);
    expect(container).toBeDefined();
  });
});
