/*
 * Email
 */
(function(){
	'use strict';
    var dot = '.';
    var at = '@';
    var sixth = 'com';
    var second = 'garvey';
    var first = 'allen';
    var fourth = 'gmail';
    var link = first + dot + second + at + fourth + dot + sixth;
    document.getElementById('email_link').href = 'mailto:' + link;
    document.getElementById('email_text').innerHTML = link;
})();