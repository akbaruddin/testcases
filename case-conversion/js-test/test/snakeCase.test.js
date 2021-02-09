const { expect } = require("chai");
const { snakeCase } = require("../snakeCase.js");

describe('Case conversion', function() {
  it('snakeCase => snake_case', function() {
    expect(snakeCase("sakeCase")).equal("sake_case");
  });
});