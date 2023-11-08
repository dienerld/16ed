async function hello() {
  // return 'hello' after 5sec
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("hello");
  return 10;
}

// console.log("antes chamada função");
// let num = 0;
// hello().then((res) => {
//   console.log("depois chamada função dentro then");
//   num = res;
// });
// console.log("depois chamada função fora then");
// console.log("num ->", num);

async function start() {
  console.log("-----------------");
  console.log("antes chamada função");
  const num = await hello();

  console.log("depois chamada função fora then");
  console.log("num ->", num);
}

start()
