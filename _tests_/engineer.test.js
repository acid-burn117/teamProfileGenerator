const Engineer = require("../lib/Engineer");

test("Can set GitHUb account using constructor", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Foo", 1, "test@email.com", testValue);
  expect(eng.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const eng = new Engineer("Foo", 1, "test@email.com", "GitHubUser");
  expect(eng.getRole()).toBe(testValue);
});

test("Can get GitHub username using getGithub()", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Foo", 1, "test@email.com", testValue);
  expect(eng.getGithub()).toBe(testValue);
});
