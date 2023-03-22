<?php
/**
 * facenook_default functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package facenook_default
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function facenook_default_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on facenook_default, use a find and replace
		* to change 'facenook_default' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'facenook_default', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'nav_menu' => esc_html__( 'Primary', 'facenook_default' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'facenook_default_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'facenook_default_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function facenook_default_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'facenook_default_content_width', 640 );
}
add_action( 'after_setup_theme', 'facenook_default_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function facenook_default_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'facenook_default' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'facenook_default' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'facenook_default_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function facenook_default_scripts() {
	wp_enqueue_style( 'facenook_default-style', get_stylesheet_uri(), array(), _S_VERSION );

	// css import 
	wp_enqueue_style('facenook_alternate-style', get_template_directory_uri(). '/css/alternate-style.css');
	wp_style_add_data( 'facenook_default-style', 'rtl', 'replace' );

	wp_enqueue_script( 'facenook_default-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'facenook_default_scripts' );



// function to load metabox js and css
function load_metabox_admin_styles(){
    wp_enqueue_script( 'metabox-js', get_template_directory_uri() . '/js/meta.js', array('jquery'), '', false );
    wp_enqueue_style( 'metabox-style', get_template_directory_uri().'/css/meta.css');
}
add_action( 'admin_enqueue_scripts','load_metabox_admin_styles');



/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';


// home meta Box add
require get_template_directory() . '/home-meta/section-1.php';


/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Add support for .jfif files
 */
add_filter( 'upload_mimes', 'custom_mime_types', 1, 1 );
function custom_mime_types( $mime_types ) {
$mime_types['jfif'] = 'image/jfif+xml'; // Adding .jfif extension

return $mime_types;
}

/**
 * Add support for custom logo
 */
add_theme_support( 'title-tag' );
add_theme_support( 'custom-logo', array(
    'height' => 480,
    'width'  => 720,
) );
