import { describe, test, expect } from "vitest";
import checkCollectionHasElements from "./checkCollectionHasElements";

describe("Given method checkCollectionHasElements", () => {
  test("When collection is not an array Then an error must be thrown", () => {
    const collection = 3;

    expect(() => checkCollectionHasElements(collection)).toThrowError();
  });

  test("When collection is an string Then the error message must be expected array but received string", () => {
    const collection = "test";

    try {
      checkCollectionHasElements(collection);
    } catch (error) {
      expect(error.message).toBe("expected array but received string");
    }
  });

  test("When collection is an number Then the error message must be expected array but received number", () => {
    const collection = 3;

    try {
      checkCollectionHasElements(collection);
    } catch (error) {
      expect(error.message).toBe("expected array but received number");
    }
  });

  test("When collection is empty Then the result returned must be false", () => {
    const collection = [];

    const result = checkCollectionHasElements(collection);

    expect(result).toBe(false);
  });

  test("When collection is not empty Then the result returned must be true", () => {
    const collection = [1, 2, 3, 4];

    const result = checkCollectionHasElements(collection);

    expect(result).toBe(true);
  });

  test("When collection is not empty Then the result returned must be true", () => {
    const collection = ["1", "2", "3", "4"];

    const result = checkCollectionHasElements(collection);

    expect(result).toBe(true);
  });
});
