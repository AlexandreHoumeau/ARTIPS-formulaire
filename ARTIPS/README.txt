README 

Le langage back-end utilisé est du PHP. Pour pouvoir utiliser le formulaire il faut installer un logiciel qui émule un serveur en local, tel que MAMP ou WAMP en fonction de l'OS.


Vous trouverez deux dossiers: 

- ARTIPS-javascript/PHP:
Dans celui-ci vous trouverez un formulaire où tous les champs sont validés par javascript. Une première fois instantanément et une deuxième fois au submit. 
L'envoi des informations du formulaire se fait avec le code html grâce à la fonction action="cible.php" de la balise formulaire. 
Cela renvoie donc à une page PHP qui récolte les informations et qui normalement les envoie dans la base de données. 


- ARTIPS-javascript/JSON/PHP
Dans celui-ci vous trouverez un formulaire où les champs sont vérifiés instantanément par le javascript et au submit par le PHP. J'utilise la requête XHTML pour envoyer les informations au back-end. Le client ne voit donc pas la page .php et le formulaire est envoyé dans la base de données alors qu'il est encore sur la page du formulaire. 



Instructions d'utilisation : 

1.Mettre les dossiers ARTIPS-javascript/PHP et ARTIPS-javascript/JSON/PHP dans un dossier utilisé par l'émulateur (WAMP ou MAMP) pour que votre ordinateur puisse lire le PHP. 

2. Ouvrir le fichier index.html dans chaque dossier.







