describe('template spec', () => {

    it.skip('Upload File IN Cypress', () => {
        cy.visit("https://www.lambdatest.com/selenium-playground/upload-file-demo")
        cy.get('#file').selectFile('test.pdf')
        cy.wait(5000)
 
    })

    it.skip('dropinf file - upload file',()=>{
        cy.visit('https://www.ilovepdf.com/pdf_to_word')
        cy.get('.uploader__droptxt').selectFile('test.pdf',{action:'drag-drop'})
        cy.wait(5000)
    })

    it.skip('dropinf file - upload file',()=>{
        cy.visit('https://www.ilovepdf.com/pdf_to_word')
        cy.fixture('test2.pdf').as('pdf')
        cy.get('.uploader__droptxt').selectFile('@pdf',{action:'drag-drop'})
    })

    it.skip('dropinf file - upload file',()=>{
        cy.visit('https://www.google.com/')
        cy.get('#APjFqb').type('cypress tips and tricks {enter}')
 
    })
  
 
    
  })