// FIND THE RESERVATION
const reservationForm = document.querySelector('.reservation-form')
// FIND THE RESERVATION SECTION
const reservation = document.querySelector('.reservation')
reservation.addEventListener('click', (e) => {
	// CHECK IF WE CLICK ON OPTION OF MENU
	if (e.target.classList.contains('reservation__people-option')) {
		// FIND THE PARENT OF MENU
		const container = e.target.closest('.form-input')
		// FIND THE PARENT OF OPTIONS
		const optionsContainer = container.querySelector('.options-container')
		// FIND THE ARROW ICON
		const arrow = container.querySelector('.reservation-arrow')
		// FIND THE OPTION VALUE ELEMENT
		let optionValue = container.querySelector('span')
		// WRITE THE PICKED OPTION TO THE VALUE ELEMENT
		optionValue.textContent = e.target.textContent
		// HIDE OPTIONS
		optionsContainer.classList.remove('reservation-open')
		// RETURN ARROW TO DEFAULT
		arrow.classList.remove('arrow-rotate')
	}
	// CHECK IF WE CLICK ON SELECT MENU ITEM OR ARROW
	else if (e.target.classList.contains('reservation-inputs') || e.target.classList.contains('reservation-input')
		|| e.target.classList.contains('reservation-arrow')) {
		// FIND THE PARENT OF MENU
		const container = e.target.closest('.form-input')
		// FIND THE PARENT OF OPTIONS
		const optionsContainer = container.querySelector('.options-container')
		// FIND THE ARROW ICON
		const arrow = container.querySelector('.reservation-arrow')
		// ADD TO OPTIONS CONTAIENR FLAG 
		optionsContainer.classList.add('flag')
		// HIDE ALL OPTIONS CONTAINER WHICH DONT HAVE FLAG
		reservationForm.querySelectorAll('.options-container').forEach((o) => {
			if (!o.classList.contains('flag')) {
				o.classList.remove('reservation-open')
			}
		})
		// THEN REMOVE FLAG
		optionsContainer.classList.remove('flag')
		// SHOW/HIDE OPTIONS CONTAINER
		optionsContainer.classList.toggle('reservation-open')
		// ROTATE THE ARROW
		arrow.classList.toggle('arrow-rotate')
	}
	// IF WE DONT CLICK ON THE SELECT MENU ITEM CLOSE ALL OPTIONS CONTAINER
	else if (!e.target.classList.contains('reservation-inputs')) {
		reservationForm.querySelectorAll('.options-container').forEach((o) => {
			o.classList.remove('reservation-open')
		})
	}
})



