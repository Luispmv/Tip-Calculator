const billInput = document.getElementById("bill-input")
const fivePercent = document.getElementById("five-percent")
const tenPercent = document.getElementById("ten-percent")
const fifteenPercent = document.getElementById("fifteen-percent")
const twentyFivePercent = document.getElementById("twenty-five-percent")
const fiftyPercent = document.getElementById("fifty-percent")
const customPercent = document.getElementById("custom-percent")
const peopleInput = document.getElementById("people-input")
const errorMessage = document.getElementById("error-message")
const amountPerson = document.getElementById("amountPerson")
const totalPerson = document.getElementById("totalPerson")
const resetButton = document.getElementById("resetButton")


fivePercent.addEventListener("click",fivePercentTip)
function fivePercentTip(){
    fivePercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    fivePercent.style.color = "hsl(183, 100%, 15%)"
    let bill = billInput.value
    let customers = peopleInput.value
    let totalPersona
    if(customers === ""){
        peopleInput.style.border = "solid"
        peopleInput.style.borderColor = "red"
        errorMessage.style.display = "block"
    }else{
        hideElements()
        let percentage = (bill * 5/100)/customers
        console.log(percentage)
        amountPerson.innerHTML = "$" + Math.ceil(percentage)
        totalPersona = (bill/customers) + percentage
        totalPerson.innerHTML = "$" + Math.ceil(totalPersona)
        return totalPersona
    }
}

tenPercent.addEventListener("click", tenPercentTip)
function tenPercentTip(){
    tenPercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    tenPercent.style.color = "hsl(183, 100%, 15%)"
    let bill = billInput.value
    let customers = peopleInput.value
    let totalPersona
    if(customers === ""){
        peopleInput.style.border = "solid"
        peopleInput.style.borderColor = "red"
        errorMessage.style.display = "block"
    }else{
        hideElements()
        let percentage = (bill * 10/100)/customers
        console.log(percentage)
        amountPerson.innerHTML = "$" + Math.ceil(percentage)
        totalPersona = (bill/customers) + percentage
        totalPerson.innerHTML = "$" + Math.ceil(totalPersona)
        return totalPersona
    }
}

fifteenPercent.addEventListener("click", fifteenPercentTip)
function fifteenPercentTip(){
    fifteenPercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    fifteenPercent.style.color = "hsl(183, 100%, 15%)"
    let bill = billInput.value
    let customers = peopleInput.value
    let totalPersona
    if(customers === ""){
        peopleInput.style.border = "solid"
        peopleInput.style.borderColor = "red"
        errorMessage.style.display = "block"
    }else{
        hideElements()
        let percentage = (bill * 15/100)/customers
        console.log(percentage)
        amountPerson.innerHTML = "$" + Math.ceil(percentage)
        totalPersona = (bill/customers) + percentage
        totalPerson.innerHTML = "$" + Math.ceil(totalPersona)
        return totalPersona
    }
}

twentyFivePercent.addEventListener("click", twentyFivePercentTip)
function twentyFivePercentTip(){
    twentyFivePercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    twentyFivePercent.style.color = "hsl(183, 100%, 15%)"
    let bill = billInput.value
    let customers = peopleInput.value
    let totalPersona
    if(customers === ""){
        peopleInput.style.border = "solid"
        peopleInput.style.borderColor = "red"
        errorMessage.style.display = "block"
    }else{
        hideElements()
        let percentage = (bill * 25/100)/customers
        console.log(percentage)
        amountPerson.innerHTML = "$" + Math.ceil(percentage)
        totalPersona = (bill/customers) + percentage
        totalPerson.innerHTML = "$" + Math.ceil(totalPersona)
        return totalPersona
    }
}

fiftyPercent.addEventListener("click", fiftyPercentTip)
function fiftyPercentTip(){
    fiftyPercent.style.backgroundColor = "hsl(172, 67%, 45%)"
    fiftyPercent.style.color = "hsl(183, 100%, 15%)"
    let bill = billInput.value
    let customers = peopleInput.value
    let totalPersona
    if(customers === ""){
        peopleInput.style.border = "solid"
        peopleInput.style.borderColor = "red"
        errorMessage.style.display = "block"
    }else{
        hideElements()
        let percentage = (bill * 50/100)/customers
        console.log(percentage)
        amountPerson.innerHTML = "$" + Math.ceil(percentage)
        totalPersona = (bill/customers) + percentage
        totalPerson.innerHTML = "$" + Math.ceil(totalPersona)
        return totalPersona
    }
}

customPercent.addEventListener("click", customTip)
function customTip(){
    let bill = billInput.value
    let customers = peopleInput.value
    let totalPersona
    if(customers === ""){
        peopleInput.style.border = "solid"
        peopleInput.style.borderColor = "red"
        errorMessage.style.display = "block"
    }else{
        hideElements()
        let customValue = customPercent.value
        let percentage = (bill * customValue/100)/customers
        console.log(percentage)
        amountPerson.innerHTML = "$" + Math.ceil(percentage)
        totalPersona = (bill/customers) + percentage
        totalPerson.innerHTML = "$" + Math.ceil(totalPersona)
        return totalPersona
    }
}

resetButton.addEventListener("click", function(){
    // location.reload()
    billInput.value = ""
    peopleInput.value = ""
})

function hideElements(){
    peopleInput.style.border = "none"
    peopleInput.style.borderColor = "none"
    errorMessage.style.display = "none"
}
