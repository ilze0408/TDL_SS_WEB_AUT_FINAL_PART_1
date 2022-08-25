//  Login with locked_out_user
// - Enter username - “locked_out_user”
// - Enter password
// - Validate that user sees error - “Epic sadface: Sorry, this user has been locked out.”

import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get LoginField() {
    return cy.get("x[y=z]");
  }

  static get usernameEnter() {
    return cy.get("#user-name");
  }

  static get passwordEnter() {
    return cy.get("#password")
  }

  static get LoginButton() {
    return cy.get("#login-button")
  }

  static get sadface() {
    return cy.get(`[data-test="error"]`)
  }
  
}

export default LoginPage;
