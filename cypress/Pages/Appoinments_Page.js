class Appoinments {
  myappoinments(name) {
    cy.get("#nav-appointments").click();

    //checkt the pateint appoint is appear
    cy.get("p.muted").should("contain", name);

    //verify the status
    cy.get("span[data-testid='appt-row-status']").contains("Upcoming");
  }

  Cancel() {
    //cancel the appointment
    // cy.get("button[data-testid='cancel-appointment']").click();
    // //check ccancel is disappear
    // cy.get("button[data-testid='cancel-appointment']").should("not.exist");

    // cy.get("#appt-filter").select("Cancelled");

    //every appoinment list there are all should be cancelled app
    cy.get("#appointment-list>div").each((status) => {
      status.find("span[data-testid='appt-row-status']").then((st) => {
        let mm = st.text().trim();
        cy.log(mm);
        expect(mm).to.eq("Cancelled");
      });
    });
  }

  Lab() {
    cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/index.html");
    cy.get("#nav-reports").click();

    // count the colm

    cy.get("thead>tr>th").then((cols) => {
      cy.log("number of colm", cols.length);
      cy.wrap(cols).each((col) => {
        let text = col.text().trim();
        cy.log(text);
      });
    });

    //print only report id from all rows

    // cy.get("#reports-body>tr").each((rows)=>{

    //     cy.wrap(rows).find("td[data-testid='report-id']").then((td)=>{
    //           let text=td.text().trim();
    //           cy.log(text);
    //     })
    // })

    let id = "";
    cy.get("#reports-body>tr")
      .eq(0)
      .then((row) => {
        cy.wrap(row)
          .find("td[data-testid='report-id']")
          .then((td) => {
            id = td.text().trim();
            cy.log(id);
          });
      })
      .then(() => {
        cy.get("#report-search").type(id);
        cy.get("#reports-body>tr").then((ll)=>{

          const len= ll.length;
           expect(len).to.eq(1);
        })
      });


  }
}

export default Appoinments;
