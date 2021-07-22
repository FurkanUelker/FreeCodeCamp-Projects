var convertButton = document.getElementById('convertButton');

function convertToRoman(num) {
    var romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var roman = ""
    
    for(var key in romanToNum) {
        while(num >= romanToNum[key]) {
            roman += key;
            num -= romanToNum[key]
        }
    }
    return roman;
}

convertButton.addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var convertedNumber = document.createElement('span');
    var convert =  convertToRoman(userInput);
    convertedNumber.innerHTML = ' Converted Number: ' + convert + '';
    document.body.appendChild(convertedNumber);
});