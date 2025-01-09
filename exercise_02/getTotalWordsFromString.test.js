import { describe, test, expect } from "vitest";
import getTotalWordsFromString from "./getTotalWordsFromString";

describe("Given method getTotalWordsFromString", () => {
  test("When a non-string value is recieved Then an error must be thrown", () => {
    const sentence = 2;

    expect(() => getTotalWordsFromString(sentence)).toThrowError();
  });

  test("When a number value is recieved Then the error message must be expected string but received number", () => {
    const sentence = 2;

    try {
      getTotalWordsFromString(sentence);
    } catch (error) {
      expect(error.message).toBe("expected string but received number");
    }
  });

  test("When a boolean value is recieved Then the error message must be expected string but received boolean", () => {
    const sentence = true;

    try {
      getTotalWordsFromString(sentence);
    } catch (error) {
      expect(error.message).toBe("expected string but received boolean");
    }
  });

  test("When the sentence is test test Then the result must be 2", () => {
    const sentence = "test test";

    const result = getTotalWordsFromString(sentence);

    expect(result).toBe(2);
  });

  test("When the sentence is empty Then the result must be 0", () => {
    const sentence = "";

    const result = getTotalWordsFromString(sentence);

    expect(result).toBe(0);
  });

  test("When the sentence is test test Then the result must be 4", () => {
    const sentence = "test test test test";

    const result = getTotalWordsFromString(sentence);

    expect(result).toBe(4);
  });
});
