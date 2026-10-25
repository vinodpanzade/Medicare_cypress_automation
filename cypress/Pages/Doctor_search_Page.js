class Doctor_search_Page {
  visit() {
    cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/index.html");
    cy.get("#nav-doctors").click();
  }

  cardiosearch() {
    //select the cardiology
    cy.get("#filter-speciality").select("Cardiology");

    //check the name and speciality of doctor

    cy.get("#doctor-list> article[data-testid='doctor-card']").then(
      (articles) => {
        cy.log(articles.length);

        cy.wrap(articles).each((article) => {
          const name = article
            .find("h3[data-testid='card-doctor-name']")
            .text()
            .trim();
          const spec = article
            .find("p[data-testid='card-speciality']")
            .text()
            .trim();

          cy.log("name of Doctor", name);
          cy.log("speciality of doctor", spec);

          expect(spec).to.equal("Cardiology");
        });
      },
    );
  }

  //   specialitycount() {
  //     // text
  //     cy.get("h4").should("contain", "Speciality");

  //     //speciality dropdown
  //     cy.get("#filter-speciality>option").then((values) => {
  //       cy.log(values.length);

  //       cy.wrap(values).each((value) => {
  //         let spec = value.text().trim();
  //         if (spec != "All specialities") {
  //           // cy.log(value.text().trim());

  //           //select on by one speciality
  //           cy.get("#filter-speciality").select(spec);

  //           cy.get("#doctor-list>article").then((count) => {
  //             //counting the spec using dropdwon selection
  //             let len = count.length;
  //             cy.log(`${spec} ${len}`);

  //             // we are assertting the speciality
  //             cy.get("p[data-testid='card-speciality']").each((tt) => {
  //               cy.wrap(tt)
  //                 .invoke("text")
  //                 .then((text) => {
  //                   expect(text.trim()).to.eq(spec);
  //                 });
  //             });
  //           });
  //         } else {
  //           // this is for all speciality count
  //           cy.get("#filter-speciality").select(spec);
  //           cy.get("#doctor-list>article").then((count) => {
  //             let len = count.length;
  //             cy.log(`${spec} ${len}`);
  //           });
  //         }
  //         //
  //       });
  //     });
  //   }

  //optimised code
  specialitycount() {
    cy.get("h4").should("contain", "Speciality");

    cy.get("#filter-speciality option").each(($option) => {
      const spec = $option.text().trim();

      cy.get("#filter-speciality").select(spec);

      cy.get("#doctor-list > article").then(($cards) => {
        const count = $cards.length;
        cy.log(`${spec}: ${count}`);

        if (spec !== "All specialities") {
          cy.get("p[data-testid='card-speciality']").each(($item) => {
            cy.wrap($item)
              .invoke("text")
              .then((text) => {
                expect(text.trim()).to.eq(spec);
              });
          });
        }
      });
    });
    // we are reseting the thing
    cy.get("#filter-speciality").select("All specialities");
  }

  Feecard() {
    //heading print
    cy.get("h4").contains("Consultation fee");

    //range fixing
    cy.get("input[type='range']")
      .invoke("val", 600)
      .trigger("input")
      .trigger("change");

    //expect the fee should not be greater than 600

    cy.get("#doctor-list>article").each((all) => {
      let ll = all.find("p[data-testid='card-fee']").text().trim();
      let fee = +ll.replace(/[^\d]/g, "");

      cy.log(fee);
      // const fee = Number(ll.replace(/[^\d]/g, ""));
// most means fee is eq or less than this fee
      expect(fee, "Doctor fee").to.be.at.most(600);
      //   if(fee>600){
      //     cy.log("fail")
      //   }
      //   else{
      //     cy.log("pass")
      //   }
    });

    //reset
    cy.get("input[type='range']")
      .invoke("val", 1800)
      .trigger("input")
      .trigger("change");
  }

  Experience() {
    // heading
    cy.get("h4").contains("Experience");
    //check the exp 15
    cy.get("#exp-15").check();

    // cards
    cy.get("#doctor-list>article").each((cards) => {
      let exp = Number(
        cards
          .find('b[data-testid="card-experience"]')
          .text()
          .trim()
          .match(/\d+/)[0],
      );
      // least means min 15 and more than that

      expect(exp).to.be.at.least(15);
    });
    // Reset the exp
    cy.get("#exp-any").check({ force: true });
  }

  Clear() {
    // Reset the exp
    cy.get("#exp-any").check({ force: true });

    //reset the fee range
    cy.get("input[type='range']")
      .invoke("val", 1800)
      .trigger("input")
      .trigger("change");

    //speciality
    cy.get("#filter-speciality").select("All specialities");

    // all doctors are back
    cy.get("#doctor-list>article").then((doctors) => {
      let len = doctors.length;
      cy.log(len);

      expect(len).to.be.eq(32);
    });
  }

  Sorting() {

    let fees = [];
    cy.get("#doctor-list>article")
      .each((cards) => {
        let fee = Number(
            cards.find("p[data-testid='card-fee']").text().replace(/\D/g, "")
        );
        fees.push(fee);
      })
      .then(() => {
        fees.sort((a,b)=>
          a-b
        )
        for (let i = 0; i < fees.length; i++) {
          cy.log(fees[i]);
        }
      });

      cy.get("#rated-45").check();
      cy.get("#doctor-list>article").eq(0).then((card)=>{
        let rating=Number(card.find("span[data-testid='card-doctor-rating']").text().trim().replace(/[^\d.]/g, "")) 
    
        expect(rating).to.be.at.least(4.5)
      })
  }




}
export default Doctor_search_Page;

/*
.to.be.at.most(4.5) → ≤ 4.5 (less than or equal to 4.5)
.to.be.at.least(4.5) → ≥ 4.5 (greater than or equal to 4.5)
--------------------


how to sort the array in js

const array=[];
for ascending 
array.sort((a,b)=>
  a-b;
  )
--------------------
for descending
array.sort((a,b)=>
    b-a
    )


---------------------
Not exactly. Both .then() and .each() can give you jQuery elements, but it depends on what you're iterating over or receiving.
- cy.get() → Cypress chainable.
- .then(($el) => {}) → usually a jQuery collection.
- .each(($el) => {}) → each $el is a jQuery element when iterating over DOM elements.
Remember: cy.wrap($el) converts the jQuery element back into a Cypress chainable.

*/
