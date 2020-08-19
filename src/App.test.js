import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Trying again", () => {
  const { getByText } = render(<App />);
  const pTag = getByText(/Trying again/);
  expect(pTag).toBeInTheDocument();
});

test("renders user name", () => {
  const { getByText } = render(<App />);
  const name = getByText(/Eduardo/);
  expect(name).toBeInTheDocument();
});

test("renders user name", () => {
  const { getByText } = render(<App />);
  const name = getByText(/Eduardo/);
  expect(name).toBeInTheDocument();
});
