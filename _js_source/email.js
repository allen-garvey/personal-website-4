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