import { describe, test, expect } from "vitest";
import isGreaterThan from "./isGreaterThan";

describe("Given method isGreaterThan", () => {
  test("When input value is non-number Then an error must be thrown", () => {
    const value = "test";
    const threshold = 13;


    expect(() => isGreaterThan(value, threshold)).toThrowError();
  });

  test("When input threshold is non-number Then an error must be thrown", () => {

    const value = 13;
    const threshold = "test";


 
    expect(() => isGreaterThan(value, threshold)).toThrowError();
  });

  test("When input threshold is non-number Then error message must be expected number but received string", () => {
  
    const value = 13;
    const threshold = "test";

    try {

      isGreaterThan(value, threshold);
    } catch (error) {
  
      expect(error.message).toBe("expected number but received string");
    }
  });

  test("When input value is 13 input threshold is 12 Then the result returned must be true", () => {

    const value = 13;
    const threshold = 12;


    const result = isGreaterThan(value, threshold);


    expect(result).toBe(true);
  });

  test("When input value is 13 input threshold is 13 Then the result returned must be false", () => {

    const value = 13;
    const threshold = 13;


    const result = isGreaterThan(value, threshold);


    expect(result).toBe(false);
  });

  test("When input value is 13 input threshold is 20 Then the result returned must be false", () => {
    const value = 13;
    const threshold = 20;


    const result = isGreaterThan(value, threshold);

    expect(result).toBe(false);
  });
});
