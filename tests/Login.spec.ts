import { test, expect } from '@playwright/test';
import { Login } from '../pages/login.page';
import { fullUrl } from '../params/Urls';
import { initUser } from '../objects/user';


test('Login UI test', async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.goto(fullUrl.login);
  await loginPage.evalUI();
});

test('Login success with correct credential', async ({ page }) => {
  const loginPage = new Login(page);
  const testuser = initUser();
  await loginPage.goto(fullUrl.login);
  const homePage = await loginPage.login(testuser);
  await homePage.evalUI(testuser);
});
