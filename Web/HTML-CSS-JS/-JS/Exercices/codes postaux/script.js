/*
var xhr = new XMLHttpRequest();

xhr.open('GET', './zipcodes.json', true);

xhr.responseType = 'json';

xhr.onload = function()
{
    if(xhr.status === 200)
    {
        console.log(xhr.response);
    }
}

xhr.send();

fetch("zipcodes.json")
.then(response => { return response.json() })
.then(json => { (console.log(json)) })
.catch(erreur => { console.error(erreur) })
*/

try
{
    let response = await fetch("zipcodes.json");
    var json = await response.json();
    console.log(json);
    console.log("toto");
} catch(erreur) 
    {
        console.error(erreur);
    }

const btn = document.getElementById("btn")
const input = document.getElementById("toto")

btn.addEventListener("click", function()
{
    console.log(input.value);
    let valeurrAChercher = input.value;
    
    for (let i = 0; i < json.length; i++) 
    {
        let ville = json[i]
        
        if(valeurrAChercher === ville.codePostal)
        {
            console.log(ville.nomCommune + " " + ville.codePostal);
        }   
    }

    for(let ville of json)
    {

    }

})