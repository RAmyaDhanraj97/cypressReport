import { login } from '../support/login.page.js';
//import {testData} from '../../testdata/test.xlsx';

describe('Login', () => {
    it('FPMII-4905:should login with valid credential', () => {
      login.open().login().verifyLoggedIn();
    });
  
  //Blank username
    it('FPMII-4905:should have login error when username is blank', () => {
      login.open().typePassword().sign_in().verifyLoginErrorUsername();
    });
  
    //Blank password
    it('FPMII-4905:should have login error when password is blank', () => {
      login.open().typeUserName().sign_in().verifyLoginErrorPassword();
    });

    it('FPMII-4905:Should have login error when both username and password is blank', () => {
      login.open().sign_in().verifyLoginErrorUsername();
    });



  });