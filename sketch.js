function setup() {
    createCanvas(400, 400);
     background("black");
  
  }
  
  function draw() {
  
  
    stroke("cyan");
    fill("blue");
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 50, 80);
    }
  }