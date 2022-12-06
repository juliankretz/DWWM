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

const btnTab =  document.getElementById("btnTab");

btnTab.addEventListener("click", function(){

btnTab.innerHTML  = ( btnTab.innerHTML == 'Show all the stats')  ? 'Hide all the stats' : 'Show all the stats';

document.getElementById('perso').classList.toggle('hidden');

})

document.getElementById("ricko").addEventListener("click", function()
{
    // let tabAtkMax = DisplayHighestAtk(tabData);
    // console.log(tabAtkMax[0]);
    // console.log(tabAtkMax[1]);
    // let indiceMax = tabAtkMax[0];


    document.querySelector(".playerNbr").textContent = tabData[0].id;
    document.querySelector(".playerName").textContent = tabData[0].name;
    document.querySelector(".PlayWin").textContent = "Played: " + tabData[0].played + " | Won: " + tabData[0].victory;
    document.querySelector("#statAtk").textContent = tabData[0].attack;
    document.querySelector("#statArmor").textContent = tabData[0].armor;
    document.querySelector("#statDmg").textContent = tabData[0].damage;

    // document.getElementById("summarizeHigh").innerHTML = "<p>" + tabData[indiceMax].name + " has the highest attack : " + tabAtkMax[1] + "</p>"
    // let tabAtkMin = DisplayLowestAtk(tabData);
    // console.log(tabAtkMin[0]);
    // console.log(tabAtkMin[1]);
    // let indiceMin = tabAtkMin[0];
    // document.getElementById("summarizeLow").innerHTML = "<p>" + tabData[indiceMin].name + " has the lowest attack : " + tabAtkMin[1] + "</p>"
})