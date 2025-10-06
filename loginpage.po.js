import { expect } from '@playwright/test';

exports.loginPage = class loginPage {


    constructor(page){

        
    this.page= page
    this.UsernameInput = page.locator('#user-name')
    this.passwordInput = page.locator("#password")
    this.logiBtn = page.locator("#login-button")

    }

     async launchURL(){

        await this.page.goto('https://www.saucedemo.com/')
     }

     async login(username, password){

        await this.UsernameInput.fill(username)
         await this.passwordInput.fill(password)
         await this.logiBtn.click()
     }

     async loginSuccess(){

        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')

     }



}