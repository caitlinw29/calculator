const calculator = document.getElementById('calculator');

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

  //Type what the user clicks, unless it's =
  const typingBlock = document.getElementById('typing-block');
  if (clickedBtn.textContent !== "="){
    typingBlock.innerHTML += clickedBtn.textContent;
  }

  //clear the typing block
  if (clickedBtn.textContent==="C"){
    clearBlock(typingBlock);
  }

  //solve when clicking =
  if(clickedBtn.textContent==="="){
    calculate(typingBlock.textContent, typingBlock);
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

//clear input in the typing block
// for (const operation of operations){
//   if (!clickedBtn.textContent.includes(operation)){
//     clear(typingBlock);
//   }
// }
const clearBlock = (typingBlock) => {
  typingBlock.innerHTML= "";
}