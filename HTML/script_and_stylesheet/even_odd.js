function checkEvenOdd() {
    var num = document.getElementById("numberInput").value;
    var display = document.getElementById("display");
  
    if (num % 2 == 0) {
      display.innerHTML = num + " is Even";
    } else {
      display.innerHTML = num + " is Odd";
    }
  }
  
  document.getElementById("checkButton").onclick = checkEvenOdd;
  