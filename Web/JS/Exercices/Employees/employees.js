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

    console.log(data);
  

    for (let i = 0; i < data.length; i++)
    {   
     // console.log('<td> <input type="button" id="btnBlu' +i + '"class="btn btn-primary" value="Duplicate"></input> <input type="button" id="btnRed' +i + '"class="btn btn-danger" value="Delete"></input> </td>');
         let mybutton= document.createElement("input");
         mybutton.setAttribute("type","button" );
         mybutton.setAttribute("id","btnRed"+i );
         mybutton.value="Delete";
         mybutton.setAttribute("class","btn btn-danger");
         document.querySelector("#bodemp").rows[i].appendChild(mybutton);   
             
         document.querySelector("#btnRed"+i).addEventListener("click", function()
         {
             console.log("test");
            let tabSuppr = data.filter(item => item.id != i+1);
          console.log(tabSuppr);
           
         });

    }

   
    document.getElementById("up").addEventListener("click", function()
    {
        let myData =  trierTab("up", response);
       
        console.log(myData);
        creerContenu(myData);
    });

    document.getElementById("down").addEventListener("click", function()
    {
        let myData =  trierTab("down", response);
       
        console.log(myData);
        creerContenu(myData);
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
    if (direction == "down")
    {
        return data.sort(function(a, b) { return a.employee_salary - b.employee_salary; });
    }

    else if (direction == "up")
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
    console.log("test");
    let myNode = document.getElementById("bodemp");
    document.getElementById("tabList").removeChild(myNode);

    let myBody = document.getElementById("tabList").createTBody();
    
    myBody.setAttribute('id', "bodemp");

    for (let i = 0; i < _data.length; i++)
    {
        let myRow = myBody.insertRow();
        // insertRow + (id="row"+i);

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

        return i;
        
      



    }
}

function tableauEmployee(_data) 
{
   data = _data;
    let myTab = document.getElementById("tabList");
    let myTHead = myTab.createTHead();
    let titleRow = myTHead.insertRow();

    createTitleCell("EID", titleRow);
    createTitleCell("Full Name", titleRow);
    createTitleCell("Email", titleRow);
    // createTitleCell("Monthly Salary", titleRow);
    let myTitleCell = document.createElement("th");
    myTitleCell.innerHTML = "Montly salary " +  '<i class="fa fa-chevron-up" id="up" aria-hidden="true"></i>' +  '<i class="fa fa-chevron-down" id="down" aria-hidden="true"></i>';
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

       // myRow.innerHTML += '<td> <input type="button" id="btnBlu' +i + '"class="btn btn-primary" value="Duplicate"></input> <input type="button" id="btnRed' +i + '"class="btn btn-danger" value="Delete"></input> </td>';
        
       // let chaine="btnRed"+i;

        
 
    }

}

function tabBody(_data)
{
    // let myBody = document.getElementById("tabList").createTBody();
    
    // myBody.setAttribute('id', "bodemp");

    for (let i = 0; i < _data.length; i++)
    {
        let myRow = myBody.insertRow();
        // insertRow + (id="row"+i);

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

    }
}  




