import { render } from "@testing-library/react";
import Modal from "./Modal";

test("render modal correctly", () => {
  const { getByText } = render(<Modal show={true}>Test</Modal>);

  expect(getByText("Test")).toBeInTheDocument();
});
