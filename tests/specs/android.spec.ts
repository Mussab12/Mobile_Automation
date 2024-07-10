// import { expect } from '@wdio/globals'
// import SecurePage from '../pageobjects/secure.page.js'
import LoginPage from "../../pageobjects/home.page.ts"


describe('My Login application', () => {
    it('should check title on home page', async () => {
        // await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
        expect(await LoginPage.getTitle()).toHaveTextContaining('Log In')
        expect(await LoginPage.login('test@gmail.com'));
    
    })

    
})

