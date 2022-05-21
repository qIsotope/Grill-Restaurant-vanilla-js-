// VALIDATE FUNCTION THAT GET FORM, FUNCTION WHICH SEND DATA, PHPMAILER FILE, DATA AND FUNCTION WHICH WE USE IF VALIDATION PASSED
export const validate = async (form, send, mailer, body, succes) => {
	// GET ALL INPUTS IN FORM
	const inputs = form.querySelectorAll('.req')
	// GET ALL DIVS WHICH WE SHOW IF VALIDATION ISN`T PASSED
	const errorAlerts = form.querySelectorAll('.error-validate')
	// HIDE ALL ERRO DIVS
	errorAlerts.forEach(error => { error.style.display = 'none' })
	// GET PHONE INPUT
	const phoneInput = form.querySelector('input[name="Phone"]')
	// GET EMAIL INPUT
	const emailInput = form.querySelector('input[name="Email"]')
	// CHECK IF OUR INPUTS ARE EMPTY
	inputs.forEach(input => {
		if (!input.value) {
			// IF TRUE SHOW ERRORS
			showInputError(input)
			// AND HIDE IF WE CHANGE INPUTS
			hideInputError(input)
		}
	})
	// CHECK IF PHONE INPUT ARE EMPTY
	if (phoneInput.value.match(/\d/g) === null) {
		// IF TRUE SHOW ERRORS
		showInputError(phoneInput)
		// AND HIDE IF WE CHANGE INPUTS
		hideInputError(phoneInput)
	}
	// CHECK LENGTH INPUT PHONE VALUE (USE REGULAR EXPRESSION BECAUSE WE USE INPUT MASK)
	else if (phoneInput.value.match(/\d/g).length !== 12) {
		// IF TRUE SHOW ERRORS
		showInputError(phoneInput, phone)
		// AND HIDE IF WE CHANGE INPUTS
		hideInputError(phoneInput)
	}
	// USE FUNCTION WHICH CHECK EMAIL ON CORRECT 
	else if (emailTest(emailInput)) {
		// IF TRUE SHOW ERRORS
		showInputError(emailInput, false, email)
		// AND HIDE IF WE CHANGE INPUTS
		hideInputError(emailInput)
	}
	// IF WE PASSED ALL CHECKS WE SEND OUR FETCH REQUEST AND USE SUCCESFUL FUNCTION
	else {
		await send(mailer, body)
		await succes()
	}
}

// FUNCTION THAT GET INPUT ON WHICH WE SHOW ERROR AND 2 OPTIONAL ARGUMENTS WHICH CHANGE TEXT IN ERROR DIV
const showInputError = (input, phone, email) => {
	input.classList.add('error')
	input.parentElement.nextElementSibling.style.display = 'block'
	if (phone) {
		input.parentElement.nextElementSibling.textContent = 'Phone number is invalid'
	}
	if (email) {
		input.parentElement.nextElementSibling.textContent = 'Email is invalid'
	}
}
// HIDE ERRORS IF WE CHANGE INPUTS
const hideInputError = (input) => {
	input.addEventListener('input', () => {
		input.parentElement.nextElementSibling.style.display = 'none';
		input.classList.remove('error')
	})
}
// TEST EMAIL ON CORRECT
const emailTest = (input) => {
	if (input !== null) {
		return !/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(input.value)
	}

}
