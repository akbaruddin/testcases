import snakeCase from "./snakeCase";

describe('Case conversion', function() {
  test('sakeCase => sake_case', () => {
    expect(snakeCase("sakeCase")).toBe("sake_case");
  });

  test('ComputerHope => computer_hope', () => {
    expect(snakeCase("ComputerHope")).toBe("computer_hope");
  });

  test('random => random', () => {
    expect(snakeCase("random")).toBe("random");
  });
});

