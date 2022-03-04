const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "LSU";
  const int = new Intern("Foo", 1, "test@email.com", testValue);
  expect(int.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const int = new Intern("Foo", 1, "test@email.com", "LSU");
  expect(int.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "LSU";
  const int = new Intern("Foo", 1, "test@email.com", testValue);
  expect(int.getSchool()).toBe(testValue);
});
