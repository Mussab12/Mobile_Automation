import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage{
    /**
     * define selectors using getter methods
     */
    async getTitle(): Promise<string> {
        const selector =
          'new UiSelector().text("Log In")';
        const title = await $(`android=${selector}`);
        return await title.getText();
      }

       public get inputEmail (){
        const selector='new UiSelector().text("email@address.com")';
        const email= $(`android=${selector}`);
        return email;
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (email: string) {
        (await this.inputEmail).setValue(email);
      
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    
}

export default new LoginPage();
