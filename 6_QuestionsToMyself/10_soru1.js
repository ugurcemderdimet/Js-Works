/*
-açılışta ekranda normal fonksiyon ile "Merhaba ... (ismimiz)" yazdırılsın
-1 string ve 1 integer 1 boş değişken tanımlansın (string olarak rakamla bir sayı tanımlansın)
-bu değişkenlerin türlerinin ne olduğu (1.değişken ..., 2.değişken ..., 3.değişken ... gibi) console basılsın
-girilen integer değişkenin karesi arrow func ile bulunsun ve ekrana basılsın
-string olarak atanan sayı type coercion ile integer dönüştürülsün
-sayıların birbirine eşit olup olmadığı if/else ile kontrol edilsin
-sayıların arasındaki fark 1 ise az, 2 ise ortalama, 3 ise ortalama üstü, 4 ve üstü ise fazla yazılsın(switch/case)
*/

function merhaba(name){
    console.log("Merhaba "+name);
}
merhaba("Ugur");

console.log("******************");

let text = "24";
let number = 20;
let empty = null;
console.log(typeof text);
console.log(typeof number);
console.log(typeof empty);

console.log("******************");

let square = (number) => {
    return number*number;
}
console.log("Karesi: " + square(number));

console.log("******************");

text = parseInt(text);
console.log(text);
console.log(typeof text);

console.log("******************");

if(text==number)
{
    console.log("Sayilar esit");
}else{
    console.log("Sayilar farkli");
}
console.log("******************");
let difference = text - number ;
let difference2 = Math.abs(difference);

console.log("Fark: "+difference2)
switch(difference){
    case 1:
        console.log("Az");
        break;
    case 2:
        console.log("Ortalama");
        break;
    case 3:
        console.log("Ortalama Üstü");
        break;
    default:
        console.log("Fazla");
}

