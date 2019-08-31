/*
 * Hide and show sections based on menu title clicked
 */
(function(){
    //polyfill for nodelist foreach for older version of Microsoft Edge
    function forEach(iterable, callback){
        var length = iterable.length;
        for(var i=0;i<length;i++){
            callback(iterable[i], i);
        }
    }

    var navLinks = document.querySelectorAll('.nav li');
    var contentSections = document.querySelectorAll('main.home section');

    function displaySection(sectionNameToDisplay){
        forEach(navLinks, function(link){
            var linkSectionName = link.attributes['data-section'].value;
            if(linkSectionName === sectionNameToDisplay){
                link.classList.add('active');
            }
            else{
                link.classList.remove('active');
            }
        });
        forEach(contentSections, function(contentSection){
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
        var sections = {
            about: true,
            contact: true,
            projects: true
        };
        var sectionParam = window.location.hash.substr(1);
        var sectionName = sections[sectionParam] ? sectionParam : 'about';
        displaySection(sectionName);

    }
    router();
    //change route on hash url change
    window.addEventListener("hashchange", router, false);
})();