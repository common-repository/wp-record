<?php

/**
 * WP Record
 *
 * @link              http://example.com
 * @since             0.2.0
 * @package           WP_Record
 *
 * @wordpress-plugin
 * Plugin Name:       WP Record
 * Plugin URI:        https://liontude.com
 * Description:       Record your voice in the post, give voice to your page.
 * Version:           0.1.0
 * Author:            Liontude
 * Author URI:        https://liontude.com/about
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wp-record
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wp-record-activator.php
 */
function activate_wp_record() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-record-activator.php';
	WP_Record_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wp-record-deactivator.php
 */
function deactivate_wp_record() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wp-record-deactivator.php';
	WP_Record_Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wp_record' );
register_deactivation_hook( __FILE__, 'deactivate_wp_record' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wp-record.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    0.1.0
 */
function run_wp_record() {

	$plugin = new wp_record();
	$plugin->run();

}
run_wp_record();
