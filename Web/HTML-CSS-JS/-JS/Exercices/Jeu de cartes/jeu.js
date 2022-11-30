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

var tabData = [];

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

        tabData = data;
        
        tableauJour(data);

        console.log(data);
    }
} 

function DisplayHighestAtk(data)
{
    let maxAtk = data[0].attack;

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].attack > maxAtk)
        {
            maxAtk = data[i].attack;
            indice = i;
        } 
    }
    return indice;
}

function DisplayLowestAtk(data)
{
    let minAtk = data[0].attack

    let indice = 0;

    for (let i = 0; i < data.lenght; i++)
    {
        if (data[i].attack < minAtk)
        {
            minAtk = data[i].attack
            indice = i;
        }
    }
    return indice;
}

document.getElementById("btnAtk").addEventListener("click", function()
{
    let indiceMax = DisplayHighestAtk(tabData);
    document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest attack : " + tabData[indiceMax].attack + "</p>"

    let indiceMin = DisplayLowestAtk(tabData);
    document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest attack : " + tabData[indiceMin].attack + "</p>"
})

function DisplayHighestArmor(data)
{
    let maxArmor = data[0].armor;

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].armor > maxArmor)
        {
            maxArmor = data[i].armor;
            indice = i;
        } 
    }
    return indice;
}

function DisplayLowestArmor(data)
{
    let minArmor = data[0].armor;

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].armor < minArmor)
        {
            minArmor = data[i].armor;
            indice = i;
        }
    }
    return indice;
}

document.getElementById("btnArmor").addEventListener("click", function()
{
    let indiceMax = DisplayHighestAtk(tabData);
    document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest armor : " + tabData[indiceMax].armor + "</p>"
    
    let indiceMin = DisplayLowestAtk(tabData);
    document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest armor : " + tabData[indiceMin].attack + "</p>"
})