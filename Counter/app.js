let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// 버튼 누르면 숫자 올라가게
// 아무래도 count += 1; 이걸로 하나하나 늘려야 할 듯

btns[0].addEventListener("click", function() {
  count = count - 1;
  value.innerHTML = count;
  if(count<0) {
    value.style.color = "red";
  } else if (count>0) {
    value.style.color = "green";
  }  
});


btns[1].addEventListener("click", function() {
  count = 0;
  value.innerHTML = count;
  if(count<0) {
    value.style.color = "red";
  } else if (count>0) {
    value.style.color = "green";
  }  
});


btns[2].addEventListener("click", function() {
  count = count + 1;
  value.innerHTML = count;
  if(count<0) {
    value.style.color = "red";
  } else if (count>0) {
    value.style.color = "green";
  }  
});


// 또 다른 변수


btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.contains("decrease")) {
      count--;
    } else if (btn.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.innerHTML = count;
  });
});