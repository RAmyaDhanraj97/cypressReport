import loginObj from '../fixtures/login.json';
import errorobj from '../fixtures/error.json';

export default class Login {
    open() 
    {
       cy.logger('>>> start open url');
       cy.clearCookies()
      cy.visit('http://ghdacsqaefin550:8670/fpm');
      cy.logger('<<< end open url');
      return this;
    }
  
    typeUserName(user) {
       cy.logger(`>>> start typeUserName ${user}`);
      let username = Cypress._.isNil(user) ? Cypress.env('username') : user;
      cy.get(loginObj.USER_NAME).clear().type(username);
       cy.logger(`<<< end typeUserName ${user}`);
      return this;
    }
  
    typePassword(pwd) {
      cy.wait(2000)
      cy.logger(`>>> start typePassword ${pwd}`);
      let password = Cypress._.isNil(pwd) ? Cypress.env('password') : pwd;
      cy.get(loginObj.USER_PASSWORD).clear().type(password, { log: false });
      cy.logger(`<<< end typePassword ${pwd}`);
      return this;
    }
  
    sign_in() {
      cy.wait(2000)
      cy.logger('>>> start submit');
      cy.get(loginObj.SIGN_IN_BUTTON).click();
      cy.logger('<<< end submit');
      return this;
    }
  
    login(user, pwd) {
      return this.typeUserName(user).typePassword(pwd).sign_in();
    }
  
    verifyLoginErrorUsername() {
      // cy.logger('>>> start verifyLoginError');
      cy.get(loginObj.LOGIN_ERROR_USERNAME).text().should('eq', errorobj.LOGIN_ERROR_USERNAME);
      // cy.logger('<<< end verifyLoginError');
    }
    verifyLoginErrorPassword() {
      // cy.logger('>>> start verifyLoginError');
      cy.get(loginObj.LOGIN_ERROR_PASSWORD).text().should('eq', errorobj.LOGIN_ERROR_PASSWORD);
      // cy.logger('<<< end verifyLoginError');
    }
  
    verifyInvalidUsercredential() {
      // cy.logger('>>> start verifyLoginError');
      cy.get(loginObj.INVALID_USERNAME_PASSWORD).text().should('eq', errorobj.INVALID_USERNAME_PASSWORD);
      // cy.logger('<<< end verifyLoginError');
    }
    verifyLoggedIn() {
      // cy.logger('>>> start verifyLoggedIn');
      cy.url().should('not.contain', 'sign_in');
      // cy.logger('<<< end verifyLoggedIn');
    }

    
    
    ForgottenPassword(){
      cy.get(loginObj.FORGOT_PASSWORD).click();
      return this;

    }
   //Forgot password with username
    verifyForgottenPasswordWithUsername(){
      cy.get(loginObj.SUCCESS_MESSAGE).contains('If you have entered a valid username, an email will be sent to you with your new password.');
      return this;
    }
    //Forgot password without username
    verifyForgottenPasswordWithoutUsername(){
      cy.get(loginObj.LOGIN_ERROR_USERNAME).text().should('eq', errorobj.LOGIN_ERROR_USERNAME);
      return this;
    }


    //change password
    ChangePassword(){
      cy.get(loginObj.CHANGE_PASSWORD).click();
      return this;
    }

    //change password with username
    verifyChangePasswordWithUsername(){
      cy.get(loginObj.SUCCESS_MESSAGE).contains('If you have entered a valid username, an email will be sent to you with your new password.');
      return this;
    }
 
    //change password without username

    verifyChangePasswordWithOutUsername(){
      cy.get(loginObj.LOGIN_ERROR_USERNAME).text().should('eq',errorobj.LOGIN_ERROR_USERNAME);
      return this;
    }


  logout()
  {
    cy.wait(4000)
    cy.contains('Logout').click()
    
  }






  }

  export const login = new Login();

  