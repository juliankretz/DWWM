<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <script src="./js/diaporama.js" defer></script>
    
    <title>Diaporama ASIE chargement ajax</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="img/logo.jpg" alt="logo Ponant" width="60"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Voyage Volcans Asie</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Voyage USA côte ouest </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Voyage en Baie de Somme
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Le phare du Hourdel</a></li>
                            <li><a class="dropdown-item" href="#">Les phoques et veaux marins du Hourdel</a></li>
                            <li><a class="dropdown-item" href="#">L'Avocette de la vasière</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <form method="GET" action="traitement.php" enctype="text/plain">
    <fieldset>
        <legend>
            Choix taille du Diaporama
        </legend>
        <label for="txtMin">Diapo min</label>
        <input type="text" placeholder="N° diapo min" id="txtMin" name="txtMin"/>
        <label for="txtMax">Diapo max</label>
        <input type="text" placeholde="N° diapo max" id="txtMax" name="txtMax"/>
        <input type="button" value="Afficher le diaporama" id="btnValid" name="btnValid"/>

    </fieldset>
    </form>

    <?php

    ?>

    <div id="carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
        <!-- <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>  -->
        </div>
        <div class="carousel-inner">

            <!-- <div class="carousel-item active">
                <img src="img/1.jpg" class="d-block w-100" alt="L'ile de Lombok vue depuis l'ile de Trzwangan (Iles Gili)">
                <div class="carousel-caption d-none d-md-block">
                    <h5>L'ile de Lombok vue depuis l'ile de Trzwangan (Iles Gili)</h5>
                </div>
            </div>

            <div class="carousel-item ">
                <img src="img/2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Le volcan Agung, Bali</h5>
                </div>
            </div> -->

        </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</body>

</html>