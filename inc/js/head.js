/*
 * Initialize html element classes in head
 */
(function(){
	var classes = ['js'];
	var now = new Date();
	var currentHour = now.getHours();
	if(currentHour >= 20 || currentHour <= 6){
		classes.push('night');
	}
    document.documentElement.className = classes.join(' ');
})();