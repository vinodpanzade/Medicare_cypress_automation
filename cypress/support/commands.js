Cypress.Commands.add("Formsubmission",(name)=>{

//visit the doctor
cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/doctors.html");
cy.get("a[data-testid='card-book']").eq(0).click();

//first available slots we are picking

 cy.get("#slots-morning>button:enabled")
      .first()
      .then((slot) => {
        cy.wrap(slot).click();

        cy.get("#book-slot").click();
      });

    cy.contains("Patient details").should("exist");

    //conitnue the form filling
    cy.get("#for-self").should("be.checked");

    // let name = "vinod panzade";
    cy.get("#patient-name").type(name);
    cy.get("#patient-age").type(24);

    cy.get("#gender-male").check();

    cy.get("#patient-mobile").type(7972561515);
    cy.get("#patient-email").type("vinod12@gmail.com");

    cy.get("#visit-type").select("New consultation");

    cy.get("#symptoms").type("Having cold and fever");

    cy.get("#pay-hospital").check();

    cy.get("#consent").check();

    cy.get("#confirm-appointment").click();

    //confirmation check
    cy.contains("Appointment confirmed").should("exist");

    cy.get("#appt-patient").then((tt) => {
      let newname = tt.text().trim();
      cy.log(newname);
      expect(name).to.eq(newname);
    });

     cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/index.html");
})


Cypress.Commands.add("Formsubmitdynamic", (user) => {

  // Visit doctors page
   cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/doctors.html");

  // Select doctor using the index from the user object
  cy.get("a[data-testid='card-book']")
    .eq(user.doctorIndex)
    .click();

  // Select first available morning slot
  cy.get("#slots-morning>button:enabled")
    .first()
    .click();

  cy.get("#book-slot").click();

  // Verify patient details form
  cy.contains("Patient details").should("exist");

  // Select appointment for self
  cy.get("#for-self").should("be.checked");

  // Fill patient details
  cy.get("#patient-name").type(user.name);
  cy.get("#patient-age").type(String(user.age));

  // Select gender
  cy.get(`#gender-${user.gender}`).check();

  cy.get("#patient-mobile").type(user.mobile);
  cy.get("#patient-email").type(user.email);

  cy.get("#visit-type").select(user.visitType);

  cy.get("#symptoms").type(user.symptoms);

  // Payment and consent
  cy.get("#pay-hospital").check();
  cy.get("#consent").check();

  // Submit appointment
  cy.get("#confirm-appointment").click();

  // Verify confirmation
  cy.contains("Appointment confirmed").should("exist");

  // Verify patient name
  cy.get("#appt-patient").should("contain", user.name);

  // Return to home page
  cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/index.html");

});


// same user will go for the diff doctrs

Cypress.Commands.add("Sameuser", (user) => {

  // Visit doctors page
   cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/doctors.html");

  // Select doctor using the index from the user object
  cy.get("a[data-testid='card-book']")
    .eq(user.doctorIndex)
    .click();

  // Select first available morning slot
  cy.get("#slots-morning>button:enabled")
    .first()
    .click();

  cy.get("#book-slot").click();

  // Verify patient details form
  cy.contains("Patient details").should("exist");

  // Select appointment for self
  cy.get("#for-self").should("be.checked");

  // Fill patient details
  cy.get("#patient-name").type(user.name);
  cy.get("#patient-age").type(String(user.age));

  // Select gender
  cy.get(`#gender-${user.gender}`).check();

  cy.get("#patient-mobile").type(user.mobile);
  cy.get("#patient-email").type(user.email);

  cy.get("#visit-type").select(user.visitType);

  cy.get("#symptoms").type(user.symptoms);

  // Payment and consent
  cy.get("#pay-hospital").check();
  cy.get("#consent").check();

  // Submit appointment
  cy.get("#confirm-appointment").click();

  // Verify confirmation
  cy.contains("Appointment confirmed").should("exist");

  // Verify patient name
  cy.get("#appt-patient").should("contain", user.name);

  // Return to home page
  cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/index.html");

});
