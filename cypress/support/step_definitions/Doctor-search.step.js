import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import Doctor_Search_Page from "../../Pages/Doctor_search_Page"

const Doctorclass= new Doctor_Search_Page();

Given("visit on the Medicare",()=>{
    Doctorclass.visit();
})

Then("Search for cardio and assert every card shows Cardiology.",()=>{
     Doctorclass.cardiosearch();
})

Then("Pick a speciality from the dropdown and assert the count text matches the number of cards.",()=>{
 Doctorclass.specialitycount();

})

Then("Drag the fee slider to 600 and assert no card shows a higher fee.",()=>{
    Doctorclass.Feecard();
    
})

Then("Choose 15 years and above and assert every card meets it.",()=>{
    Doctorclass.Experience();
})

Then("Clear the filters and assert all 14 doctors are back.",()=>{
    Doctorclass.Clear();
})

Then("Sort by fee ascending and assert the order; sort by rating and assert the first card is the highest.",()=>{
    Doctorclass.Sorting();
})
