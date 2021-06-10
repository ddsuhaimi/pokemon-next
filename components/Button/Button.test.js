import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("click the button", () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Click</Button>);

  fireEvent.click(getByText("Click"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
