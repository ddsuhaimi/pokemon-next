/**
 * @jest-environment jsdom
 */
import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

test("change the value", () => {
  const button = render(<Input />);
  const input = button.getByTestId("input-test");
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("23");
});
