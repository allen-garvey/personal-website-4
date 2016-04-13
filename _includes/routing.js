/*
 * Hide and show sections based on menu title clicked
 */
(function($){
	var menu_headings = $('.home-menu li');
	var home_sections = $('.home-section');
    $('.home-menu li').on('click', function(event) {
    	$('#homepage-text').hide();
    	menu_headings.removeClass('active');
    	var clicked = $(this);
    	clicked.addClass('active');
    	var section_key = clicked.data('section');
    	home_sections.hide();
    	$(".home-section[data-section='" + section_key + "']").show();
    });

    //routing
    var url = window.location.href;
    var section_url = url.replace(/^.+#/, '');
    if(url.match(/[#]/) && section_url){
    	$('.home-menu li[data-section="' + section_url +'"]').click();
    }
})(jQuery);