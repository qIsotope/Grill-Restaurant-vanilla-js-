import { calculatingFunctions } from './calculateFunctions.js'

/**
** 												CLOSE MODAL WINDOW START
*/
// CLOSE MODAL WINDOW
const modal = document.querySelector('.modal')
const openModal = document.querySelector('.header-cart')
const modalBody = document.querySelector('.modal-body')
const home = document.querySelector('.home')
const header = document.querySelector('.header')
const scrollTop = document.querySelector('.scroll-to-top')
// MODAL THAT WE SHOWING WHEN ITEM CART IS EMPTY
const modalEmpty = document.querySelector('.modal-empty');
// MODAL THAT WE SHOWING AFTER SEND ORDER
const modalThanksful = document.querySelector('.modal-thanksful')
// DEFAULT MODAL
const modalDefault = document.querySelector('.modal-default')
// loader

modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal-wrapper') || e.target.classList.contains('modal-close') || e.target.classList.contains('thanksful-button')) {
		bodyUnLock()
		modal.classList.remove('modal__open-animation')
		modalBody.classList.remove('modal__body-animation')

		// CHECK IF ITEMS IN CART EXIST
		if (document.querySelectorAll('modal__product-item').length === 0) {
			// IF FALSE WE SHOWING EMPTY MODAL
			setTimeout(() => {
				modalDefault.style.display = 'none'
				modalThanksful.style.display = 'none'
				modalEmpty.style.display = 'flex'
				calculatingFunctions()
			}, 100)
			bodyUnLock()
		}
	}
})
/**
** 												CLOSE MODAL WINDOW END
*/

/**
** 												OPEN MODAL WINDOW START
*/
openModal.addEventListener('click', () => {
	// CHECK IF ITEMS IN CART EXIST
	if (document.querySelectorAll('.modal__product-item').length !== 0) {
		// IF TRUE WE SHOWING DEFAULT MODAL
		modalEmpty.style.display = 'none'
		modalDefault.style.display = 'block'
		modal.classList.add('modal__open-animation')
		modalBody.classList.add('modal__body-animation')
		bodyLock()
	}
	else {
		// IF FALSE WE SHOWING EMPTY MODAL
		modalEmpty.style.display = 'flex'
		modalDefault.style.display = 'none'
		modal.classList.add('modal__open-animation')
		modalBody.classList.add('modal__body-animation')
		bodyLock()
	}
})

/**
** 												OPEN MODAL WINDOW END
*/

/**
** 												FIX BODY AND ABSOLUTE POSITION ITEMS JUMPING WHEN SCROLL GOES MISSING START
*/
const bodyLock = () => {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'
	document.body.style.paddingRight = lockPaddingValue
	home.style.backgroundAttachment = 'scroll'
	scrollTop.style.right = +lockPaddingValue.replace('px', '') + 30 + 'px'
	header.style.paddingRight = lockPaddingValue
	document.body.style.overflow = 'hidden'
}
// RETURN TO DEFAULT
const bodyUnLock = () => {
	setTimeout(() => {
		header.style.paddingRight = '0px'
		document.body.style.paddingRight = '0px'
		home.style.paddingRight = '0px'
		scrollTop.style.right = '30px'
		document.body.style.overflow = 'overlay'
	}, 200);
}
/**
** 									FIX BODY AND ABSOLUTE POSITION ITEMS JUMPING WHEN SCROLL GOES MISSING END
*/