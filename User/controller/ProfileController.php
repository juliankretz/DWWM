<?php

namespace user\controller;

class PofileController
{

    public function index()
    {
        echo ProfileController::class;
        require '../view/profile.php';
    }
}