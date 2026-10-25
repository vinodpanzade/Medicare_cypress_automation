import {Given,Then} from "@badeball/cypress-cucumber-preprocessor";
import Slots from "../../Pages/Slots_Page";

const slot= new Slots();

Given("Open a doctor and assert the profile matches the card you clicked and Assert seven date buttons are shown and the first one is selected.",()=>{
   slot.visit();
   slot.slotsvisit();

})

Then("Assert Book this slot is disabled before a slot is picked.",()=>{
  slot.bookslotdiable();
})
Then("assert the disable and active timeslot",()=>{
  slot.assertime();
})