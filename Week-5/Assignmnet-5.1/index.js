


function addNumbers(...args) {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

function multiply(...args) {
  let mul = 1;
  for (let i = 0; i < arguments.length; i++) {
    mul = mul * arguments[i];
  }
  return mul;
}

async function* doTask1() {
  const x = await addNumbers(4, 5);
  yield await x;
  const y = await addNumbers(4, 5, 6, 7);
  yield await y;
}

const it = doTask1();

it.next().then(({ value, done }) => {
  console.log(value);
});
it.next().then(({ value, done }) => {
  console.log(value);
});

async function* doTask2() {
  const x = await multiply(4, 5);
  yield await x;
  const y = await multiply(1, 2, 3);
  yield await y;
}

const it1 = doTask2();

it1.next().then(({ value, done }) => {
  console.log(value);
});
it1.next().then(({ value, done }) => {
  console.log(value);
});


// ans:
// 9
// 20
// 22
// 6        