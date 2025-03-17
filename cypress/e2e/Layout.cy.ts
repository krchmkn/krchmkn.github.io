describe("Layout", () => {
  it("should contain elements", () => {
    cy.visit("/");
    cy.wait(300);

    cy.get('[data-test-id="layout"]').should("exist").and("be.visible");

    cy.get('[data-test-id="layout-header"]').should("exist").and("be.visible");

    cy.get('[data-test-id="logo"]')
      .then((logo) => {
        expect(logo).exist;
        expect(logo).be.visible;
        expect(logo)
          .have.attr("src")
          .match(/logo|svg/);
      })
      .click();

    cy.url().should("include", "/");

    cy.get('[data-test-id="burger-icon"]')
      .should("exist")
      .and("be.visible")
      .and("have.attr", "src")
      .should("match", /burger|svg/);

    cy.get('[data-test-id="layout-main"]').should("exist").and("be.visible");

    cy.get('[data-test-id="layout-footer"]').should("exist").and("be.visible");
  });
});

export {};
