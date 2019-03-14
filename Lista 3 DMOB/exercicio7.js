function reverte(){
  var input = document.getElementsByTagName('input');
  var nomes = [];
  for (var i = 0; i < input.length; i++) {
    var nome = document.querySelector(`input[nome = nome${(i+1)}]`);
    nomes.push(nome.value);
  }
  for (var i = 0; i < nomes.length; i++) {
    var nome = nomes[i];
    var splitnome = nome.split(""); 
    var nomeReverso = splitnome.reverse(); 
    var novoNome = nomeReverso.join(""); 
    document.querySelector(`input[nome=nome${(i+1)}]`).value = novoNome;
  }
}
