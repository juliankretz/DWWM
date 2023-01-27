let tabdata = [];
fetch("./js/caption.json")
.then(response => { return response.json() })
.then(response => { genererListe(response); tabdata=response; })
.catch(erreur =>  { console.error(erreur) })

