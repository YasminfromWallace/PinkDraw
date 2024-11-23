function setup() {
    createCanvas(720, 1080);
   background ("#FFDED9");
  }
  
  function draw() {
    
    if (mouseIsPressed) {
    circle (mouseX,mouseY,10);
      fill ("#FFA9D7")
      stroke ("#FF94B6")
    }
  }
