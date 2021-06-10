import { capitalizeFirstLetter } from "./stringHelper";

test("Change first letter correctly", () => {
  expect(capitalizeFirstLetter("abc")).toEqual("Abc");
});
