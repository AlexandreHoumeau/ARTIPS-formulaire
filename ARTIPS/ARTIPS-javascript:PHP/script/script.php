<!DOCTYPE html>
<html>
<head>
	<title>Bienvenue</title>
	<link rel="stylesheet" type="text/css" href="../style/index-script.css">
	<link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto&display=swap" rel="stylesheet">
	<meta charset="utf-8">

</head>
<body>
	<header>
		<h1><img style="width: 20%; position:relative;left: 50%;transform: translate(-50%,0);" src="../style/img/artips.png"></h1>
	</header>

	<?php
	//connexion dans la base de donnée

	if (isset($_POST['prenom']) AND isset($_POST['nom']) AND isset($_POST['pwd1']) AND isset($_POST['email']) AND isset($_POST['sex'])) {
		if (!empty($_POST['prenom']) AND !empty($_POST['nom']) AND !empty($_POST['pwd1']) AND !empty($_POST['email'])) {
			//Envoyer dans la base de donnée
		}
	}
	?>

	<h1 style="text-align: center;position:relative;top: 25vh;">MERCI DE VOTRE INSCRIPTION <?php echo strtoupper($_POST['prenom']);?> !</h1>
</body>
</html>