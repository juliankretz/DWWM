/* alert("Bonjour"); */

function afficherJour()
{
    monOption= document.createElement("option");
    monOption.textContent= "Sélectionnez le jour";
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

var tabMois=["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", 
"Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]

function afficherMois()
{
    monOption= document.createElement("option");
    monOption.textContent= "Sélectionnez le mois";
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
