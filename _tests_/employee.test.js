const Employee = require("../lib/Employee");

test("Can create Employee instance", () => {
  const emp = new Employee();
  expect(typeof(emp)).toBe("object");
});

test("Can set name using constructor arguments", () => {
  const name = "Betty";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Can set id using constructor argument", () => {
  const testValue = 100;
  const emp = new Employee("Foo", testValue);
  expect(emp.id).toBe(testValue);
});

test("Can set email using constructor argument", () => {
  const testValue = "test@email.com";
  const emp = new Employee("Foo", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Can get name using getName()", () => {
  const testValue = "Betty";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Can get id using getId()", () => {
  const testValue = 100;
  const emp = new Employee("Foo", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Can get email using getEmail()", () => {
  const testValue = "test@email.com";
  const emp = new Employee("Foo", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const emp = new Employee("Betty", 1, "test@email.com");
  expect(emp.getRole()).toBe(testValue);
});
