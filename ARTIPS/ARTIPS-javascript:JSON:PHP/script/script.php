<?php

$msg = "Un problème est survenu ...";
$succes = 0;

if (!empty($_POST['email']) AND !empty($_POST['pwd1']) AND !empty($_POST['prenom']) AND !empty($_POST['nom'])) {
	$prenom = $_POST['prenom'];
	$nom = $_POST['nom'];
	$pwd1 = $_POST['pwd1'];
	$pwd2 = $_POST['pwd2'];
	

	if ($pwd1 == $pwd2) {
		
		if (strlen($pwd1) <= 20 OR strlen($pwd2) <= 20 ) {
			
			if (strlen($prenom) <= 50) {

				if (strlen($nom) <= 50) {
					//Inscrire dans la base de donnée
					$msg = "Vous êtes inscrits !";
					$success = 1;

				}else {
					$msg = "Le nom ne peut pas épasser les 50 caractères...";
				}					
			}else{
				$msg = "Le prenom ne peut pas depasser les 50 caractères...";
			}
		}else{
		 	$msg = "Le mot de passe ne peut pas contenir plus de 20 caractères...";
		}	
	}else{ 
		$msg = "Les mots de passe ne correspondent pas...";
	}	
}else{
	$msg = "Veuillez remplir tous les champs obligatoires";
}

echo json_encode($msg);
?>
