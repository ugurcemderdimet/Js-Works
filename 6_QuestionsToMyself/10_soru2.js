/*
- 3 tane array tanımlansın (2 string,1 int, 4er elemanlı)
- bu arraylerin 1. elemanları kod ile değiştirilsin
-string arrayler birleştirilip tek array olsun
-int array foreach ile ekrana bastırılsın
-spread operator ile string array ekrana basılsın
-spread ile sınırsız parametre alabilen bir fonksiyon tanımlansın, 5 tane sayı ekrana basılsın

*/

let array1 = ['ugur','emre','murat', 'sena'];
let array2 = ['cem', 'duman', 'can', 'com'];
let array3 = [4,5,6,7];

array1.splice(1,1);
array1.splice(1,0,'cem');
array2.splice(1,1);
array2.splice(1,0,'derdimet');

let merge = array1.concat(array2);

array3.forEach(Element => console.log(Element));

let mergearrays = [...array1,...array2];
console.log(mergearrays);

function sinirsizFunc(...infinity){
    for(const s of infinity)
        console.log(s);
    
}
sinirsizFunc(1,3,5,7,9,2,4,6,8);
