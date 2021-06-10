import { render, fireEvent } from "@testing-library/react";
import AbilityLabelGroup from "./AbilityLabelGroup";

test("display list of abilities", () => {
  const abilities = [{ ability: { name: "a" } }, { ability: { name: "b" } }];

  const { getByText } = render(<AbilityLabelGroup abilities={abilities} />);

  expect(getByText("a")).toBeInTheDocument();
  expect(getByText("b")).toBeInTheDocument();
});
