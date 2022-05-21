import '../../libs/flatrick/flatrick.js'
/** 
** CREATE CALENDAR WITH FLATPICKR LIBRARY START
*/
// FIND THE RESERVATION FORM
const reservationForm = document.querySelector('.reservation-form')
// INPUT WHAT SAVES THE DATE VALUE
let dateInput = reservationForm.querySelector('.reservation-date')
const calendar = flatpickr("#hekk", {
	// CREATE A INLINE CALENDAR
	inline: true,
	// DISABLE DATES BEFORE TODAY
	minDate: "today",
	// ON CLICK ON THE DATE ON CALENDAR WE WRITE THE VALUE TO THE INPUT 
	onChange: function (selectedDates, dateStr, instance) {
		dateInput.value = dateStr
		dateInput.classList.remove('error')
		dateInput.parentElement.nextElementSibling.style.display = "none"
	},
});

/** 
** CREATE CALENDAR WITH FLATPICKR LIBRARY END
*/