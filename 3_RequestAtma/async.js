let y = true;
let x = new Promise(function(resolve,reject){
    setTimeout(function (){
        console.log("1 saniye gecti");
        if(y)
            resolve({
                mesaj:'basarili',
                userId:1
            });
        else
            reject({
                mesaj:'basarisiz',
                userId:null
            });
    },1000)
    
});

x.then((obj)=>{

 console.log(obj)
}).catch((error)=>{

    console.log(error.mesaj)
   })