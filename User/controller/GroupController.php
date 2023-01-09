<?php

namespace user\controller;

/** 
 * Manage groups UI actions
 * @author Julian
 * @version 0.0.1
 * @license MIT 
 */
class GroupController
{

    /** 
     * Route /?=page=groups
     * @return void
     */
    public function index()
    {
        require '../view/groups.php';
    }
}