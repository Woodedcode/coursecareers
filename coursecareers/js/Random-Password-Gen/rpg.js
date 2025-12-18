// Length
// Type of characters
    //-Capitals
    //-Lowercases
    //-Special Character
    //-Number
//Display PW

function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProperties() {
    const ids = ["lowercase","uppercase","numbers","special"];
    const properties = {};

    for (const id of ids) {
        const element = document.getElementById(id);
        properties(id) = element.checked;
    }
    return properties;
}

function getChars(lowercase = true) {
    const start = lowercase ? 97 : 65;
    let chars = [];

    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i))
    }
    return chars
}

function getNumbers() {
    const nums = []

    for (let i = 0; i< 10; i++) {
        nums.push(i)
    }
    return nums
}

function generatePassword() {
    const length = getPasswordLength();
    const properties = getPasswordProperties();
    const lowercaseChars = getChars(true);
    const uppercaseChars = getChars(false);
    const numbers = getNumbers();
    const special = ["!","@","#","^","*","&","(",")"]

    console.log(lowercaseChars,uppercaseChars)
}









