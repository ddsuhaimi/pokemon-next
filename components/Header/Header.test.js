import { render } from "../../tests/utils";
import Header from "./Header";

test("renders correctly", () => {
  const { getByText } = render(<Header />);

  expect(getByText("Pokemon list")).toBeInTheDocument();
  expect(getByText("My pokemon")).toBeInTheDocument();
});
