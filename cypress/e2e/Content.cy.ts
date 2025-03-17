describe("Content", () => {
  it("should contain elements", () => {
    cy.visit("/");
    cy.wait(300);

    cy.contains("Hi, my name is", { matchCase: false });

    cy.get("h1")
      .should("be.visible")
      .contains("Dmitrii Korchemkin", { matchCase: false });

    cy.contains("I'm", { matchCase: false }).should("be.visible");
    cy.get("mark")
      .contains("Front-End Developer", { matchCase: false })
      .should("be.visible");
    cy.contains("feel free to", { matchCase: false }).should("be.visible");

    cy.get('[data-test-id="contact-me"]')
      .contains("Contact me", { matchCase: false })
      .should("have.attr", "href")
      .should("match", /linkedin.com|krchmkn/);

    cy.get('[data-test-id="portrait"]')
      .should("be.visible")
      .and("have.attr", "src")
      .should("match", /kda|jpg/);
  });
});

export {};
