/*
 * aQuery - lightweight version of jQuery 
 * compatible with IE10 or later - requires document.querySelectorAll and element.classList
 * note that hide/show will delete any inline display styles you have added and show simply sets to display block
 */
'use strict';

function aQuery(selector){
	function aQueryObject(selector){
		if(typeof selector === 'string'){
			this.elementList = document.querySelectorAll(selector);
		}
		else if(selector instanceof Element){
			this.elementList = [selector];
		}
		else{
			//assume elementList
			this.elementList = selector;
		}
		this.length = this.elementList.length >= 0 ? this.elementList.length : 1;
	}
	/*
	* General utility methods
	*/
	//callback - index, element
	aQueryObject.prototype.each = function(func){
		for (var i = 0; i < this.length; i++) {
			func(i, this.elementList[i]);
		}
	}
	/*
	* Attribute methods
	*/
	aQueryObject.prototype.data = function(key){
		if(this.length < 1){
			return '';
		}
		return this.elementList[0].getAttribute('data-' + key);
	}

	/*
	* CSS Class methods
	*/
	aQueryObject.prototype.addClass = function(className){
		this.each(function(i, element){
			element.classList.add(className);
		});
		return this;
	};
	aQueryObject.prototype.removeClass = function(className){
		this.each(function(i, element){
			element.classList.remove(className);
		});
		return this;
	};
	aQueryObject.prototype.toggleClass = function(className){
		this.each(function(i, element){
			element.classList.toggle(className);
		});
		return this;
	};
	aQueryObject.prototype.hide = function(){
		this.each(function(i, element){
			element.style.display = 'none';
		});
		return this;
	};
	aQueryObject.prototype.show = function(){
		this.each(function(i, element){
			element.style.display = 'block';
		});
		return this;
	};

	/*
	* Event methods
	*/
	aQueryObject.prototype.on = function(eventName, callback){
		this.each(function(i, element){
			element.addEventListener(eventName, callback, false);
		});
	};
	//calls onclick callback(s)
	aQueryObject.prototype.click = function(){
		this.each(function(i, element){
			element.click();
		});
	};

	/*
	* Input validation
	*/
	if(typeof selector === 'string' || typeof selector === 'object'){
		return (new aQueryObject(selector));
	}
}
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
    	$("section[data-section='" + section_key + "']").show();
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
            //404 - show about section
            $('.home-menu li[data-section="about"]').click();
        }
    }
    router();
    //change route on hash url change
    window.addEventListener("hashchange", router, false)
})(aQuery);
/*
 * Email
 */
(function(){
	"use strict";
    var dot = ".";
    var at = "@";
    var sixth = "com";
    var second = "garvey";
    var first = "allen";
    var fourth = "gmail";
    document.getElementById('email_link').href = 'mailto:' + first + dot + second + at + fourth + dot + sixth;
    document.getElementById('email_text').innerHTML = first + dot + second + at + fourth + dot + sixth;
})();