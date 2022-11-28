var monXHR = new XMLHttpRequest();
monXHR.open("GET", "./cardgame.json", true);

monXHR.responseType = "json"; 

monXHR.send();

monXHR.onload= function()
{
    if (monXHR.status != 200)
    {
        console.log("Erreur" + monXHR.status + monXHR.statusText);
    }

    else
    {
        let data = monXHR.response;
        console.log(data);
    }
} 



function tableauJour(data) 
{



}