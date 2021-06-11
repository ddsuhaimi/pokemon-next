import { render, fireEvent } from "@testing-library/react";
import AlertMessage from "./AlertMessage";

test("it displays text", () => {
  const { getByText } = render(<AlertMessage text="some text" icon={<i className="fas fa-user"></i>} />);

  expect(getByText("some text")).toBeInTheDocument();
});
