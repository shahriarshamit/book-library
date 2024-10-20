/**
 * This file adds some LIVE to the Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and
 * then make any necessary changes to the page using jQuery.
 *
 * @package Astra
 * @since 3.0.0
 */

( function( $ ) {

	var tablet_break_point    = astraBuilderPreview.tablet_break_point || 768,
		mobile_break_point    = astraBuilderPreview.mobile_break_point || 544;

	wp.customize( 'astra-settings[hbb-header-height]', function( value ) {
		value.bind( function( size ) {

			if( size.desktop != '' || size.tablet != '' || size.mobile != '' ) {
				var dynamicStyle = '';
				dynamicStyle += '.ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar {';
				dynamicStyle += 'min-height: ' + size.desktop + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '.ast-desktop .ast-below-header-bar .main-header-menu > .menu-item {';
				dynamicStyle += 'line-height: ' + size.desktop + 'px;';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + tablet_break_point + 'px) {';
				dynamicStyle += '.ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar  {';
				dynamicStyle += 'min-height: ' + size.tablet + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				dynamicStyle +=  '@media (max-width: ' + mobile_break_point + 'px) {';
				dynamicStyle += '.ast-below-header-bar .site-below-header-wrap, .ast-mobile-header-wrap .ast-below-header-bar  {';
				dynamicStyle += 'min-height: ' + size.mobile + 'px;';
				dynamicStyle += '} ';
				dynamicStyle += '} ';

				astra_add_dynamic_css( 'hbb-header-height', dynamicStyle );
			}
		} );
	} );

	// Border Bottom width.
	wp.customize( 'astra-settings[hbb-header-separator]', function( value ) {
		value.bind( function( border ) {

			var color = wp.customize( 'astra-settings[hbb-header-bottom-border-color]' ).get(),
				dynamicStyle = '';

			dynamicStyle += '.ast-header-break-point .ast-below-header-bar, .ast-below-header-bar {';
			dynamicStyle += 'border-bottom-width: ' + border + 'px;';
			dynamicStyle += 'border-bottom-style: solid;';
			dynamicStyle += 'border-color:' + color + ';';
			dynamicStyle += '}';

			astra_add_dynamic_css( 'hbb-header-separator', dynamicStyle );

		} );
	} );

	// Border Color.
	astra_css(
		'astra-settings[hbb-header-bottom-border-color]',
		'border-color',
		'.ast-header-break-point .ast-below-header-bar, .ast-below-header-bar'
	);

	// Responsive BG styles > Below Header Row.
	astra_apply_responsive_background_css( 'astra-settings[hbb-header-bg-obj-responsive]', '.ast-below-header.ast-below-header-bar', 'desktop' );
	astra_apply_responsive_background_css( 'astra-settings[hbb-header-bg-obj-responsive]', '.ast-below-header.ast-below-header-bar', 'tablet' );
	astra_apply_responsive_background_css( 'astra-settings[hbb-header-bg-obj-responsive]', '.ast-below-header.ast-below-header-bar', 'mobile' );

	if (document.querySelector(".ast-below-header-bar .site-logo-img")) {
		astra_apply_responsive_background_css(
			"astra-settings[hbb-header-bg-obj-responsive]",
			".ast-sg-element-wrap.ast-sg-logo-section, .ast-below-header.ast-below-header-bar",
			"desktop"
		);
		astra_apply_responsive_background_css(
			"astra-settings[hbb-header-bg-obj-responsive]",
			".ast-sg-element-wrap.ast-sg-logo-section, .ast-below-header.ast-below-header-bar",
			"tablet"
		);
		astra_apply_responsive_background_css(
			"astra-settings[hbb-header-bg-obj-responsive]",
			".ast-sg-element-wrap.ast-sg-logo-section, .ast-below-header.ast-below-header-bar",
			"mobile"
		);
	}

	// Advanced CSS Generation.
	astra_builder_advanced_css( 'section-below-header-builder', '.ast-below-header.ast-below-header-bar' );

    // Advanced Visibility CSS Generation.
	astra_builder_visibility_css( 'section-below-header-builder', '.ast-below-header-bar', 'grid' );

} )( jQuery );
