import { calculatingFunctions } from './calculateFunctions.js'
import { validate } from './validate.js'
// MODAL THAT WE SHOWING AFTER SEND ORDER
const modalThanksful = document.querySelector('.modal-thanksful')
// DEFAULT MODAL
const modalDefault = document.querySelector('.modal-default')
// loader
const loader = document.querySelector('.loader-container')

// FIND BUTTON WHAT SUBMIT MODAL FORM
const sendForm = document.querySelector('.modal-button')
// FIND MODAL FORM
const modalForm = document.querySelector('.modal-form')
// FUNCTION THAT SEND ORDER ON A MAIL

sendForm.addEventListener('click', async (e) => {
	// DISABLE UPDATE THE PAGE
	e.preventDefault()
	// ONCLICK WE SHOWING loader
	loader.style.display = 'block'
	// FIND ALL ITEMS WHAT WE NEED TO SEND
	let itemsForSending = document.querySelectorAll('.modal__product-item')
	// CREATE ARRAYS IN WHICH WE WILL STORE INFORMATION ABOUT THE ORDER
	let arrItemInfo = [];
	let arrPriceForOrder = [];
	// IN CYCLE WE CREATE OBJECT WITH INFO ABOUT ITEM AND PUSH HIM INTO ARRAY
	itemsForSending.forEach(item => {
		const obj = {
			// ITEM NAME
			name: item.querySelector('.product__item-name').textContent,
			// ITEM NUMBERS
			numbers: item.querySelector('.product__item-number').textContent,
			// ITEM PRICE
			priceForItem: item.querySelector('.product__item-price').textContent
		}
		// PUSH TO ARRAY
		arrItemInfo.push(obj)
	})
	// CREATE OBJECT WHICH HAVE INFO ABOUT PRICE OF THE ORDER
	const pricefororderOBJ = {
		// TITLE
		title: 'Price for order',
		// PRICE FOR ORDER
		price: document.querySelector('.modal-value').textContent + '$'
	}
	// PUSH TO ARRAY
	arrPriceForOrder.push(pricefororderOBJ)

	// CREATE DATA STORAGE WITH INFO FROM FORM INPUTS
	let formData = new FormData(modalForm)
	// PUSH TO DATA STORAGE OUR ARRAY WITH INFO ABOUT ITEM
	formData.append('Products', JSON.stringify(arrItemInfo));
	// PUSH TO DATA STORAGE OUR ARRAY WITH INFO ABOUT PRICE FOR THE ORDER
	formData.append('SummaryPrice', JSON.stringify(arrPriceForOrder))

	// USE FUNCTION WHICH VALIDATE ALL INPUTS IN FORM AND IF VALUES CORRECT SEND FETCH POST REQUEST AND AFTER SHOW THANKSFUL MODAL
	validate(modalForm, fetchPostRequest, 'modalMail.php', formData, succesOrder)
	// await fetchPostRequest('modalMail.php', formData)

	// RESET FORM, MODALS AFTER SENDING AND HIDE LOADER
	await resetModal()
})

/**
** 						SEND ORDER ON A MAIL END
*/

/**
** 						 FETCH POST REQUEST START
*/
const fetchPostRequest = async (url, data) => {
	let response = await fetch(url, {
		method: 'POST',
		body: data,
	});
	if (response.ok) {
		console.log("Sended")
	}
	else {
		console.log("error", response.status)
	}
}
/**
** 						 FETCH POST REQUEST END
*/

/**
** 						FUNCTION THAT RESET MODAL FORM
*/
async function resetModal() {
	modalForm.reset();
	loader.style.display = 'none'

}
/**
** 						FUNCTION THAT RESET MODAL FORM 
*/

/**
** 						FUNCTION THAT RESET MODAL PRODUCTS AND SHOW THANKSFUL MODAL START 
*/

const succesOrder = async () => {
	let itemsForSending = document.querySelectorAll('.modal__product-item')
	itemsForSending.forEach(item => { item.remove() })
	modalDefault.style.display = 'none'
	modalThanksful.style.display = 'block'
	calculatingFunctions()
}

/**
** 						FUNCTION THAT RESET MODAL PRODUCTS AND SHOW THANKSFUL MODAL END
*/


/**
** 						RESERVATION ORDER START
*/
// FIND RESERVATION FORM
const reservationButton = document.querySelector('.reservation-send')
// FIND RESERVATION FORM
const reservationForm = document.querySelector('.reservation-form')
// FUNCTION THAT SEND ORDER ON A MAIL
reservationButton.addEventListener('click', async (e) => {
	// DISABLE UPDATE THE PAGE
	e.preventDefault()
	// ONCLICK WE SHOWING loader
	loader.style.display = 'block'
	// CREATE DATA STORAGE WITH INFO FROM FORM INPUTS
	let reservationFormData = new FormData(reservationForm)
	// FIND THE RESERVATION INPUTS
	const reservationInputs = document.querySelectorAll('.reservation-inputs')
	// FIND THE RESERVATION DATE DISABLED INPUT
	const reservationDate = document.querySelector('.reservation-date')
	// ADD TO THE STORAGE INFO FROM THE RESERVATION INPUTS
	reservationFormData.append('People', reservationInputs[0].textContent)
	reservationFormData.append('O`clock', reservationInputs[1].textContent)
	reservationFormData.append('Date', reservationDate.value)
	// USE FUNCTION WHICH VALIDATE ALL INPUTS IN FORM AND IF VALUES CORRECT SEND FETCH POST REQUEST AND AFTER SHOW THANKSFUL DIV
	await validate(reservationForm, fetchPostRequest, 'reservationMail.php', reservationFormData, successReservation)
	// RESET FORM AND MODALS AFTER SENDING AND HIDE LOADER
	await resetReservation()
})

/**
** 						RESERVATION ORDER END
*/

/**
** 						FUNCTION THAT RESET RESERVATION FORM 
*/
const successOrder = reservationForm.querySelector('.success-order')
async function resetReservation() {
	// RESET RESERVATION FORM
	reservationForm.reset();
	// HIDE THE LOADER
	loader.style.display = 'none'
	// REMOVE SELECTED CLASS FROM THE CALENDAR
	if (document.querySelector('.selected')) {
		document.querySelector('.selected').classList.remove('selected')
	}
}
/**
** 						FUNCTION THAT RESET RESERVATION FORM 
*/


/**
** 						FUNCTION THAT SHOW SUCCES RESERVATION DIV START
*/
const successReservation = async () => {
	successOrder.style.display = 'block'
	setTimeout(() => { successOrder.style.display = 'none' }, 4000)
}
/**
** 						FUNCTION THAT SHOW SUCCES RESERVATION DIV END
*/