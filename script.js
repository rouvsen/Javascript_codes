// let age = 21;
// let mezuniyyet = "universite";

// if(age >= 18 && (mezuniyyet == "lise" || mezuniyyet == "universite")) {
//     console.log("Ehliyyet ala bilir.");
// } else { console.log("Ehliyyet alamaz.") }


// let number = 10;

// if(number > 10 && number < 50) console.log("The number is between 10 and 50.");
// else console.log("The number is not between 10 and 50.");

// let number = -21;

// if(Math.abs(number % 2) == 1 || number > 0) console.log("This number is odd or positive");
// else console.log("This number is not odd or positive!");

// let x = 45, y = 100, z = 15;

// if(x > y && x > z) console.log("x en buyuk");
// else if(y > z && y > x) console.log("y en buyuk");
// else if(z > x && z > y) console.log("z en buyuk");
// else console.log("sayilar esit");

// let vize1 = 10;
// let vize2 = 10;
// let final = 70;

// let ortalama = (((vize1 + vize2) / 2) * 0.4) + (final * 0.6);
// console.log("Ortalamaniz: " + ortalama);

// // if(ortalama >= 50) console.log("Gectiniz. Ortalamaniz: " + ortalama  + ". Tebrikler!");
// // else console.log("Kaldiniz! Ortalamaniz: " + ortalama + ". Maalesef..");

// if(ortalama >= 50 || final >= 70) console.log("Gectiniz. Ortalamaniz: " + ortalama  + ". Tebrikler! Final: " + final);
// else console.log("Kaldiniz! Ortalamaniz: " + ortalama + ". Maalesef..Final: " + final);

// let name = "Rovshan";
// let surname = "Maharramov";
// let age = 66;
// let city = "Baku";

// // let message = "My name is " + name + ' and my surname is ' + surname
// //  + '. Men ' + city + '\'da yasayiram.' + "Emekli olmagima " + (65 - age) + " il qalibdir.";

// //  console.log(message);

// //  console.log("Now, I'll show you the short version.");

// let pension = (age < 65) ? "Emekli olmaniza " + (65 - age) + " yil kaldi" : "Siz zaten emekli oldunuz."
// let message = `My name is ${name} and my surname is ${surname}. Men ${city}'da yasiyiram. ${pension}`;
// console.log(message);

//String `Class` methods

// let sampleWord = "I'am a Software Engineer.";
// let result;
// //charAt method
// result = sampleWord.charAt(10);
// // console.log(result);
// // console.log(typeof result);

// //charCodeAt
// result = sampleWord.charCodeAt(9);
// // console.log(result);

// result = "Salam".concat(" menim adim Rovshandir.");
// console.log(result);

// result = sampleWord.startsWith("You");
// console.log(result);

// console.log(sampleWord.includes("Developer"));

// console.log(sampleWord.lastIndexOf("Software"));

// console.log("Salam".length);

// result = sampleWord.repeat(5);
// console.log(result);

// console.log("Current word is: " + sampleWord);
// console.log("And after replace: " + sampleWord.replace("Software Engineer", "DevOps"));
// result = sampleWord.replace();
// console.log(result);

// result = sampleWord.slice(7, 15);// [ ... ) like subString()
// console.log(result);

// result = sampleWord.substring(0, 4);
// console.log(result);

// result = sampleWord.split(" ")[2];
// console.log(result);

// console.log(result[0]);
// console.log(result[1]);
// console.log(result[2]);
// console.log(result[3]);

// result = sampleWord.startsWith("oftware", 8);
// console.log(result);

//I'am a Software Engineer.
// result = sampleWord.substr(0, 20);// ->  [ ... )
// console.log(result);

//substring exmple...
// console.log(sampleWord.substring(0, 11));

// result = sampleWord.toLocaleLowerCase();
// console.log(result);

// result = sampleWord.toLocaleUpperCase();
// console.log(result);

// result = sampleWord.toUpperCase();
// console.log(result);

// result = 15+31;
// console.log(result);//46
// console.log(typeof result);//number
// result = result.toString();//converted to string
// console.log(result);//46
// console.log(typeof result);//string

// let age = 100;
// console.log(age);//100 (like number) -> 100
// console.log(typeof age);//number

// age = age.toString();
// console.log(age);//100 (like string) -> "100"
// console.log(typeof age);//string

// sampleWord = "   I'am DevOps.   ";
// sampleWord = sampleWord.trimEnd();
// // console.log(sampleWord); -> "   I'am DevOps."
// sampleWord = sampleWord.trimStart();"I'am DevOps."
// console.log(sampleWord);// -> "I'am DevOps."

// console.log(typeof sampleWord.valueOf());

//indexOf(), lastIndexOf(), valueOf().

// let word = "abcabcabcabcabc";
// console.log(word.lastIndexOf("abc", 8));

// let url = "https://sadikturan.com/";
// let kursAdi = "Komple Web Geliştirme Kursu";

// let sumOfCharacters = url.length;
// console.log("Sum of Characters: " + sumOfCharacters);//count of characters -> 23.

// let sentences = kursAdi.split(" ");//4 olculu Array
// let sumOfSentences = sentences.length;//length-i -> 4
// console.log("Sum of Sentences: " + sumOfSentences);//4 sentences.

// //starts with https?
// let sorgu = "URL https ile mi basliyor?: ";
// if(url.startsWith("https")) console.log(`${sorgu}evet.`);
// else console.log(`${sorgu}hayir.`);

// //kursAdi includes Egitimi sentence?
// let result1 = kursAdi.includes("Egitimi");
// console.log("kursAdi icerisinde Egitimi kelimesi varmidir?: " + result1);
// //alaternative
// if(kursAdi.indexOf("Egitimi") > -1) console.log("evet Egitimi kelimesi var.");
// else console.log("hayir Egitimi kelimesi yok.");

// //combine url and kursAdi
// let answer = `${(url + kursAdi.replaceAll(" ", "-").replace("ş", "s")).toLowerCase()}`;
// console.log(answer);

// let number;

// number = 10;
// console.log(number);
// console.log(typeof number);

// number = "10";
// // console.log(number);
// // console.log(typeof number);

// // let convertedNumber = Number(number);
// // console.log(convertedNumber);
// // console.log(typeof convertedNumber);

// let convertedNumber = parseInt(number);
// console.log(convertedNumber);
// console.log(typeof convertedNumber);

// number = 15.563463;
// number = parseInt(number);
// console.log(number);

// console.log(parseFloat(15.16161));
// parseFloat

// parseInt -> "10a"
// parseInt -> "a10"

// let result1 = parseInt("10a");
// console.log(result1);//10 cap olunacaq
// console.log(typeof result1);//number

// let result2 = parseInt("a10");//netice crash olur, amma yene de 
// console.log(result2);//NaN
// console.log(typeof result2);//number

// // isNaN ?
// let number = "51a";
// console.log(NaN(number));//false

// console.log(isNaN(10));//false
// console.log(isNaN("10"));//false
// console.log(isNaN("a10"));//true
// console.log(isNaN("10a"));//true

// toPrecision //Precision ~ noqteni saymamaq serti ile reqemleri goturur
// toFixed //Fixed ~ noqteden sonraki reqemleri goturur

// let number = 15.5645;
// console.log(number);
// number = number.toPrecision(4);
// console.log(number);//15.56

// round -> yuvarlaklasdirir, en yaxin edede. Meselen 2.3 round etsek bize 2 verecek, 2.6 round etsek 3 verecek
// cleir -> only yukari
// floor -> only asagi
// sqrt 
// pow 
// abs 
// min 
// max 
// random -> [0;1)

// let currentDate = new Date();//123 address -> Date Object
// let result;
// result = currentDate.getDate();
// result = currentDate.getDay();
// result = currentDate.getFullYear();
// result = currentDate.getHours();
// result = currentDate.getTime();//getTime() - this method gets current millisecond from local time
// // console.log(result);

// result = currentDate;//123 address -> Date Object
// result.setFullYear(2025);
// console.log(result);
// console.log(currentDate);

// let javid_Birthday = new Date(1995, 07, 23);
// console.log(javid_Birthday);
// console.log("/////////////////////");
// currentDate.setFullYear(2022);
// let milliSecond = currentDate - javid_Birthday;
// let second = milliSecond / 1000;



// let hour = second / 60;
// let day = hour / 24;
// console.log(parseInt(day) + " days. Result of: currentDate - javid_Birthdate");
// //Netice olaraq: Date Object-i cixilsin Date Object-i, result olacaq -> millisecond.

// let javid_Birthday2 = new Date("1995-07-05");
// console.log(javid_Birthday2);

// let urunler = ["Iphone 12", "Iphone 13", "iphone 13 pro"];// Array is a Object.
// console.log(urunler);
// console.log(urunler[0]);
// console.log(urunler[1]);
// console.log(urunler[2]);

// urunler[2] = "iphone 14 pro";
// console.log(urunler);

// console.log(typeof urunler);

// let product1 = [
//     "iphone 14 pro max",
//     3700,
//     ["black", "white", "blue"]
// ];

// console.log(product1);
// console.log(product1[0]);
// console.log(product1[1]);
// console.log(product1[2]);

// console.log(product1[2][0]);
// console.log(product1[2][1]);
// console.log(product1[2][2]);

// console.log(typeof product1);//Object
// console.log(typeof product1[2]);//Object
// console.log(typeof product1[1]);//number

// console.log(product1[2][0]);
// product1[2][0] = "yellow";
// console.log(product1[2][0]);

// let array1 = ["black", "white", "yellow", "blue"];
// let array2 = ["bmw", "mercedes", "ferrari"];
// let array3 = ["Rovshan", "Javid", "Taleh"];
// //conat example
// let result = array1.concat(array2);
//"black", "white", "yellow", "blue", "bmw", "mercedes", "ferrari"
// console.log(result);
// console.log(array1);

//concat() method returns string value, this method gets arrays's values

// result = array1.concat(array2, array3);
// console.log(result);

// result = `${array1.join(" ")} ${array2.join(" ")} ${array3.join(" ")}`;//concatination arrays with 
// // console.log(result);

// let anyArray = ["salam", "necesen", 123, "sagol"];
// // console.log(anyArray);
// anyArray.fill("Goodbye everyone!");
// // console.log(anyArray);
// //Array's method which fill() methods change all elements of Array, changes elemnts of Array.

// let numbers = [1,2,3,4,5];

// function myFunction(number) {
//     return number > 4;
// };

// result = numbers.find(myFunction);
// // console.log(result);

// //find() method - gets Function and this function check Array's values and returns value which being true

// let nums = [20,40,30,50,4,235,34,26];

// function myFunction(num){
//     return num > 40;
// }

// result = nums.find(myFunction);
// // console.log(result);

// let array_1 = [1, 5, 9, 13];
// // console.log(array_1.includes(7));//contains by yourself

// //indexOf()
// let arrayOfString = ["Word1", "Word2", "Word3", "Word4", "Word5", "Word6", "Word7"];
// result = arrayOfString.indexOf("Word6");//5
// // console.log(result);

// let arrayOfNumbers = "Hello, my boddy";
// // console.log(Array.isArray(arrayOfNumbers));//false, because "Hello, my boddy" is not Array
// // is a String.

// let arrayOfNames = ["Rovshan", "Javid", "Taleh", "Abbas"];
// result = arrayOfNames.join("-");//join() method returns String value
// // console.log("Joined: " + result);
// // console.log(arrayOfNames);

// let arrayExample = ["Hello1", "Hello2", "Hello3", "Hello2", "Hello3"];
// // console.log(arrayExample.lastIndexOf("Hello7"));
// // console.log(arrayExample.length);

// function createNewArray() {
//     return "Hello";
// }

// let newArray = arrayExample.map(createNewArray);
// // console.log(newArray);
// // console.log(arrayExample);

// // console.log(typeof arrayOfNames.toString());
// result = arrayOfNames.pop();
// // console.log(result);
// // console.log(arrayOfNames);//pop() - son elementi silir ve sildiyi elementi return edir.

// // console.log("current state of Array: " + arrayOfNames + ", and length of Array: " + arrayOfNames.length);
// // result = arrayOfNames.push("Abbas");
// // console.log("state of adding element to Array: " + arrayOfNames);
// // console.log("new length of Array: " + result);

// // console.log(arrayOfNames);
// // arrayOfNames.reverse();

// let numbers_arr = [1,2,3,4,5,6,7,8,9];
// console.log(numbers_arr);
// result = numbers_arr.shift();
// console.log("deleted element is: " + result);
// console.log(numbers_arr);

// console.log(numbers_arr);
// result = numbers_arr.slice(0, 7);
// console.log(result);
// console.log(numbers_arr);

// numbers_arr.reverse();
// console.log(numbers_arr);
// numbers_arr.sort();
// console.log(numbers_arr);

// let products_name = ["PC", "Monitor", "Mouse", "Keyboard"];
// // console.log(products_name);

// products_name.splice(2, 1);
// console.log(products_name);

// products_name.splice(products_name.length, 0, "Cable", "Notebook");
// console.log(products_name);

// let arr1 = ["Rovshan", "Javid", "Taleh"];
// console.log(arr1);
// result = arr1.splice(0, 1, "Rosh");
// console.log(arr1);
// console.log(result);
// console.log(arr1);

// result = arr1.splice(0, 0);
// console.log(result);

// arr1.splice(0, 0, "Rovshan", "Maharramov");
// console.log(arr1);

// arr1.splice(arr1.length, 0, "Hello");
// console.log(arr1);

// console.log(typeof arr1.toString());

// let arr3 = ["Vazeh", "Liza", "Javid"];
// console.log(arr3.length);

// let newLengthOfArr3 = arr3.unshift("Rovshan");
// console.log(arr3);
// console.log(arr3.length);
// console.log(newLengthOfArr3);

// let anArray3 = ["Value1", "Value2", "Value3"];
// console.log(anArray3);
// console.log(typeof anArray3);//Object
// let valueof_anArray3 = anArray3.valueOf();
// console.log(valueof_anArray3);
// console.log(typeof valueof_anArray3);//Object

//Note: valueOf() methods gets an Array Object's value and return Array Object's value like Ojbect.
//valueOf() method in Array -> returns Object.

// let products = ["Elma", "Armut", "Muz", "Cilek"];
// let sumOfElements = products.length;
// console.log("sum of elements: " + sumOfElements);
// let first_el, second_el;
// first_el = products[0];
// console.log("first element of Array: " + first_el);
// last_el = products[products.length - 1];
// console.log("last element of Array: " + last_el);
// let incEl = products.indexOf("Elma");
// console.log("is Elma an element of Array?: " + (incEl > -1 ? "Yes, Elma is element of Array" 
// : "No, Elma isn't element of Array"));
// console.log("Current length of Array: " + products.length);
// products.splice(products.length, 0, "Kiraz");
// console.log(products);
// console.log(products.length);

// let ogr1 = [
//     "Yigit",
//     "Bilgi",
//     2010,
//     [70,60,80]
// ];

// let ogr2 = [
//     "Ada",
//     "Bilgi",
//     2012,
//     [80,80,90]
// ];

// let ogr3 = [
//     "Ahmet",
//     "Turan",
//     2009,
//     [60,60,70]
// ];

// let ogrenciler = [
//     ogr1,
//     ogr2,
//     ogr3
// ];

// //calculate students age
// let currentYear = new Date().getFullYear();
// let ogr1_age = currentYear - ogrenciler[0][2];
// console.log("Age of the `first` student: " + ogr1_age);
// let ogr2_age = currentYear - ogrenciler[1][2];
// console.log("Age of the `second` student: " + ogr2_age);
// let ogr3_age = currentYear - ogrenciler[2][2];
// console.log("Age of the `third` student: " + ogr3_age);

// //point average of students
// let ogr1_pointaverage, ogr2_pointaverage, ogr3_pointaverage;
// ogr1_pointaverage = ((ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3).toFixed(1);
// console.log("ogr1's point average: " + ogr1_pointaverage);
// ogr2_pointaverage = ((ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3).toFixed(1);
// console.log("ogr2's point average: " + ogr2_pointaverage);
// ogr3_pointaverage = ((ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3).toFixed(1);
// console.log("ogr3's point average: " + ogr3_pointaverage);

//Objects
// let user1 = {
//     "name": "Javid",
//     "surname": "Khalilov",
//     "age": 27,
//     "address": {
//         "city": "Baku",
//         "country": "Azerbaijan",
//         "street": "Narimanov"
//     }
// };
// // console.log( user1 );

// let user2 = {
//     "name": "Rovshan",
//     "surname": "Maharramov",
//     "age": 21,
//     "address": [
//         "Baku", "Azerbaijan", "Narimanov r.", 144
//     ]
// };

// // console.log(user2);

// let user3 = [
//     {
//         "name": "Taleh",
//         "surname": "Taghi",
//         "age": 20,
//         "address": {
//             "city":"Baku",
//             "country": "Azerbaijan",
//             "street": "Nizami k."
//         }
//     },

//     {
//         "name": "Abbas",
//         "surname": "Taghi",
//         "age": 19,
//         "address": {
//             "city":"Baku",
//             "country": "Azerbaijan",
//             "street": "Nizami k."
//         }
//     }
// ];
// console.log( user3 );
// console.log( user3[0].address.city );

// let users = [
//     user1,
//     user2
// ];

// console.log(users[0].surname);//Taleh

// let order_1 = {
//     "order_id": 101,
//     "order_date": "30.12.2022",
//     "payment_method": "credit card",
//     "cargo_address": {
//         "street": "yahya captan",
//         "dictrict": "izmit",
//         "city": "kocaeli"
//     },
//     "products": [
//         {
//             "urun_id": 5,
//             "urun_name": "iphone 13 pro",
//             "urun_url": "http://abc.com/iphone-13-pro",
//             "urun_fiyat": 22000
//         },
//         {
//             "urun_id": 5,
//             "urun_name": "iphone 13 pro max",
//             "urun_url": "http://abc.com/iphone-13-pro-max",
//             "urun_fiyat": 25000
//         }
//     ]
// };

// let order_2 = {
//     "order_id": 102,
//     "order_date": "30.12.2022",
//     "payment_method": "credit card",
//     "cargo_address": {
//         "street": "yahya kaptan",
//         "district": "izmit",
//         "city": "kocaeli"
//     },
//     "products": [
//         {
//             "urun_id": 6,
//             "urun_name": "iphone 13 pro max",
//             "urun_url": "http://abc.com/iphone-13-pro-max",
//             "urun_fiyat": 25000
//         }
//     ]
// };

// let order1_totalPrice = (order_1.products[0].urun_fiyat + order_1.products[1].urun_fiyat) * 1.18;
// let order2_totalPrice = order_2.products[0].urun_fiyat * 1.18;

// let totalPrice_orders = order1_totalPrice + order2_totalPrice;

// console.log("paid for order1: " + order1_totalPrice);
// console.log("paid for order2: " + order2_totalPrice);

// console.log("Amount paid in total for orders: ", totalPrice_orders);

// let orders = [order_1, order_2];
// console.log(orders);

//Loops: for loop(simple), for with in (index) / for with of (value) - foreach
// for(let i = 0; i < 10; i++) {
//     console.log("Hello");
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

//Arrays
// let surnames = ["Maharramov", "Khalilov", "Taghi"];
// for(let i = 0; i < surnames.length; i++) {
//     console.log(surnames[i])
// };

// for(let index in surnames) {//in keyword gets indexs of Array
//     console.log(surnames[index])
// }

// for(let name of surnames) {
//     console.log(name);
// }

// for(let index in surnames) {
//     console.log(index);
// }

// let namesOfCity = ["New York", "Baku", "Ankara", "Istanbul", "Venesuela"];

// for(let index in namesOfCity) {
//     console.log(index);
// }

//Objects
// let user_javid = {
//     "name": "Javid",
//     "surname": "Khalilov",
//     "age": 27
// };

// for(let key in user_javid) {
//     console.log(user_javid[key]);
// };

//Loops example

// let numbers = [1,5,7,15,3,25,12,24];

// for(let num of numbers){
//     console.log(Math.pow(num, 2));
// }

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 5 == 0) {
//         console.log(numbers[i]);
//     }
// }

// let sumOfEvenNums = 0;

// for(let index in numbers) {
//     if(numbers[index] % 2 == 0) {
//         sumOfEvenNums += numbers[index];
//     }
// }

// console.log(sumOfEvenNums);

// let products = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];
// // for(let product of products) {
// //     product = product.toUpperCase();
// //     console.log(product);
// // }

// let toplam = 0;

// for(let product of products) {
//     if(product.includes("samsung")) {
//         toplam++;
//     }
// }
// console.log(toplam);

// let students = [
//     {
//         "name": "Yigit",
//         "surname": "Bilgi",
//         "grades": [60,70,60]
//     },
//     {
//         "name": "Ada",
//         "surname": "Bilgi",
//         "grades": [80,70.80]
//     },
//     {
//         "name": "Cinar",
//         "surname": "Turan",
//         "grades": [10,20,60]
//     }
// ];

// //1.her ogrencinin not ortalamasi
// //2.her ogrencinin basari durumu

// for(let student of students) {

//     let grade_toplam = 0;
//     let ortalama = 0;
//     let grade_adet = 0;

//     for(let grade of student.grades) {
//         grade_toplam += grade;
//         grade_adet++;
//     }

//     ortalama = (grade_toplam / grade_adet);

//     console.log(`${student.name} ${student.surname} isimli ogrencinin not ortalamasi: ${ortalama}.`);

//     if(ortalama >= 50) {
//         console.log("Basarili.");
//     } else {
//         console.log("Basarisiz..");
//     }
// }

//function

// function printHello() {
//     console.log("Hello");
// }

// printHello();

// function calculate(num1, num2) {
//     console.log(num1 + num2);
// }

// calculate(3, 7);
// calculate(3, 4);

// function foo(num1, num2) {
//     return num1 * num2;
// }

// let result1 = foo(3, 3);
// console.log(result1);

// console.log(foo(7, 9));

//function calls function

// let currentYear = new Date().getFullYear();

// function yasHesapla(yil) {
//     return currentYear - yil;
// }

// function emeklilikHesapla(yil, isim) {
//     let yas = yasHesapla(yil);

//     let yil_kaldi = 65 - yas;

//     if(yil_kaldi > 0) {
//         console.log(`${isim}, emekli olmaniza ${yil_kaldi} yil kaldi.`)
//     } else console.log("artik emeklisiniz.");
// }

// emeklilikHesapla(1995, "Javid");

// function repaet(word, num) {
//     for(let i = 0; i < num; i++) {
//         console.log(word);
//     }
// }

// // repaet("Hello", 7);

// function alanCevreHesapla(kisa, uzun) {

//     let alan = kisa * uzun;
//     let cevre = (kisa + uzun) * 2;

//     return `alan: ${alan}, cevre: ${cevre}`;
// }

// let alanVeCevre = alanCevreHesapla(2, 4);
// // console.log(alanVeCevre);
// alanVeCevre = alanCevreHesapla(10, 15);// 150, 50
// // console.log(alanVeCevre);

// let isUsed = true;

// function yaziTura() {

//     if(isUsed) {
//         console.log("0.5 kucuk olanlar -> Yazi, 0.5 buyuk olanlar Tura.");
//     }

//     let randomNum = Math.random();// [0, 1)

//     if(randomNum < 0.5) {
//         console.log(`Yazi : ${randomNum}`);
//     } else console.log(`Tura : ${randomNum}`);

//     isUsed = false;
// }

// yaziTura();
// yaziTura();
// yaziTura();

// function tamBolenleriTap(num) {

//     let tamBolenleri = [];

//     for(let i = 2; i < num; i++) {
//         if(num % i == 0) {
//             tamBolenleri.push(i);
//         }
//     }

//     return tamBolenleri;

// }

// let result = tamBolenleriTap(10);
// console.log(result);//2, 5
// result = tamBolenleriTap(12);
// console.log(result);//2, 3, 4, 6
// result = tamBolenleriTap(20);
// console.log(result);//2, 4, 5, 10
// result = tamBolenleriTap(33);
// console.log(result);//3, 11
// result = tamBolenleriTap(56);
// console.log(result);//2, 4, .. 28
// result = tamBolenleriTap(77);
// console.log(result);//7, 11

// let result;

// function sum() {
//     let toplam = 0;

//     //all functions includes arguments local variable which this local variable is Array Object and this Array Object optimize with parameter list.
//     for(let i = 0; i < arguments.length; i++) {
//         toplam += arguments[i];
//     }

//     return toplam;
// }

// result = sum(2, 5);
// console.log(result);//7

// result = sum(2, 5, 7);
// console.log(result);//14

// result = sum(2, 5, 7, 10);
// console.log(result);//24


// result = sum(2, 5, 7, 14, 28);
// console.log(result);//56

//var, let, const

// let name = "Javid";

// function foo() {
//     let name = "function name"
//     console.log(name);
// }

// foo();

// console.log(name);

// if(true) {
//     let name = "if name"
//     console.log(name);
// }

// function elebele() {
//     const menimAdim = "Rovshan";

/**
 * function icerisinde yaradilan butun variable-lar (var, let, const) hamisi Scope yaradir ve scope-dan colde gorsenmirler.
 */

// }

// console.log(menimAdim);

// if(true) {
//     var menimAdim = "Taleh";

// /**
//  * if, for Block-larinda var type Scope yaratmir, let ve const scope yaradir.
//  */

// }

// console.log(menimAdim);

//== and ===

// let word1 = "123";
// let word2 = 123;

// console.log(word1 == word2);
