
import googleObj from '../fixtures/google.json';

export  default  class Search{

    open()
    {
        cy.visit('https://www.google.com/')
    }

    searchbar()
    {
        cy.xpath(googleObj.searchbar).type('flipkart').tab()
        cy.wait(2000)
        cy.get(googleObj.lang).each(($el,index,list)=>{
            
                cy.wrap($el).children().first().click().and('have.attr', 'href').then((href) => {
                    cy.log(href)

            
            

        })
        
            
        })
    }
        

    }
export const search = new Search();