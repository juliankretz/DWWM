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
.then(response => { tableauEmployee(response);
    document.getElementById("up").addEventListener("click", function()
    {
        let myData =  trierTab("up", response);
       
        console.log(myData);
        creerContenu(myData);
        //tableauEmployee(myData);
    });

    document.getElementById("down").addEventListener("click", function()
    {
        let myData =  trierTab("down", response);
       
        console.log(myData);
        creerContenu(myData);
        //tableauEmployee(myData);
    });

})
.catch(erreur =>  { console.error(erreur) })

console.log(data);

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

function trierTab(direction, data)
{
    if (direction == "up")
    {
        return data.sort(function(a, b) { return a.employee_salary - b.employee_salary; });
    }

    else if (direction == "down")
    {
        return data.sort(function(a, b) { return b.employee_salary - a.employee_salary });
    }

    else
    {
        return data;
    }
}

function creerContenu(_data)
{
    let myNode = document.getElementById("bodemp");
    document.getElementById("tabList").removeChild(myNode);

    let myBody = document.getElementById("tabList").createTBody();
    
    myBody.setAttribute('id', "bodemp");

    for (let i = 0; i < _data.length; i++)
    {
        let myRow = myBody.insertRow();

        createCell(_data[i].id, myRow);
        createCell(_data[i].employee_name, myRow);
            
        let tabEmail = _data[i]["employee_name"].split(" ");
        let firstLetter = tabEmail[0].substring(0, 1);
        let email = firstLetter + "." + tabEmail[1] + "@email.com";

        createCell(email, myRow);

        let makeSalary = _data[i].employee_salary / 12;
        let monthlySalary = Math.round(makeSalary) + " €";

        createCell(monthlySalary, myRow);

        let maDate = new Date();
        let currentYear = maDate.getFullYear();
        let birthYear = currentYear - _data[i].employee_age;

        createCell(birthYear, myRow);
        myRow.innerHTML += '<td> <input type="button" id="btnBlu" class="btn btn-primary" value="Duplicate"></input> <input type="button" id="btnRed" class="btn btn-danger" value="Delete"></input> </td>';
    
    }
}

function tableauEmployee(_data) 
{
    let myTab = document.getElementById("tabList");
    let myTHead = myTab.createTHead();
    let titleRow = myTHead.insertRow();

    createTitleCell("EID", titleRow);
    createTitleCell("Full Name", titleRow);
    createTitleCell("Email", titleRow);
    // createTitleCell("Monthly Salary", titleRow);
    let myTitleCell = document.createElement("th");
    myTitleCell.innerHTML = "Montly salary " + "<br>" + '<i class="fa fa-caret-square-o-up" id="up" aria-hidden="true"></i>' + "<br>" + '<i class="fa fa-caret-square-o-down" id="down" aria-hidden="true"></i>';
    titleRow.appendChild(myTitleCell);
    createTitleCell("Year of birth", titleRow);
    createTitleCell("Actions", titleRow);

    let myBody = myTab.createTBody();
    
    myBody.setAttribute('id', "bodemp");

    for (let i = 0; i < _data.length; i++)
    {
        let myRow = myBody.insertRow();

        createCell(_data[i].id, myRow);
        createCell(_data[i].employee_name, myRow);
            
        let tabEmail = _data[i]["employee_name"].split(" ");
        let firstLetter = tabEmail[0].substring(0, 1);
        let email = firstLetter + "." + tabEmail[1] + "@email.com";

        createCell(email, myRow);

        let makeSalary = _data[i].employee_salary / 12;
        let monthlySalary = Math.round(makeSalary) + " €";

        createCell(monthlySalary, myRow);

        let maDate = new Date();
        let currentYear = maDate.getFullYear();
        let birthYear = currentYear - _data[i].employee_age;

        createCell(birthYear, myRow);
        myRow.innerHTML += '<td> <input type="button" id="btnBlu" class="btn btn-primary" value="Duplicate"></input> <input type="button" id="btnRed" class="btn btn-danger" value="Delete"></input> </td>';
    
    }
}
