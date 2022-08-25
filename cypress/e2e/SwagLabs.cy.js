import HomePage from "../pageObjects/Home.page";
import LoginPage from "../pageObjects/Login.page";

describe("Swag Labs", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("Scenario 1", () => {
    LoginPage.usernameEnter.type("locked_out_user");
    LoginPage.passwordEnter.type("secret_sauce");
    LoginPage.LoginButton.click();
    LoginPage.sadface.should("contain.text", "Epic sadface: Sorry, this user has been locked out.")
  });

  it("Scenario 2", () => {
    LoginPage.usernameEnter.type("locked_out_user");
    LoginPage.passwordEnter.type("password");
    LoginPage.LoginButton.click();
    LoginPage.sadface.should("contain.text", "Epic sadface: Username and password do not match any user in this service")
  });

  it("Scenario 3", () => {
    LoginPage.usernameEnter.type("standard_user");
    LoginPage.passwordEnter.type("secret_sauce");
    LoginPage.LoginButton.click();
    HomePage.items.should("have.length", 6);
  });

  it("Scenario 4", () => {
    LoginPage.usernameEnter.type("standard_user");
    LoginPage.passwordEnter.type("secret_sauce");
    LoginPage.LoginButton.click();
    HomePage.container.select("Price (high to low)");
    HomePage.itemsName.first().should("have.text", "Sauce Labs Fleece Jacket");
    HomePage.itemsPrice.first().should("have.text", "$49.99")

  })

  it("Scenario 5", () => {
    LoginPage.usernameEnter.type("standard_user");
    LoginPage.passwordEnter.type("secret_sauce");
    LoginPage.LoginButton.click();
    HomePage.container.select("Price (low to high)");
    HomePage.itemsName.first().should("have.text", "Sauce Labs Onesie");
    HomePage.itemsPrice.first().should("have.text", "$7.99");

  })

  it("Scenario 6", () => {
    LoginPage.usernameEnter.type("standard_user");
    LoginPage.passwordEnter.type("secret_sauce");
    LoginPage.LoginButton.click();
    HomePage.container.select("Name (Z to A)");
    HomePage.itemsName.first().should("have.text", "Test.allTheThings() T-Shirt (Red)");
  })
  
  it("Scenario 7", () => {
    LoginPage.usernameEnter.type("standard_user");
    LoginPage.passwordEnter.type("secret_sauce");
    LoginPage.LoginButton.click();
    HomePage.sauceLabsBoltTShirt.click();
    HomePage.addToCart.click();
    HomePage.shoppingCartContainer.should("have.text", 1);
    HomePage.back2products.click();
    HomePage.souceLabsBikeLight.click();
    HomePage.addToCart2.click();
    HomePage.shoppingCartContainer.should("have.text", 2)
})

it("Scenario 8", () => {
  LoginPage.usernameEnter.type("standard_user");
  LoginPage.passwordEnter.type("secret_sauce");
  LoginPage.LoginButton.click();
  HomePage.sauceLabsBoltTShirt.click();
  HomePage.addToCart.click();
  HomePage.shoppingCartContainer.should("have.text", 1);
  HomePage.Burger.click();
  HomePage.Reset.click();
  HomePage.shoppingCartBadge.should("not.exist");
  
})

it("Scenario 9", () => {
  LoginPage.usernameEnter.type("standard_user");
  LoginPage.passwordEnter.type("secret_sauce");
  LoginPage.LoginButton.click();
  HomePage.sauceLabsBoltTShirt.click();
  HomePage.addToCart.click();
  HomePage.shoppingCartContainer.should("have.text", 1);
  HomePage.removeItem.click();
  HomePage.shoppingCartBadge.should("not.exist");
  
})

it("Scenario 10", () => {
  LoginPage.usernameEnter.type("standard_user");
  LoginPage.passwordEnter.type("secret_sauce");
  LoginPage.LoginButton.click();
  HomePage.testItem.click();
  HomePage.addToCart3.click();
  HomePage.shoppingCartContainer.click();
  HomePage.checkout.click();
  HomePage.firstName.type("Ilze");
  HomePage.lastName.type("Gailite");
  HomePage.postCode.type("1010");
  HomePage.continue.click();
  HomePage.itemName.should("have.text", "Test.allTheThings() T-Shirt (Red)");
  HomePage.finish.click();
  HomePage.thankYou.should("have.text", "THANK YOU FOR YOUR ORDER")
  
})

})