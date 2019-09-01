/*
 * Hide and show sections based current url hash
 */

const navLinks = document.querySelectorAll('.nav li');
const contentSections = document.querySelectorAll('main.home section');

function displaySection(sectionNameToDisplay){
    navLinks.forEach((link)=>{
        const linkSectionName = link.dataset.section;
        if(linkSectionName === sectionNameToDisplay){
            link.classList.add('active');
        }
        else{
            link.classList.remove('active');
        }
    });
    contentSections.forEach((contentSection)=>{
        const contentSectionName = contentSection.dataset.section;
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
    const sections = {
        about: true,
        contact: true,
        projects: true
    };
    const sectionParam = window.location.hash.substr(1);
    const sectionName = sections[sectionParam] ? sectionParam : 'about';
    displaySection(sectionName);
}

export function initRouter(){
    //initialize route based on url hash when page loads
    router();
    window.addEventListener('hashchange', router, false);
}