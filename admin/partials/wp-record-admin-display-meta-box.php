<?php

/**
 * Provide a content area view for the record meta box.
 *
 * @since      0.1.0
 *
 * @package    WP_Record
 * @subpackage WP_Record/admin/partials
 */

$WP_Record_Admin = new WP_Record_Admin( 'wp-record-meta-box', '0.1.0' );
$WP_Record_Admin->webpack_ng_app();
?>

<div id="td-record-box" class="wp-record-wrapper td-wordpress-wrapper" data-post-id="<?php echo get_the_ID() ?>">
  <record-app>
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  </record-app>

  <div id="toast-container"></div>
</div>