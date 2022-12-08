document.write("<div class=PremierFichier> </br>1e FICHIER : BASES, CONDITIONS ET BOUCLES</div>");   
document.write("<div class=div0>");
document.write("<br>&nbsp;</br>");
document.write("<button>Click here</button>");
document.write("</br>");
document.write("Bonjour d'un autre fichier JS!");
//Ceci est un commentaire sur une seule ligne
/*C'est un commentaire
sur plusieurs lignes*/
document.write("<br></br>");
document.write("LA BASE");
document.write("</br>");

var X = 5;                                                                   
document.write(X);
document.write("<br>&nbsp;</br>");

// *********************************************************************************************************************

//LES CONDITIONS
document.write(" J'UTILISE IF ELSE.");
document.write("</br>");

var num = 55;
var floating_point_num = 5.5;
var string = 'Hey there!';
var string_2 = "hé là! 'C'est entre guillemets simples'"
var boolean = true; var boolean_2 = false;
if(num <= 6){
    document.write(" num est inférieur à 6.");
}else if(num>6){
    document.write(" num est supérieur à 6.");
}else{
    document.write(" num n'existe pas.");
}
document.write("<br>&nbsp;</br>");

document.write(" J'UTILISE SWITCH CASE. ");     
document.write("</br>");

// *********************************************************************************************************************

//SWITCH CASE : pour des vérifications conditionnelles à effectuer / remplace une liste de if ... else if ... qui pourrait être longue.
switch(num){
    case 70:
        document.write(" excellent! ");
        break;
    case 55:
        document.write(" génial ");
        break;
    case 45:
        document.write(" Bien ");
        break;
    case 30:
        document.write(" D'accord ");
        break;
    default:
        document.write(" Faire mieux ");
        break;
}
document.write("<br>&nbsp;</br>");

document.write(" J'UTILISE UNE FOR LOOP. ");     
document.write("</br>");

// *********************************************************************************************************************

//FOR LOOP: pour vérifier une condition sur plusieurs itérations, où le paramètre qui subit le contrôle de condition peut changer sa valeur.
var Y;
for (Y=1;Y<6;Y++){
    document.write( Y );
    if(Y<6){
        document.write(" C'est OK!<br/>");
    }
}


document.write("<br>&nbsp;</br>");

document.write(" J'UTILISE UNE WHILE LOOP. ");     
document.write("</br>");

// *********************************************************************************************************************

//WHILE LOOP : pour vérifier une condition au début du bloc de code et n'exécute le code que si la condition est vraie.
var Z=1;
while(Z<6){
    document.write(Z);
    i++;
}

document.write("</div>");
document.write("</br>");


