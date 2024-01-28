const { data } = require("cypress/types/jquery")

describe('template spec', () => {
 
    it.skip('DOM Commands in Cypress', () => {
      cy.visit('https://naveenautomationlabs.com/opencart/')
    //   cy.get('.image').first().click()
    //   cy.get('.image').last().click()
    // cy.get('.image').eq(2).click()
 
    // cy.contains('MacBook').click()
 
    // cy.get('div').find('>a>img[alt="MacBook"]').click()
 
    // cy.get('div').find('>a>').filter('img[alt="MacBook"]').click()
    // cy.get('div').find('>a>img[alt="Canon EOS 5D"]').click()
    // cy.get('div').find(">a>img[alt='Apple Cinema 30']").click()
 
    // cy.get('.image').eq(2).click();
    cy.contains('Apple Cinema 30"').click()
 
    })
 
 
 
    it.skip('Browser Navigation using Cypress', () => {
        cy.visit('https://naveenautomationlabs.com/opencart/')
 
        cy.contains('Software').click()
        cy.contains("There are no products to list in this category.").should('be.visible')
        cy.go('back')
        cy.go('forward')
        cy.get("div[id='content'] p").should('have.text','There are no products to list in this category.')
 
        cy.go(-1)
        cy.go(1)
        cy.get("div[id='content'] p").should('have.text','There are no products to list in this category.')
 
      })
 
 
 
    it.skip('Handle dropdown with select tag', () => {
      cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
    //   cy.get('#select-demo').select('Wednesday')
    //   cy.get('#select-demo').select(5).should('have.value','Thursday')
 
    //   cy.get('#select-demo').select('Wednesday').should('have.value','Wednesday')
 
        cy.get('#select-demo').select('Wednesday')  
        cy.get('#select-demo option:selected').should('have.text','Wednesday')
 
    })
 
 
    it.skip('Handle dropdown with Multi select tag', () => {
        cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo')
        cy.get('#multi-select').select(['California','Texas','Washington'])
 
      })
 
    it.skip('dropdown without select tag', () => {
        cy.visit('https://www.amazon.com/')
        cy.get('#twotabsearchtextbox').type('iphone')
        // cy.get('.left-pane-results-container').find('>div').contains("13 pro case").click()
        cy.get('.left-pane-results-container').find("div[aria-label='iphone 15 pro max case'] span[class='s-heavy']").click()
 
      })


      it.skip('Read Write Test Swuite', () => {
        cy.writeFile('firstTest.txt','Cypress - Faruk')
        cy.writeFile('firstTest.txt',' Hello world, Farul_QA',{flag:'a+'})

        cy.writeFile('cypress/fixtures/Test2.json',{data1:'Test1', data2:'Test2',data3:'Faruk@yopmail.com'})
 
      })

  })