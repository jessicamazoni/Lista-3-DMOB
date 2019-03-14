document.querySelector('button[name=intercalated]').addEventListener("click", function() {
  var p1 = document.querySelector('input[name=p1]').value;
  var p2 = document.querySelector('input[name=p2]').value;
  if ((!!p1 && p1.length > 2) && (!!p2 && p2.length > 2)) {
    intercalatedWords(p1, p2);
  } 
  else {
    alert("Palavras devem possuir tamanho acima de 2 caracteres");
  }
});

function intercalatedWords(p1, p2) {
  var name = [];
  if (p1.length > 0) {
    name.push(p1[0]);
  }
  if (p2.length > 0) {
    name.push(p2[0]);
  }
  for (var i = 0, length = p1.length; i < length; i++) {
   if (i != 0 && i != (length - 1)) {
      name.push(p1[i]);
   }
  }
  for (var i = 0, length = p2.length; i < length; i++) {
   if (i != 0 && i != (length - 1)) {
      name.push(p2[i]);
   }
  }
  if (p1.length > 0) {
    name.push(p1[p1.length - 1]);
  }
  if (p2.length > 0) {
    name.push(p2[p2.length - 1]);
  }
  var newName = name.join("");
  document.querySelector('input[name=result]').value = newName;
}