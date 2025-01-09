import { describe, test, expect, vi } from "vitest";
import generateRandomNumberInRange from "./generateRandomNumberInRange";

describe("Given method generateRandomNumberInRange", () => {
  test("When a non-number is recieved Then an error must be thrown", () => {
    const threshold = "test";


    expect(() => generateRandomNumberInRange(threshold)).toThrowError();
  });

  test("When a string is recieved Then the error message must be expected number but received string", () => {
    //Arrange
    const threshold = "test";

    try {
      generateRandomNumberInRange(threshold);
    } catch (error) {
 
      expect(error.message).toBe("expected number but received string");
    }
  });

  test("When a string is recieved Then the error message must be expected number but received boolean", () => {
   
    const threshold = true;

    try {
   
      generateRandomNumberInRange(threshold);
    } catch (error) {
      expect(error.message).toBe("expected number but received boolean");
    }
  });

  test("When the threshold is 10 and the mockRandomValue is 0.5 Then result must be 5", () => {

    const mockRandomValue = 0.5;

    vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);


    const threshold = 10;


    const result = generateRandomNumberInRange(threshold);


    expect(result).toBe(5);
  });

  test("When the threshold is 100 and the mockRandomValue is 0.49 Then result must be 49", () => {
    const mockRandomValue = 0.49;

    vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);


    const threshold = 100;


    const result = generateRandomNumberInRange(threshold);


    expect(result).toBe(49);
  });

  test("When the threshold is 50 and the mockRandomValue is 0.5 Then result must be 25", () => {

    const mockRandomValue = 0.5;

    vi.spyOn(Math, "random").mockReturnValue(mockRandomValue);

 
    const threshold = 50;


    const result = generateRandomNumberInRange(threshold);

    expect(result).toBe(25);
  });
});
