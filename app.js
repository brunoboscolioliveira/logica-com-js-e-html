
      function pulaLinha() {
        document.write("<br>");
        document.write("<br>");
      }

      function mostra(frase){
        document.write(frase);
        pulaLinha();
      }


      function calcularIdade(dataNascimento) {
        var hoje = new Date();
        var dataNasc = new Date(dataNascimento);
        
        var idade = hoje.getFullYear() - dataNasc.getFullYear();
        var mes = hoje.getMonth() - dataNasc.getMonth();
        
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
          idade--;
        }
  
        return idade;
      }

      function verificarProfissaoDeRisco() {

        if (profissoesDeRisco.includes(profissao)) {
          document.write(" • PROFISSÃO DE RISCO, POR FAVOR, ENTRE EM CONTATO PELO TELEFONE (11) 9999-9999).");
        } else {
          document.write(" • Sua profissao não é de risco más estamos a disposição para avaliar um seguro ideal para você!");
        }
      }


      const profissoesDeRisco = [
          "Bombeiro",
          "Policial",
          "Militar",
          "Minerador",
          "Piloto de aviação",
          "Eletricista de alta tensão",
          "Piloto de corrida",
          "Técnico em desarmamento de explosivos",
          "Operador de guindaste",
          "Mergulhador profissional",
          "Trabalhador de demolição",
          "Astronauta"
    ];

    
    //Coletando informações do usuário
      var nome = prompt("Informe seu nome completo:");
      var dataNascimento = prompt("Informe sua data de nascimento (formato: yyyy-mm-dd):");
      var profissao = prompt("Informe sua profissão:");

      var idade = calcularIdade(dataNascimento);


      //front
      mostra("Olá Sr(a). " + nome);
      mostra("Idade: " + idade);
      mostra("Profissão: " + profissao);

      verificarProfissaoDeRisco();

      //**************************************************
   
      document.write("<h5>Validar profissão</h5>");
      document.write("<input id='profissaoInput'/><button id='pesquisarButton'>Pesquisar</button><br><br>");
      

      var input = document.getElementById("profissaoInput");
      input.focus();
      var button = document.getElementById("pesquisarButton");

      button.addEventListener("click", function() {
        var valorInput = input.value;
        if (profissoesDeRisco.includes(valorInput)) {
          alert("PROFISSÃO DE RISCO, recomendamos que entre em contato pelo telefone (11)9999-9999.");
        } else {
          alert("Está profissao não é de risco.");
        }
        input.value = "";
        input.focus();
 });