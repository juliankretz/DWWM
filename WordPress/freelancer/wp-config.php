<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wp_freelancer' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'wp_freelancer' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'lancer' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e!%w:4fU+B];s;:tDf{3dS75%<ZjR|W0%Wv2QUk1e jd|l;C)W/A@9tiDl{d+z/d' );
define( 'SECURE_AUTH_KEY',  '>blu&w8/Rh^pR|L9}4mVQ2jq|@U#&/28pbf<VR]n<]NNHEy}}|7XW~?@D&TrqLR)' );
define( 'LOGGED_IN_KEY',    'h}=[oP$J_r2AC>+n6b`@6#;*Fr7:]WPxV$)*::zhe;kPiffoj>AFTyz=s%WwSA.@' );
define( 'NONCE_KEY',        '~rs/5]B8j-cxeq1368X45!EVB~eP`M$O}`H8pRjTTCr;1.Rsbj0xN{Qcp/m7jJMr' );
define( 'AUTH_SALT',        'Mv2{&&zM.Ph1p9+GO9/(e9!0q(>m1S)%uelAOWU=6D1LIIHm2!1#9C@U<.;o#nPh' );
define( 'SECURE_AUTH_SALT', 'i3T#Qec(,j6hSH)!QY~K)mtS>@thT@w5$H:N3F&u;1l12|F(x!,*n`_3R]p+cacA' );
define( 'LOGGED_IN_SALT',   ',+R }WPBvTxG%/Ta6G:L69D*{NVA+:P_gRQdw8(JI(Ce9fi*-6:*&ME|x,VnpBQN' );
define( 'NONCE_SALT',       'd,333?w|?),w7&hzamyi)@}wFt r_l4zgp)I<[qB]%X_wpa`r,JcO6j|6?d<[*5t' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
