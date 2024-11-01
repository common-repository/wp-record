<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @since      0.1.0
 *
 * @package    wp_record
 * @subpackage wp_record/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    WP_Record
 * @subpackage WP_Record/admin
 * @author     Victor Cruz <victorcruzalonso@gmail.com>
 */
class WP_Record_Admin {

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
	 * @param      string $wp_record The name of this plugin.
	 * @param      string $version   The version of this plugin.
	 */
	public function __construct( $wp_record, $version ) {

		$this->wp_record = $wp_record;
		$this->version   = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
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

		wp_enqueue_style( $this->wp_record . 'material-icons', plugin_dir_url( __FILE__ ) . 'css/custom-libs/material-design-icons/material-icons.css', array(), $this->version, 'all' );
		wp_enqueue_style( $this->wp_record . 'wordpress-materialize', plugin_dir_url( __FILE__ ) . 'css/custom-libs/materialize/css/wordpress-materialize.css', array( $this->wp_record . 'material-icons' ), $this->version, 'all' );
		wp_enqueue_style( $this->wp_record, plugin_dir_url( __FILE__ ) . 'css/wp-record-admin.css', array( $this->wp_record . 'wordpress-materialize' ), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
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

		wp_enqueue_script( $this->wp_record . 'recorder', plugin_dir_url( __FILE__ ) . 'js/libs/Francium-voice/src/recorder.js', array(), $this->version, false );
		wp_enqueue_script( $this->wp_record . 'Fr.voice', plugin_dir_url( __FILE__ ) . 'js/libs/Francium-voice/src/Fr.voice.js', array(), $this->version, false );
		//wp_enqueue_script( $this->wp_record . 'adapter', plugin_dir_url( __FILE__ ) . 'js/adapter.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( $this->wp_record . 'materialize-js', plugin_dir_url( __FILE__ ) . 'css/custom-libs/materialize/js/materialize.min.js', array( 'jquery' ), $this->version, false );
		wp_enqueue_script( $this->wp_record, plugin_dir_url( __FILE__ ) . 'js/wp-record-admin.js', array( $this->wp_record . 'materialize-js' ), $this->version, false );

		wp_localize_script( 'ajax-script', 'ajax_object', array(
			'ajax_url' => admin_url( 'admin-ajax.php' )
		) );
	}

	/**
	 * Add a interface option to record voice in post.
	 *
	 * @since  0.1.0
	 */
	public function add_record_meta_box() {

		add_meta_box(
			'wp_record_meta_box',
			__( 'Record Options', 'wp-record' ),
			[ $this, 'display_record_meta_box' ],
			[ ],
			'side', // normal, advanced, or side
			'high'
		);

	}

	/**
	 * Render the record meta box in post.
	 *
	 * @since  0.1.0
	 */
	public function display_record_meta_box() {
		include_once 'partials/wp-record-admin-display-meta-box.php';
	}

	/**
	 * Register admin meta box webpack (NG2).
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

	/**
	 * API Endpoint to get records.
	 *
	 * @since  0.1.0
	 */
	public function get_records() {
		$post_id = intval( $_GET['post_id'] );

		if( !$post_id) {
			wp_send_json( [
				'records' => [ ]
			] );
			die();
		}

		$record_post_meta = new WP_Record_Post_Meta();
		$records          = $record_post_meta->get_records_by_post( $post_id, 'wp-records-meta' );

		wp_send_json( [
			'records' => $records
		] );
		die();
	}

	/**
	 * API Endpoint to remove record by ID.
	 *
	 * @since  0.1.0
	 */
	public function get_remove_record() {
		$post_id   = intval( $_GET['post_id'] );
		$record_id = sanitize_text_field( $_GET['record_id'] );
		if( !$post_id || !$record_id) {
			wp_send_json( [
				'result' => [ ]
			] );
			die();
		}

		$record_post_meta = new WP_Record_Post_Meta();
		$result           = $record_post_meta->remove_record( $post_id, 'wp-records-meta', $record_id );

		wp_send_json( [
			'result' => $result
		] );
		die();
	}

	/**
	 * Upload record with audio file.
	 *
	 * @since  0.1.0
	 */
	public function post_upload_records() {
		$post_id = intval( $_POST['post_id'] );
		$records = sanitize_text_field( $_POST['records'] );

		if( !$post_id || !$records) {
			wp_send_json( [
				'records' => [ ]
			] );
			die();
		}

		$json       = str_replace( array( '\\' ), '', $records );
		$recordsIds = json_decode( $json, false );

		$record_post_meta = new WP_Record_Post_Meta();
		$allRecords       = $record_post_meta->get_records_by_post( $post_id, 'wp-records-meta' );

		$resultRecords = [ ];
		foreach($recordsIds as $id) {
			foreach($allRecords as $record) {
				if($id == $record['id']) {
					array_push( $resultRecords, $record );
				}
			}
		}

		$record_post_meta->update_post_meta( $post_id, 'wp-records-meta', $resultRecords );
		$records = $record_post_meta->get_records_by_post( $post_id, 'wp-records-meta' );

		wp_send_json( [
			'records' => $recordsIds
		] );
	}

	/**
	 * Update single record.
	 *
	 * @since  0.1.0
	 */
	public function post_update_record() {
		$post_id = intval( $_POST['post_id'] );
		$record  = sanitize_text_field( $_POST['record'] );

		if( !$post_id || !$record) {
			wp_send_json( [
				'records' => [ ]
			] );
			die();
		}

		$json   = str_replace( array( '[', ']', '\\' ), '', $record );
		$record = json_decode( $json, true );

		$record_post_meta = new WP_Record_Post_Meta();
		$allRecords       = $record_post_meta->get_records_by_post( $post_id, 'wp-records-meta' );

		$resultRecords = [ ];
		foreach($allRecords as $item) {
			if($record['id'] == $item['id']) {
				array_push( $resultRecords, $record );
			} else {
				array_push( $resultRecords, $item );
			}
		}

		$record_post_meta->update_post_meta( $post_id, 'wp-records-meta', $resultRecords );
		$records = $record_post_meta->get_records_by_post( $post_id, 'wp-records-meta' );

		wp_send_json( [
			'records' => $records
		] );
	}

	/**
	 * API Endpoint to upload record.
	 *
	 * @since  0.1.0
	 */
	public function post_upload_record() {
		if( !empty( $_FILES['files'] ) && $_FILES['files']['error'] == UPLOAD_ERR_OK) {
			$post_id = intval( $_REQUEST['id'] );

			if( !$post_id) {
				wp_send_json( [
					'record' => [ ]
				] );
				die();
			}

			$upload   = wp_upload_bits( $_FILES["files"]["name"], null, file_get_contents( $_FILES["files"]["tmp_name"] ) );
			$filename = $upload['file'];

			// Check the type of file. We'll use this as the 'post_mime_type' .
			$filetype = wp_check_filetype( basename( $filename ), null );

			// Get the path to the upload directory.
			$wp_upload_dir = wp_upload_dir();

			// Prepare an array of post data for the attachment.
			$attachment = array(
				'guid'           => $wp_upload_dir['url'] . '/' . basename( $filename ),
				'post_mime_type' => $filetype['type'],
				'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $filename ) ),
				'post_content'   => '',
				'post_status'    => 'inherit'
			);

			// Insert the attachment.
			$attach_id = wp_insert_attachment( $attachment, $upload['file'] );

			// Generate the metadata for the attachment, and update the database record.
			$attach_data = wp_generate_attachment_metadata( $attach_id, $filename );
			wp_update_attachment_metadata( $attach_id, $attach_data );

			$record_post_meta = new WP_Record_Post_Meta();
			$record_post_meta->add_record( $post_id, 'wp-records-meta', $attach_id );

			wp_send_json( [
				'upload' => $upload,
				'record' => $record_post_meta->get_record_by_id( $post_id, 'wp-records-meta', $attach_id )
			] );
		} else {
			wp_send_json( [
				'message' => 'The file didn\'t load, repeat the operation please.'
			] );
		}

		die();
	}

	/**
	 * Send issue by email.
	 *
	 * @since  0.1.0
	 */
	public function post_issue_email() {
		$issue = sanitize_text_field( $_POST['issue'] );

		if( !$issue) {
			wp_send_json( [
				'data' => [
					'subject' => 'Response from Liontude',
					'msg'     => 'Error with the content, please repeat again.'
				]
			] );
			die();
		}


		$json  = str_replace( array( '[', ']', '\\' ), '', $issue );
		$issue = json_decode( $json, true );

		$to      = [
			'wprecordlt@gmail.com'
		];
		$subject = $issue['subject'];
		$headers = 'From: ' . $issue['name'] . ' <' . $issue['emailFrom'] . '>' . "\r\n";
		$message = $issue['errorMessage'];
		$message .= "\r\n" . 'Message By User: ' . $issue['message'];
		$message .= "\r\n" . 'Plugin Name: ' . $issue['extraData']['pluginName'];
		$message .= "\r\n" . 'slugName: ' . $issue['extraData']['slugName'];
		$message .= "\r\n" . 'Url: ' . $issue['extraData']['url'];
		$message .= "\r\n" . 'Version: ' . $issue['extraData']['version'];

		$send_mail = wp_mail( $to, $subject, $message, $headers );

		$return = [
			'subject' => 'Response from Server',
			'msg'     => "The message wasn't send, please check connection."
		];

		if($send_mail) {
			$return = [
				'subject' => 'Response from Liontude',
				'msg'     => 'The issue was received, don\'t worry, we write you soon.'
			];
		}

		wp_send_json( [
			'data' => $return
		] );
	}

	/**
	 * Get current user.
	 *
	 * @since  0.1.0
	 */
	public function get_current_user() {
		$current_user = wp_get_current_user();
		$record       = new WP_Record();

		$return_user['firstname']     = $current_user->user_firstname;
		$return_user['user_lastname'] = $current_user->user_lastname;
		$return_user['user_email']    = $current_user->user_email;

		wp_send_json( [
			'user'      => $return_user,
			'plugin_id' => $record->get_plugin_id()
		] );
		die();
	}
}
