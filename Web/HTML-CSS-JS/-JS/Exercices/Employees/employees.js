// var xhr = new XMLHttpRequest();

// xhr.open('GET', './employees.json', true);

// xhr.responseType = 'json';

// xhr.onload = function()
// {
//     if(xhr.status === 200)
//     {
//         console.log(xhr.response);
//     }
// }

let data = [];
fetch("employees.json")
.then(response => { return response.json() })
.then(response => { genererListe(response); data = response; })
.catch(erreur =>  { console.error(erreur) })


function createEmail(data)
{

}