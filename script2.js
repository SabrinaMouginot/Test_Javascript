document.write("<div class=QuatrièmeFichier> </br> 4e FICHIER : OBJETS </div>");
/**Un objet est une collection de variables stockées dans un système de paires nom: valeur. */
var voiture = {
    Marque: "Peugeot", Modele:"206", Type:"Coupé", TailleMotor: 2.0
}

/********************************************************************************************************************************************* */

/** Propriété de l'objet: Les paramètres d'objet (variables) sont accessibles comme suit. */
var voiture = {
    Marque: "Renault", Modele:"Mégane", Type:"Coupé", TailleMotor: 1.4
}

var V = voiture.Marque;
var V = voiture['Marque'];

/**Méthodes d'objet: Les méthodes d'objet sont accessibles comme suit. */
nomObjet.nomMethode();
/**Pour accéder aux paramètres ainsi qu'aux méthodes, l'opérateur point ('.') est très utile. */

/********************************************************************************************************************************************* */

/** Création d'objets */
var voiture = {
    Marque: "Ford", Modele:"Mustang", Type:"Coupe", TailleMotor: 5.2
}

var voiture2 = new car("Chevy","Camaro","Convertible", 6.2);
document.write(voiture2.Marque);
document.write(voiture2.TailleMotor);


