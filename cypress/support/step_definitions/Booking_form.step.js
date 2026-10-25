import {Given,Then} from "@badeball/cypress-cucumber-preprocessor";
import Bookingform from "../../Pages/Bookingform_Page";

const bookingform= new Bookingform();

Given("Submit the empty form and assert every required field is listed.",()=>{
    bookingform.visit();
    bookingform.formvalidation();
})

Then("Enter an age of 0 and of 130 and assert both are rejected.",()=>{
    bookingform.agevalidate();
})

Then("enter 9 digit in mobile number and assert",()=>{
    bookingform.mobilenumber();
})

Then("assert the reason area",()=>{
     bookingform.textarea();
})
