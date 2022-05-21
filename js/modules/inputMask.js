import '../../libs/inputmask/inputmask.js'
/** 
 **   CREATE INPUT MASK ON PHONE INPUTS START
**/
const reservationForm = document.querySelector('.reservation-form')
const reservationTelephone = reservationForm.querySelector('input[name="Phone"]')
const modalForm = document.querySelector('.modal-form')
const modalTelephone = modalForm.querySelector('input[name="Phone"]')
var im = new Inputmask("+(380) 99 99 99 999");
im.mask(reservationTelephone);
im.mask(modalTelephone);

/** 
 **   CREATE INPUT MASK ON PHONE INPUTS END 
**/