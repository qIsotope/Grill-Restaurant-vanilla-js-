// IMPORT OBJECTS FROM THE LIB
import PhotoSwipeLightbox from '../../libs/photoswipe/photoswipe-lightbox.esm.min.js';
import PhotoSwipe from '../../libs/photoswipe/photoswipe.esm.min.js';

// FIND GALLERYSWIPER CONTAINER
const gallerySwiper = new PhotoSwipeLightbox({
	// INITIALIZE THE PARENT OF SWIPER
	gallery: '.gallery-container',
	// INITIALIZE THE CHILDREN
	children: 'a',
	// NAME OF FUNCTION
	pswpModule: PhotoSwipe,
	// SET BACKGROUND OPACITY
	bgOpacity: 0.6,
	// TEXT UNDER PHOTO
	allowPanToNext: false,
	// ANIMATION TYPE
	showHideAnimationType: 'zoom',

});
// RENDER PHOTOSWIPER
gallerySwiper.init();

const deliverySwiper = new PhotoSwipeLightbox({
	// INITIALIZE THE PARENT OF SWIPER
	gallery: '.delivery__item-img',
	// INITIALIZE THE CHILDREN
	children: 'a',
	// NAME OF FUNCTION
	pswpModule: PhotoSwipe,
	// SET BACKGROUND OPACITY
	bgOpacity: 0.6,
	// TEXT UNDER PHOTO
	allowPanToNext: false,
	// ANIMATION TYPE
	showHideAnimationType: 'zoom',

});
// RENDER PHOTOSWIPER
deliverySwiper.init();

