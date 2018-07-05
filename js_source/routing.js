/*
 * Hide and show sections based on menu title clicked
 */
(function(){
    var navLinks = document.querySelectorAll('.nav li');
    var contentSections = document.querySelectorAll('main.home section');
    var sectionNames = ['about', 'contact', 'projects'];

    function displaySection(sectionNameToDisplay){
        navLinks.forEach(function(link){
            var linkSectionName = link.attributes['data-section'].value;
            if(linkSectionName === sectionNameToDisplay){
                link.classList.add('active');
            }
            else{
                link.classList.remove('active');
            }
        });
        contentSections.forEach(function(contentSection){
            var contentSectionName = contentSection.attributes['data-section'].value;
            if(contentSectionName === sectionNameToDisplay){
                contentSection.style.display = 'block';
            }
            else{
                contentSection.style.display = 'none';
            }
        });
    }

    //routing
    function router(){
        var url = window.location.href;
        var sectionUrl = url.replace(/^.+#/, '');
        var sectionName = sectionNames.indexOf(sectionUrl) >= 0 ? sectionUrl : 'about';
        displaySection(sectionName);

    }
    router();
    //change route on hash url change
    window.addEventListener("hashchange", router, false);
})();