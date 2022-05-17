
/**
** 						HIDE PRELOADER WHEN PAGE LOADED START
*/
// FIND PRELOADER
const preloader = document.querySelector('.preloader-container')
// REMOVE PRELOADER AFTER PAGE LOADED
window.onload = function () {
	preloader.classList.add('preloader-disactive')
}
/**
** 						HIDE PRELOADER WHEN PAGE LOADED END
*/