Feature: Demo

 Scenario:verify the structure
 Given visit on the Medicare
 Then Search for cardio and assert every card shows Cardiology.
 Then Pick a speciality from the dropdown and assert the count text matches the number of cards.
 Then Drag the fee slider to 600 and assert no card shows a higher fee.
 Then Choose 15 years and above and assert every card meets it.
 Then Clear the filters and assert all 14 doctors are back.
 Then Sort by fee ascending and assert the order; sort by rating and assert the first card is the highest.
 

 
