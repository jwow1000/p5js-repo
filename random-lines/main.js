pointAmt = 20;
margin = 60;
canvasW = 400;
canvasH = 400;


function setup() {
  createCanvas(canvasW, canvasH);
  // generate random xy points, array of xy objects
  points = [];
  for(i=0; i<pointAmt; i++) {
    tempObj = {};
    tempObj.x = random( margin/2, canvasW-(margin/2) );
    tempObj.y = random( margin/2, canvasH-(margin/2) );
    tempObj.c = random( -margin, margin);
    points[i] = tempObj
  }
}

function draw() {
  background(220);
  color(0);
  noFill();
  // draw connected lines
  for(i=0; i<(pointAmt-1); i++ ) {
    const obj1 = points[i];
    const obj2 = points[i+1];
    curve(obj1.x, 
          obj1.y,
          obj1.x + obj1.c,
          obj1.y + obj1.c,
          obj2.x + obj2.c,
          obj2.y + obj2.c, 
          obj2.x, 
          obj2.y
    );
  }
  
  
}
