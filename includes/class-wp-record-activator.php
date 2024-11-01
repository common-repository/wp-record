<?php

/**
 * Fired during plugin activation
 *
 * @since      0.1.0
 *
 * @package    WP_Record
 * @subpackage WP_Record/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      0.1.0
 * @package    WP_Record
 * @subpackage WP_Record/includes
 * @author     Victor Cruz <victorcruzalonso@gmail.com>
 */
class WP_Record_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    0.1.0
	 */
	public static function activate() {
		$plugin = new WP_Record();
		$plugin->get_plugin_id();
	}

}
