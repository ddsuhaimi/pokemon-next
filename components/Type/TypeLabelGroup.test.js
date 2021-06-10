import { render, fireEvent } from "@testing-library/react";
import TypeLabelGroup from "./TypeLabelGroup";

test("display list of types", () => {
  const types = [{ type: { name: "a" } }, { type: { name: "b" } }];

  const { getByText } = render(<TypeLabelGroup types={types} />);

  expect(getByText("a")).toBeInTheDocument();
  expect(getByText("b")).toBeInTheDocument();
});
