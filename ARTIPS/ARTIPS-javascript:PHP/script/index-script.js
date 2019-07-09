document.forms["formulaire"].addEventListener("submit",function(e) {
	//Fonction pour l'affichage des messages d'erreur avant le submit
	var erreur;
	var erreurpwd = document.getElementById("erreur-pwd");
	var erreurprenom = document.getElementById("erreur-prenom");
	var erreurnom = document.getElementById("erreur-nom");
	var inputs = this;
	
	//boucle pour vérifier tous les champs 
	for (var i = 0; i < inputs.length; i++) {
		if (!inputs[i].value) {
			erreur = "Veuillez renseigner tous les champs obligatoires ...";
		}
	}


	if (erreur) {
		e.preventDefault();
		alert(erreur);
		return false;
	}

	//Verifier le mot de passe avant le submit
	if (erreurpwd) {
		if (document.getElementById("pwd1").value.length > 20 || 0 < document.getElementById("pwd2").value.length > 20 ) {
			alert("Le mot de passe ne doit pas contenir plus de 20 caractères ...");
			e.preventDefault();
			return false;
		}

		if (document.getElementById("pwd2").value != document.getElementById("pwd1").value) {
			alert("Les deux mots de passe ne correspondent pas ...");
			e.preventDefault();
			return false;
		}			
	}
	
	//Vérifier le prénom avant le submit 
	if (document.getElementById("prenom").value.length > 50) {
		alert("Le prénom ne doit pas contenir plus de 50 caractères ...");
		e.preventDefault();
		return false;
	}

	//Vérifier le nom avant le submit
	if (document.getElementById("nom").value.length > 50) {
		alert("Le nom ne doit pas contenir plus de 50 caractères ...");
		e.preventDefault();
		return false;
	}

	//Si toutes les conditions sont vérifiées envoie des informatioins sur la page php
	else{
		alert('Formulaire envoyé !');

	}
	
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







// document.getElementById("formulaire").addEventListener("submit",function(e) {

// 	var erreur;

// 	var inputs = this.getElementsByTagName("input");
	
// 	for (var i = 0; i < inputs.length; i++) {
// 		if (!inputs[i].value) {
// 			erreur = "Veuillez renseigner tous les champs obligatoires";
// 		}
// 	}

// 	if (erreur) {
// 		e.preventDefault();
// 		document.getElementById("erreur").innerHTML = erreur;
// 		return false;
// 	}
// 	else{
// 		alert('Formulaire envoyé !');	
// 	}
	
// });


	/*var email = document.getElementById("email");
	var pwd1 = document.getElementById("pwd1");
	var pwd2 = document.getElementById("pwd2");
	var prenom = document.getElementById("prenom");
	var nom = document.getElementById("nom");
	*/