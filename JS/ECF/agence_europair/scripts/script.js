let tabdata = [];
fetch("./scripts/voyages.json")
.then(response => { return response.json() })
.then(response => { genererArticles(response); })
.catch(erreur =>  { console.error(erreur) })

function genererArticles(_tabdata)
{
    for (let i = 0; i < _tabdata.length; i++)
    {
        let article = document.createElement("div");
        article.setAttribute("id", "article");

            let articleTitre = document.createElement("h3");
            articleTitre.setAttribute("id", "articleTitre");
            articleTitre.innerText = _tabdata[i].trip_title;
            article.appendChild(articleTitre);
        
            let divFlex = document.createElement("div");
            divFlex.setAttribute("id", "divFlex");
                
                let divImg = document.createElement("div");
                divImg.setAttribute("id", "divImg");
            
                    let articleImg = document.createElement("img");
                    articleImg.setAttribute("id", "articleImg");
                    articleImg.setAttribute("src", "./images/voyages/id"+_tabdata[i].trip_id+".jpg");
                    divImg.appendChild(articleImg);

                divFlex.appendChild(divImg);

                let divTxt = document.createElement("div");
                divTxt.setAttribute("id", "divTxt");

                    let articleDest = document.createElement("div");
                    articleDest.setAttribute("id", "articleDest");
                    articleDest.innerText = _tabdata[i].trip_destination;
                    divTxt.appendChild(articleDest);

                    let articleParagraph = document.createElement("p");
                    articleParagraph.setAttribute("id", "articleParagraph");
                    articleParagraph.innerText = _tabdata[i].trip_description;
                    divTxt.appendChild(articleParagraph);

                divFlex.appendChild(divTxt);

            article.appendChild(divFlex)    

        //  if (articleParagraph.length >= 100)
        //  {
                let articleBtn = document.createElement("button");
                articleBtn.setAttribute("id", "articleBtn");
                articleBtn.innerText = "Lire la suite";
                article.appendChild(articleBtn);
        //  }
        document.getElementById("zoneArticles").appendChild(article);
    
    //  if (articleParagraph.length >= 100)
    //  {
    //      for (let f = 0; f < articleParagraph.length; f++)
    //      {
    //          let hiddenTxt = 
    //      }
    //  }
         
        articleBtn.addEventListener("click", function()
        {
            articleBtn.innerHTML  = ( articleBtn.innerHTML == 'Lire la suite')  ? 'Retour' : 'Lire la suite';

            hiddenTxt.toggle('hidden');
        })

    }
}