describe('template spec', () => {

  it.skip('Read Write Test Swuite', () => {
    cy.readFile('firstTest.txt').then((data)=>{
        cy.log("++print++",data)
    })

    cy.readFile('Test1.json').then((data)=>{
      cy.log("++print++",data)
    })

    cy.readFile('cypress/fixtures/Test2.json').then((data)=>{
      cy.log("++print++",data)
    })

    cy.readFile('cypress/fixtures/Test2.json').should('exist')
    cy.readFile('firstTest.txt').should('exist').and('contain','Faruk')
  })


  it.skip('Shadaw DOM Element Handle',()=>{
    cy.visit('https://selectorshub.com/xpath-practice-page/')
    // cy.get('#pizza').type('Testing Shadow Dom')

    // cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Testing Shadow Dom') // use .shadow() function

    // cy.get('#pizza').type('Testing Shadow DOM') // set config level e "includeShadowDom":true

    cy.get('#pizza',{includeShadowDom:true}).type('Testing Shadow DOM') // use text level e includeShadowDom:true

  })



  
})