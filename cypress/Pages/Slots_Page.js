class Slots {
  visit() {
    cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/index.html");
    cy.get("#nav-doctors").click();
  }

  slotsvisit() {
    // name of the doctor
    let name = "";
    cy.get("h3[data-testid='card-doctor-name']")
      .eq(0)
      .then((nn) => {
        name = nn.text().trim();
        cy.log(name);
      });

    //click to the slots
    cy.get("a[data-testid='card-book']").eq(0).click();

    //assert the doctor name

    cy.get("#doctor-name").then((ll) => {
      let newname = ll.text().trim();

      expect(name).to.be.eq(newname);
    });

    //pick the date
    cy.contains("Pick a date").should("exist");
    //or
    cy.get("h3").contains("Pick a date");

    //check there should be 7 days
    cy.get("#date-strip>button").then((dates) => {
      const len = dates.length;
      cy.log(len);
      cy.wrap(dates).each(($button) => {
        cy.wrap($button)
          .scrollIntoView()
          .should("be.visible")
          .and("be.enabled");
      });
    });

    //first button should be clicked
    cy.get("#date-strip>button").eq(0).should("have.class", "on");
  }

  bookslotdiable() {
    cy.get("#book-slot").should("be.disabled");
  }
  
  assertime() {
    //slots for the morning

    cy.get("#slots-morning>button").then((slots) => {
      const enable = slots.filter(":enabled").length;
      const disable = slots.filter(":disabled").length;

      cy.log("morning available slots are:", enable);
      cy.log("unavailable slots for morning:", disable);
    });

    // slots for evening
    cy.get("#slots-evening>button").then((slots) => {
      const enable = slots.filter(":enabled").length;
      const disable = slots.filter(":disabled").length;

      cy.log("evening available slots are:", enable);
      cy.log("evening unavailable slots:", disable);
    });

    //select first enbaled slot and go for the process

    cy.get("#slots-morning>button:enabled")
      .first()
      .then((slot) => {
        cy.wrap(slot).click();

        cy.get("#book-slot").click();
      });

    cy.contains("Patient details").should("exist");

    //conitnue the form filling
    cy.get("#for-self").should("be.checked");

    let name = "vinod panzade";
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
  }
}
export default Slots;
