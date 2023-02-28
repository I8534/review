function buy(item, price, quantity, 콜백함수) {
  console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
  console.log("계산이 필요합니다.");
  setTimeout(function(){
    const total = price * quantity;
    콜백함수();
  }, 1000);
}

function pay(total) {
  console.log(total + "원을 지불하였습니다.");
}

const tot = buy("고구마", 1000, 5, pay);
pay(tot);



