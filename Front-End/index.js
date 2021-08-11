let oursonData = [];
const ourson = document.querySelector('#ourson');
const ourson_Input = document.querySelector('.search');
let searchTerm = '';


/******* carte**** */
const fetchOurson = async() => {
    await fetch('http://localhost:3000/api/teddies/')
        .then(response => response.json())
        .then((data) => (oursonData = data));

    console.table(oursonData);
};

const oursonDisplay = async() => {
    await fetchOurson();

    oursonData.forEach(function(oursonElement) {
        ourson.appendChild(buildTemplate(oursonElement));
    })

}

const buildTemplate = function(oursonElement) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'oursonCard');

    var ourson_Img = document.createElement('img');
    newDiv.appendChild(ourson_Img);
    ourson_Img.setAttribute('src', oursonElement.imageUrl)
    ourson_Img.setAttribute('class', 'ourson_Pic')

    var newH2 = document.createElement('h2');
    newH2.textContent = oursonElement.name;
    newH2.setAttribute('class', 'ourson_name')
    newDiv.appendChild(newH2);


    var newA = document.createElement('a');
    newA.appendChild(newDiv);
    newA.setAttribute('href', 'produit.html?=id' + oursonElement._id);
    newA.setAttribute('class', 'ourson_lien')
    return newA;

}
oursonDisplay();

/****Search Input */

/* ourson_Input.addEventLitsener('input', (e) => {
    searchTerm = e.target.value;
    console.log(e.targe.value)
}); */

ourson

/***** click pour ouverture vers une autre page */

/***const ourson_click = document.querySelector('.card')

ourson_click.forEach((item) => {
    item.addEventLitsener('click', (e) => {
        console.log(e.target._id)
    })
});

let url_Data = new URL ('http://localhost:3000/api/teddies/?_id')****/ //