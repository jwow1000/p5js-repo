function main(p5) {
  // global variables
  const pointAmt = 20;
  const margin = 60;
  const canvasW = 400;
  const canvasH = 400;
  const points = [];

  p5.setup = () => {
    p5.createCanvas(canvasW, canvasH);
    // generate random xy points, array of xy objects
    
    for(let i=0; i<pointAmt; i++) {
      const tempObj = {};
      tempObj.x = p5.random( margin/2, canvasW-(margin/2) );
      tempObj.y = p5.random( margin/2, canvasH-(margin/2) );
      tempObj.c = p5.random( -margin, margin);
      points[i] = tempObj
    }
  }

  p5.draw = () => {
    p5.background(220);
    p5.color(0);
    p5.noFill();
    // draw connected lines
    for(let i=0; i<(pointAmt-1); i++ ) {
      const obj1 = points[i];
      const obj2 = points[i+1];
      p5.curve(obj1.x,
            obj1.y,
            obj1.x + obj1.c,
            obj1.y + obj1.c,
            obj2.x + obj2.c,
            obj2.y + obj2.c,
            obj2.x,
            obj2.y
      )
    }
  }

}

export default main
