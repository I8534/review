// 프로미스는 무조건 이 형식이다.

const myPormise = new Promise(function (resolve, reject) {
  if (true) {
    resolve('성공');
    // resolve의 역할은 then 안에 뭘 넣을지 결정해주는 것이다. 실제 실행시켜보면 성공 이라고 뜬다.
  } else {
    reject('실패');
  }
});

myPormise.then().then().catch();

// then은 성공했을 때,  catch는 실패했을 때 ()안에는 주로 함수가 들어간다. 덴이 여러개 들어갈 수 있는데 되면 첫번째 덴 그리고 잘 되면 다시 두번째 덴 실행

myPormise.then(function(a) {
  console.log(a);
}).catch(function(a) {
  console.log(a);
});




function buy(item, price, quantity) {
  return new Promise(function(resolve,reject){
    console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
    console.log("계산이 필요합니다.");
    setTimeout(function(){
    const total = price * quantity;
    resolve(total);
   }, 1000);
   reject('계산할 수 없습니다.');
  });
}

function pay(total) {
  console.log(total + "원을 지불하였습니다.");
}

buy("고구마", 1000, 5).then(function(a) {
  // a는 resolve(total); 값이다. 그리고 뒤의 then은 이제 앞에서 받은 값을 굳이 쓸 필요없다. 실행되었으니깐
  pay(a)
}).catch(function(err) {
  console.log("err")
});

// const tot = buy("고구마", 1000, 5);
// pay(tot);



