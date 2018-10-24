var asyncAdd = (a, b) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500)
  })
}

asyncAdd(1, 2).then((res) => {
  console.log('First result:', res);
  return asyncAdd(res, 10);
}).then((res) => {
  console.log('Next result should be 13 >>>', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Hey. It worked!');
//     reject('Unable to fulfill promise');
//   }, 2500)
// });
//
// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage);
// });
