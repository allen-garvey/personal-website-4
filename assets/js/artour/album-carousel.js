const FIRST_IMAGE_CLASS = 'first-image';
const LAST_IMAGE_CLASS = 'last-image';

let currentSlideshowKey = null;
let currentImageIndex = null;
let isLightboxVisible = false;

const slideshows = initializeSlideshowModels();

function initializeSlideshowModels() {
    const ret = {};

    document
        .querySelectorAll('[data-slideshow-images]')
        .forEach((slideshowParent) => {
            const key = slideshowParent.dataset.slideshowImages;

            ret[key] = {
                imageLinks: [
                    ...slideshowParent.querySelectorAll(
                        'a[data-slideshow-image]'
                    ),
                ].map((link, i) => {
                    link.onclick = (e) => {
                        e.preventDefault();
                        setVisibleImageAt(key, i);
                        displayLightbox();
                    };

                    return {
                        caption: link.dataset.caption,
                        src: link.dataset.src,
                        srcset: link.dataset.srcset,
                        id: link.dataset.slug,
                    };
                }),
            };
        });

    return ret;
}

function initializeLightbox() {
    const lightboxBackground = document.querySelector('.lightbox-background');
    lightboxBackground.onclick = hideLightbox;

    const closeButton = document.querySelector('.close-window-button');
    closeButton.onclick = hideLightbox;

    //buttons
    const leftButton = document.querySelector('.slideshow-left-button');
    leftButton.onclick = showPreviousImage;

    const rightButton = document.querySelector('.slideshow-right-button');
    rightButton.onclick = showNextImage;
}

function setVisibleImageAt(slideshowKey, imageIndex) {
    currentSlideshowKey = slideshowKey;
    currentImageIndex = imageIndex;

    const slideshow = slideshows[slideshowKey];

    // hide or show prev / next buttons
    const controlsContainer = document.getElementById('lightbox-container');
    if (imageIndex === 0) {
        controlsContainer.classList.add(FIRST_IMAGE_CLASS);
    } else {
        controlsContainer.classList.remove(FIRST_IMAGE_CLASS);
    }

    if (imageIndex === slideshow.imageLinks.length - 1) {
        controlsContainer.classList.add(LAST_IMAGE_CLASS);
    } else {
        controlsContainer.classList.remove(LAST_IMAGE_CLASS);
    }

    const currentImageData = slideshow.imageLinks[imageIndex];
    const imgTag = document.getElementById('lightbox-image');
    imgTag.src = currentImageData.src;
    imgTag.srcset = currentImageData.srcset;

    document.querySelector('.caption-body').textContent =
        currentImageData.caption;
}

function displayLightbox() {
    if (isLightboxVisible) {
        return;
    }
    isLightboxVisible = true;
    document.querySelector('.lightbox-container').classList.remove('hidden');
}

function hideLightbox() {
    isLightboxVisible = false;
    document.querySelector('.lightbox-container').classList.add('hidden');
}

function initializeImageSwipeHandlers() {
    const imagesContainer = document.querySelector(
        '.lightbox-images-container'
    );
    //number of pixels allowed in diagonal between touch start and start end
    const yThreshold = 100;
    //number of pixels need to be swiped in x direction to register as swipe
    const xThreshold = 100;

    let touchStartX = null;
    let touchStartY = null;
    let hasStartedSwiping = false;

    imagesContainer.addEventListener('touchstart', function (e) {
        // check if pinching to zoom
        if (e.touches.length > 1) {
            hasStartedSwiping = false;
            return;
        }
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
        hasStartedSwiping = true;
    });
    imagesContainer.addEventListener('touchend', function (e) {
        if (!hasStartedSwiping) {
            return;
        }
        const touch = e.changedTouches[0];
        const touchEndX = touch.clientX;
        const touchEndY = touch.clientY;

        const yDifference = Math.abs(touchEndY - touchStartY);
        // check if moved too much vertically to classify as horizontal swipe
        if (yDifference > yThreshold) {
            return;
        }
        const xDifference = Math.abs(touchEndX - touchStartX);
        // check if moved enough horizontally to classify as horizontal swipe
        if (xDifference < xThreshold) {
            return;
        }

        //swiped right, show previous image
        if (touchEndX > touchStartX) {
            showPreviousImage();
        }
        //swiped left, show next image
        else {
            showNextImage();
        }
    });
}

function initializeKeyboardShortcuts() {
    document.onkeydown = function (e) {
        //don't do anything if lightbox is invisible
        if (!isLightboxVisible) {
            return;
        }
        switch (e.keyCode) {
            //escape key
            case 27:
                hideLightbox();
                break;
            //right arrow
            case 39:
                showNextImage();
                break;
            //left arrow
            case 37:
                showPreviousImage();
                break;
        }
    };
}

function showNextImage() {
    //stop at the end
    if (
        currentImageIndex >=
        slideshows[currentSlideshowKey].imageLinks.length - 1
    ) {
        return;
    }
    setVisibleImageAt(currentSlideshowKey, currentImageIndex + 1);
}
function showPreviousImage() {
    //stop at beginning
    if (currentImageIndex <= 0) {
        return;
    }
    setVisibleImageAt(currentSlideshowKey, currentImageIndex - 1);
}

export function initializeDisplayAlbumLightbox() {
    initializeLightbox();
    initializeImageSwipeHandlers();
    initializeKeyboardShortcuts();
}
