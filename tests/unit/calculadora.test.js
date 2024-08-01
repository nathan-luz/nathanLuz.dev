const calculadora = require("../../models/calculadora.js");


test("Testando a função de soma", () => {
  const sumTestCases = [
    { a: 1, b: 2, expected: 3 },
    { a: 5, b: 5, expected: 10 },
    { a: -3, b: 3, expected: 0 },
  ];

  sumTestCases.forEach((testCase) => {
    console.log(`${testCase.a} + ${testCase.b} = ${testCase.expected}`);
    expect(calculadora.somar(testCase.a, testCase.b)).toBe(testCase.expected);
  });
});