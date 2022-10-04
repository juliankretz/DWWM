<?php

namespace Users\Controller;

class PofileController
{

    public function index()
    {
        echo ProfileController::class;
        require '../view/profile.php';
    }
}