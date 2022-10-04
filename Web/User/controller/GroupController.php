<?php

namespace user\controller;

class GroupController
{

    public function index()
    {
        echo GroupController::class;
        require '../view/groups.php';
    }
}