/*
 * Hide and show sections based on menu title clicked
 */
(function($){
	var menu_headings = $('.nav li');
	var home_sections = $('.home-section');
    var homepage_text = $('#homepage-text');
    menu_headings.on('click', function(event) {
        homepage_text.hide();
    	menu_headings.removeClass('active');
    	var clicked = $(this);
    	clicked.addClass('active');
    	var section_key = clicked.data('section');
    	home_sections.hide();
    	$("section[data-section='" + section_key + "']").show();
    });

    //routing
    function router(){
        var url = window.location.href;
        var section_url = url.replace(/^.+#/, '');
        var section_header = $('.nav li[data-section="' + section_url +'"]');
        if(url.match(/[#]/) && section_url && section_header.length > 0){
        	section_header.click();
        }
        else{
            //404 - show about section
            $('.home-menu li[data-section="about"]').click();
        }
    }
    router();
    //change route on hash url change
    window.addEventListener("hashchange", router, false)
})(aQuery);