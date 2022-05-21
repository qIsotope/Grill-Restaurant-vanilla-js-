// /**
// **                                           MENU-BURGER START
// */

const headerBot = document.querySelector('.header-bot')
// FIND NAVIGATION BARS
const navigationBarsOpen = document.querySelector('.navigation-bars')
// FIND NAVIGATION BARS CLOSER
const navigationBarsClose = document.querySelector('.navigation-close')
// FIND NAVIGATION 
const navigation = document.querySelector('.navigation')
// FUNCTION WHICH SHOW NAVIGATION
navigationBarsOpen.addEventListener('click', () => {
	navigation.style.left = '0';
})
// FUNCTION WHICH HIDE NAVIGATION
navigationBarsClose.addEventListener('click', () => {
	navigation.style.left = '-900px';
})

/**
// **                                        MENU-BURGER END
*/


/**
** 													NAVIGATION LINKS START
*/
// FIND NAVIGATION MENU
const navMenu = document.querySelector('.navigation-list')
// FUNCTION WHICH MAKE SMOOTH NAVIGATION ON THE PAGE
headerBot.addEventListener('click', (e) => {
	e.stopPropagation();
	// DISABLE UPDATING THE PAGE
	e.preventDefault()
	// CHECK IF TARGET ON WHAT WE CLICK HAVE CLASSLISTS 
	if ((e.target.classList.contains('logo-title') || e.target.classList.contains('navigation-link')
		|| e.target.classList.contains('logo-description') || e.target.classList.contains('header-logo')) && e.target.hasAttribute('anchor')) {
		// IF TRUE ADD A ANIMATION SCROLL
		window.scrollTo({
			left: 0,
			top: document.querySelector(`.${e.target.getAttribute('anchor')}`).offsetTop,
			behavior: "smooth",
		})
		// CLOSE MENU AFTER CLICK ON THE NAV LINK
		navigation.style.left = '-900px';
	}
})

/**
** 													NAVIGATION LINKS END
*/
