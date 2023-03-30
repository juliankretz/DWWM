<?php get_header(); ?>

<!-- partie centrale du thème (partie dynamique) --> 
<!-- single.php = interface par défaut du thème -->

<main> 

<h1>single.php</h1>

<?php

    if(have_posts())
    {
        while(have_posts())
        {
            the_post();
        
            ?>

            <article>
                <header>
                    <h1><a href="<?php the_permalink(); ?>"><?php the_title(); ?></h1>
                    <aside>
                        <span><?php the_date(); ?></span>
                        <span><?php the_author(); ?></span>
                    </aside>
                </header>

                <section>
                    <?php the_content(); ?>
                </section>

                <footer>
                    <span><?php the_category(); ?></span>
                    <span><?php the_tags(); ?></span>
                </footer>
            </article>

            <?php
        }
    }

?>

</main>

<?php get_footer(); ?>