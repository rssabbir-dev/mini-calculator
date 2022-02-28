let btnCollection = document.getElementById('calculator-body');
let display = document.getElementById('calculator-display');

// let divided = document.getElementById('divided').innerText;
// let multiply = document.getElementById('multiply').innerText;
let equal = document.getElementById('equal').innerText;

btnCollection.addEventListener('click', (event) => {
  let output = '';
  let digit = event.target.innerText;
 
  

  try{
    if (digit == equal) {
    display.innerText = eval(display.innerText)
  }
  else {
    output = output + digit;
    display.innerText += output;
  }
  }
  catch {
    display.innerText = 'Error'
  }
  
  if (digit == 'AC') {
    display.innerText = '';
  }
  else if (digit == 'C') {
    let str = display.innerText;
    removeLastChar = str.slice(0, str.length - 2);
    display.innerText = removeLastChar;
  }
})