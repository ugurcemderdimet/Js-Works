/* 
-bir person objesi tanımlansın
obje ad,soyad,yas,favori sayı,favori renk içersin
-obje elemanları ekrana string template literals yöntemiyle basılsın

-fonksiyon yardımıyla ikinci bir person oluşturulsun
parametre olarak ad,soyad,yas,boy,kilo alsın
-fonksiyonun parametreleri içerisinde this yardımıyla tanımlansın
-ekrana fonk ismi ile içindeki parametreler bastırılsın
*/
let person = {name:"Ugur", surname:"Cem", age:24, favNum:7, favColor:"orange"};
console.log(`${person.name} ${person.surname} ${person.age} ${person.favNum} ${person.favColor}`);

function Person(name,surname,age,height,weight){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    return this;
}
const someone = Person("emre","duman","24",182,75)
console.log(someone);