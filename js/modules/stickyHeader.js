/**
** 													MAKE STICKY HEADER WITH BLACK BACKGROUND START
*/
// FIND THE HEADER
const header = document.querySelector('.header')
// IF WE DONT ON THE TOP OF A PAGE WE ADD A CLASS WHICH CHANGE HEADER BACKGROUND
window.addEventListener('scroll', () => {
	if (window.scrollY > 60) {
		header.classList.add('header-active')
	}
// AND DELETE IF ON THE TOP
	else {
		header.classList.remove('header-active')
	}
})
/**
** 												 MAKE STICKY HEADER WITH BLACK BACKGROUND END
*/