class Doctorextract {
  doctorDetails = {
 
  };

  visit() {
    cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/doctors.html");
  }

  Detailsextraction() {
    cy.get("#doctor-list>article").then((cards) => {
      cy.wrap(cards).each((card) => {
        let dname = card
          .find("h3[data-testid='card-doctor-name']")
          .text()
          .trim();
        

        let spec = card.find("p[data-testid='card-speciality']").text().trim();
        

        let rawText = card
          .find("b[data-testid='card-experience']")
          .text()
          .trim();
        let experience = Number((rawText.match(/\d+/) || [""])[0]);
        // this.exp=experience;

        let fraw = card.find("p[data-testid='card-fee']").text().trim();
        let fee = Number((fraw.match(/\d+/) || ["0"])[0]);
        // this.fees=fee;

        let rat= Number(card.find("span[data-testid='card-doctor-rating']").text().trim().replace(/[^\d.]/g, ""))

        this.doctorDetails[dname]={
          name: dname,
          speciality: spec,
          exp: experience,
          rating: rat,
          fees: fee,
        }

      });
    }).then(()=>{
             cy.writeFile(
        "cypress/fixtures/doctorDetails.json",
        this.doctorDetails
      );
    })
  }
}

export default Doctorextract;
