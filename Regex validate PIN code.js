function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}      
    
console.log(validatePIN(a234));

/* function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] > '9' || pin[i] < '0') {
       return false;
    }

  }
  return true;
} */

 /* return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6) */

/*  return typeof pin === 'string' && 
    Number.isInteger(+pin) && 
    [4, 6].includes(pin.length) */

