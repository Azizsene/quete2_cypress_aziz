//Test d'Authentification backmarket
describe('backmarket test', ()=>{
    it.only('Visiter un site', ()=>{
        cy.visit("https://preprod.backmarket.fr/fr-fr/register");
        cy.get('[data-qa="accept-cta"]').click();
        cy.get("#signin-email").type("abdouaziz.sene@gmail.com");
        cy.get("#signin-password").type("Prince1459");
        cy.wait(1000);
        cy.get('[data-qa="signin-submit-button"]').click();
        cy.url().should("eq", "https://preprod.backmarket.fr/fr-fr/dashboard/orders");
      
    });
    
});