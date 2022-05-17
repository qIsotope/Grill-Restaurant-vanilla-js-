/** 
** CREATE FILTER DELIVERY ITEMS WITH FLATPICKR LIBRARY
*/

// FIND THE DELIVERY SECTION
const container = document.querySelector('.delivery')
// FIND THE CATEGORY PICKER
const categoryItem = document.querySelectorAll('.delivery__category-item')

container.addEventListener('click', (e) => {
	// FIND THE ALL DELIVERY ITEMS
	const filterItems = document.querySelectorAll('.delivery-item')

	// IF ONCLICKED ITEM DONT HAVE CLASSLIST CATEGORY ITEM WE DO NOTHING
	if (!e.target.classList.contains('delivery__category-item')) return false
	if (e.target.classList.contains('delivery__category-item')) {
		filterItems.forEach((item) => {
			// IF HE HAVE WE IN CYCLE DELETE CLASS HIDE FROM THE CATEGORY OF DELIVERY ITEMS
			item.classList.remove('hide')
			//WE IN CYCLE DELETE CLASS DELIVERY ACTIVE FROM THE CATEGORY PICKERS
			categoryItem.forEach((item) => item.classList.remove('delivery-active'))
			// CHECK IF DELIVERY ITEM HAVE THE SAME CATEGORY WITH CATEGORY PICKERS
			if (e.target.dataset.category !== item.dataset.category) {
				// IF ISN`T WE HIDE ITEM
				item.classList.add('hide')
				// ADD A CLASS ACTIVE TO THE CATEGORY PICKER ON WHICK WE CLICKED
				e.target.classList.add('delivery-active')
			}
		})
	}
})

/** 
** CREATE FILTER DELIVERY ITEMS FOR THE CATEGORY
*/