<?php get_header(); ?> 

<?php

if(have_posts())
{
    while(have_posts())
    {
        the_post();
    
        ?>

        <article>
            <header>
                <h1>
                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h1>
            </header>
            <section>
                <?php the_content(); ?>
            </section>
            <footer>
                <span>Dans <?php the_category(); ?></span>
                <span>par <?php the_author_posts_link(); ?></span>
                <span><?php the_date(); ?></span>
                <span><?php the_tags(); ?></span>
            </footer>
        </article>

        <?php
    }
}

?>

<?php get_footer(); ?>