let oursonData = [];
const ourson = document.querySelector('#produit');
const ourson_Input = document.querySelector('.search');
const recuperation_Url = window.location.search;
console.log(recuperation_Url)

/****récupération de l'ID******/

const _id = recuperation_Url.slice(3)
console.log(_id);

/******* carte**** */

const url = 'http://localhost:3000/api/teddies/' + _id;
console.log(url)


fetch('http://localhost:3000/api/teddies/' + _id)
    .then(response => response.json())
    .then((data) => (oursonData = data));