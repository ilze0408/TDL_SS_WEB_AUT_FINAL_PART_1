import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }
  static get items() {
    return cy.get(".inventory_item_description");
}

static get container() {
  return cy.get(`[class="product_sort_container"]`)
}

static get container2() {
  return cy.get(`[data-test="product_sort_container"]`)
}

static get highToLow() {
  return cy.get(`[value="lohi"]`)
}

static get itemsName() {
  return cy.get(`[class="inventory_item_name"]`)
}

static get itemsPrice() {
  return cy.get(`[class="inventory_item_price"]`)
}

static get sauceLabsBoltTShirt() {
  return cy.get(`[id="item_1_title_link"]`)
}

static get addToCart() {
  return cy.get(`[id="add-to-cart-sauce-labs-bolt-t-shirt"]`)
}

static get shoppingCartContainer() {
  return cy.get(`[id="shopping_cart_container"]`)
}

static get back2products() {
  return cy.get(`[id="back-to-products"]`)
}

static get souceLabsBikeLight() {
  return cy.get(`[id="item_0_title_link"]`)
}

static get addToCart2() {
  return cy.get(`[id="add-to-cart-sauce-labs-bike-light"]`)
}

static get Burger() {
  return cy.get(`[id="react-burger-menu-btn"]`)
}

static get Reset() {
  return cy.get(`[id="reset_sidebar_link"]`)
}

static get shoppingCartBadge() {
  return cy.get(`[class="shopping_cart_badge"]`)
}

static get removeItem() {
  return cy.get(`[id="remove-sauce-labs-bolt-t-shirt"]`)
}

static get testItem() {
  return cy.get(`[id="item_3_title_link"]`)
}

static get addToCart3() {
  return cy.get(`[id="add-to-cart-test.allthethings()-t-shirt-(red)"]`)
}

static get checkout() {
  return cy.get(`[id="checkout"]`)
}

static get firstName() {
  return cy.get(`[id="first-name"]`)
}

static get lastName() {
  return cy.get(`[id="last-name"]`)
}

static get postCode() {
  return cy.get(`[id="postal-code"]`)
}

static get continue() {
  return cy.get(`[id="continue"]`)
}

static get itemName() {
  return cy.get(`[id="item_3_title_link"]`)
}

static get finish() {
  return cy.get(`[id="finish"]`)
}

static get thankYou() {
  return cy.get(`[class="complete-header"]`)
}

}


export default HomePage;
