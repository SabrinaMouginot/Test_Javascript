document.write("Bonjour d'un autre fichier JS!");

//Ceci est un commentaire sur une seule ligne
/*C'est un commentaire
sur plusieurs lignes*/

var X = 5;                                                                   // X
document.write(X);

// comment faire le retour à la ligne?
// var Y = "\r";
// document.write(Y);
// var Y = "\n";
// document.write(Y);
//A mon avis , le retour à la ligne peut se faire avec \n. Mais je n'ai pas trouvé où je devais le glisser pour que ça fonctionne.

document.write(" J'UTILISE IF ELSE.");                                       // X
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

document.write(" J'UTILISE SWITCH CASE. ");                                  // X
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
