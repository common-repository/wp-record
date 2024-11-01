<?php

/**
 * Show audio player to play audio.
 * [wp-record]
 *
 * @since      0.1.0
 *
 * @package    WP_Record
 * @subpackage WP_Record/public/shortcodes
 */
function shortcode_wp_record_default( $atts ) {
	ob_start();
	extract( shortcode_atts( [ 'id' => '' ], $atts ) );
	$record_id = "{$id}";

	$post_id          = get_the_ID();
	$record_post_meta = new WP_Record_Post_Meta();
	$allRecords       = $record_post_meta->get_records_by_post( $post_id, 'wp-records-meta' );

	echo '<div class="wp-record">';
	if ( ! $record_id ) {
		foreach ( $allRecords as $record ) {
			echo '<div class="td-audio">';
			echo do_shortcode( '[audio src="' . $record['url'] . '"]' );
			echo '</div>';
		}
	} else {
		foreach ( $allRecords as $record ) {
			if ( $record['id'] === $record_id ) {
				if ( isset($record['showTitle']) && $record['showTitle'] && $record['name'] ) {
					echo '<p>' . $record['name'] . '</p>';
				}
				echo '<div class="td-audio">';
				echo do_shortcode( '[audio src="' . $record['url'] . '"]' );
				echo '</div>';
			}
		}
	}
	echo '<small>
		<a target="_blank" href="https://liontude.com">liontude</a>
	</small>';
	echo '</div>';

	return ob_get_clean();
}
