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

// Afficher les jouers attaque

// document.getElementById("btnAtk").addEventListener("click", function()
// {
//     let tabAtkMax = DisplayHighestAtk(tabData);
//     console.log(tabAtkMax[0]);
//     console.log(tabAtkMax[1]);
//     let indiceMax = tabAtkMax[0];


//     document.querySelector(".playerNbr").textContent = tabData[tabAtkMax].id;
//     document.querySelector(".playerName").textContent = tabData[tabAtkMax].name;
//     document.querySelector(".PlayWin").textContent = "Played: " + tabData[tabAtkMax].played + " | Won: " + tabData[tabAtkMax].victory;
//     document.querySelector("#statAtk").textContent = tabData[tabAtkMax].attack;
//     document.querySelector("#statArmor").textContent = tabData[tabAtkMax].armor;
//     document.querySelector("#statDmg").textContent = tabData[tabAtkMax].damage;

//     // document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest attack : " + tabAtkMax[1] + "</p>"
//     // let tabAtkMin = DisplayLowestAtk(tabData);
//     // console.log(tabAtkMin[0]);
//     // console.log(tabAtkMin[1]);
//     // let indiceMin = tabAtkMin[0];
//     // document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest attack : " + tabAtkMin[1] + "</p>"
// })

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

// Afficher les joueurs armure

// document.getElementById("btnArmor").addEventListener("click", function()
// {
//     let tabArmorMax = DisplayHighestArmor(tabData);
//     console.log(tabArmorMax[0]);
//     console.log(tabArmorMax[1]);
//     let indiceMax = tabArmorMax[0];
//     document.querySelector(".playerNbr").textContent = tabData[indiceMax].id;
//     document.querySelector(".playerName").textContent = tabData[indiceMax].name;
//     document.querySelector(".PlayWin").textContent = "Played: " + tabData[indiceMax].played + " | Won: " + tabData[indiceMax].victory;
//     document.querySelector("#statAtk").textContent = tabData[indiceMax].attack;
//     document.querySelector("#statArmor").textContent = tabData[indiceMax].armor;
//     document.querySelector("#statDmg").textContent = tabData[indiceMax].damage;


//     // document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest armor : " + tabArmorMax[1] + "</p>"
//     // let tabArmorMin = DisplayLowestArmor(tabData);
//     // console.log(tabArmorMin[0]);
//     // console.log(tabArmorMin[1]);
//     // let indiceMin = tabArmorMin[0];
//     // document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest armor : " + tabArmorMin[1] + "</p>"
// })

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

// Afficher les jouerus dégats

// document.getElementById("btnDmg").addEventListener("click", function()
// {
//     let tabDmgMax = DisplayHighestDmg(tabData);
//     console.log(tabDmgMax[0]);
//     console.log(tabDmgMax[1]);
//     let indiceMax = tabDmgMax[0];
//     document.querySelector(".playerNbr").textContent = tabData[indiceMax].id;
//     document.querySelector(".playerName").textContent = tabData[indiceMax].name;
//     document.querySelector(".PlayWin").textContent = "Played: " + tabData[indiceMax].played + " | Won: " + tabData[indiceMax].victory;
//     document.querySelector("#statAtk").textContent = tabData[indiceMax].attack;
//     document.querySelector("#statArmor").textContent = tabData[indiceMax].armor;
//     document.querySelector("#statDmg").textContent = tabData[indiceMax].damage;

//     // document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest damage : " + tabDmgMax[1] + "</p>"
//     // let tabDmgMin = DisplayLowestDmg(tabData);
//     // console.log(tabDmgMin[0]);
//     // console.log(tabDmgMin[1]);
//     // let indiceMin = tabDmgMin[0];
//     // document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest damage : " + tabDmgMin[1] + "</p>"
// });

const btnTab =  document.getElementById("btnTab");

btnTab.addEventListener("click", function(){

btnTab.innerHTML  = ( btnTab.innerHTML == 'Show all the stats')  ? 'Hide all the stats' : 'Show all the stats';

document.getElementById('perso').classList.toggle('hidden');

})

// Ricko

document.getElementById("ricko").addEventListener("click", function()
{
    document.querySelector(".playerNbr").textContent = tabData[0].id;
    document.querySelector(".playerName").textContent = tabData[0].name;
    document.querySelector(".PlayWin").textContent = "Played: " + tabData[0].played + " | Won: " + tabData[0].victory;
    document.querySelector("#statAtk").textContent = tabData[0].attack;
    document.querySelector("#statArmor").textContent = tabData[0].armor;
    document.querySelector("#statDmg").textContent = tabData[0].damage;
})

// Popo

document.getElementById("popo").addEventListener("click", function()
{
    document.querySelector(".playerNbr").textContent = tabData[1].id;
    document.querySelector(".playerName").textContent = tabData[1].name;
    document.querySelector(".PlayWin").textContent = "Played: " + tabData[1].played + " | Won: " + tabData[1].victory;
    document.querySelector("#statAtk").textContent = tabData[1].attack;
    document.querySelector("#statArmor").textContent = tabData[1].armor;
    document.querySelector("#statDmg").textContent = tabData[1].damage;
})

// Loulou

document.getElementById("loulou").addEventListener("click", function()
{
    document.querySelector(".playerNbr").textContent = tabData[2].id;
    document.querySelector(".playerName").textContent = tabData[2].name;
    document.querySelector(".PlayWin").textContent = "Played: " + tabData[2].played + " | Won: " + tabData[2].victory;
    document.querySelector("#statAtk").textContent = tabData[2].attack;
    document.querySelector("#statArmor").textContent = tabData[2].armor;
    document.querySelector("#statDmg").textContent = tabData[2].damage;
})

// Daiko

document.getElementById("daiko").addEventListener("click", function()
{
    document.querySelector(".playerNbr").textContent = tabData[3].id;
    document.querySelector(".playerName").textContent = tabData[3].name;
    document.querySelector(".PlayWin").textContent = "Played: " + tabData[3].played + " | Won: " + tabData[3].victory;
    document.querySelector("#statAtk").textContent = tabData[3].attack;
    document.querySelector("#statArmor").textContent = tabData[3].armor;
    document.querySelector("#statDmg").textContent = tabData[3].damage;
})

// JJ

docu