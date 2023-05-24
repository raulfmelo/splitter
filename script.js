const billInput = document.querySelector('.bill-input')
const btns = document.querySelectorAll('.btn')
const ppl = document.getElementById('pplAmount')
const tipTotal = document.getElementById('tipTotal')
const total = document.getElementById('total')
let tip;
let bill

billInput.addEventListener('input', () =>{
    bill = billInput.value
})

// adding the btns function
btns.forEach(btn =>{
    btn.addEventListener('input', () =>{
        tip = tipCalculator(btn)
        finalCalcs()
    })
})

ppl.addEventListener('input', () =>{
    getPpl()
    finalCalcs()
})


function getPpl(){
    let people = ppl.value
    // console.log(people);
    return people
}

function tipCalculator(btn){
    let tip = bill*(btn.value/100)
    // console.log(tip);
    return tip
}

function finalCalcs(){
    pplAmount = getPpl()
    let tipAmount = tip / pplAmount
    let totalAmount = (bill/pplAmount) + tipAmount

    tipTotal.innerText = tipAmount.toFixed(2);
    total.innerText = totalAmount.toFixed(2)
}
