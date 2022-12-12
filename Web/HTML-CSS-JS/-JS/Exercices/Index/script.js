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
*/
let data = [];
fetch("zipcodes.json")
.then(response => { return response.json() })
.then(response => { genererListe(response); data = response; } )
.catch(erreur => { console.error(erreur) })

function genererListe(data) 
{
    let myList = document.querySelector("#commune");

    for (let i = 0; i < data.length; i++) 
    {
        let myOption = new Option();
        myOption.value = data[i].codePostal;
        myOption.innerText = data[i].nomCommune; 
        myList.appendChild(myOption);
    }
}


// try
// {
//     let response = await fetch("zipcodes.json");
//     var json = await response.json();
//     console.log(json);
//     console.log("toto");
// } catch(erreur) 
//     {
//         console.error(erreur);
//     }

const btn = document.getElementById("btn");
const input = document.getElementById("listcom");



btn.addEventListener("click", function()
{
  //  console.log(input.value);
    let valeurrAChercher = input.value;
    let summary = document.querySelector("#validSumm");
    let tabCP = [];
    for (let i = 0; i < data.length; i++) 
    {
        let ville = data[i]
    
        if (isNaN(valeurrAChercher))
        {    
            if (valeurrAChercher === ville.nomCommune)
            {
                tabCP.push(ville.codePostal);
            }
        
        } 
        
        else
        {
            if (valeurrAChercher === ville.codePostal)
            {
                tabCP.push(ville.nomCommune);

            }
        }

    }

    for (let i = 0; i < tabCP.length; i++) 
    {
        summary.innerHTML += tabCP[i] + "<br>";
    }
    
})