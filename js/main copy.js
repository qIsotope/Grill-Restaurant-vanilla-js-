import * as menuBurger from './my modules/navigation.js';
import * as filterItems from './my modules/delivery.js';

// /**
// **                                           MENU-BURGER START
// */
const navigationBarsOpen = document.querySelector('.navigation-bars')
const navigationBarsClose = document.querySelector('.navigation-close')
const navigation = document.querySelector('.navigation')
navigationBarsOpen.addEventListener('click', () => {
	navigation.style.left = '0';
})
navigationBarsClose.addEventListener('click', () => {
	navigation.style.left = '-900px';
})
/**
// **                                        MENU-BURGER END
// */

/**
** 													SCROLL TO TOP START
*/
const scrollTop = document.querySelector('.scroll-to-top')
scrollTop.addEventListener('click', () => {
	window.scrollTo({
		left: 0,
		top: 0,
		behavior: "smooth",
	})
})
window.addEventListener('scroll', () => {
	if (scrollY < document.documentElement.clientHeight) {
		scrollTop.style.display = "none"
	}
	else if (scrollY >= document.documentElement.clientHeight) {
		scrollTop.style.display = "block"
	}
})

/**
** 													SCROLL TO TOP END
*/


/**
** 													NAVIGATION LINKS START
*/
const navMenu = document.querySelector('.navigation-list')
const gallery = document.querySelector('.gallery')
navMenu.addEventListener('click', (e) => {
	e.preventDefault()
	if (e.target.classList.contains('navigation-link') && e.target.hasAttribute('anchor')) {
		window.scrollTo({
			left: 0,

			top: document.querySelector(`.${e.target.getAttribute('anchor')}`).offsetTop,
			behavior: "smooth",
		})
		navigation.style.left = '-900px';
	}
})

/**
** 													NAVIGATION LINKS END
*/

/**
** 													MAKE STICKY HEADER WITH BLACK BACKGROUND START
*/
const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
	if (window.scrollY > 60) {
		header.classList.add('header-active')
	}
	else {
		header.classList.remove('header-active')
	}
})
/**
** 												 MAKE STICKY HEADER WITH BLACK BACKGROUND END
*/

/**
** 												CLOSE MODAL WINDOW START
*/
// CLOSE MODAL WINDOW
const modal = document.querySelector('.modal')
const openModal = document.querySelector('.header-cart')
const modalBody = document.querySelector('.modal-body')
const home = document.querySelector('.home')

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
			}, 500)
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
		document.body.style.overflow = 'auto'
	}, 200);
}
/**
** 												FIX BODY AND ABSOLUTE POSITION ITEMS JUMPING WHEN SCROLL GOES MISSING END
*/


/**
** 												ADD ITEM TO BASKET START
*/
const deliveryContainer = document.querySelector('.delivery-content')
const cartItemList = document.querySelector('.modal-products')
let getCartItem = (URL, name, price) => {
	return `<div class="modal__product-item">
	<div class="product__item-img">
		<img src="./${URL}" alt="">
	</div>
	<div class="product__item-info">
		<div class="product__item-top">
			<div class="product__item-name">${name}</div>
			<div class="product__item-price">${price}<span class="modal-currency">$</span></div>
			<div class="modal-price-value">${price}</div>
		</div>
		<div class="product__item-bot">
			<div class="product__item-amount">
				<span class="product__item-minus"></span>
				<span class="product__item-number">1</span>
				<span class="product__item-plus"></span>
			</div>
			<div class="product__item-remove">
				<span class="item__remove-icon">
					<i class="far fa-trash-alt"></i>
				</span>
				<span class="item__remove-text">Udalit</span>
			</div>
		</div>
	</div>
</div>`
}
deliveryContainer.addEventListener('click', (e) => {
	e.preventDefault();
	if (e.target.classList.contains('fa-shopping-cart') || e.target.classList.contains('hvr-icon-rotate')) {
		// ADD A SUCCES ICON WHEN ITEM WAS ADDED
		const succesIcon = e.target.closest('.delivery-item').querySelector('.succes-icon')
		const basketIcon = e.target.closest('.delivery-item').querySelector('.fa-shopping-cart')
		basketIcon.classList.add('fa-shopping-cart-active')
		succesIcon.classList.add('succes-icon-active')
		setTimeout(() => {
			succesIcon.classList.remove('succes-icon-active')
		}, 600)
		setTimeout(() => {
			basketIcon.classList.remove('fa-shopping-cart-active')
		}, 800)
		// ADD A SUCCES ICON WHEN ITEM WAS ADDED

		// FIND A INFORMATION OF ITEM WHICH WE WANT TO ADD TO BASKET
		const absoluteURL = e.target.closest('.delivery-item').querySelector('img').src
		let relativeURLIndex = absoluteURL.indexOf('images')
		let relativeURL = absoluteURL.slice(relativeURLIndex)
		const itemName = e.target.closest('.delivery__item-info').querySelector('.delivery__item-name').textContent.trim()
		const itemPrice = Number(e.target.closest('.delivery__item-info').querySelector('.delivery__item-price').textContent.replace('$', '')).toFixed(2)
		// FIND A INFORMATION OF ITEM WHICH WE WANT TO ADD TO BASKET

		// CHECK IF THIS ITEM ALREADY EXIST IN THE BASKET 
		let cartItemNames = document.querySelectorAll('.product__item-name')
		for (let name of cartItemNames) {
			if (name.textContent === itemName) {
				// IF TRUE WE INCREMENT THE COUNTER OF ITEMS
				let cartItemNumber = name.closest('.product__item-info').querySelector('.product__item-number')
				cartItemNumber.textContent = +cartItemNumber.textContent + 1

				// UPDATE THE VALUES IN THE CART
				calculateSingleProductItemPrice(name.closest('.modal__product-item'))
				calculatingFunctions()
				return
			}
		}
		// CHECK IF THIS ITEM ALREADY EXIST IN THE BASKET

		// IF FALSE WE ADD NEW ITEM
		cartItemList.insertAdjacentHTML('beforeend', getCartItem(relativeURL, itemName, itemPrice))

		// UPDATE THE VALUES IN THE CART
		calculatingFunctions()
	}
})
/**
** 												ADD ITEM TO BASKET END
*/


/**
** 													DELETE ITEMS FROM CART START
*/

cartItemList.addEventListener('click', (e) => {
	// A FUNCTION THAT DELETE ITEM
	const deleteSingleItem = (e) => {
		e.target.closest('.modal__product-item').remove()
		// CHECK IF THAT WAS THE LAST ITEM IN A CART 
		if (document.querySelectorAll('.modal__product-item').length === 0) {
			// IF TRUE WE SHOW EMPTY MODAL
			modalEmpty.style.display = 'flex'
			modalDefault.style.display = 'none'
		}
	}

	/**
** 														DELETE ITEM FROM THE BASKET START
*/

	if (e.target.classList.contains('fa-trash-alt') || e.target.classList.contains('item__remove-text')
		|| e.target.classList.contains('product__item-remove') || e.target.classList.contains('item__remove-icon')) {
		// ADD A CLASS THAT HAVE ANIMATION OF DELETED ITEM
		e.target.closest('.modal__product-item').classList.add('item-active')

		// DELETE A CLASS THAT HAVE ANIMATION OF DELETED ITEM AND UPDATE THE VALUES WHEN ANIMATION WILL END
		setTimeout(() => {
			// UPDATE THE VALUES
			deleteSingleItem(e)
			calculatingFunctions()
			calculateSingleProductItemPrice(e.target.closest('.modal__product-item'))
		}, 200);
	}

	/**
** 														DELETE ITEM FROM THE BASKET END
*/



	/**
	** 												DELETE SINGLE ITEM FROM THE BASKET WHEN WE CLICK ON COUNTER BUTTON MINUS END
	*/
	if (e.target.classList.contains('product__item-minus')) {
		// CHECK IF NUMBER OF THIS ITEMS MORE THAN ONE
		if (+e.target.nextElementSibling.textContent > 1) {
			// IF TRUE WE DECREMENT THE NUMBER OF ITEMS AND UPDATE THE VALUES
			e.target.nextElementSibling.textContent = +e.target.nextElementSibling.textContent - 1
			// UPDATE THE VALUES
			calculateSingleProductItemPrice(e.target.closest('.modal__product-item'))
			calculatingFunctions()
		}
		else {
			// IF FALSE WE ADD A CLASS THAT GIVE ANIMATION OF DELETED ITEM, THEN AFTER ANIMATION WE USE THE FUNCTION ABOVE THAT DELETE ITEM FROM THE CART
			// AND UPDATE VALUES  
			e.target.closest('.modal__product-item').classList.add('item-active')
			setTimeout(() => {
				// DELETE ITEM
				deleteSingleItem(e)
				// UPDATE VALUES  
				calculatingFunctions()
				calculateSingleProductItemPrice(e.target.closest('.modal__product-item'))
			}, 200);
		}
	}
	/**
	** 												DELETE SINGLE ITEM FROM THE BASKET WHEN WE CLICK ON COUNTER BUTTON MINUS START
	*/

	/**
** 																	DELETE ITEMS FROM CART END
*/

	/**
	** 												ADD SINGLE ITEM FROM THE BASKET WHEN WE CLICK ON COUNTER BUTTON PLUS START
	*/
	if (e.target.classList.contains('product__item-plus')) {
		// CHANGE THE COUNTER VALUE
		e.target.previousElementSibling.textContent = +e.target.previousElementSibling.textContent + 1
		// UPDATE VALUES 
		calculateSingleProductItemPrice(e.target.closest('.modal__product-item'))
		calculatingFunctions()
	}
	/**
	** 												ADD SINGLE ITEM FROM THE BASKET WHEN WE CLICK ON COUNTER BUTTON PLUS END
	*/
})
/**
	** 												DELETE ITEMS FROM CART END
	*/


/**
	** 												A FUNCTION WHICH CALCULATE NUMBER OF ITEMS IN BASKET START
	*/
const calculateNumberOfItems = () => {
	// FIND THE ELEMENT THAT WE WANT TO KEEP NUMBER OF ITEMS
	const itemCounter = document.querySelector('.header-cart-digit')
	// FIND THE NUMBER OF ITEMS IN THE CART
	let numberOfItems = document.querySelectorAll('.product__item-number')
	// VARIABLE IN WHICH WE STORE SUM OF NUMBERS
	let sumOfNumbers = 0;
	// THEN IN CYCLE WE SUM UP NUMBER OF ITEMS
	numberOfItems.forEach(number => {
		sumOfNumbers += +number.textContent
	})
	// AND WRITE THE SUM IN THE ELEMENT THAT WE WANT TO KEEP NUMBER OF ITEMS
	itemCounter.textContent = sumOfNumbers
}
/**
	** 												A FUNCTION WHICH CALCULATE NUMBER OF ITEMS IN BASKET END
	*/


/**
	** 				A FUNCTION WHICH CALCULATE SINGLE ITEM PRICE THAT RECIEVE IN ARGUMENT CURRENT ITEM IN WHICH WE CNANGING THE NUMBER START
	*/
const calculateSingleProductItemPrice = (item) => {
	// VARIABLE IN WHICH WE STORE THE PRICES
	let singleProductItemPrice = 0;
	// FIND NUMBER OF ITEMS IN CURRENT ITEM
	let numberOfItemsElement = item.querySelector('.product__item-number')
	if (numberOfItemsElement == undefined) {
		singleProductItemPriceElement.firstChild.textContent = 0
	}
	// FIND THE ELEMENT IN WHICH WE WANT TO STORE THE SUM PRICES OF ALL ITEMS
	let singleProductItemPriceElement = item.querySelector('.product__item-price')
	// FIND THE PRICE OF ONE ITEM
	let priceForOneItem = item.querySelector('.modal-price-value')
	// MULTIPLY PRICE OF ONE ITEM AND NUMBER OF ITEM
	singleProductItemPrice = +numberOfItemsElement.textContent * +priceForOneItem.textContent
	//ROUND TO 2 DECALS WRITE THE RESULT IN THE STORE
	singleProductItemPriceElement.firstChild.textContent = singleProductItemPrice.toFixed(2)
}
/**
	** 				A FUNCTION WHICH CALCULATE SINGLE ITEM PRICE THAT RECIEVE IN ARGUMENT CURRENT ITEM IN WHICH WE CNANGING THE NUMBER END
	*/

/**
** 				2 FUNCTIONS ABOVE
*/
const calculatingFunctions = () => {
	calculateNumberOfItems()
	calculatePriceOfTheOrder()
	updateLocalStorage()
}

/**
	** 				2 FUNCTIONS ABOVE
	*/

/**
	** 				A FUNCTION WHICH CALCULATE PRICE OF THE ORDER START
	*/
const calculatePriceOfTheOrder = () => {
	// FIND ALL ITEM PRICES IN THE CART
	let priceOfTheAllProductItems = document.querySelectorAll('.product__item-price')
	// FIND ELEMENTS I WHICH WE WANT TO STORE THE SUM OF PRICES
	let priceOfTheAllProductItemsElement = document.querySelector('.modal-value').firstChild
	let priceOfTheOrderElement = document.querySelector('.modal__sumprice-digit').firstChild
	// VARIABLE IN WHICH WE STORE THE SUM OF PRICES
	let finalSumDigit = 0;
	// IN CYCLE WE SUM UP PRICE EVEREYONE ITEM
	priceOfTheAllProductItems.forEach(price => {
		finalSumDigit += +price.firstChild.textContent
	})
	//ROUND TO 2 DECALS WRITE THE RESULT IN THE STORE
	priceOfTheAllProductItemsElement.textContent = finalSumDigit.toFixed(2)
	priceOfTheOrderElement.textContent = finalSumDigit.toFixed(2)
}
/**
	** 				A FUNCTION WHICH CALCULATE PRICE OF THE ORDER END
	*/

/**
** 						SEND ORDER ON A MAIL START
*/
// MODAL THAT WE SHOWING WHEN ITEM CART IS EMPTY
const modalEmpty = document.querySelector('.modal-empty');
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

	// FETCH POST REQUEST WITH INFORMATION ABOUT ORDER ON PHP LIBRARY 'PHPMAILER'
	await fetchPostRequest('modalMail.php', formData)

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
	const response = await fetch(url, {
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
** 						FUNCTION THAT RESET MODAL FORM AND MODALS AFTER SENDING START
*/
async function resetModal() {
	let itemsForSending = document.querySelectorAll('.modal__product-item')
	itemsForSending.forEach(item => { item.remove() })
	modalForm.reset();
	loader.style.display = 'none'
	modalDefault.style.display = 'none'
	modalThanksful.style.display = 'block'
	calculatingFunctions()
}
/**
** 						FUNCTION THAT RESET MODAL FORM AND MODALS AFTER SENDING END
*/

/**
** 						RESERVATION ORDER START
*/
// FIND RESERVATION FORM
const reservationButton = document.querySelector('.reservation-send')
// FIND RESERVATION FORM
const reservationFormSend = document.querySelector('.reservation-form')
// FUNCTION THAT SEND ORDER ON A MAIL
reservationButton.addEventListener('click', async (e) => {
	// DISABLE UPDATE THE PAGE
	e.preventDefault()
	// ONCLICK WE SHOWING loader
	loader.style.display = 'block'
	// CREATE DATA STORAGE WITH INFO FROM FORM INPUTS
	let reservationFormData = new FormData(reservationFormSend)
	// FIND THE RESERVATION INPUTS
	const reservationInputs = document.querySelectorAll('.reservation-inputs')
	// FIND THE RESERVATION DATE DISABLED INPUT
	const reservationDate = document.querySelector('.reservation-date')
	// ADD TO THE STORAGE INFO FROM THE RESERVATION INPUTS
	reservationFormData.append('People', reservationInputs[0].textContent)
	reservationFormData.append('O`clock', reservationInputs[1].textContent)
	reservationFormData.append('Date', reservationDate.value)
	// FETCH POST REQUEST WITH INFORMATION ABOUT ORDER ON PHP LIBRARY 'PHPMAILER'
	await fetchPostRequest('reservationMail.php', reservationFormData)
	// RESET FORM AND MODALS AFTER SENDING AND HIDE LOADER
	await resetReservation()
})

/**
** 						RESERVATION ORDER END
*/

/**
** 						FUNCTION THAT RESET RESERVATION FORM AFTER SENDING START
*/
async function resetReservation() {
	reservationFormSend.reset();
	loader.style.display = 'none'
}
/**
** 						FUNCTION THAT RESET RESERVATION FORM AFTER SENDING END
*/

/**
** 						HIDE PRELOADER WHEN PAGE LOADED START
*/
const preloader = document.querySelector('.preloader-container')
window.onload = function () {
	preloader.classList.add('preloader-disactive')
}
/**
** 						HIDE PRELOADER WHEN PAGE LOADED END
*/

/**
** 						CREATE A LOCAL STORAGE START
*/
// FUNCTION WHICH UPDATE A LOCAL STORAGE
const updateLocalStorage = () => {
	const itemCounter = document.querySelector('.header-cart-digit')
	localStorage.setItem('Number of items', itemCounter.textContent)
	const htmlForStorage = cartItemList.innerHTML
	if (htmlForStorage.length) {
		localStorage.setItem('Items in the cart', htmlForStorage)
	}
}


// FUNCTION WHICH GET ITEMS FROM THE STORAGE
const initialLocalStorage = () => {
	const itemCounter = document.querySelector('.header-cart-digit')
	if (localStorage.getItem('Number of items') !== null) {
		itemCounter.textContent = localStorage.getItem('Number of items')
	}
	if (localStorage.getItem('Items in the cart') !== null) {
		cartItemList.innerHTML = localStorage.getItem('Items in the cart')
	}
	calculatingFunctions()
}

// 
initialLocalStorage()

/**
** 						CREATE A LOCAL STORAGE END
*/