n1.onclick = function () {
    console.log('Задание №1');
    var a = 1,
        b = 1,
        c, d;
    console.log('var a = 1, b = 1, c, d : здесь мы присваиваем переменным a и b значение, с и d получают undefined');
    console.log('');
    c = ++a;
    console.log(c); // 2
    console.log('c = ++a; console.log(c) : переменной c присваивается значение переменной a, a помощью префиксного инкремента увеличивается на 1, далее выводится в консоль значение переменной c=2');
    console.log('');
    d = b++;
    console.log(d); // 1
    console.log('d = b++; console.log(d) : переменной d присваивается значение переменной b, b с помощью постфиксного инкремента увеличивается на 1, но в консоль выводит b=1 тк в переменную возвращается значение до его увеличения');
    console.log('');
    c = (2 + ++a);
    console.log(c); // 5
    console.log('c = (2+ ++a); console.log(c) : переменной с присваевается значение выражения в скобках, у префиксного инкремента приоритет выше чем у сложения поэтому, сначала а увиличивается на 1, получившееся значение 3 складывается с 2, с=5');
    console.log('');
    d = (2 + b++);
    console.log(d); // 4
    console.log('c = (2+ ++a); console.log(c) : переменной d присваевается значения выражения в скобках, у постфиксного инкремента выше приоритет он выполняется первым он получает значение 2 и увиличивает его на 1, но при этом возвращает старое значение для сложения, те 2+2, d = 4');
    console.log('');
    console.log(a); // 3
    console.log('console.log(a) : выводит результат увеличения переменной с помощью префиксного инкремента a=3');
    console.log('');
    console.log(b); // 3
    console.log('console.log(b) : выводит результат увеличения переменной с помощью постфиксного инкремента b=3');
    console.log('');
}

n2.onclick = function () {
    console.log('Задание №2');
    var a = 2;
    var x = 1 + (a *= 2);
    console.log(x);
    console.log('var x = 1 + (a *= 2) : прееменной х присваивается значение выражения. В начале выполняется выражение в скобках, в переменную а попадает значение 2, далее с помощью оператора присваивания *= выпонляется a = a*2, в результате а=4, после этого 4+1 = 5, переменной х присваевается значение 5');
    console.log('');
}

n3.onclick = function () {
    console.log('Задание №3');
    var a = Math.round(Number(prompt('Введите число №1:')));
    var b = Math.round(Number(prompt('Введите число №1:')));

    if (a >= 0 && b >= 0) {
        if (a > b) {
            var numb = a - b;
        } else {
            var numb = b - a;
        }
    } else if (a < 0 && b < 0) {
        var numb = a * b;
    } else if (a * b < 0) {
        var numb = a + b;
    } else {
        console.log('Вы введил не верные данные. Обновите страницу и повоторите опирацию!')
    }
    console.log(numb);
};

n4.onclick = function () {
    console.log('Задание №4');
    var a = Math.round(Number(prompt('Введите число от 0 до 15:')));

    switch (a) {
        case 0:
            console.log('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 1:
            console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 2:
            console.log('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 3:
            console.log('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 4:
            console.log('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 5:
            console.log('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 6:
            console.log('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 7:
            console.log('7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 8:
            console.log('8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case 9:
            console.log('9, 10, 11, 12, 13, 14, 15');
            break;
        case 10:
            console.log('10, 11, 12, 13, 14, 15');
            break;
        case 11:
            console.log('11, 12, 13, 14, 15');
            break;
        case 12:
            console.log('12, 13, 14, 15');
            break;
        case 13:
            console.log('13, 14, 15');
            break;
        case 14:
            console.log('14, 15');
            break;
        case 15:
            console.log('15');
            break;
        default:
            console.log('Вы ввели не правильные данные!');
    }
}

n5.onclick = function () {
    //    var a = Math.round(Number(prompt('Введите первое число:')));
    //    var operation = Math.round(Number(prompt('Введите число от 1 до 4 (где 1 - "+", 2 - "-", 3 - "/", 4 - "*":')));
    //    var b = Math.round(Number(prompt('Введите второе число:')));
    console.log('Задание №5');

    function sum(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    function div(a, b) {
        return a / b;
    }

    function mul(a, b) {
        return a * b;
    }
}

n6.onclick = function () {
    var x = 5;
    var y = 4;
     console.log('Задание №6');
    function sum(a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }

    function div(a, b) {
        return a / b;
    }

    function mul(a, b) {
        return a * b;
    }

    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case "sum":
                return sum(arg1, arg2);
                break;
            case "sub":
                return sub(arg1, arg2);
                break;
            case "div":
                return div(arg1, arg2);
                break;
            case "mul":
                return mul(arg1, arg2);
                break;
            default:
                console.log("Такой операции нет!")
        }
    }
    console.log(mathOperation(x, y, "sum"));
    console.log(mathOperation(10, 5, "sub"));
    console.log(mathOperation(10, 5, "div"));
    console.log(mathOperation(10, 5, "mul"));
}

n7.onclick = function () {
    console.log('Задание №7');
    console.log (xxx);
    console.log(null==0);
    console.log(null!=0);
    console.log(null===0);
    console.log(null!==0);
    console.log(null>0);
    console.log(null>=0);
    console.log(null<0);
    console.log(null<=0);
    console.log('Не смог понять! Все про это прочитал, но пока сложно.')
}

