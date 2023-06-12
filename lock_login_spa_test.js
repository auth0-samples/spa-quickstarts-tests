Feature("SPA login with new responsive design");

Scenario("Log in using Lock", async I => {
  console.log(await I.grabBrowserLogs());
  try {
    I.amOnPage("/");
    I.waitForVisible("#qsLoginBtn", 20);
    I.click("#qsLoginBtn");
    I.waitForVisible('input[name="password"]', 20);
    I.wait(1);
    I.fillField('input[name="username"]', "asdasd");
    I.fillField('input[name="password"]', "asdasd");
    I.click(".auth0-lock-widget-container .auth0-lock-submit");
    I.waitForVisible("#profileDropDown", 20);
    I.wait(3);
    I.click("#profileDropDown");
    I.waitForVisible("#qsLogoutBtn");
    I.click("#qsLogoutBtn");
    I.waitForVisible("#qsLoginBtn", 20);
    I.amOnPage("/");
  } catch (error) {
    console.log(await I.grabBrowserLogs());
    throw error
  }

});
