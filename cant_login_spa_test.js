Feature("SPA login with new responsive design");

Scenario("Log in using Lock", ({ I }) => {
  I.amOnPage("/");
  I.waitForVisible("#qsLoginBtn", 20);
  I.click("#qsLoginBtn");
  I.waitForVisible('input[name="password"]', 20);
  I.wait(1);
  I.fillField('input[name="username"]', "asdasd");
  I.fillField('input[name="password"]', "asdasd");
  I.click("button[type='submit']");
  I.wait(3);
  I.waitForVisible('span[id="error-element-password"]', 20);
  I.see("Wrong email or password");
});
