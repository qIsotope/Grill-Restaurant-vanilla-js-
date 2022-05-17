/**
** 													SCROLL TO TOP START
*/
// FIND SCROLL TOP BUTTON
const scrollTop = document.querySelector('.scroll-to-top')
// FUNCTION THAT SCROLL PAGE TO THE TOP 
scrollTop.addEventListener('click', () => {
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	})
})
// HIDE SCROLL TOP BUTTON IF WE ON THE TOP OF PAGE
window.addEventListener('scroll', () => {
	if (scrollY < document.documentElement.clientHeight) {
		scrollTop.style.display = "none"
	}
	// AND SHOW IF ISN`T
	else if (scrollY >= document.documentElement.clientHeight) {
		scrollTop.style.display = "block"
	}
})
/**
** 													SCROLL TO TOP END
*/