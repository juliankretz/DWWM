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

// Chercher le joueur avec le plus d'attaque

function DisplayHighestAtk(data)
{
    let maxAtk = data[0].attack;

    let tabRes = [];

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].attack > maxAtk)
        {
            maxAtk = data[i].attack;
            indice = i;
        } 
    }
    tabRes.push(indice, maxAtk);
    return tabRes;
}

// Chercher le joueur avec le moins d'attaque

function DisplayLowestAtk(data)
{
    let minAtk = data[0].attack;

    let tabRes = [];

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].armor < minAtk)
        {
            minAtk = data[i].attack;
            indice = i;
        }
    }
    tabRes.push(indice, minAtk);
    return tabRes;
}

// Afficher les joueurs lorsque l'on clique sur le bouton "Attack" 

document.getElementById("btnAtk").addEventListener("click", function()
{
    let tabAtkMax = DisplayHighestAtk(tabData);
    console.log(tabAtkMax[0]);
    console.log(tabAtkMax[1]);
    let indiceMax = tabAtkMax[0];
    document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest attack : " + tabAtkMax[1] + "</p>"

    let tabAtkMin = DisplayLowestAtk(tabData);
    console.log(tabAtkMin[0]);
    console.log(tabAtkMin[1]);
    let indiceMin = tabAtkMin[0];
    document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest attack : " + tabAtkMin[1] + "</p>"
})

// Chercher le joueur avec le plus d'armure

function DisplayHighestArmor(data)
{
    let maxArmor = data[0].armor;

    let tabRes = [];

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].armor > maxArmor)
        {
            maxArmor = data[i].armor;
            indice = i;
        } 
    }
    tabRes.push(indice, maxArmor);
    return tabRes;
}

// Chercher le joueur avec le moins d'armure

function DisplayLowestArmor(data)
{
    let minArmor = data[0].armor;

    let tabRes = [];

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].armor < minArmor)
        {
            minArmor = data[i].armor;
            indice = i;
        }
    }
    tabRes.push(indice, minArmor);
    return tabRes;
}

// Afficher les joueurs lorsque l'on clique sur le bouton "Armor"

document.getElementById("btnArmor").addEventListener("click", function()
{
    let tabArmorMax = DisplayHighestArmor(tabData);
    console.log(tabArmorMax[0]);
    console.log(tabArmorMax[1]);
    let indiceMax = tabArmorMax[0];
    document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest armor : " + tabArmorMax[1] + "</p>"

    let tabArmorMin = DisplayLowestArmor(tabData);
    console.log(tabArmorMin[0]);
    console.log(tabArmorMin[1]);
    let indiceMin = tabArmorMin[0];
    document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest armor : " + tabArmorMin[1] + "</p>"
})

// Chercher le joueur avec le plus de dégats

function DisplayHighestDmg(data)
{
    let maxDmg = data[0].damage;

    let tabRes = [];

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].damage > maxDmg)
        {
            maxDmg = data[i].damage;
            indice = i;
        } 
    }
    tabRes.push(indice, maxDmg);
    return tabRes;
}

// Chercher le joueur avec le moins de dégats

function DisplayLowestDmg(data)
{
    let minDmg = data[0].damage;

    let tabRes = [];

    let indice = 0;
    
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].damage < minDmg)
        {
            minDmg = data[i].damage;
            indice = i;
        }
    }
    tabRes.push(indice, minDmg);
    return tabRes;
}

// Afficher les joueurs lorsque l'on clique sur le bouton "Damage"

document.getElementById("btnDmg").addEventListener("click", function()
{
    let tabDmgMax = DisplayHighestDmg(tabData);
    console.log(tabDmgMax[0]);
    console.log(tabDmgMax[1]);
    let indiceMax = tabDmgMax[0];
    document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest damage : " + tabDmgMax[1] + "</p>"
    
    let tabDmgMin = DisplayLowestDmg(tabData);
    console.log(tabDmgMin[0]);
    console.log(tabDmgMin[1]);
    let indiceMin = tabDmgMin[0];
    document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest damage : " + tabDmgMin[1] + "</p>"
})