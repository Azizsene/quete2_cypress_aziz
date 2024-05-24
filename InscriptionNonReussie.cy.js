describe("Inscription Reussie", ()=>{
    it('Visiter un site', ()=>{
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.get('[[data-qa="accept-cta"]').click();
        cy.get(".title-2 mt-3").should("have.text","Nouveau client ? Par ici, s'il vous plaît.");
        cy.get("#firstName").type("Abdou").should("have.value", "Abdou");
        cy.get("#lastName").type("SENE").should("have.value", "SENE");
        cy.get("#signup-email").type("abdouaziz__sene@gmail.com");
        cy.get("#input-password").type("Prince1459");
        cy.get('[ata-qa="signup-submit-button"]')
        .should("be.visible").and("have.text","Enchantés")
        .click();
    });
});
