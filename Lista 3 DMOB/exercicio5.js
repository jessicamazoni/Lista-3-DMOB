var form = document.getElementById("form-contato");

if (form.addEventListener) {                   
    form.addEventListener("submit", validaCadastro);
} 
else if (form.attachEvent) {                  
    form.attachEvent("onsubmit", validaCadastro);
}

function validaCadastro(evt){
	var login = document.getElementById('login');
	var senha = document.getElementById('senha');
	var senha2 = document.getElementById('senha2');
	var contErro = 0;

	caixa_login = document.querySelector('.msg-login');
	if(login.value == ""){
		caixa_login.innerHTML = "Favor preencher o login";
		caixa_login.style.display = 'block';
		contErro += 1;
	}
	else{
		caixa_login.style.display = 'none';
	}


	caixa_senha = document.querySelector('.msg-senha');
	if(senha.value == ""){
		caixa_senha.innerHTML = "Favor preencher a Senha";
		caixa_senha.style.display = 'block';
		contErro += 1;
	}
	else if(senha.value.length < 6 || senha.value.length > 10){
		caixa_senha.innerHTML = "Favor preencher a Senha com o mínimo de 6 caracteres e máximo de 10 caracteres";
		caixa_senha.style.display = 'block';
		contErro += 1;
	}
	else{
		caixa_senha.style.display = 'none';
	}

	
	caixa_senha2 = document.querySelector('.msg-senha2');
	if(senha2.value == ""){
		caixa_senha2.innerHTML = "Favor preencher o campo Repita a Senha";
		caixa_senha2.style.display = 'block';
		contErro += 1;
	}
	else if(senha2.value.length < 6 || senha2.value.length > 10){
		caixa_senha2.innerHTML = "Favor preencher o campo Repita a Senha com o mínimo de 6 caracteres e máximo de 10 caracteres";
		caixa_senha2.style.display = 'block';
		contErro += 1;
	}
	else{
		caixa_senha2.style.display = 'none';
	}

	if(senha.value != "" && senha2.value != "" && senha.value != senha2.value){
		caixa_senha2.innerHTML = "O campo Repita a Senha é diferente do campo Senha";
		caixa_senha2.style.display = 'block';
		contErro += 1;
	}

	if(contErro > 0){
		evt.preventDefault();
	}
}