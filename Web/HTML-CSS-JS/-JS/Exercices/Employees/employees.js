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
.then( response=> { tableauEmployee(response) })
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

function tableauEmployee(_data) 
{
    let myTab = document.getElementById("tabList");
    let myTHead = myTab.createTHead();
    let titleRow = myTHead.insertRow();

    createTitleCell("EID", titleRow);
    createTitleCell("Full Name", titleRow);
    createTitleCell("Email", titleRow);
    createTitleCell("Monthly Salary", titleRow);
    createTitleCell("Year of birth", titleRow);
    createTitleCell("Actions", titleRow);

    let myBody = myTab.createTBody();
    
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
