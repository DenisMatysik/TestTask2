const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.display = "block";
canvas.style.backgroundColor = "#aa05b21a";
const context = canvas.getContext("2d");
const btnLog = document.querySelector(".log")
let speedVal = 5; // отклонение по клеткам
const figureSize = {
  w:30,
  h:30,
}
const speed = document.querySelector(".speed input")
const boost = document.querySelector(".boost input");

let positionX = 0;
let positionY = 0;
let keyPresses = {};
let arr = [];
let addTime = new Date();
let index=0;
let boostVal=1;



btnLog.addEventListener("click", ()=>{

  let cord = {
    "index": index,
    "addTime": addTime,
    "positionX": positionX,
    "positionY":positionY,
    "speedVal": speedVal,
    "boostVal":boostVal
  }

  arr.push(cord)
  index++;
  console.log(arr);
})

function showCord(index){
  arr.forEach((key,currentIndex)=>{
    if (index === currentIndex){
      console.log(key);
    }
  })
}

function show(){
  console.log(arr);
}

function removeCord(index){
  if (index !== -1){
    arr.splice(index,1)
  }
  console.log(arr)

  // let remArr = arr.filter((f)=>{return f.index !== index})
  // console.log(remArr)
  // arr = remArr;
  // console.log(arr)
}
window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true; // если кнопка нажата - есть анимация
}
window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false; // если кнопка отжата - нет анимации
}

window.requestAnimationFrame(loop)

function clearAnimation(){
    context.clearRect(0, 0, canvas.width, canvas.height)
}

function drawImage(){
  context.fillRect(positionX,positionY, figureSize.w, figureSize.h);
}



function loop(){
    requestAnimationFrame(loop);
    clearAnimation();
    context.fillStyle = "red";
    speed.addEventListener("change", (event)=>{
      speedVal = Number(event.target.value)
    })

    boost.addEventListener("change", (event)=>{
      boostVal = Number(event.target.value)
    })
    

    if (keyPresses.s) {
      moveFigure( 0, speedVal, boostVal)
      drawImage()
      } else if (keyPresses.w) {
        moveFigure( 0, -speedVal, boostVal)
        drawImage()
      } else if (keyPresses.d) {
        moveFigure( speedVal, 0, boostVal);
        drawImage();
      } else if (keyPresses.a) {
        moveFigure( -speedVal, 0, boostVal)
        drawImage()
      } else if (keyPresses.q){
        moveFigure(0,0,boostVal)
        drawImage()
      }
    drawImage()
}

function moveFigure(deltaX, deltaY, a) {
  
  if (positionX + deltaX > 0 && positionX + deltaX + figureSize.w/2 < canvas.width) {
    a = boostVal;
    positionX += deltaX*(a);
    
  }
  if (positionY + deltaY > 0 && positionY + deltaY + figureSize.h/2 < canvas.height) {
    a = boostVal;
    positionY += deltaY*(a);
  }
}