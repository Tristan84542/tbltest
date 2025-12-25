import { expect, Locator, Page } from '@playwright/test';
import { User } from '../objects/User';

export class Home{
    readonly page: Page;
    readonly addMoneyPop: Locator;
    readonly addMoneyBtn: Locator;
    readonly laterBtn: Locator;
    
    constructor (page: Page){
        this.page = page;
        this.addMoneyPop = this.page.locator('#first-deposit-modal-popup');
        this.addMoneyBtn = this.addMoneyPop.locator('#first-deposit-modal-button');
        this.laterBtn = this.addMoneyPop.locator('#first-deposit-modal-close-button');
    }

    async evalUI(user: User){
        await expect(this.page).toHaveTitle("tombola - britain's biggest bingo site");
        await expect(this.addMoneyPop).toBeVisible();
        await expect(this.addMoneyBtn).toBeVisible();
        await expect(this.addMoneyBtn).toBeEnabled();
        await expect(this.laterBtn).toBeVisible();
        await expect(this.addMoneyPop).toContainText(user.username);
    }
}
