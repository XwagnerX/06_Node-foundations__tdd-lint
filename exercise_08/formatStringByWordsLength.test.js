import { describe, test, expect } from "vitest";
import formatStringByWordsLength from "./formatStringByWordsLength";

describe("Given method formatStringByWordsLength", () => {
  test("When the input type is non-string Then an error must be thrown", () => {
    const sentence = 2;


    expect(() => formatStringByWordsLength(sentence)).toThrowError();
  });

  test("When the input type is a number Then the error must be expected string but received number", () => {

    const sentence = 2;

    try {
      formatStringByWordsLength(sentence);
    } catch (error) {
      expect(error.message).toBe("expected string but received number");
    }
  });

  test("When the input type is an array Then the error must be expected string but received array", () => {

    const sentence = [];

    try {

      formatStringByWordsLength(sentence);
    } catch (error) {
      expect(error.message).toBe("expected string but received array");
    }
  });

  test("When the sentece is 'test test test test test test' Then the result returned must be 'TEST TEST TEST TEST TEST TEST'", () => {
    const sentence = "test test test test test test";

    const result = formatStringByWordsLength(sentence);
    expect(result).toBe("TEST TEST TEST TEST TEST TEST");
  });

  test("When the sentece is 'test test test test' Then the result returned must be 'test test test test'", () => {
    const sentence = "test test test test";

    const result = formatStringByWordsLength(sentence);
    expect(result).toBe("test test test test");
  });

  test("When the sentece is 'test' Then the result returned must be 'test'", () => {
    const sentence = "test";

    const result = formatStringByWordsLength(sentence);
    expect(result).toBe("test");
  });
});
