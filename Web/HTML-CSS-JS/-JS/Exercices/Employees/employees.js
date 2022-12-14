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

function tableauJour(_data) 
{
    let myTab = document.getElementById("tabList");
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

function monthlySalary(data)
{
    let yearSalary = data[0].employee_salary
}

function createEmail(data)
{
    let fullName = data[0].employee_name
}