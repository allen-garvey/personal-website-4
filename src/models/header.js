const sectionsModel = require('./sections');

const sections = sectionsModel.navList.map((sectionKey) => {
    const slug = sectionsModel[sectionKey].slug;
    
    return {
        slug,
        url: `#${slug}`,
        title: sectionsModel[sectionKey].title,
    };
});

module.exports = {
    sections,
};