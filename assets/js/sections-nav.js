export const initSectionsNav = () => {
    if (location.hash) {
        document.querySelector(location.hash)?.scrollIntoView();
    }

    document.querySelectorAll('[data-role="sections-nav"] a').forEach((el) => {
        const target = el.getAttribute('href');
        el.onclick = (e) => {
            e.preventDefault();
            history.replaceState(null, '', target);
            document
                .querySelector(target)
                .scrollIntoView({ behavior: 'smooth' });
        };
    });
};
