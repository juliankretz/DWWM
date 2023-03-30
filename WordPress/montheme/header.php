<!-- Entête du thème  -->

<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>">
<head>
    <meta charset="<?php bloginfo(''); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/style.css">
</head>

<body <?php body_class(); ?>>

<?php wp_body_open(); ?>

<header class="header">
    <a href="<?php echo home_url('/') ?>">
        <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="logo" id="logo">
        <?php bloginfo('name'); ?>
    </a>
</header>