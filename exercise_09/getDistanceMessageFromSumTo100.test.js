import { describe, test, expect, vi } from "vitest";
import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100";

describe("Given method getDistanceMessageFromSumTo100", () => {
  test("When value type is non-number Then an error must be thrown", () => {
    const value = [];


    expect(() => getDistanceMessageFromSumTo100(value)).toThrowError();
  });

  test("When value type is an array Then the error must be expected number but received array", () => {
    const value = [];

    try {
      getDistanceMessageFromSumTo100(value);
    } catch (error) {
      expect(error.message).toBe("expected number but received array");
    }
  });

  test("When value type is an string Then the error must be expected number but received string", () => {
    const value = "test";

    try {
      getDistanceMessageFromSumTo100(value);
    } catch (error) {
      expect(error.message).toBe("expected number but received string");
    }
  });

  test("When value is 50 and randomMockNumber 0.1 Then the result returned must be Sum with value 60 is left in 40 from number 100", () => {
    const randomMockNumber = 0.1;

    vi.spyOn(Math, "random").mockReturnValue(randomMockNumber);

    const value = 50;

    const result = getDistanceMessageFromSumTo100(value);

    expect(result).toBe("Sum with value 60 is left in 40 from number 100");
  });

  test("When value is 60 and randomMockNumber 0.5 Then the result returned must be Sum with value 110 exceeds in 10 from number 100", () => {
    const randomMockNumber = 0.5;

    vi.spyOn(Math, "random").mockReturnValue(randomMockNumber);

    const value = 60;


    const result = getDistanceMessageFromSumTo100(value);

    expect(result).toBe("Sum with value 110 exceeds in 10 from number 100");
  });

  test("When value is 0 and randomMockNumber 0.5 Then the result returned must be Sum with value 50 is left in 50 from number 100", () => {
    const randomMockNumber = 0.5;

    vi.spyOn(Math, "random").mockReturnValue(randomMockNumber);

    const value = 0;

    const result = getDistanceMessageFromSumTo100(value);

    expect(result).toBe("Sum with value 50 is left in 50 from number 100");
  });
});
