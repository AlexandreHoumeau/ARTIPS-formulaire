document.getElementById("formulaire").addEventListener("submit", function(e) {
	e.preventDefault();

	var data = new FormData(this);

	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.response);
			var res = this.response;
			alert(res);
		} else if (this.readyState == 4) {
			alert("Une erreur est survenue...");
		}
	};

	xhr.open("POST", "script/script.php", true);
	xhr.responseType = "json";
	xhr.send(data);

	return false;
});



//Message avant submit pour le mot de passe
document.getElementById("pwd2").addEventListener("input", function(){
	var erreur = document.getElementById("erreur-pwd");

	if (document.getElementById("pwd1").value.length > 20) {
		erreur.innerHTML = "Le mot de passe ne doit pas contenir plus de 20 caractères !";
	}

	if (this.value != document.getElementById("pwd1").value) {
		erreur.innerHTML = "Les deux mots de passe ne correspondent pas !";
	}

	if (this.value == document.getElementById("pwd1").value && this.value.length < 20 && document.getElementById("pwd1").value.length < 20){
		erreur.innerHTML = "";
	}
});


//Message avant submit pour le premier mot de passe
document.getElementById("pwd1").addEventListener("input", function(){
	var erreur = document.getElementById("erreur-pwd");

	if (this.value.length > 20) {
		erreur.innerHTML = "Le mot de passe ne doit pas contenir plus de 20 caractères !";
	}
	else {
		erreur.innerHTML = "";
	}
});


//Message avant submit pour le prénom
document.getElementById("prenom").addEventListener("input", function(){
	var erreur = document.getElementById("erreur-prenom");

	if (this.value.length > 50) {
		erreur.innerHTML = "Le prénom ne doit pas contenir plus de 50 caractères !";
	}
	else {
		erreur.innerHTML = "";
	}
});


//Message avant le submit pour le nom
document.getElementById("nom").addEventListener("input", function(){
	var erreur = document.getElementById("erreur-nom");

	if (this.value.length > 50) {
		erreur.innerHTML = "Le nom ne doit pas contenir plus de 50 caractères !";
	}
	else {
		erreur.innerHTML = "";
	}
});

