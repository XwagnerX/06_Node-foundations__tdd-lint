import { describe, test, expect } from "vitest";
import transformCollectionToString from "./transformCollectionToString";

describe("Given method transformCollectionToString", () => {
  test("When input type is not an array Then an error must be thrown", () => {
    const collection = 2;

    expect(() => transformCollectionToString(collection));
  });

  test("When input type is an string Then the error message must be expected array but received string", () => {
    const collection = "test";

    try {
      transformCollectionToString(collection);
    } catch (error) {
      expect(error.message).toBe("expected array but received string");
    }
  });

  test("When input type is an number Then the error message must be expected array but received number", () => {
    const collection = 2;

    try {
      transformCollectionToString(collection);
    } catch (error) {
      expect(error.message).toBe("expected array but received number");
    }
  });

  test("When input is ['apple', 'grapes', 'strawberries'] Then the result returned must be 'apple | grapes | strawberries'", () => {
    const collection = ["apple", "grapes", "strawberries"];

    const result = transformCollectionToString(collection);

    expect(result).toBe("apple | grapes | strawberries");
  });

  test("When input is [] Then the result returned must be ''", () => {
    const collection = [];

    const result = transformCollectionToString(collection);

    expect(result).toBe("");
  });

  test("When input is ['test', 'test', 'test'] Then the result returned must be 'apple | grapes | strawberries'", () => {
    const collection = ["test", "test", "test"];

    const result = transformCollectionToString(collection);

    expect(result).toBe("test | test | test");
  });
});
