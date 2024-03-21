
// const promise1 = new Promise((resolve, reject) => {});


// const { error } = require("console");

// const promise2 = new Promise((resolve) => {
//   resolve('resolve()実行');


// }).then(() => {
//   console.log('resolve!!');
// });


// const promise3 = new Promise((resolve, reject) => { reject(); })
//   .then(()  => { console.log('resolveしたよ');})
//   .catch(() => { console.log('rejectしたよ');});

// const promise = new Promise((resolve, reject) => {});

// function asyncFunction(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Async Hello world");
//     }, 16);
//   })
// }

// asyncFunction().then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.error(error);
// });

// asyncFunction().then((value) => {
//   console.log(value);
// }, (error) => {
//   console.error(error);
// });
const SUCCESS_STATUS_CODE = 200;
const REDIRECTION_STATUS_CODE = 300;

function fetchURL(URL){
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", URL, true);
    req.onload = () => {
      if (SUCCESS_STATUS_CODE <= req.status && req.status < REDIRECTION_STATUS_CODE){
        resolve(req.responseText);
      }else{
        reject(new Error(req.statusText));
      }
    };
    req.onerror = () => {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

const URL = "https://httpbin.org/get";
fetchURL(URL).then(function onFuffilled(value){
  console.log(value);
}).catch(function onRejected(error){
  console.log(error);
});