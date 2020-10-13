var RandomInput = [];
var btonG = true;
var btonA = true;
var btonD = true;
function setup() {
    createCanvas(windowWidth, windowHeight);
    GeneratRand(); 
    
 }

function draw() {
    background(25,0,0);
    let h = windowHeight;
    let w = windowWidth;
    
    let w1 = w/2.5;
    let w2 = w/10;
    
    let h1 = h/7.5;
    let h2 = h/13;
    
    let w3 = w2*7.75+w2;
    let h3 = h1*6 + h2;
    
    let h4 = (-(h3-(h/6)));
    let w4 = w/2;
    let h5 = h/6;
    
    strokeWeight(5);//tamano borde linea
    stroke(255);//color lineas bordes
    line(w2, h/6 + 1, w2, h3);//linea
    line(w3, h/6 + 1, w3, h3);
    line(w2, h3, w3, h3);
    fill(0);
    rect(0, 0, w, h/6);
    strokeWeight(0);//borde letra 
    fill(255);//color de letra
    textSize(h/50); 
    for(let x=1;x<=25;x+=2)text((25-x).toString(), w2/2, ((h/6+5))+(((h3-(h/6))/25)*x) );
    textSize(h/35);
    text("Seg. Parcial", w2/2,(h/12));
    textSize(h/60);
    text("Eduardo Benjamin Lucero Schoenfeld", w2/2,(h/7.6));
    strokeWeight(5);
    stroke(255);
    line(w4, 0 , w4, h5);
    line(w4+(w/8), 0 , w4+(w/8), h5);
    line(w4+(w/4), 0 , w4+(w/4), h5);
    line(w4+(w/2.65), 0 , w4+(w/2.65), h5);
    //btn Generar
    if (mouseIsPressed && (mouseX > w4 && mouseX < w4+(w/8) && mouseY > 0 && mouseY < h5)) {
        if(btonG){
            fill(255);
            GeneratRand();
            btonG=false;
        }
      } else {
        btonG=true;
        fill(0);  
      }
    strokeWeight(0);
    rect(w4,1 , w/8-1, h5-3);
    strokeWeight(0);//borde letra 
    fill(255);//color de letra
    textSize(h/50);
    text("GENERAR",
    w4+(w4/60),(h/9.9));
    
    //btn2 Acendente
    if (mouseIsPressed && (mouseX > w4+(w/8) && mouseX < w4+(w/4) && mouseY > 0 && mouseY < h5)) {
        if(btonA){
            fill(255);
            OrList();
            btonA=false;
        }
      } else {
        btonA=true;
        fill(0);  
      }
    strokeWeight(0);
    rect(w4+(w/8)+1,1 , (w/8)-2, h5-3);
    strokeWeight(0);//borde letra 
    fill(255);//color de letra
    textSize(h/50);
    text("Ascendente",
    w4+(w/8)+(w4/60),(h/9.9));
    
    //btn3 Descendente
    if (mouseIsPressed && (mouseX > w4+(w/4) && mouseX < w4+(w/2.65) && mouseY > 0 && mouseY < h5)) {
        if(btonD){
            fill(255);
            OrLInv();
            btonD=false;
        }
      } else {
        btonD=true;
        fill(0);  
      }
    strokeWeight(0);
    rect(w4+(w/4)+1,1 , w/8, h5-3);
    strokeWeight(0);//borde letra 
    fill(255);//color de letra
    textSize(h/50);
    text("Descendente",
    w4+(w/4)+(w4/60),(h/9.9));
    
    
    let y = (RandomInput.length*2);
    let x=0;
    let minm=25;
    let maxm=0;
    for (let inputs of RandomInput) {
        if(minm>inputs)minm=inputs;
        if(maxm<inputs)maxm=inputs;
        do{
            if(x%2==0){
                CUBE_T((w2+10)+(((w3-w2)/y)*x),h3,((w3-w2)/y)-5,h4/(25/inputs),inputs);
                
            }    
            x=x+1;
        }while(!(x%2==0));       
    }
    strokeWeight(0);//borde letra 
    fill(255);//color de letra
    textSize(h/50);
    text(("Min: "+minm.toString() ),
    w4+(w/2.65)+(w4/60),(h/7));
    text(("Max: "+maxm.toString() ),
    w4+(w/2.65)+(w4/60),(h/9));
    
    
}
function GeneratRand(){
    let cantidad = RandomIntr(10);
    RandomInput=[];
    for(let x=0;x<=cantidad;x++){
        RandomInput.push(RandomIntr(26));
    }
}

function RandomIntr(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function CUBE_T(x2,y2,x3,y3,num){
    strokeWeight(2);//tamano borde linea
    stroke(255);
    fill(255,127,0);
    rect(x2, y2, x3, y3);
    strokeWeight(0);//borde letra 
    fill(255);//color de letra
    textSize(windowWidth/35); 
    text(num.toString(), x2+((x3)/4), y2-10);
}
function OrList(){
    for(let k=1;k<RandomInput.length;k++){
        for(let i=0;i<(RandomInput.length-k);i++){
             if (RandomInput[i] > RandomInput[i + 1]) {
                let aux = RandomInput[i];
                RandomInput[i] = RandomInput[i + 1];
                RandomInput[i + 1] = aux;
             }
        }    
    }
}
function OrLInv(){
    for(let k=1;k<RandomInput.length;k++){
        for(let i=0;i<(RandomInput.length-k);i++){
             if (RandomInput[i] < RandomInput[i + 1]) {
                let aux = RandomInput[i];
                RandomInput[i] = RandomInput[i + 1];
                RandomInput[i + 1] = aux;
             }
        }    
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
