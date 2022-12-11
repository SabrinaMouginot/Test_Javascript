document.write("<div class=colonne1>");
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

document.write("UNE IMAGE");
document.write("</br>");
document.write("<div class=image>");
var img = document.write("<img src='lego.png'>");
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



// *********************************************************************************************************************

//SWITCH CASE : pour des vérifications conditionnelles à effectuer / remplace une liste de if ... else if ... qui pourrait être longue.
document.write(" J'UTILISE SWITCH CASE. ");     
document.write("</br>");

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
/*La variable num est envoyée à l'instruction switch case comme paramètre conditionnel à vérifier.
La valeur de cette variable est vérifiée séquentiellement pour trouver des correspondances.
Ici, une correspondance est trouvé au cas 55.
Par conséquent, le code à l'intérieur de ce bloc est exécuté.
L'instruction "break" est utilisée pour quitter un cas de commutateur une fois qu'une correspondance a été trouvéeet le code au-dessus d'elle a été exécuté.
En son absence, le programme ira aux cas suivants et continuera à rechercher.*/


// *********************************************************************************************************************

//FOR LOOP: pour vérifier une condition sur plusieurs itérations, où le paramètre qui subit le contrôle de condition peut changer sa valeur.
document.write(" J'UTILISE UNE FOR LOOP. ");     
document.write("</br>");

var Y;
for (Y=1;Y<6;Y++){
    document.write( Y );
    if(Y<6){
        document.write(" C'est OK!<br/>");
    }
}

document.write("<br>&nbsp;</br>");
/*déclaration 1 : La variable i est initialisée à une valeur de 0.
déclaration 2 : Il s'agit de la condition de vérification qui vérifiera si la valeur de 6 est inférieure à 6 à chaque itération.
déclaration 3 : Cette instruction est utilisée pour modifier la variable i. Il est utilisé pour incrémenter la valeur de i à chaque itération.*/

// *********************************************************************************************************************

//WHILE LOOP : pour vérifier une condition au début du bloc de code et n'exécute le code que si la condition est vraie.
document.write(" J'UTILISE UNE WHILE LOOP. ");     
document.write("</br>");

var Z=1;
while(Z<6){
    document.write(Z);
    if(Z<6){
        document.write(" C'est OK!<br/>");
    }
    Z++;
}

document.write("<br>&nbsp;</br>");
/* La condition de la boucle while verifie si la variable Z est inférieure à 6.
Si cette condition est vraie , le bloc de code à l'intérieur de la boucle while est éxecuté.
Ici on essaye d'incrémenter la variable Z d'une unité à chaque itération.
Lorsque la valeur est supérieure à 6, c'est-à-dire 7, la vérification conditionnelle while renvoie false et la boucle est fermée. */

// *********************************************************************************************************************

/* DO ... WHILE : (comme la while loop) pour vérifier une condition et n'exécute le code que si la condition est vraie. 
Mais la vérification conditionnelle est effectuée à la fin du bloc de code. 
En tant que tel, la première itération du bloc de code est exécutée indépendamment du fait que le contrôle conditionnel renvoie vrai ou faux.
Ici, le bloc de code est toujours exécuté au moins une fois.*/
document.write(" J'UTILISE DO ... WHILE. ");     
document.write("</br>");

var DW=1;
do{
    document.write( DW );
    document.write("</br>");
    DW++;
}while(DW<5);
/* La condition n'est vérifiée qu'à la fin du bloc de code.
Tant que tel, par rapport à la boucle while, le programme passe par une itération supplémentaire.
Le dernier nombre imprimé dans la boucle while serait 5, 
mais ici, puisque la vérification conditionnelle est effectuée à la fin fin du bloc de code,
et une itération supplémentaire du code est également effectuée, grâce à laquelle 6 est également imprimé.*/

// *********************************************************************************************************************


document.write("</div>"); // fin div0
document.write("</div>"); // fin colonne1
document.write("</br>");


