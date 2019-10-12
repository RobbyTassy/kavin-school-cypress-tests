/// <reference types="cypress" />

// constants
let FIRST_NAME = "Robert"
let SECOND_NAME = "Tassy"
let TODO_ITEM_TWO = "Create tests with cypress.io";


describe(" Kavin School Playground Test", () => {
  // before each test, make sure to visit the home page of the app
  beforeEach(() => {
    cy.visit("http://kavinschool.com/playground/DemoInputs.html"); // "baseUrl" is defined in cypress.json file
  });

  context("Fill out form", () => {
    it.only("Smoke test run", () => {
      // create one todo item
      cy.get("[type=text]").first() // grab the input textbox
        .type(FIRST_NAME) // type the title of the todo
        // .type("{enter}"); // press enter

      cy.get("[type=text]").eq(1) 
        .type(SECOND_NAME) 

      cy.get("[type=email]")
        .type('robtassy@gmail.com') 

      cy.get("[type=radio]")
        .check('male') 
      
      cy.get("select").select('ISO 3166-2:NI')

      cy.get("[type=text]").eq(2) 
        .type('Invitae') 

      cy.get("[type=password]")
        .type('Invitate') 

      cy.get("[type=checkbox]")
        .check('Bike')

      cy.get("[type=checkbox]") 
        .check('Car')
      
      cy.get("[type=checkbox]")  
        .check('Bicycle')
      
        cy.get("[type=checkbox]")   
        .check('Van') 






      // create one todo item
      // cy.get("[data-cy=todo-input]")
      //   .type(TODO_ITEM_TWO)
      //   .type("{enter}");

      // // verify the item was added
      // cy.get("[data-cy=todo-list] li")
      //   .eq(1) // second li
      //   .find("label")
      //   .should("contain", TODO_ITEM_TWO);

      // // create one todo item
      // cy.get("[data-cy=todo-input]")
      //   .type(FIRST_NAME)
      //   .type("{enter}");

      // // verify the item was added
      // cy.get("[data-cy=todo-list] li")
      //   .eq(2) // third li
      //   .find("label")
      //   .should("contain", FIRST_NAME);

      // // verify the count is correct
      // cy.get("[data-cy=todo-count]").contains("3");
    });

  });
});
