const billInput = document.querySelector('.bill-input');
const btns = document.querySelectorAll('.btn');
const customTipInput = document.getElementById('custom');
const ppl = document.getElementById('pplAmount');
const tipTotal = document.getElementById('tipTotal');
const total = document.getElementById('total');
const reset = document.getElementById('reset')

billInput.addEventListener('input', calculateTip);
btns.forEach(btn => btn.addEventListener('click', calculateTip));
customTipInput.addEventListener('input', handleCustomTipInput);
ppl.addEventListener('input', calculateTip);

function calculateBill() {
  const bill = parseFloat(billInput.value) || 0;
  return bill;
}

function getSelectedTipPercentage() {
  let selectedPercentage = 0;

  if (customTipInput.value !== '') {
    selectedPercentage = parseFloat(customTipInput.value) || 0;
  } else {
    btns.forEach(btn => {
      if (btn.checked) {
        selectedPercentage = parseFloat(btn.value) || 0;
      }
    });
  }

  return selectedPercentage;
}

function handleCustomTipInput() {
  if (customTipInput.value !== '') {
    btns.forEach(btn => {
      if (btn !== customTipInput) {
        btn.disabled = true;
        btn.previousElementSibling.classList.remove('tip-label')
        btn.previousElementSibling.classList.add('disabled')
      }
    });
  } else {
    btns.forEach(btn => {
      btn.disabled = false;
      btn.previousElementSibling.classList.add('tip-label')
      btn.previousElementSibling.classList.remove('disabled')
    });
  }
  calculateTip();
}

function calculateTip() {
  const bill = calculateBill();
  const tipPercentage = getSelectedTipPercentage();
  const tip = bill * (tipPercentage / 100);
  calculateTotal(tip);
}

function calculateTotal(tip) {
  const pplAmount = parseFloat(ppl.value) || 1;
  const tipAmount = tip / pplAmount;
  const totalAmount = (calculateBill() / pplAmount) + tipAmount;
  displayResults(tipAmount, totalAmount);
}

function displayResults(tipAmount, totalAmount) {
  tipTotal.innerText = tipAmount.toFixed(2);
  total.innerText = totalAmount.toFixed(2);
}

reset.addEventListener('click', () =>{
  billInput.value = '';
  customTipInput.value = '';
  ppl.value = '';

  calculateBill()
  handleCustomTipInput()
})