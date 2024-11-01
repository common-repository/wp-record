<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @since      0.1.0
 *
 * @package    WP_Record
 * @subpackage WP_Record/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    WP_Record
 * @subpackage WP_Record/public
 * @author     Victor Cruz <victorcruzalonso@gmail.com>
 */
class WP_Record_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    0.1.0
	 * @access   private
	 * @var      string $wp_record The ID of this plugin.
	 */
	private $wp_record;

	/**
	 * The version of this plugin.
	 *
	 * @since    0.1.0
	 * @access   private
	 * @var      string $version The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    0.1.0
	 *
	 * @param      string $wp_record The name of the plugin.
	 * @param      string $version   The version of this plugin.
	 */
	public function __construct( $wp_record, $version ) {

		$this->wp_record = $wp_record;
		$this->version   = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    0.1.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in WP_Record_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The WP_Record_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->wp_record, plugin_dir_url( __FILE__ ) . 'css/wp-record-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    0.1.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in WP_Record_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The WP_Record_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->wp_record, plugin_dir_url( __FILE__ ) . 'js/wp-record-public.js', array( 'jquery' ), $this->version, false );

	}

	/**
	 * Register public webpack (NG2).
	 *
	 * @since    0.1.0
	 */
	public function webpack_ng_app() {

		wp_enqueue_script( $this->wp_record . '-inline', plugin_dir_url( __FILE__ ) . 'js/inline.bundle.js', array(), $this->version, false );
		wp_enqueue_script( $this->wp_record . '-polyfills', plugin_dir_url( __FILE__ ) . 'js/polyfills.bundle.js', array(), $this->version, false );
		wp_enqueue_script( $this->wp_record . '-styles', plugin_dir_url( __FILE__ ) . 'js/styles.bundle.js', array(), $this->version, false );
		wp_enqueue_script( $this->wp_record . '-vendor', plugin_dir_url( __FILE__ ) . 'js/vendor.bundle.js', array(), $this->version, false );
		wp_enqueue_script( $this->wp_record . '-bundle', plugin_dir_url( __FILE__ ) . 'js/main.bundle.js', array(), $this->version, false );
	}

}
