import {Given,Then} from "@badeball/cypress-cucumber-preprocessor"

import Appoinments from '../../Pages/Appoinments_Page';

const appoinments= new Appoinments();

Given("Assert the new appoinment appears as upcomming",()=>{
    //we will fill the form first
    // cy.Formsubmission("Viraj");
    //go inside the my appoinments
    // appoinments.myappoinments("Viraj");
})

Then("Change the status into cancel",()=>{
    // appoinments.Cancel();
})

Then("search for the exact lab report",()=>{
    appoinments.Lab();
})