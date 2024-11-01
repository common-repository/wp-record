<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @since      0.1.0
 *
 * @package    WP_Record
 * @subpackage WP_Record/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      0.1.0
 * @package    WP_Record
 * @subpackage WP_Record/includes
 * @author     Victor Cruz <victorcruzalonso@gmail.com>
 */
class WP_Record {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    0.1.0
	 * @access   protected
	 * @var      WP_Record_Loader $loader Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    0.1.0
	 * @access   protected
	 * @var      string $wp_record The string used to uniquely identify this plugin.
	 */
	protected $wp_record;

	/**
	 * The current version of the plugin.
	 *
	 * @since    0.1.0
	 * @access   protected
	 * @var      string $version The current version of the plugin.
	 */
	protected $version;

	/**
	 * The current id of the plugin.
	 *
	 * @since    0.1.0
	 * @access   protected
	 * @var      string $plugin_id The id of the plugin.
	 */
	protected $plugin_id;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    0.1.0
	 */
	public function __construct() {

		$this->wp_record = 'wp-record';
		$this->version   = '0.1.0';
		$this->plugin_id = 'wp-record-id';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - WP_Record_Loader. Orchestrates the hooks of the plugin.
	 * - WP_Record_i18n. Defines internationalization functionality.
	 * - WP_Record_Admin. Defines all hooks for the admin area.
	 * - WP_Record_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    0.1.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-record-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-record-i18n.php';

		/**
		 * The class responsible for defining post meta functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-wp-record-post-meta.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-wp-record-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-wp-record-public.php';

		$this->loader = new WP_Record_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the WP_Record_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    0.1.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new WP_Record_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    0.1.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new WP_Record_Admin( $this->get_wp_record(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );

		// Add record meta box action.
		$this->loader->add_action( 'add_meta_boxes', $plugin_admin, 'add_record_meta_box' );

		// Upload record wp_ajax action.
		// Users.
		$this->loader->add_action( 'wp_ajax_get_current_user', $plugin_admin, 'get_current_user' );

		// Records.
		$this->loader->add_action( 'wp_ajax_get_records', $plugin_admin, 'get_records' );
		$this->loader->add_action( 'wp_ajax_get_remove_record', $plugin_admin, 'get_remove_record' );
		$this->loader->add_action( 'wp_ajax_post_upload_records', $plugin_admin, 'post_upload_records' );
		$this->loader->add_action( 'wp_ajax_post_upload_record', $plugin_admin, 'post_upload_record' );
		$this->loader->add_action( 'wp_ajax_post_update_record', $plugin_admin, 'post_update_record' );
		$this->loader->add_action( 'wp_ajax_post_issue_email', $plugin_admin, 'post_issue_email' );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    0.1.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new WP_Record_Public( $this->get_wp_record(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

		$this->loader->add_shortcode( 'wp-record', $plugin_public, 'shortcode_wp_record_default' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    0.1.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     0.1.0
	 * @return    string    The name of the plugin.
	 */
	public function get_wp_record() {
		return $this->wp_record;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     0.1.0
	 * @return    WP_Record_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     0.1.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

	/**
	 * Retrieve the plugin id of the plugin from options.
	 *
	 * @since     0.1.0
	 * @return    string    The plugin id of the plugin.
	 */
	public function get_plugin_id() {
		$meta      = new WP_Record_Post_Meta();
		$plugin_id = get_option( $this->plugin_id );
		if( !$plugin_id) {
			$plugin_id = $meta->random( 20 );
		}

		update_option( $this->plugin_id, $plugin_id );

		return $plugin_id;
	}

}
