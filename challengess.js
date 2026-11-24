const categories = ["Papeterie", "Accessoires", "Sacs"];
const boutique = {
 nom: "Stock & Fournitures",
 ville: "Youssoufia",
 ouverte: true
};
const produits = [
    { 
        id: 101,
        nom: "Cahier",
        categorie: "Papeterie",
        prix: 20,
        stock: 5
    },
    {
        id: 102,
        nom: "Stylo",
        categorie: "Papeterie",
        prix: 10,
        stock: 0
    },
    {
        id: 103,
        nom: "Trousse",
        categorie: "Accessoires",
        prix: 35,
        stock: 3
    },
    {
        id: 104,
        nom: "Sac",
        categorie: "Sacs",
        prix: 120,
        stock: 2
    },
    {
        id: 105,
        nom: "Classeur",
        categorie: "Papeterie",
        prix: 30,
        stock: 4
    }
];

//challenge 1;
// • Affiche la première catégorie et le nombre initial de catégories.
console.log(categories[0]);
console.log(categories.length);
// • Ajoute « Classement » à la fin, puis remplace « Accessoires » par « Bureau ».
categories.push("Classement");
for(let i = 0 ; i < categories.length ; i++)
{
    if(categories[i] === "Accessoires")
    {
        categories[i] = "Bureau";
    }
}
// • Retire la dernière catégorie et affiche le tableau final.
categories.pop();
console.log(categories);





//challenge 2;
// Affiche le nom et la ville de la boutique.
console.log(boutique.nom);
console.log(boutique.ville);

// • Ajoute la propriété devise avec la valeur "MAD".
boutique.devise = "MAD";
console.log(boutique);

// • Passe ouverte à false et affiche le statut « Fermée » à partir de cette valeur.
boutique.ouverte = false;
if(boutique.ouverte === false)
{
    console.log("Fermée");
}




//challenge 3;
// • Crée un nouveau tableau et copie chaque objet produit avec une boucle et la syntaxe spread.
const produits2 = [];
for(let i = 0 ; i < produits.length ; i++)
{
    let produit  = {...produits[i]};
    produits2.push(produit);
}
console.log(produits2);
// • Affiche le nom et le stock de chaque produit de la copie.
for(let i = 0; i < produits2.length ; i++ )
{
    console.log(produits2[i].nom);
    console.log(produits2[i].stock);
}
// • Dans la copie, passe le stock du Stylo à 6, ajoute une Gomme (ID 106, Papeterie, 5 DH, stock 8),
for(let i = 0; i < produits2.length ; i++)
{
    if(produits2[i].nom === "Stylo")
    {
        produits2[i].stock = 6;
    }
}
let gomme ={
    id: 106,
    nom: "Gomme",
    categorie: "Papeterie",
    prix: 5,
    stock: 8

}
produits2.push(gomme);
console.log(produits2);

// puis retire le Sac (ID 104).
let sac = produits2.findIndex((id) => id.id == 104 );
produits2.splice(sac , 1);
console.log(produits2);
console.log(produits);






//challenge 4;
// • Avec filter(), garde les produits dont le stock est supérieur à 0.
let produitssuperieur = produits.filter((element) => element.stock > 0);
console.log("superior 0 : ", produitssuperieur);
// • Fais un deuxième filtre pour garder les produits de la catégorie « Papeterie » dont le stock est
// supérieur à 0.
let produitscategorie = produitssuperieur.filter((element) => element.categorie === "Papeterie");
console.log("les produits de la catégorie « Papeterie » : ", produitscategorie);






//challenge 5
// • Avec map(), crée un tableau qui contient uniquement les noms.
let noms = produits.map((element) => element.nom );
console.log("noms : ", noms);
// • Avec un second map(), crée un tableau d’étiquettes au format « Nom - Prix DH ».
let noms_prix = produits.map((element) => `${element.nom} - ${element.prix} DH`);
console.log("noms_prix : ",noms_prix );







//challenge 6
// • Avec reduce(), calcule le nombre total d’unités disponibles.
let unites = produits.reduce((sum , element) => {
    return element.stock + sum;},0);
console.log(`le nombre total d’unités disponibles: ${unites} `);
// • Avec un second reduce(), calcule la valeur totale du stock. Pour chaque produit, multiplie son prix unitaire par son stock.
let valeur_total = produits.reduce((total , element) => {
     return  (total + element.stock * element.prix);
},0);
console.log(`calcule la valeur totale du stock : ${valeur_total} DH`);










//challenge 7;
// • Avec find(), récupère le produit d’ID 103. Réessaie avec l’ID 999.
const firstid = produits.find((element) => element.id == 103);
const secendid = produits.find((element) => element.id == 999);
console.log(firstid);
console.log(secendid);
// • Avec findIndex(), récupère la position de ces deux ID dans le tableau.
const with_findindex1 = produits.findIndex((element) => element.id == 103);
const with_findindex2 = produits.findIndex((element) => element.id == 999);

console.log(with_findindex1);
console.log(with_findindex2);








//challenge 8;
// • Avec some(), vérifie si au moins un produit a un stock égal à 0.
let result = produits.some((element) =>{
    return element.stock === 0;
})
console.log(result);
// Indice. La méthode renvoie un booléen dès qu’un produit satisfait la condition.
// À vérifier. Le résultat est true





















