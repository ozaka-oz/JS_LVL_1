// задание №1
butdz4n1.onclick = function () {
    var num = Number(prompt("Введите трех значное число: "));

    function convertToObject (number) {
        let obj = {};
        if (number < 0 || number > 999 || !Number.isInteger(number)) {
            console.log ("Вы вверли не правельные данные!" + obj);
        }
        
        obj.numbOfUnits = number % 10;
        obj.numbOfTens = Math.floor((number / 10) % 10);
        obj.numbOfHundreds = Math.floor(number / 100);
        
        console.log (`Единиц: ${obj.numbOfUnits}; десятков: ${obj.numbOfTens}; сотен: ${obj.numbOfHundreds}`);
    }
    convertToObject(num);
}