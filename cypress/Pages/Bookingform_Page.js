class Bookingform {
  visit() {
    cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/doctors.html");
    cy.get("a[data-testid='card-book']").eq(0).click();

    //
    cy.get("#slots-morning>button:enabled")
      .first()
      .then((slot) => {
        cy.wrap(slot).click();
        cy.get("#book-slot").click();
      });
  }

  formvalidation() {
    //check the empty form submision
    cy.get("#confirm-appointment").click();

    //check all the missing field

    cy.get("#booking-errors>ul").then((list) => {
      cy.wrap(list)
        .find("li")
        .each((ll) => {
          cy.log(ll.text().trim());
        });
    });
  }

  agevalidate() {
    cy.get("#patient-age").type(0);
    cy.get("#confirm-appointment").click();

    cy.contains("Age must be a number between 1 and 120").should("exist");

    cy.get("#patient-age").clear();
    cy.get("#patient-age").type(130);
    cy.get("#confirm-appointment").click();
    cy.contains("Age must be a number between 1 and 120").should("exist");
  }

  mobilenumber(){
    cy.get("#patient-mobile").type(986756347);
    cy.get("#confirm-appointment").click();
    cy.contains("Mobile number must be exactly 10 digits").should("exist");


  }
  textarea(){
    cy.get("#symptoms").type("nice")
    cy.get("#confirm-appointment").click();
    cy.contains("Reason for visit must be at least 10 characters").should("exist");
    
  }
}
export default Bookingform;
