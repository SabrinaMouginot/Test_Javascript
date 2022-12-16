document.write("<div class=QuatrièmeFichier> </br> 4e FICHIER : OBJETS </div>");
document.write("<br>&nbsp;</br>");
/** Un objet est une collection de variables stockées dans un système de paires nom: valeur. */
/** Propriété de l'objet: Les paramètres d'objet (variables) sont accessibles comme suit. */
var voiture = {
    Marque: "Renault", Modele:"Mégane", Type:"Coupé", TailleMotor: 1.4
};

var V = voiture.Marque;
var V = voiture['Marque'];

var U = voiture.Modele;
var T = voiture.TailleMotor;

document.write(V)
document.write("</br>")
document.write(V +" "+U+" " + T)
document.write("<br>&nbsp;</br>");

// /**Méthodes d'objet: Les méthodes d'objet sont accessibles comme suit. */
// nomObjet.nomMethode();
// /**Pour accéder aux paramètres ainsi qu'aux méthodes, l'opérateur point ('.') est très utile. */

// /********************************************************************************************************************************************* */

// /** Création d'objets */
// var voiture = {
//     Marque: "Ford", Modele:"Mustang", Type:"Coupe", TailleMotor: 5.2
// }

var voiture2 = new voiture("Chevy","Camaro","Convertible", 6.2);
// // voiture2.Marque = "Chevy";
// // voiture2.Modele = "Camaro";
// // voiture2.Type = "Convertible";
// // voiture2.TailleMotor = 6.2;
document.write(voiture2.Marque);
document.write(voiture2.TailleMotor);


// var voiture = {
//     Marque: 'Ford', 
//     Modele:'Mustang', 
//     Type:'Coupe', 
//     TailleMotor: 5.2
// };

// var voiture = new voiture();
// voiture2.Marque = 'Chevy';
// voiture2.Modele = 'Camaro';
// voiture2.Type = 'Convertible';
// voiture2.TailleMotor = 6.2;
// document.write(voiture2.Marque);
// document.write(voiture2.TailleMotor);