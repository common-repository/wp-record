<?php

/**
 * Define the post meta functionality
 *
 * @since      0.1.0
 *
 * @package    WP_Record
 * @subpackage WP_Record/includes
 */

/**
 * Define the post meta functionality.
 *
 * @since      0.1.0
 * @package    WP_Record
 * @subpackage WP_Record/includes
 * @author     Victor Cruz <victorcruzalonso@gmail.com>
 */
class WP_Record_Post_Meta {

	/**
	 * Create an empty Array in post menu if no exist.
	 *
	 * @param    string $post_id  The ID of the post to which a custom field should be added.
	 * @param    string $meta_key The key of the custom field which should be added.
	 */
	private function init( $post_id, $meta_key ) {
		add_post_meta( $post_id, $meta_key, [ ], true );
	}

	/**
	 * Add record to post meta.
	 *
	 * @param    string $post_id   The ID of the post to which a custom field should be added.
	 * @param    string $meta_key  The key of the custom field which should be added.
	 * @param    string $attach_id The value of the attach in media.
	 */
	public function add_record( $post_id, $meta_key, $attach_id ) {
		self::init( $post_id, $meta_key );

		$records = self::get_records_by_post( $post_id, $meta_key );

		$record = [
			'id'          => self::random(),
			'name'        => '',
			'description' => '',
			'attach_id'   => $attach_id,
			'post_id'     => $post_id,
			'url'         => wp_get_attachment_url( $attach_id )
		];

		array_push( $records, $record );
		self::update_post_meta( $post_id, $meta_key, $records );
	}

	/**
	 * Update post meta.self::init();self::init();
	 *
	 * @since    0.1.0
	 *
	 * @param    string $post_id    The ID of the post to which a custom field should be added.
	 * @param    string $meta_key   The key of the custom field which should be added.
	 * @param    string $meta_value The value of the custom field which should be added.
	 */
	public function update_post_meta( $post_id, $meta_key, $meta_value ) {

		// Add or Update the meta field in the database.
		if ( ! update_post_meta( $post_id, $meta_key, $meta_value ) ) {
			add_post_meta( $post_id, $meta_key, $meta_value, true );
		};
	}

	/**
	 * Get all record of post.
	 *
	 * @param    string $post_id  The ID of the post to which a custom field should be added.
	 * @param    string $meta_key The key of the custom field which should be added.
	 *
	 * @return mixed
	 */
	public function get_records_by_post( $post_id, $meta_key ) {
		self::init( $post_id, $meta_key );
		$records_return = [ ];
		$records        = get_post_meta( $post_id, $meta_key, true );

		foreach ( $records as $key => $item ) {
			$url                    = wp_get_attachment_url( $item['attach_id'] );
			$records[ $key ]['url'] = $url;
			array_push( $records_return, $item );
		}

		return $records_return;
	}

	/**
	 * Get one record by Attach ID.
	 *
	 * @param    string $post_id   The ID of the post to which a custom field should be added.
	 * @param    string $meta_key  The key of the custom field which should be added.
	 * @param    string $attach_id The value of the attach to looking.
	 *
	 * @return null
	 */
	public function get_record_by_id( $post_id, $meta_key, $attach_id ) {
		self::init( $post_id, $meta_key );
		$records = get_post_meta( $post_id, $meta_key, true );

		foreach ( $records as $key => $item ) {
			if ( $item['attach_id'] == $attach_id || $item['id'] == $attach_id ) {
				$url                    = wp_get_attachment_url( $item['attach_id'] );
				$records[ $key ]['url'] = $url;

				return $item;
			}
		}

		return null;
	}

	/**
	 * Remove record by ID.
	 *
	 * @param    string $post_id   The ID of the post to which a custom field should be added.
	 * @param    string $meta_key  The key of the custom field which should be added.
	 * @param    string $record_id The record ID.
	 *
	 * @return bool
	 */
	public function remove_record( $post_id, $meta_key, $record_id ) {
		self::init( $post_id, $meta_key );
		$records = get_post_meta( $post_id, $meta_key, true );

		foreach ( $records as $key => $item ) {
			if ( $item['id'] == $record_id ) {
				wp_delete_attachment( $item['attach_id'] );
				unset( $records[ $key ] );
			}
		}

		self::update_post_meta( $post_id, $meta_key, $records );
		$result = self::get_record_by_id( $post_id, 'wp-records-meta', $record_id );

		if ( ! $result ) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Generate random string.
	 *
	 * @param int $length
	 *
	 * @return string
	 */
	public function random( $length = 10 ) {
		$characters       = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen( $characters );
		$randomString     = '';
		for ( $i = 0; $i < $length; $i ++ ) {
			$randomString .= $characters[ rand( 0, $charactersLength - 1 ) ];
		}

		return $randomString;
	}
}
