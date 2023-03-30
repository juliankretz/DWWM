<?php

get_header();

if (have_posts())           // si il y a des posts à afficher
{
    while(have_posts())     // tant qu'il y a des posts à afficher
    {
        the_post();         // chargement du post actuel
?>

<article>
    <h1>
        <a href="<?php the_title(); ?>"> <?php  ?>
    </h1>
    <div><?php the_excerpt(); ?></div>
    <footer>
        <?php the_date(); ?>
        <?php the_category(); ?>
    </footer>
</article>

<?php
    }
}
get_footer();