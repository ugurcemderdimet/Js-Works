const fetch = require("fetch").fetchUrl;
let y = true;
let i = 59;
let x = new Promise(function (resolve, reject) {
  let a = fetch(
    "http://loremipsum.dolor/sit/amet",
    function (error, meta, body) {
      if (body === undefined) reject("hata");
      resolve(body.toString());
    }
  );
});

x.then((z) => {
  console.log(z);
}).catch((z) => {
  console.log(z);
});
