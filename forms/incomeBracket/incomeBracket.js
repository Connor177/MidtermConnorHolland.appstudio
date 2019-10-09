




btnSubmit.onclick=function(){
let income = Number(inptIncome.value)

if (income < 30000) {
    lblOutput.value = (`With your income of $${income}, you are in a tax bracket of 8%.`)
} else if ( income > 30000 && income < 99999) {
    lblOutput.value = (`With your income of $${income}, you are in a tax bracket of 15%.`)
} else {
    lblOutput.value = (`With your income of $${income}, you are in a tax bracket of 25%.`)
}
}

btnGoAgain.onclick=function(){
    inptIncome.value = '  '
    lblOutput.value = '  '  
}
