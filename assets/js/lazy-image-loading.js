// adapted from: https://blog.bitsrc.io/lazy-loading-images-using-the-intersection-observer-api-5a913ee226d

export function initLazyImageLoading(){
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                const lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                observer.unobserve(lazyImage);
            }
        })
    });

    document.querySelectorAll('img[data-src]').forEach((image) => {
        imageObserver.observe(image);
    });
}