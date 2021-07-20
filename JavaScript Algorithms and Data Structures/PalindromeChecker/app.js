var checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', function() {
    function palindrome(str) {
        const alphanumericOnly = str
            .toLowerCase()
            .match(/[a-z0-9]/g);
            
        return alphanumericOnly.join('') === alphanumericOnly.reverse().join('');
    }

    var userInput = document.getElementById('userInput').value;
    var trueElement = document.createElement('span');
    trueElement.innerHTML = userInput + ' is a Palindrome ';
    var falseElement = document.createElement('span');
    falseElement.innerHTML = userInput + ' is not a Palindrome ';
    var container = this.getElementsByClassName('container');
    var palindrome = palindrome(userInput);
    if(palindrome) {
        document.body.appendChild(trueElement);
    }
    else {
        document.body.appendChild(falseElement)
    }
});
