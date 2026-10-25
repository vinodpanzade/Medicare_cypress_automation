import {Given,Then} from "@badeball/cypress-cucumber-preprocessor"
import Doctorextract from "../../Pages/Doctor_extract";

const doctorextract= new Doctorextract();

Given("go on doctor webpage",()=>{
    doctorextract.visit();
})

Then("Extract the details",()=>{
    doctorextract.Detailsextraction();
})

