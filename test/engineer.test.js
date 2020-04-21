const Engineer = require("./lib/Engineers");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("New", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineers\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("New", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("New", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
