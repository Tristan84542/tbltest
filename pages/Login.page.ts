import { expect, Locator, Page } from '@playwright/test';
import { fullUrl } from '../params/Urls';
import { Home } from './Home.page';
import { User } from '../objects/User';


export class Login{
    readonly page: Page;
    readonly rejectCookiesBtn: Locator;
    readonly needHelp: Locator;
    readonly loginBody: Locator;
    readonly loginTombolaLogo: Locator;
    readonly loginForm: Locator;
    readonly inUsername: Locator;
    readonly inPwd: Locator;
    readonly loginBtn: Locator;
    readonly resetBtn: Locator;
    readonly rememberMe: Locator;
    readonly rememberMeText: Locator;
    readonly footer: Locator;
    readonly bannerAd: Locator;
    readonly joinNow: Locator;
    readonly legalSection: Locator;
    readonly eighteenPlus: Locator;
    readonly gambleAuth: Locator;
    readonly gameCare: Locator;
    readonly ibas: Locator;
    readonly gameAware: Locator;
    readonly gamStop: Locator;
    readonly gamblingCommission: Locator;
    readonly egrStar: Locator;
    readonly visa: Locator;
    readonly masterCard: Locator;
    readonly visaSecure: Locator;
    readonly masterSecure: Locator;
    readonly tombolaCareer: Locator;
    readonly regNumber: Locator;
    readonly sideBackground: Locator;


    constructor(page: Page){
        this.page = page;
        this.rejectCookiesBtn = this.page.locator('#onetrust-reject-all-handler');
        this.needHelp = this.page.getByText('Need Help?');
        this.loginBody = this.page.locator('div[class*="login-body"]');
        this.loginTombolaLogo = this.loginBody.locator('#tombola')
        this.loginForm = this.loginBody.locator('form[action="/my-account/loginsso"]');
        this.inUsername = this.loginForm.locator('input[name="LoginCredential"]');
        this.inPwd = this.loginForm.locator('input[name="Password"]');
        this.loginBtn = this.loginForm.locator('#btnLogin');
        this.resetBtn = this.loginForm.locator('#btnReset');
        this.rememberMe = this.loginForm.locator('#IsExtendedSession');
        this.rememberMeText = this.loginForm.getByLabel('remember me');
        this.footer = this.page.locator('footer[class*="footer"]');
        this.bannerAd = this.page.locator('div[class*="bg-tombola-yellow"]');
        this.joinNow = this.bannerAd.locator('#btnJoin');
        this.legalSection = this.page.locator('div[class*="legal-section"]');
        this.eighteenPlus = this.legalSection.locator('#Over18sOnly');
        this.gambleAuth = this.legalSection.locator('#GibraltarGamblingAuthority');
        this.gameCare = this.legalSection.locator('#Gamcare');
        this.ibas = this.legalSection.locator('#IndependentBettingAdjudicationService');
        this.gameAware = this.legalSection.locator('#GambleAware');
        this.gamStop = this.legalSection.locator('#GamStop');
        this.gamblingCommission = this.legalSection.locator('#GamblingCommission');
        this.egrStar = this.legalSection.locator('#EGRStar');
        this.visa = this.legalSection.locator('#link-visa');
        this.masterCard = this.legalSection.locator('#link-mastercard');
        this.visaSecure = this.legalSection.locator('#link-visasecure');
        this.masterSecure = this.legalSection.locator('#link-mastercardsecurecode');
        this.tombolaCareer = this.legalSection.locator('a[href="https://tombola.careers"]');
        this.regNumber = this.legalSection.locator('a[href="https://registers.gamblingcommission.gov.uk/38613"]').last();
        this.sideBackground = this.page.locator('div[style*="background-image:"]');
    }

    async evalUI(){
        await expect(this.page).toHaveTitle('tombola - log in to play');
        await expect(this.needHelp).toBeVisible();
        await expect(this.needHelp.getByText('Need Help?')).toBeVisible();
        await expect(this.loginBody.getByText('Login to')).toBeVisible();
        await expect(this.loginTombolaLogo).toBeVisible();
        await expect(this.loginForm.getByText('username/email')).toBeVisible();
        await expect(this.loginForm.getByText('password')).toBeVisible();
        await expect(this.inUsername).toBeEnabled();
        await expect(this.inPwd).toBeEnabled();
        await expect(this.rememberMe).toBeEnabled();
        await expect(this.rememberMeText).toBeVisible();
        await expect(this.loginBtn).toBeDisabled();
        await expect(this.resetBtn).toBeEnabled();
        await expect(this.footer).toBeVisible();
        await expect(this.footer).toContainText('By logging in you are accepting our');
        await expect(this.footer).toContainText('T&Cs');
        await expect(this.footer).toContainText('and');
        await expect(this.footer).toContainText('Privacy Policy');
        await expect(this.bannerAd).toBeVisible();
        await expect(this.joinNow).toBeEnabled();
        await expect(this.legalSection).toBeVisible();
        await expect(this.eighteenPlus).toBeVisible();
        await expect(this.gambleAuth).toBeVisible();
        await expect(this.gameCare).toBeVisible();
        await expect(this.ibas).toBeVisible();
        await expect(this.gameAware).toBeVisible();
        await expect(this.gamStop).toBeVisible();
        await expect(this.gamblingCommission).toBeVisible();
        await expect(this.egrStar).toBeVisible();
        await expect(this.visa).toBeVisible();
        await expect(this.masterCard).toBeVisible();
        await expect(this.visaSecure).toBeVisible();
        await expect(this.masterSecure).toBeVisible();
        await expect(this.tombolaCareer).toBeVisible();
        await expect(this.regNumber).toBeVisible();
        await expect(this.sideBackground).toBeVisible();
        
    }

    async goto(url: string){
        await this.page.goto(url);
        await this.page.waitForLoadState('load');
        if (await (this.rejectCookiesBtn.isVisible())){
            console.log('Cookies overlay exist, reject optional cookies now...')
            await this.rejectCookiesBtn.click()
        }    
    }
    async login(user: User): Promise<Home> {
        await this.inUsername.pressSequentially(user.username);
        await this.inPwd.pressSequentially(user.password);
        await this.page.waitForTimeout(2000); //add timeout to let element update from disable to enable
        await expect(this.loginBtn).toBeEnabled();
        await this.loginBtn.click();
        await expect(this.page).toHaveURL(fullUrl.home);
        return new Home(this.page);
    }
}