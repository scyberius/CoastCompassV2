let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;

  const counterElement1 = document.getElementById("counter1");
  const counterElement2 = document.getElementById("counter2");
  const counterElement3 = document.getElementById("counter3");

  setInterval(() => {
      if (counter1 < 450) {
          counter1++;
          counterElement1.textContent = counter1;
      }
  }, 10); // Decreased interval to 500 milliseconds for faster counting

  setInterval(() => {
      if (counter2 < 500) {
          counter2++;
          counterElement2.textContent = counter2;
      }
  }, 10); // Adjusted interval for the second counter

  setInterval(() => {
      if (counter3 < 30) {
          counter3++;
          counterElement3.textContent = counter3;
      }
  }, 160); // Adjusted interval for the third counter
  
//   window.addEventListener("scroll", function() {
//     let text = document.getElementById("text");
//     let scrollPosition = window.scrollY;
  
//     // Adjust this value based on when you want the text to start becoming invisible
//     let triggerPoint = 50;
  
//     if (scrollPosition > triggerPoint) {
//       text.classList.add("invisible");
//     } else {
//       text.classList.remove("invisible");
//     }
//   });