/*
 * Email
 */
(function($){
    var dot = ".";
    var at = "@";
    var sixth = "com";
    var second = "garvey";
    var first = "allen";
    var fourth = "gmail";
    $('#email_link').attr('href', 'mailto:' + first + dot + second + at + fourth + dot + sixth);
    $('#email_text').html(first + dot + second + at + fourth + dot + sixth);
})(jQuery);