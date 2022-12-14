document.write("<div class=TroisiemeFichier> </br> 3e FICHIER : LES FONCTIONS </div>");    

document.write("<div class=div0>");
document.write("<br>&nbsp;</br>");
document.write(" APPELER UNE FONCTION");
document.write("</br>");

function imprimer(){
    document.write("Bonjour!")
}
imprimer()
/******************************************************************************************************************************** */

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
/******************************************************************************************************************************** */

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
/******************************************************************************************************************************** */

/**L'alerte permet de créer une noite de message pour informer l'utilisateur d'un évènement. */
document.write("<br>&nbsp;</br>");
document.write(" ALERTES");
document.write("</br>");
alert("Ceci est une alerte!");
document.write("<div class=image1>");
var img = document.write("<img src='alerte.png'>");
document.write("<br>&nbsp;</br>");
/**Une chaîne ou une variable de chaîne comme paramètre s'affiche comme message dans la boite d'alerte. */

/******************************************************************************************************************************** */

/**La boîte d'invite est utilisée pour obtenir une entrée de l'utilisateur. */
document.write("<br>&nbsp;</br>");
document.write(" INSTRUCTIONS");
document.write("</br>");
var name = prompt("Entrez votre nom");
document.write("<div class=image2>");
var img = document.write("<img src='inviteDeSaisie.png'>");
document.write("<br>&nbsp;</br>");

/******************************************************************************************************************************** */

document.write("<br>&nbsp;</br>");
document.write(" BOITE DE CONFIRMATION");
document.write("</br>");
var option = confirm("Est-ce que tu t'appelles Harry?")
if(option == True){
    document.write("salut harry");
}
document.write("<div class=image3>");
var img = document.write("<img src='confirmation.png'>");
document.write("<br>&nbsp;</br>");

document.write("</div>"); // fin div0