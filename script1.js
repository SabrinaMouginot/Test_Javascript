document.write("<div class=TroisiemeFichier> </br> 3e FICHIER : LES FONCTIONS </div>");    
/**Une fonction est un morceau de code conçu pour effectuer une tâche particulière ou être réutilisé encore et encore.
 Les fonctions aident à réduire la longueur du code et à améliorer la répétabilité du code.
 */

/**Une fonction peut-être appelée à partir de n'importe quelle partie du programme pour démarrer son éxecution.
 Pour appeler une fonction, spécifiez le nom de la fonction suivi d'un ensemble de parenthèses.
 */
document.write("<div class=div0>");
document.write("<br>&nbsp;</br>");
document.write(" APPELER UNE FONCTION");
document.write("</br>");

function imprimer(){
    document.write("Bonjour!")
}
imprimer()
/**Ici, la fonction 'imprimer' est appelée en mentionnant son nom puis en le suivant par un sensemble de parenthèses (). */

/******************************************************************************************************************************** */

/**Les valeurs peuvent être envoyées à une fonction en tant qu'attibuts. Ceux-ci peuvent ensuite être exploités par une fonction. */
document.write("<br>&nbsp;</br>");
document.write(" LES PARAMETRES DE FONCTION");
document.write("</br>");
document.write("a=2 et b=6");
document.write("</br>");
document.write("a+b=");

function ajouter(a,b){
    document.write(a+b)
}
ajouter(2,6)
/**Ici, la fonction 'ajouter' est appelée et 2 valeurs lui sont envoyées. 
 Ces valeurs sont ajoutées et imprimées par la fonction.
 Une fonction peut prendre n'importe quel nombre de paramètres.
 */

/******************************************************************************************************************************** */

/**Une fonction peut renvoyer une valeur à l'endroit où elle a été appelée à l'aide de l'instruction 'return'. */
document.write("<br>&nbsp;</br>");
document.write(" DECLARATION DE RETOUR");
document.write("</br>");
document.write("c=1 et d=3");
document.write("</br>");
document.write("c+d=");

function ajout (c,d){
    return c+d;
}

var W = ajout(1,3);
document.write(W);
/**Ici, les valeurs 1 et 3 sont envoyées à la fonction 'ajouter'.
 Cette fonction ajoute ensuite ces deux valeurs et utilise l'instruction "return" à l'endroit où l'endroit où elle a été appelée.
 Ici, la valeur retournée est affectée à la variable W. */

/******************************************************************************************************************************** */

/**L'alerte permet de créer une noite de message pour informer l'utilisateur d'un évènement. */
document.write("<br>&nbsp;</br>");
document.write(" ALERTES");
document.write("</br>");
alert("Ceci est une alerte!");
document.write("<div class=image1>");
var img1 = document.write("<img src='alerte.png'>");
document.write("<br>&nbsp;</br>");
/**Une chaîne ou une variable de chaîne comme paramètre s'affiche comme message dans la boite d'alerte. */

/******************************************************************************************************************************** */

/**La boîte d'invite est utilisée pour obtenir une entrée de l'utilisateur. */
document.write("<br>&nbsp;</br>");
document.write(" INSTRUCTIONS");
document.write("</br>");
var name = prompt("Entrez votre nom");
document.write("<div class=image2>");
var img2 = document.write("<img src='inviteDeSaisie.png'>");
document.write("<br>&nbsp;</br>");

/******************************************************************************************************************************** */

/**La boite de confirmation est utilisée pour prendre la saisie de l'utilisateur lorsque quelque chose doit être confirmé ou accepté par l'utilisateur. */
document.write("<br>&nbsp;</br>");
document.write(" BOITE DE CONFIRMATION");
document.write("</br>");
document.write("<div class=image3>");
var img3 = document.write("<img src='confirmation.png'>");
document.write("<br>&nbsp;</br>");
var option = confirm("Est-ce que tu t'appelles Harry?")
if(option == True){
    document.write("salut harry");
}
/**La boîte de confirmation donne à l'utilisateur deux options - "ok" et "cancel". 
 La fonction renvoie True, si l'utilisateur sélectionne "OK". 
 La fonction renvoie False si l'utilisateur sélectionne "Cancel". */

document.write("</div>"); // fin div0