import {faker} from '@faker-js/faker'
import { randomEmail, randomName, randomPhone, zipCode } from '../support/utils/faker';

describe(" Suite para estudo de testes delivery do bugerEats",() => {
    context("Suite de testes de cadastro ",()=>{
     beforeEach("Acessar pagina de delivery", () => {
        cy.HomeEats()
            
     });


        it("Deve ser possivel retornar para a Home", () =>{
            cy.get('a[href*="/"]').click()
        });
    
        it.only("Deve ser possivel cadastrar com sucesso", () =>{
            cy.contains("Cadastre-se para fazer entregas")
                .should("be.visible")
        
            cy.get('input[name="name"]').type(randomName());
            cy.get('input[name="cpf"]').type('27366489352'); 
            cy.get('input[name="email"]').type(randomEmail()); 
            cy.get('input[name="whatsapp"]').type("21 666599887");
            
            cy.get('input[name="postalcode"]').type('15086428'); 
            cy.get('input[type="button"][value= "Buscar CEP"]').click(); 
            cy.get('input[name="address-number"]').type('245');
            cy.get('input[name="address-details"]').type('apto 2');
            
            cy.get('input[name="address"]').should('have.value', 'Travessa José Carvalho Filho' ); 
            cy.get('input[name="district"]').should('have.value','Estância São Pedro Vila Azul' ); 
            cy.get('input[name="city-uf"]').should('have.value','São José do Rio Preto/SP' ); 

            cy.contains('.delivery-method li', 'Moto' ).click()
            cy.get('input[accept^="image"]').attachFile('/image/'+'cnh_gratuita.jpeg')

            cy.get('form button[type="submit"]').click()
            cy.get('.swal2-container .swal2-html-container')
            .should('have.text',"Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.")
        });
    
        it("Deve mostrar mensagem de erro quando campo nome estiver vazio", () =>{

            cy.contains("Cadastre-se para fazer entregas")
            .should("be.visible")
    
            cy.get('input[name="name"]').clear()
            cy.get('input[name="cpf"]').type('27366489352'); 
            cy.get('input[name="email"]').type(randomEmail()); 
            cy.get('input[name="whatsapp"]').type('11 966669945');
        
            cy.get('input[name="postalcode"]').type('15086428'); 
            cy.get('input[type="button"][value= "Buscar CEP"]').click(); 
            cy.get('input[name="address-number"]').type('245');
            cy.get('input[name="address-details"]').type('apto 2');
        
            cy.get('input[name="address"]').should('have.value', 'Travessa José Carvalho Filho' ); 
            cy.get('input[name="district"]').should('have.value','Estância São Pedro Vila Azul' ); 
            cy.get('input[name="city-uf"]').should('have.value','São José do Rio Preto/SP' ); 

            cy.contains('.delivery-method li', 'Moto' ).click()
            cy.get('input[accept^="image"]').attachFile('/image/'+'cnh_gratuita.jpeg')

            cy.get('form button[type="submit"]').click()
            cy.get('.alert-error').should('have.text','É necessário informar o nome')
           
        });

        it("Deve mostrar mensagem de erro com CPF inválido", () =>{
            cy.contains("Cadastre-se para fazer entregas")
            .should("be.visible")
    
            cy.get('input[name="name"]').type("Filomena mena")
            cy.get('input[name="cpf"]').type('273664893AS2'); 
            cy.get('input[name="email"]').clear(); 
            cy.get('input[name="whatsapp"]').type('11 966669945');
        
            cy.get('input[name="postalcode"]').type('15086428'); 
            cy.get('input[type="button"][value= "Buscar CEP"]').click(); 
            cy.get('input[name="address-number"]').type('245');
            cy.get('input[name="address-details"]').type('apto 2');
        
            cy.get('input[name="address"]').should('have.value', 'Travessa José Carvalho Filho' ); 
            cy.get('input[name="district"]').should('have.value','Estância São Pedro Vila Azul' ); 
            cy.get('input[name="city-uf"]').should('have.value','São José do Rio Preto/SP' ); 

            cy.contains('.delivery-method li', 'Moto' ).click()
            cy.get('input[accept^="image"]').attachFile('/image/'+'cnh_gratuita.jpeg')

            cy.get('form button[type="submit"]').click()

            cy.get('.alert-error').should('have.text','Oops! CPF inválido')
        });
    
        it("Deve mostrar mensagem de erro quando email estiver vazio", () =>{
            cy.get('input[name="name"]').type("user um")
            cy.get('input[name="cpf"]').type('27366489352'); 
            cy.get('input[name="email"]').clear()
            cy.get('input[name="whatsapp"]').type('11 966669945');
        
            cy.get('input[name="postalcode"]').type('15086428'); 
            cy.get('input[type="button"][value= "Buscar CEP"]').click(); 
            cy.get('input[name="address-number"]').type('245');
            cy.get('input[name="address-details"]').type('apto 2');
        
            cy.get('input[name="address"]').should('have.value', 'Travessa José Carvalho Filho' ); 
            cy.get('input[name="district"]').should('have.value','Estância São Pedro Vila Azul' ); 
            cy.get('input[name="city-uf"]').should('have.value','São José do Rio Preto/SP' ); 

            cy.contains('.delivery-method li', 'Moto' ).click()
            cy.get('input[accept^="image"]').attachFile('/image/'+'cnh_gratuita.jpeg')

            cy.get('form button[type="submit"]').click()
            cy.get('.alert-error').should('have.text','É necessário informar o email')
        });
    
        it("Deve mostrar mensagem de erro quando todos os campos obrigatórios estiverem vazios", () =>{
            cy.get('form button[type="submit"]').click()
            cy.get('.alert-error').contains('É necessário informar o nome')
            cy.get('.alert-error').contains('É necessário informar o CPF')
            cy.get('.alert-error').contains('É necessário informar o email')
            cy.get('.alert-error').contains('É necessário informar o CEP')
            cy.get('.alert-error').contains('É necessário informar o número do endereço') 
            cy.get('.alert-error').contains('Selecione o método de entrega')
            cy.get('.alert-error').contains('Adicione uma foto da sua CNH')
            
        });
    
        it("Deve mostrar mensagem de erro quando não tiver nenhum meio de entrega selecionado", () =>{
            cy.get('input[name="name"]').type("user um")
            cy.get('input[name="cpf"]').type('27366489352'); 
            cy.get('input[name="email"]').type('emmail@email.com')
            cy.get('input[name="whatsapp"]').type('11 966669945');
        
            cy.get('input[name="postalcode"]').type('15086428'); 
            cy.get('input[type="button"][value= "Buscar CEP"]').click(); 
            cy.get('input[name="address-number"]').type('245');
            cy.get('input[name="address-details"]').type('apto 2');
        
            cy.get('input[name="address"]').should('have.value', 'Travessa José Carvalho Filho' ); 
            cy.get('input[name="district"]').should('have.value','Estância São Pedro Vila Azul' ); 
            cy.get('input[name="city-uf"]').should('have.value','São José do Rio Preto/SP' ); 
            cy.get('input[accept^="image"]').attachFile('/image/'+'cnh_gratuita.jpeg')

            cy.get('form button[type="submit"]').click()
            cy.get('.alert-error').should('have.text','Selecione o método de entrega')
        });

        const a = cy.get('bla')
        a.click()

    }); 

});