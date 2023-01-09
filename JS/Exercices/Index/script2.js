class CodePostaux
{
    constructor()
    {
        this.url = "zipcodes.json";
        this.json = [];
        this.resultats = [];
    }

    async telechargerJson()
    {
        let response = await fetch(this.url);
        this.json = await response.json();
        console.log(this.json);
    }

    rechercherParCodePostal(valeurrAChercher)
    {
        // for (let i = 0; i < this.json.length; i++) 
        // {
        //     let ville = this.json[i]
            
        //     if(valeurrAChercher === ville.codePostal)
        //     {
        //         console.log(ville.nomCommune + " " + ville.codePostal);
        //     }   
        // }

        for (let ville of this.json)
        {
            if (valeurrAChercher === ville.CodePostal)
            {
                this.resultats.push(ville);
            }
        }
    }

    rechercherParNom()
    {

    }

}

let monObjet = new CodePostaux();

await monObjet.telechargerJson();

const btn = document.getElementById("btn");
const input = document.getElementById("toto");

btn.addEventListener("click", function()
{
    monObjet.rechercherParCodePostal(input.value);
})

