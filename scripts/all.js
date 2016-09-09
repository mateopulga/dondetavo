jQuery(document).ready(function($) {
	// Este evento activa las tabs del modal
	$('.product__menu_tabs a').on('click', function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});
});
