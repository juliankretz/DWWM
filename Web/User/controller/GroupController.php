<?php

namespace Users\Controller;

class GroupController
{

    public function index()
    {
        echo GroupController::class;
        require '../view/groups.php';
    }
}