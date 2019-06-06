Feature("SPA login with new responsive design");

Scenario("Log in using Lock", I => {
  I.amOnPage("/");
  I.waitForVisible("#qsLoginBtn", 10);
  I.click("#qsLoginBtn");
  I.waitForVisible('input[name="password"]', 10);
  I.wait(1);
  I.fillField('input[name="username"]', "asdasd");
  I.fillField('input[name="password"]', "asdasd");
  I.click(".auth0-lock-widget-container .auth0-lock-submit");
  I.waitForVisible("#profileDropDown", 10);
  I.click("#profileDropDown");
  I.waitForVisible("#qsLogoutBtn");
  I.click("#qsLogoutBtn");
  I.waitForVisible("#qsLoginBtn", 10);
  I.amOnPage("/");
});
