function createCell(myValue, myRow)
{
    let myCell= myRow.insertCell();
    myCell.textContent = myValue;
    
}


function createTitleCell(myValue, myRow)
{
    let myTitleCell = document.createElement("th");
    myTitleCell.textContent = myValue;
    myRow.append(myTitleCell);

}

function tableauJour(_data) 
{
    let myTab = document.getElementById("perso");

    let myTHead = myTab.createTHead();
    
    let titleRow = myTHead.insertRow();

    for (const key in _data[0])
    {
        createTitleCell(key, titleRow);    
    }

    let myBody = myTab.createTBody();
    
    for (let i = 0; i < _data.length; i++)
    {
        let myRow = myBody.insertRow();
        
        for (var key in _data[i])
        {
            createCell(_data[i][key], myRow);
        }
    }

}


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

      tableauJour(data);

        console.log(data);
    }
} 



