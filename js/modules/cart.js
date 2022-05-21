
import { calculatingFunctions, calculateSingleProductItemPrice } from './calculateFunctions.js'

/**
** 												ADD ITEM TO BASKET START
*/
// FIND THE PARENT OF DELIVERY ITEMS
const deliveryContainer = document.querySelector('.delivery-content')
// FIND THE PARENT OF CART ITEMS
const cartItemList = document.querySelector('.modal-products')
// MODAL THAT WE SHOWING WHEN ITEM CART IS EMPTY
const modalEmpty = document.querySelector('.modal-empty');
// DEFAULT MODAL
const modalDefault = document.querySelector('.modal-default')
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
				<span class="item__remove-text">Delete</span>
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