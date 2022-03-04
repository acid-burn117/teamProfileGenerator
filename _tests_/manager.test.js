const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number using constructor argument", () => {
  const testValue = 100;
  const man = new Manager("Foo", 1, "test@email.com", testValue);
  expect(man.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const man = new Manager("Foo", 1, "test@email.com", 100);
  expect(man.getRole()).toBe(testValue);
});

test("Can get office number using getOffice()", () => {
  const testValue = 100;
  const man = new Manager("Foo", 1, "test@email.com", testValue);
  expect(man.getOfficeNumber()).toBe(testValue);
});
