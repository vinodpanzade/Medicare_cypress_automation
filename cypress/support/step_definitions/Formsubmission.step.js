import {Given,Then} from "@badeball/cypress-cucumber-preprocessor";

Given("book multiple user submision",()=>{
cy.fixture("Patient").then((datas)=>{
       cy.wrap(datas).each((data)=>{
        cy.Formsubmitdynamic(data);
       })
})
    
})

Then("same user will book for different doctors",()=>{
    cy.fixture("Sameuser").then((users)=>{
        cy.wrap(users).each((user)=>{
            cy.Sameuser(user)
        })
    })
})