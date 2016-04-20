/*
 * Hide and show sections based on menu title clicked
 */
(function($){
	var menu_headings = $('.home-menu li');
	var home_sections = $('.home-section');
    var homepage_text = $('#homepage-text');
    $('.home-menu li').on('click', function(event) {
    	homepage_text.hide();
    	menu_headings.removeClass('active');
    	var clicked = $(this);
    	clicked.addClass('active');
    	var section_key = clicked.data('section');
    	home_sections.hide();
    	$(".home-section[data-section='" + section_key + "']").show();
    });

    //routing
    function router(){
        var url = window.location.href;
        var section_url = url.replace(/^.+#/, '');
        var section_header = $('.home-menu li[data-section="' + section_url +'"]');
        if(url.match(/[#]/) && section_url && section_header.length > 0){
        	section_header.click();
        }
        else{
            //404 - show homepage
            home_sections.hide();
            menu_headings.removeClass('active');
            homepage_text.show();
        }
    }
    router();
    //change route on hash url change
    window.addEventListener("hashchange", router, false)
})(jQuery);