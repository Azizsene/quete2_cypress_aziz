//Test d'Authentification backmarket echec
describe("Inscription Reussie", ()=>{
    it.only('Visiter un site', ()=>{
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.get('[data-qa="accept-cta"]').click();
        cy.get("#firstName").type("Aziz").should("have.value", "Aziz");
        cy.get("#lastName").type("SENE").should("have.value", "SENE");
        cy.get("#signup-email").type("abdouaziz.sene@gmail.com");
        cy.get("#signup-password").type("Prince1459");
        cy.wait(1000);
        cy.get('[data-qa="signin-submit-button"]')
        .should("have.text","Enchantés")
        .click();

    });
});
