function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;

    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // update total balance
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}

// phone increase decrease events 
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber(true);
})

// handle case increase decrease events 
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);

})