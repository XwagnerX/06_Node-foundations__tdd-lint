import { describe, test, expect } from "vitest";
import isTypeOf from "./isTypeOf";

describe("Given method isTypeOf", () => {
  test("When input type is not valid Then an error must be thrown", () => {
    const value = 2;
    const type = {};


    expect(() => isTypeOf(value, type)).toThrowError();
  });

  test("When input type is an object Then the error message must be expected one of 'string', 'number', 'boolean', 'array' but received object", () => {
    const value = 2;
    const type = {};

    try {
      isTypeOf(value, type);
    } catch (error) {
      expect(error.message).toBe(
        "expected one of 'string', 'number', 'boolean', 'array' but received object",
      );
    }
  });

  test("When input type is an object Then the error message must be expected one of 'string', 'number', 'boolean', 'array' but received object", () => {

    const value = 2;
    const type = Symbol();

    try {
      isTypeOf(value, type);
    } catch (error) {
      expect(error.message).toBe(
        "expected one of 'string', 'number', 'boolean', 'array' but received symbol",
      );
    }
  });

  test("When input type value is an string and input type is 'string' Then the result throwed must be true", () => {
    const value = "test";
    const type = "string";

    const result = isTypeOf(value, type);

    expect(result).toBe(true);
  });

  test("When input type value is a number and input type is 'string' Then the result throwed must be true", () => {
    //Arrange
    const value = 3;
    const type = "string";

    //Act
    const result = isTypeOf(value, type);

    //Assert
    expect(result).toBe(false);
  });

  test("When input type value is an array and input type is 'array' Then the result throwed must be true", () => {
    //Arrange
    const value = [];
    const type = "array";

    //Act
    const result = isTypeOf(value, type);

    //Assert
    expect(result).toBe(true);
  });
});
