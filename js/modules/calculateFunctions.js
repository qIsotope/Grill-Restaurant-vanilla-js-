/**
	** 						A FUNCTION WHICH CALCULATE NUMBER OF ITEMS IN BASKET START
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
	** 						A FUNCTION WHICH CALCULATE NUMBER OF ITEMS IN BASKET END
	*/


/**
	**   A FUNCTION WHICH CALCULATE SINGLE ITEM PRICE THAT RECIEVE IN ARGUMENT CURRENT ITEM IN WHICH WE CNANGING THE NUMBER START
	*/
export const calculateSingleProductItemPrice = (item) => {
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
	** 		A FUNCTION WHICH CALCULATE SINGLE ITEM PRICE THAT RECIEVE IN ARGUMENT CURRENT ITEM IN WHICH WE CNANGING THE NUMBER END
	*/

/**
** 				2 FUNCTIONS ABOVE
*/
export const calculatingFunctions = () => {
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


const cartItemList = document.querySelector('.modal-products')
/**
** 						CREATE A LOCAL STORAGE START
*/
// FIND THE ITEM COUNTER 
const itemCounter = document.querySelector('.header-cart-digit')
// FUNCTION WHICH UPDATE A LOCAL STORAGE
const updateLocalStorage = () => {
	// SET ITEM COUNTER TO THE LOCAL STORAGE
	localStorage.setItem('Number of items', itemCounter.textContent)
	// FIND THE HTML CODE WITH ITEMS FROM THE CART
	const htmlForStorage = cartItemList.innerHTML
	// IF CART IS`NT EMPTY SET HTML TO THE STORAGE
	if (htmlForStorage.length) {
		localStorage.setItem('Items in the cart', htmlForStorage)
	}
}

// FUNCTION WHICH GET ITEMS FROM THE STORAGE
const initialLocalStorage = () => {
	// CHECK IF VALUE IS EXIST
	if (localStorage.getItem('Number of items') !== null) {
		// SETTING THE ITEM COUNTER FROM STORAGE ON THE ITEM COUNTER ELEMENT
		itemCounter.textContent = localStorage.getItem('Number of items')
	}
	// CHECK IF VALUE IS EXIST
	if (localStorage.getItem('Items in the cart') !== null) {
		// SETTING THE HTML CODE FROM STORAGE ON THE CART ITEMS ELEMENT
		cartItemList.innerHTML = localStorage.getItem('Items in the cart')
	}
	// AFTER ALL WE USE CALCULATE FUNCTION
	calculatingFunctions()
}

// 
initialLocalStorage()

/**
** 						CREATE A LOCAL STORAGE END
*/