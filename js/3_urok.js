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

}

// задание №3
butdz3n3.onclick = function () {

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
