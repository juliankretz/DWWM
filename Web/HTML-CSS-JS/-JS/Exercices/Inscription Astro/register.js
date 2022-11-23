var tabMois=["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]

var tabSign=["Capricorne", "Verseau", "Poisson", "Belier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"]

function afficherJour()
{
    monOption= document.createElement("option");
    monOption.textContent= "JJ";
    monOption.value= "";
    document.querySelector("#jour").appendChild(monOption);

        for (let i = 0; i < 31; i++) 
        {
            monOption= document.createElement("option");
            monOption.innerText= i+1;
            monOption.value= i+1;
            document.querySelector("#jour").appendChild(monOption);
        }

}
afficherJour();

function afficherMois()
{
    monOption= document.createElement("option");
    monOption.textContent= "MM";
    monOption.value= "";
    document.querySelector("#mois").appendChild(monOption);

    for (let i = 0; i < tabMois.length; i++)
    {
        monOption= document.createElement("option");
        monOption.innerText= tabMois[i];
        monOption.value= i+1;
        document.querySelector("#mois").appendChild(monOption);
    }
}
afficherMois();

function afficherAnnee()
{
    monOption= document.createElement("option");
    monOption.textContent= "AAAA";
    monOption.value= "";
    document.querySelector("#annee").appendChild(monOption);
    maDate = new Date();
    monAnnee = maDate.getFullYear();

    for (let i = monAnnee-70; i <= monAnnee; i++)
    {
        monOption= document.createElement("option");
        monOption.innerText= i;
        monOption.value= i;
        document.querySelector("#annee").appendChild(monOption);
    }
}
afficherAnnee();



function valNum(maChaine)
{
    let somme=0;
    
    for (let i = 0; i < maChaine.length; i++)
    {
        somme+=maChaine.charCodeAt(i)-64;
    }
    return somme;
}

function monthSign()
{
    let NumMois= document.getElementById("mois").value;
    console.log([mois]);
    return tabSign[NumMois-1];
}

function formOK()
{
    if ((document.getElementById("nomUtilisateur").value!="") && (document.getElementById("prenomUtilisateur").value!="") &&
    (document.getElementById("jour").value!="") && (document.getElementById("mois").value!="") && (document.getElementById("annee").value!=""))
    {
        document.querySelector("#pseudo").value = calculerPseudo();
        
        document.getElementById("btnValid").disabled=false;
    }
}

// document.getElementById("nomUtilisateur").addEventListener("blur", function(){formOK();})

// document.getElementById("prenomUtilisateur").addEventListener("blur", function(){formOK();})

// document.getElementById("jour").addEventListener("change", function(){formOK();})

// document.getElementById("mois").addEventListener("change", function(){formOK();})

// document.getElementById("annee").addEventListener("change", function(){formOK();})

let elements = document.querySelectorAll("input[type=text]");

elements.forEach((item)=>{item.addEventListener("blur", function(){formOK();})});

let tabElements = document.querySelectorAll("select");

tabElements.forEach((item)=>{item.addEventListener("change", function(){formOK();})});

function calculerPseudo()
{
    let chaine = monthSign() + (Number(valNum(document.getElementById("nomUtilisateur").value) + (Number(valNum(document.getElementById("prenomUtilisateur").value)))))
    return chaine;
}




function createCookie(nameCookie, valueCookie)
{
    var dateExpire = new Date();
    dateExpire.setTime(dateExpire.getTime() + (3600 * 1000) * 2);
    dateExpire = dateExpire.toGMTString();
    document.cookie = nameCookie + '=' + valueCookie + '; expires=' + dateExpire + '; SameSite = strict';
}

document.getElementById("btnValid").addEventListener("click", function()
{
    createCookie("nomUtilisateur", document.querySelector("#nomUtilisateur").value);
    createCookie("prenomUtilisateur", document.querySelector("#prenomUtilisateur").value);
    let chaineDateAnniv = document.getElementById("jour").value + '/' + document.getElementById("mois").value + '/' + document.getElementById("annee").value;
    createCookie("dateAnniv", chaineDateAnniv);
    createCookie("pseudoUser", document.querySelector("#pseudo").value);
    document.forms[0].submit();
})

