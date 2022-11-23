function getCookie(name)
{
    let tabCook =  document.cookie.split("; ");

    let find = false;

    for (let i = 0; i < tabCook.length; i++) 
    {
        tabMyCook = tabCook[i].split("=");
        
        if (tabMyCook[0] == name)
        {
            find = true;
            return tabMyCook[1];
        }
    }

    if (find == false)
    {
        return "Cookie non trouvé";
    }
}

//document.getElementById("yourPseudo").value = getCookie("pseudoUser");

var monLabel1 = document.createElement("label");
monLabel1.innerHTML = getCookie("pseudoUser") + "<br>";
document.getElementById("boite").appendChild(monLabel1);

var monLabel2 = document.createElement("label");
monLabel2.innerHTML= getCookie("dateAnniv") + "<br>";
document.getElementById("boite").appendChild(monLabel2);
