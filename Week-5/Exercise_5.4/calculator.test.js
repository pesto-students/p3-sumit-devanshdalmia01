const mathOperations = require("./script");
describe("Calculator Tests", () => {
	test("1 + 2 should return 3", () => {
		expect(mathOperations.sum(1, 2)).toBe(3);
	});
	test("12 - 10 should return 2", () => {
		expect(mathOperations.diff(12, 10)).toBe(2);
	});
	test("3 * 2 should return 6", () => {
		expect(mathOperations.multiply(3, 2)).toBe(6);
	});
});
