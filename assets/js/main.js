const calculator = document.getElementById('calculator');
let answered = false;

calculator.addEventListener('click', (event) => {
  //Listen for button clicks only
  const clickedBtn = event.target;
  const isButton = clickedBtn.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  //Will need * for multiplying with JS
  if (clickedBtn.textContent==="x"){
    clickedBtn.textContent = "*";
  }

  //Add some spacing to operations
  const operations = ["+", "*", "-", "/"];
  for (const operation of operations){
    if (clickedBtn.textContent.includes(operation)) {
      clickedBtn.textContent = ` ${operation} `;
    }
  }

  //Type what the user clicks, unless it's =, C, or backspace
  const typingBlock = document.getElementById('typing-block');
  if (clickedBtn.textContent !== "=" && clickedBtn.textContent !== "C" && clickedBtn.textContent !== "⌫"){
    //clear the display first if a previous answer is there
    if (answered===true && clickedBtn.classList.contains("num")){
      clearBlock(typingBlock);
    }
    answered=false;
    typingBlock.innerHTML += clickedBtn.textContent;
  }

  //clear the typing block
  if (clickedBtn.textContent==="C"){
    clearBlock(typingBlock);
  }

  //backspace in the typing block
  if (clickedBtn.textContent==="⌫"){
    backspace(typingBlock);
  }

  //solve when clicking =
  if(clickedBtn.textContent==="="){
    calculate(typingBlock.textContent, typingBlock);
    answered= true;
  }
  
})

const calculate = (equation, typingBlock) => {
  //take typed input and make sure numbers are being returned instead of "num"
  const stringToNumArr = equation.split(',').map(el => {
    let n = Number(el);
    return isNaN(n) ? el : n;
  });
  //using math.js to eval
  let answer = math.evaluate(stringToNumArr);
  typingBlock.innerHTML = answer;
};

const clearBlock = (typingBlock) => {
  typingBlock.innerHTML= "";
}

const backspace = (typingBlock) => {
  let result = typingBlock.textContent.slice(0, -1).trim(); // Remove the last character
  typingBlock.innerHTML= result;
}