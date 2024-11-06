const FIRST_IMAGE_CLASS = 'first-image';
const LAST_IMAGE_CLASS = 'last-image';

const LIGHTBOX_CONTAINER = document.getElementById('lightbox-container');
const LIGHTBOX_IMAGE = document.getElementById('lightbox-image');
const CAPTION_BODY = document.querySelector('.caption-body');

let currentSlideshowIndex = null;
let currentImageIndex = null;
let isLightboxVisible = false;

const slideshows = initializeSlideshowModels();

function initializeSlideshowModels() {
    return [...document.querySelectorAll('[data-slideshow-images]')].map(
        (slideshowParent, slideshowIndex) =>
            [
                ...slideshowParent.querySelectorAll('a[data-slideshow-image]'),
            ].map((link, imageLinkIndex) => {
                link.onclick = (e) => {
                    e.preventDefault();
                    setVisibleImageAt(slideshowIndex, imageLinkIndex);
                    displayLightbox();
                };

                return {
                    caption: link.dataset.caption,
                    src: link.dataset.src,
                    srcset: link.dataset.srcset,
                    id: link.dataset.slug,
                };
            })
    );
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

function setVisibleImageAt(slideshowIndex, imageIndex) {
    currentSlideshowIndex = slideshowIndex;
    currentImageIndex = imageIndex;

    const slideshow = slideshows[slideshowIndex];

    // hide or show prev / next buttons
    if (imageIndex === 0) {
        LIGHTBOX_CONTAINER.classList.add(FIRST_IMAGE_CLASS);
    } else {
        LIGHTBOX_CONTAINER.classList.remove(FIRST_IMAGE_CLASS);
    }

    if (imageIndex === slideshow.length - 1) {
        LIGHTBOX_CONTAINER.classList.add(LAST_IMAGE_CLASS);
    } else {
        LIGHTBOX_CONTAINER.classList.remove(LAST_IMAGE_CLASS);
    }

    const currentImageData = slideshow[imageIndex];
    LIGHTBOX_IMAGE.src = currentImageData.src;
    LIGHTBOX_IMAGE.srcset = currentImageData.srcset;

    CAPTION_BODY.textContent = currentImageData.caption;
}

function displayLightbox() {
    if (isLightboxVisible) {
        return;
    }
    isLightboxVisible = true;
    LIGHTBOX_CONTAINER.classList.remove('hidden');
}

function hideLightbox() {
    isLightboxVisible = false;
    LIGHTBOX_CONTAINER.classList.add('hidden');
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

        //swiped right
        if (touchEndX > touchStartX) {
            showPreviousImage();
        }
        //swiped left
        else {
            showNextImage();
        }
    });
}

function initializeKeyboardShortcuts() {
    document.onkeydown = (e) => {
        if (!isLightboxVisible) {
            return;
        }
        switch (e.key) {
            case 'Escape':
                hideLightbox();
                break;
            case 'ArrowRight':
                showNextImage();
                break;
            case 'ArrowLeft':
                showPreviousImage();
                break;
        }
    };
}

function showNextImage() {
    if (currentImageIndex >= slideshows[currentSlideshowIndex].length - 1) {
        return;
    }
    setVisibleImageAt(currentSlideshowIndex, currentImageIndex + 1);
}
function showPreviousImage() {
    if (currentImageIndex <= 0) {
        return;
    }
    setVisibleImageAt(currentSlideshowIndex, currentImageIndex - 1);
}

export function initializeDisplayAlbumLightbox() {
    initializeLightbox();
    initializeImageSwipeHandlers();
    initializeKeyboardShortcuts();
}
