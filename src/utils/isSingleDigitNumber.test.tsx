import { isSingleDigitNumber } from "./isSingleDigitNumber";

test("Number greater than 10:", () => {
  expect(isSingleDigitNumber(11)).toBe(false);
});

test("Number less than 10:", () => {
  expect(isSingleDigitNumber(5)).toBe(true);
});
