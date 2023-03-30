<?php

add_theme_support('widgets');

function jk_sidebar()
{
    register_sidebar([
        'id' => 'crm-sidebar',
        'name' => 'CRM Sidebar',
        'before_widget' => '<div class="awidget">',
        'after_widget' => '</div>'
    ]);

}

add_action('widgets_init', 'jk_sidebar');
