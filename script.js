console.log('시작');

function func1(x) {
  setTimeout(() => {
    const sum = 10 + 20;
    console.log(sum);
    x();  // 콜백함수 호출
  }, 1000)
}

function func2() {
  const sum = 20 + 30;
  console.log(sum);
}

func1(func2); // 콜백함수 사용 법


console.log('끝');

