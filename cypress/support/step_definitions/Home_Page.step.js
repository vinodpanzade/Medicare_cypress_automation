import {Given,Then} from "@badeball/cypress-cucumber-preprocessor"
import Home_Page from "../../Pages/Home_Page"

const homepage= new Home_Page();

Given("First visit on Medicare Page",()=>{
    homepage.visit();
})

Then("Check the logo ,search bar and Navigation bar",()=>{
    homepage.logo_nav_verification();
})

Then("Check the specality and branch",()=>{
    homepage.Specialityandbranch();
})
Then("Validate the Slider",()=>{
    homepage.Slider();
})

Then("check all the specialities",()=>{
    homepage.Specialities();
})

