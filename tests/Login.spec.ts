import { test, expect } from '@playwright/test';

import { fullUrl } from '../params/Urls';
import { Login } from '../pages/Login.page';
import { initUser } from '../objects/User';



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
