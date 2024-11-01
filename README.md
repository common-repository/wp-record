# WP-Record (Wordpress Plugin)

[TOC]

## Prerequisites to developers

- Install nodejs: [https://nodejs.org/download/](https://nodejs.org/download/)
- Install typescript:
`npm install -g typescript`
- Install Webpack:
`npm install -g webpack`
- Install gulp:
`npm install -g gulp-cli gulp`
- Install sass:
`sudo apt-get install ruby-sass-rails`

## How to install

- Clone this project from Gitlab:
`git clone https://github.com/liontude/wp-record.git`
- Install the packages listed in **package.json** with the command:
`npm install`
- Building and watch:
`npm run watch`
- Activate plugin in WordPress.

## How to use

- Include shortcode `[wp-record]` in post.

## NPM tasks

- `npm run watch` (Webpack) Watch for changes in TypeScript, HTML and SCSS files.
- `npm run cssmin` (Gulp) Minify css in **public** and **admin** directories.
- `gulp tslint` (Gulp) Semantic and syntactic TypeScript checks.

## How integrate a shortcode

Example with `[wp-record id="aGrr6xXXf6"]`

1- Create **shortcode-wp-record-default.php** file in ***public/shortcodes/*** path.
Example of the shortcode:
```
/**
 * Register shortcode to show by default.
 * [wp-record id="aGrr6xXXf6"]
 *
 * @link       http://example.com
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
```
Important:

- The name of function **shortcode_wp_record_default** must be similar as name of file **shortcode-wp-record-default.php** but underscores.

2- Open file ***includes/class-wp-record.php***.
3- Go to function `define_public_hooks()`.
4- Include next line:
```
$this->loader->add_shortcode('wp-record', $plugin_public, 'shortcode_wp_record_default');
```
5- Finish, then use the shortcode in Wordpress as `[wp-record id="aGrr6xXXf6"]` expression.