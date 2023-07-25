describe(" Suite para estudo com custom commands para delivery do bugerEats", () => {
    context("Suite de testes de cadastro ", () => {
        beforeEach("Acessar pagina de delivery", () => {
            cy.HomeEats();
        });

        it("Deve ser possivel retornar para a Home", () => {
            cy.get('a[href*="/"]').click();
        });

        it("Deve ser possivel cadastrar com sucesso", () => {
            cy.addName("Teste teste");
            cy.addCPF("27366489352");
            cy.addEmail("flor.bela@gmail.com");
            cy.addWhatsapp("11 966669945");

            cy.addZipcode("15086428");
            cy.searchButton();
            cy.addressNumber("245");
            cy.addressDetails("apto 2");

            cy.deliveryMethod("Moto");
            cy.AddPhoto();

            cy.formButton();
        });

        it("Deve mostrar mensagem de erro quando campo nome estiver vazio", () => {
            cy.addCPF("27366489352");
            cy.addEmail("flor.bela@gmail.com");
            cy.addWhatsapp("11 966669945");

            cy.addZipcode("15086428");
            cy.searchButton();
            cy.addressNumber("245");
            cy.addressDetails("apto 2");

            cy.deliveryMethod("Moto");
            cy.AddPhoto();

            cy.formButton();
            cy.alert("É necessário informar o nome");
        });

        it("Deve mostrar mensagem de erro com CPF inválido", () => {
            cy.addName("Nome Sobrenome");
            cy.addCPF("2736648935A");
            cy.addEmail("flor.bela@gmail.com");
            cy.addWhatsapp("11 966669945");

            cy.addZipcode("15086428");
            cy.searchButton();
            cy.addressNumber("245");
            cy.addressDetails("apto 2");

            cy.deliveryMethod("Bicicleta");
            cy.AddPhoto();

            cy.formButton();
            cy.alert("Oops! CPF inválido");
        });

        it("Deve mostrar mensagem de erro quando email estiver vazio", () => {
            cy.addName("Teste teste");
            cy.addCPF("27366489352");
            cy.addWhatsapp("11 966669945");

            cy.addZipcode("15086428");
            cy.searchButton();
            cy.addressNumber("245");
            cy.addressDetails("apto 2");

            cy.deliveryMethod("Bicicleta");
            cy.AddPhoto();

            cy.formButton();
            cy.alert("É necessário informar o email");
        });

        it("Deve mostrar mensagem de erro quando todos os campos obrigatórios estiverem vazios", () => {
            cy.formButton();
            cy.alert("É necessário informar o nome");
            cy.alert("É necessário informar o CPF");
            cy.alert("É necessário informar o email");
            cy.alert("É necessário informar o CEP");
            cy.alert("É necessário informar o número do endereço");
            cy.alert("Selecione o método de entrega");
            cy.alert("Adicione uma foto da sua CNH");
        });

        it("Deve mostrar mensagem de erro quando não tiver nenhum meio de entrega selecionado", () => {
            cy.addName("Teste teste");
            cy.addCPF("27366489352");
            cy.addEmail("flor.bela@gmail.com");
            cy.addWhatsapp("11 966669945");

            cy.addZipcode("15086428");
            cy.searchButton();
            cy.addressNumber("245");
            cy.addressDetails("apto 2");

            cy.AddPhoto();

            cy.formButton();
            cy.alert("Selecione o método de entrega");
        });
    });
});
