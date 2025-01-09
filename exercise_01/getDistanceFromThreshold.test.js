import { describe, test, expect } from "vitest";
import getDistanceFromThreshold from "./getDistanceFromThreshold";

describe("Given method getDistanceFromThreshold", () => {
  test("When recieves a non-number input value Then an error must be thrown", () => {
    const value = "test";
    const threshold = 13;


    expect(() => getDistanceFromThreshold(value, threshold)).toThrowError();
  });

  test("When recieves a non-number input threshold Then an error must be thrown", () => {
    const value = 13;
    const threshold = "test";

    expect(() => getDistanceFromThreshold(value, threshold)).toThrowError();
  });

  test("When recieves a string input value Then an error must be expected number but recieved string", () => {
    const value = "test";
    const threshold = 13;

    try {

      getDistanceFromThreshold(value, threshold);
    } catch (error) {
      expect(error.message).toBe("expected number but recieved string");
    }
  });

  test("When recieves values 1 and 8 Then the number returned must be -8", () => {
    const value = 1;
    const threshold = 9;

    const result = getDistanceFromThreshold(value, threshold);

    expect(result).toBe(-8);
  });

  test("When recieves values 4 and 2 Then the number returned must be 2", () => {
    const value = 4;
    const threshold = 2;

    const result = getDistanceFromThreshold(value, threshold);

    //Assert
    expect(result).toBe(2);
  });

  test("When recieves values 14 and 14 Then the number returned must be 0", () => {
    const value = 14;
    const threshold = 14;

    //Act
    const result = getDistanceFromThreshold(value, threshold);

    //Assert
    expect(result).toBe(0);
  });
});
