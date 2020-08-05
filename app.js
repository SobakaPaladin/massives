// Метод concat сливает указанные массивы в один общий массив.
// Синтаксис: массив.concat(еще массив, и еще массив, и еще...)
// Синтаксис: массив.concat(еще массив, и еще массив, и еще...)

// let a = ['l', 'u', 'l'];
// let b = [1, 6, 8];
// let x = [1, 4, 8, 8];
//
// let c = a.concat(b, x);
// alert(c);
//___________________

// Метод push добовляет элементы в массив.
// Синтаксис: массив.push(1, 2, 3... n)

// let mas = ['a', 'b', 'c'];
// mas.push(1, 2, 3);
// alert(mas);
//___________________


// let mas1 = [1, 2, 3];
// let mas2 = [4, 5, 6];
//
// let uniMas = mas1.concat(mas2);
// alert(uniMas);
//___________________

// Метод reverse отображает массив зеркально.
//  синтаксис: массив.reverse();
// let mas1 = [1, 2, 3];
// let rev = mas1.reverse();
// alert(rev);

//___________________

// Метод unshift добавляет неограниченное количество новых элементов в начало массива.
// Синтаксис: массив.unshift(1, 2, 3... n);

// let mas = ['х', 'у', 'й'];
// mas.unshift('с', 'о', 'с', 'и');
// alert(mas);

//___________________
//
// let mas = [1, 2, 3];
// mas.push(4, 5, 6);
// alert(mas);

//___________________

// Метод shift удаляет первый элемент из массива.
// синтаксис: массив.shift();

// let mas = [1, 2, 3, 4, 5, 6];
// mas.shift();
// alert(mas);

// let mas = [1, 2, 3, 4, 5, 6];
// let elem = mas.shift();
// alert(elem);

//___________________

// let mas = ['js', 'css', 'jq'];
// mas.pop();
// alert(mas);

//___________________

// Метод pop удаляет послений элемент из массива.
// синтаксис: массив.pop();

// let mas = ['js', 'css', 'jq'];
// let lastElem = mas.pop();
// alert(lastElem);

//___________________

// Метод slice вырезает и возвращает указанную часть массива.
// Первым параметром указывается номер элемента массива, с которого начинается вырезание,
// а вторым параметром - номер элемента, на котором закончится вырезание
// (при этом элемент с этим номером не включится в вырезанную часть).
// Синтаксис: массив.slice(a,b)

// let mas = [1, 2, 3, 4, 5];
// let sub = mas.slice(0,3);
// alert(sub);

// let mas = [1, 2, 3, 4, 5];
// let sub = mas.slice(3);
// alert(sub);

//____________________

// Метод splice удаляет или добавляет элементы в массив.
// Можно только удалять элементы, только добавлять или делать и то и другое одновременно.
// Синтаксис: массив.splice(откуда удаляем, сколько элементов удаляем, [вставить элемент], [вставить элемент]...);

// let mas = [1, 2, 3, 4, 5];
// mas.splice(1,2);
// alert(mas);

// let mas = [1, 2, 3, 4, 5];
// let sub = mas.splice(1,3);
// alert(sub);

// let mas = [1, 2, 3, 4, 5];
// mas.splice(2,1, '1', '6', '8');
// alert(mas);


// let mas = [1, 2, 3, 4, 5];
// // mas.splice(1,0,'a', 'b');
// mas.splice(-1,0,'c');
// mas.splice(1,0,'a', 'b');
// mas.push('e');
// alert(mas);

//_____________________

// Метод sort производит сортировку массива в лексикографическом порядке.
// Синтаксис: массив.sort()

// let mas = [3, 4, 1, 2, 7];
// alert(mas.sort());


// let mas = ['якаки', 'сукаке', 'мукаке', 'букаке'];
// alert(mas.sort());


//_____________________

// Функция Object.keys позволяет ключи объекта в виде массива.
// Синтаксис: Object.keys(объект);

// let obj = {js:'test', jq: 'hello', css: 'world'};
// alert(Object.keys(obj));


//_____________________


// let str = 'точь-в-точь';
// alert(str.replace(/-/g,'0'));

// let str = 'aaa bbb ccc';
// alert(str.substr(4,3));
// alert(str.slice(4, 7));
// alert(str.substring(4, 8));


//_____________________

//
// let str = 'луи-хуи-зуи-дуе';
// let arr = str.replace(/-/g,'!');
// alert(arr);//получим массив ['2025', '12', '31']

// const str = '2025-12-31';
// let mas = str.split('-');
// let newMas = mas[2] + '/' + mas[1] + '/' + mas[0];
// alert(newMas);


//_____________________


// Метод toUpperCase производит преобразование строки в верхний регистр (из маленьких букв делает большие).
// Синтаксис: строка.toUpperCase()

// let str = 'js';
// alert(str.toUpperCase());

// let str = 'JS';
// alert(str.toLowerCase());


//_____________________

// Метод length возвращает колличество символов в строке.
// Синтаксис: строка.length;

// let str = 'я учу javascript!';
// alert(str.length);

// let str = 'я учу javascript!';
// alert(str.substr(0,1));
// alert((str.substring(0,2)));
// alert((str.slice(0,1)));

/*

 Метод indexOf осуществляет поиск подстроки (указывается первым параметром) в строке.
 Метод вернет позицию первого совпадения, а если оно не найдено, то вернет -1.
 Вторым параметром (он необязателен) можно передать номер символа, откуда следует начинать поиск.
 Метод чувствителен к регистру символов.

 Синтаксис: строка.indexOf(что ищем, [откуда начинать поиск]);



let str = 'я учу учу javascript!';
alert(str.indexOf('учу')); / 2

let str = 'я учу учу javascript!';
alert(str.indexOf('учу',5)); / 6
*/

// let str = 'я ходил гулять на берег';
// let n = prompt('Введите колличество символов','');
// if (str.length > n) {
//     let result = str.substring(0,n);
//     alert(result + '...');
// }else {
//     result = str;
//     alert(result);
// }


// let str = 'я-учу-javascript!';
// alert(str.replace(/-/g, '!'));


// let str = 'я учу javascript!';
// let mas = str.split(' ');
// alert(mas);


// let str = 'я учу javascript!';
// let mas = str.split('');
// alert(mas);


// let date = '2025-12-31';
// let masOfDate = date.split('-');
// let correctDate = masOfDate[2] + '.' + masOfDate[1] + '.' + masOfDate[0];
// alert(correctDate);

// let mas = ['я', 'учу', 'javascript', '!'];
//
// function upChar(){
//     let symbolOne = mas[0].toUpperCase();
//     mas[0] = symbolOne;
//     let str = mas.join('+');
//     alert(str);
// }
//
// upChar();

// let mas = ['я', 'учу', 'javascript', '!'];
// let word = mas[2].charAt().toUpperCase();x
// let str = mas.join('+');


// let str = 'var_test_text';
// let rep = str.replace(/_/g,'');
// console.log(rep);
// let sec =rep.replace(/te/g,"Te");
// alert(sec);

// let str = ['я', 'учу', 'javascript', '!'];
// str[0] = str[0].toUpperCase();
// str[1] = str[1][0].toUpperCase() + str[1].substr(1);
// str[2] = str[2][0].toUpperCase() + str[2].substr(1);
// let mas = str.join(' ');
// alert(mas);
// console.log(str);

// let mas1 = ['a', 'b', 'c'];
// let mas2 = [1, 2, 3];
// let result = mas1.concat(mas2);
// alert(result);

// let str = 'string';
// console.log(str);
// str = str[0].toUpperCase() + str.substr(1);
// console.log(str);
// alert(str);

// let str = '123456';
// result = str.split('').reverse().join('');
// console.log(result);



// let str = 'http://old.code.html';
// if ((str.substr(-5) == '.html') && (str.substr(0,7) == 'http://')) {
//     alert('Yes');
// }else {
//     alert('No');
// }

// function cube(x,z,p) {
//     return x * p * z
// }
// alert(cube(3,5,19));

// function quad(x, z) {
//         return x + z;
// }
// alert(quad(4, 5));




// function dayWeek(day) {
//     switch (day) {
//         case 1: alert('Понедельник')
//         break;
//         case 2: alert('Вторник');
//             break;
//         case 3: alert('Среда');
//             break;
//         case 4: alert('Четверг');
//             break;
//         case 5: alert('Пятница');
//             break;
//         case 6: alert('Суббота')
//     }
// }
// let dad = dayWeek(1)


// let mas = [3, 4, 1, 8, 23, 45, 5];
// console.log(mas.find(5));
// let mas = [3, 4, 1, 2, 7, 5];
// let testMas = mas.indexOf(11);
// if (testMas == true) {
//     alert('Da');
// }else {
//     alert('Net');
// }

// Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы
// То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30.
// Если число не делится - выведите 'false', а если делится - выведите 'true'.


// let x = prompt('Введите число','');
//
// for (let i=2;i<=x;i++) {
//     if (x % i !== 0) {
//         console.log(true);
//     }else {
//         console.log(false);
//     }
// }

// let mas = [3, 7, 4, 5];
// for (let i = 0;i <= mas.length;i++){
//     for (let j = 0;j <= mas.length;j++){
//         if (mas[i] === mas[j]){
//             console.log('yes');
//             break;
//         }else {
//             console.log('no');
//         }
//     }
// }

// function check(a) {
//     for (let q=1; q<a.length; ++q) {
//         if (a[q] === a[q-1]) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
// console.log(check([3, 1, 1, 2, 4, 1, 10]) ? "Да" : "Нет");


// let mas = [1, 5, 6, 7, 6, 10];
// function indexof(x) {
//     for (let i = 0;i <= mas.length;i++) {
//         if (mas[i] == x) {
//             return i;
//         }
//     }
// }
// alert(indexof(7));


// let x = 6;
// console.log(mas.indexOf(x) !== mas.lastIndexOf(x));
//
// console.log(mas.indexOf(x));
// console.log(mas.lastIndexOf(x));


// let mas = [1, 5, 6, 7, 6, 10, 6, 6, 10];
// for (let i = 0;i <=mas.length;i++) {
//     if (mas.indexOf(mas[i]) !== mas.lastIndexOf(mas[i])) {
//         console.log(mas[i]);
//     }
// }
// let mas = [1, 5, 6, 7, 6, 10, 6, 6, 10];
// for (let i = 0;i <=mas.length;i++) {
//     if (mas.indexOf(mas[i], i+1) !== -1) {
//         console.log(mas[i]);
//     }
// }
// let mas1 = [];
// let mas = [1, 5, 6, 7, 6, 10, 6, 6, 10];
// for (let i = 0; i <= mas.length; i++) {
//     if (mas1[mas[i]] == 0) {
//     } else {
//         mas1[mas[i]] = 0;
//     }
// }

// let admin;
// let name = "Джон";
// admin = name;
// alert(admin);


let admin = prompt('Введите имя пользователя','');
    if (admin == 'admin'){
        let password = prompt('Введите пароль', '');
        if (password == 'password'){
            alert('Добропожаловать снова');
        }else if (password == null || password == '') {
            alert('Ввод отменен');
        }else {
            alert('Неверный пароль');
        }
    } else if (admin == null || admin == '') {
        alert('Ввод отменен');
    }else {
        alert('Я Вас не знаю')
    }






