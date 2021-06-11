import { render, fireEvent } from "@testing-library/react";
import InfoState from "./InfoState";

test("render loading", () => {
  const { getByText } = render(<InfoState state="loading" />);

  expect(getByText("Loading...")).toBeInTheDocument();
});

test("render error", () => {
  const { getByText } = render(<InfoState state="error" />);

  expect(getByText("Error. Make sure your internet is working")).toBeInTheDocument();
});
