document.write("<div class=QuatrièmeFichier> </br> 3e FICHIER : OBJETS </div>");
// /**Un objet est une collection de variables stockées dans un système de paires nom: valeur. */
// var voiture = {
//     Marque: "Peugeot", Modèle:"206", Type:"Coupé", Taille_Motor: 2.0
// }

// /** Propriété de l'objet: Les paramètres d'objet (variables) sont accessibles comme suit. */
// var voiture = {
//     Marque: "Renault", Modèle:"Mégane", Type:"Coupé", Taille_Motor: 1.4
// }

// var V = voiture.Marque;
// var V = voiture['Marque'];

// /**Méthodes d'objet: Les méthodes d'objet sont accessibles comme suit. */
// nomObjet.nomMéthode();
// /**Pour accéder aux paramètres ainsi qu'aux méthodes, l'opérateur point ('.') est très utile. */



/** Création d'objets */
var voiture = {
    Marque: "Ford", Modèle:"Mustang", Type:"Coupe", Taille_Motor: 5.2
}

var voiture_2 = new voiture("Chevy","Camaro","Convertible", 6.2);
document.write(voiture_2.Marque);
document.write(voiture_2.Taille_Motor);


