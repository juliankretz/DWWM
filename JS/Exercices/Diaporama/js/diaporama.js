let tabdata = [];
fetch("./js/caption.json")
.then(response => { return response.json() })
.then(response => { genererDiapo(response); })
.catch(erreur =>  { console.error(erreur) })

function genererDiapo(_tabdata)
{
    for (let i = 0; i < _tabdata.length; i++)
    {
        // Boutons cotés

        let buttonSide = document.createElement("button");
        if (i==0)
        {
            buttonSide.setAttribute("class", "active");
            buttonSide.setAttribute("aria-current", "true");
        }
        buttonSide.setAttribute("data-bs-target", "#carousel");
        buttonSide.setAttribute("data-bs-slide-to", i);
        buttonSide.setAttribute("aria-label", "Slide "+(1+i));

        let buttonSideDiv = document.querySelector(".carousel-indicators");
        buttonSideDiv.appendChild(buttonSide);
        
        // Diapositives

        let divExt = document.createElement("div");
        if (i==0)
        {
            divExt.setAttribute("class", "carousel-item active");
        }
        else
        {
            divExt.setAttribute("class", "carousel-item");
        }    
        let slideImg = document.createElement("img");
        slideImg.setAttribute("src", "./img/"+_tabdata[i].id+".jpg");
        slideImg.setAttribute("class", "d-block w-100");
        slideImg.setAttribute("alt", _tabdata[i].alt);
        divExt.appendChild(slideImg);

        let divIn = document.createElement("div");
        divIn.setAttribute("class", "carousel-caption d-none d-md-block");
        divExt.appendChild(divIn);

        let slideCaption = document.createElement("h5");
        slideCaption.innerText = _tabdata[i].titre;
        divIn.appendChild(slideCaption);

        let hook = document.querySelector(".carousel-inner");
        hook.appendChild(divExt);

    }
}
