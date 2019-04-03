// задание №1
butdz3n1.onclick = function () {
    var n = 1;
    while (n < 100) {
        n++;
        var x = 1;
        while (x < n) {
            x++;
            if (n % x == 0) break;
        }
        if (x == n) console.log(n);
    }
}

// задание №2
butdz3n2.onclick = function () {
    let arrPrices = [2200, 5550, 3000, 1800];
    function basketSum (goods) {
        let sum = 0;
        for (let i = 0; i < arrPrices.length; i++) {
            sum += goods[i]
        }
        console.log(sum);
    }
    basketSum(arrPrices);
}

// задание №3
butdz3n3.onclick = function () {
    let arrGoods = ["Щит Капитана Америки", "Перчатка Таноса", "Вибраниум 1 кг", "Мьольнир"];
    let arrPrices = [3200, 5550, 3000, 1800];
        function countBasketPrice (goods) {
        for (i = 0; i < arrGoods.length; i++){
            console.log (arrGoods[i] + " - " + arrPrices[i])
        }
        let sum = 0;
        for (let i = 0; i < arrPrices.length; i++) {
            sum += goods[i]
        }
        console.log("Общая стоимость: " + sum);
    }
    countBasketPrice(arrPrices);
}

// задание №4
butdz3n4.onclick = function () {
    for (var i = 0; i < 10; console.log(i++)) {}
}

// задание №5
butdz3n5.onclick = function () {
    for (let i = 1; i < 20; i++) {
        var simb = "";
        for (let k = 1; k < i; k++) {
            simb += "x";
        }
        console.log(simb);
    }
}
