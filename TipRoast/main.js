// ================================
// Elements
// ================================

const billInput = document.getElementById("billAmount");
const customTipInput = document.getElementById("customTip");
const peopleInput = document.getElementById("people");

const tipButtons = document.querySelectorAll(".tip-option");
const calculateButton = document.getElementById("calculate");
const result = document.querySelector(".result");


// ================================
// Selected Tip
// ================================

let selectedTip = 12;


// ================================
// Preset Tip Buttons
// ================================

tipButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active state
        tipButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active state
        button.classList.add("active");

        // Store selected tip
        selectedTip = Number(button.dataset.tip);

        // Clear custom tip
        customTipInput.value = "";
    });

});


// ================================
// Custom Tip
// ================================

customTipInput.addEventListener("input", () => {

    if (customTipInput.value !== "") {

        // Remove active preset
        tipButtons.forEach(button => {
            button.classList.remove("active");
        });

        // Use custom tip
        selectedTip = Number(customTipInput.value);
    }

});


// ================================
// Calculate
// ================================

calculateButton.addEventListener("click", () => {

    const billAmount = Number(billInput.value);
    const people = Number(peopleInput.value);

    // Validation
    if (billAmount <= 0) {
        result.textContent = "Enter a bill amount first. I can't roast an empty bill.";
        return;
    }

    if (people <= 0) {
        result.textContent = "How many people are splitting this? At least one.";
        return;
    }

    if (selectedTip < 0) {
        result.textContent = "Negative tip? You really woke up and chose violence.";
        return;
    }


    // ================================
    // Calculations
    // ================================

    const tipAmount = billAmount * (selectedTip / 100);

    const totalAmount = billAmount + tipAmount;

    const perPerson = totalAmount / people;


    // ================================
    // Console
    // ================================

    console.log("Bill:", billAmount);
    console.log("Tip:", selectedTip + "%");
    console.log("Tip Amount:", tipAmount);
    console.log("Total:", totalAmount);
    console.log("People:", people);
    console.log("Per Person:", perPerson);


    // ================================
    // Roast
    // ================================

    let taunt;

    if (selectedTip === 0) {
        taunt = "Zero tip? The waiter just updated their LinkedIn.";
    }
    else if (selectedTip < 10) {
        taunt = "That's barely a tip. Your wallet survived.";
    }
    else if (selectedTip < 15) {
        taunt = "Okay... technically a tip. Don't get carried away.";
    }
    else if (selectedTip < 20) {
        taunt = "Respectable. The waiter won't remember you, but they won't hate you.";
    }
    else if (selectedTip < 25) {
        taunt = "Generous. Someone's getting dessert tonight.";
    }
    else {
        taunt = "25%+?! Relax. You're not funding the restaurant.";
    }


    // ================================
    // Display Result
    // ================================

    result.innerHTML = `
        <div class="resultAmount">
            ₹${perPerson.toFixed(2)}
            <span>per person</span>
        </div>

        <div class="resultDetails">
        Total: ₹${totalAmount.toFixed(2)}
        <br>
            Tip: ₹${tipAmount.toFixed(2)} (${selectedTip}%)
            
        </div>

        <p class="taunt">${taunt}</p>
    `;

});