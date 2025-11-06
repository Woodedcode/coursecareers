const country = prompt("What country do you live in?")

if (country == "CA" || country === "canada") {
    const age = prompt("Please enter you age")
    if (age >= 18) {
        const color = prompt("Please enter your fav color");
        const text = document.getElementById("color");
        text.innerHTML = color;
        text.style = "color: " + color
    } else {
        alert("Thanks for participating. we do not need anything else");
    }
} else {
    alert("Thanks for participating. we do not need anymore information");
}



