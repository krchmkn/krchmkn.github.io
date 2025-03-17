describe("404 page", () => {
  beforeEach(() => {
    cy.visit("/dsfsdf", { failOnStatusCode: false });
    cy.wait(300);
  });

  it("should have a title", () => {
    cy.get("h1")
      .contains("Page not found", { matchCase: false })
      .should("be.visible");
  });

  it("should navigate to index page", () => {
    cy.get("a")
      .contains("Go to main page", { matchCase: false })
      .should("be.visible")
      .click();

    cy.url().should("include", "/");
  });
});

export {};
