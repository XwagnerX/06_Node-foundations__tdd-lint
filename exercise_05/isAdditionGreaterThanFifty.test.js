import { describe, test, expect } from "vitest";
import isAdditionGreaterThanFifty from "./isAdditionGreaterThanFifty";

describe("Given method isAdditionGreaterThanFifty", () => {
  test("When summand1 is non-number Then an error must be thrown", () => {

    const summand1 = "test";
    const summand2 = 13;

    expect(() => isAdditionGreaterThanFifty(summand1, summand2)).toThrowError();
  });
  test("When summand2 is non-number Then an error must be thrown", () => {

    const summand1 = 13;
    const summand2 = "test";


    expect(() => isAdditionGreaterThanFifty(summand1, summand2)).toThrowError();
  });

  test("When summand2 is a string Then the error message must be expected number but received string", () => {
    const summand1 = 13;
    const summand2 = "test";

    try {
      isAdditionGreaterThanFifty(summand1, summand2);
    } catch (error) {
 
      expect(error.message).toBe("expected number but received string");
    }
  });

  test("When summand1 is 10 and summand2 is 20 Then the result returned must be false", () => {

    const summand1 = 10;
    const summand2 = 20;


    const result = isAdditionGreaterThanFifty(summand1, summand2);

  
    expect(result).toBe(false);
  });

  test("When summand1 is 30 and summand2 is 40 Then the result returned must be true", () => {
 
    const summand1 = 30;
    const summand2 = 40;

 
    const result = isAdditionGreaterThanFifty(summand1, summand2);

  
    expect(result).toBe(true);
  });

  test("When summand1 is 10 and summand2 is 40 Then the result returned must be true", () => {
    const summand1 = 10;
    const summand2 = 40;

    const result = isAdditionGreaterThanFifty(summand1, summand2);

    expect(result).toBe(true);
  });
});
