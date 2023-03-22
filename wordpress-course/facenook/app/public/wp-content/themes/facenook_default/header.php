<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package facenook_default
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#primary">
			<?php esc_html_e('Skip to content', 'facenook_default'); ?>
		</a>
		<header class="header">


			<nav class="nav-bar" id="nav-bar">

				<div class="wrapper">
					<div class="nav-toggle-icon  d-xl-none" onclick="toggleNav()">
						<i class="icon-hamburger"></i>
					</div>

					<div class="logo">
						<a href="./index.html">
							<img src="<?php echo $logo?>" alt="" width="400" height="200">
						</a>
					</div>
				</div>

				<?php
				wp_nav_menu( array(
					'theme_location'=> 'nav_menu',
					'container' =>'',
					'menu_class' =>'sidenav d-none d-xl-flex'					

				));
				
				
				?>

<!-- 
				<ul class="sidenav d-none d-xl-flex">

					<li> <a href="@@webRoot/about.html">About</a></li>
					<li> <a href="@@webRoot/blog-listing.html">Blog</a></li>
					<li><a href="#">Team</a></li>
					<li> <a href="#">Career</a></li>
					<li><a href="@@webRoot/contact.html">Contact</a></li>

				</ul> -->
				<div class="join-us-now position-xl-absolute">
					<a href="#" class="d-none button d-md-block d-xl-none">Join us now</a>
				</div>

			</nav>

		</header>