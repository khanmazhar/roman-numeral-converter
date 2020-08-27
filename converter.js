document.querySelector('.invalid').style.display = 'none';
document.querySelector('#convert').addEventListener('click', function () {
    var input = document.querySelector('#in-num').value;

    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var roman = '';

    for (var i = 0; i < decimalValue.length; i++) {
        while (decimalValue[i] <= input) {
            roman += romanNumeral[i];
            input -= decimalValue[i];
        }
    }

    if (roman === '') {
        document.querySelector('.invalid').style.display = 'block';
        document.querySelector('#in-num').addEventListener('keyup', displayNone)
    } else {
        document.querySelector('#in-num').value = roman;
        document.querySelector('#in-num').addEventListener('keyup', displayNone);
    }

})

function displayNone() {
    document.querySelector('.invalid').style.display = 'none';
}
