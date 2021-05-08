const fetch = require("fetch").fetchUrl;
let y = true;
let i = 59;
let x = new Promise(function(resolve,reject){
    let a = fetch("http://13.51.35.141/api/v1/admin/GetDistrictsByProvince?Id=34", function(error,meta,body){
        if(body===undefined)
            reject('hata')
        resolve(body.toString())
    })
});

x.then((z)=>{

 console.log(z)
}).catch((z)=>{

    console.log(z)
   })