const ourson_name = document.getElementById('ourson_name')
const ourson_Price = document.getElementById('ourson_Price');
const ourson_Description = document.getElementById('ourson_Description');
const ourson_Pic = document.getElementById('ourson_Pic');



const dataViewer = () => {}
fetch('http://localhost:3000/api/teddies/5beaacd41c9d440000a57d97')
    .then(response => response.json())
    .then((data) => {

            console.log(data);
            ourson_name.innerHTML = data.name;
            ourson_Price.innerHTML = data.price / 1000 + " €";
            ourson_Description.innerHTML = data.description;
            ourson_Pic.innerHTML = `<img src=${data.imageUrl}>`;




        );

        fetch('http://localhost:3000/api/teddies/')
        .then(response => response.json())
        .then(forEach(data => {
            console.log(data.name);

        }))