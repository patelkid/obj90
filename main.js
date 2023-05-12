img="";
img2="";
img3="";
img4="";
img5="";

function preload() {
    img=loadImage("ac.jpeg");
    img2=loadImage("bedroom.jpeg");
    img3=loadImage("fan.jpeg");
    img4=loadImage("kitchen.jpeg");
    img5=loadImage("tv.jpeg");

}

function setup(){
    canvas = createCanvas(650,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("house places",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
}

function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
 }
 
 
 function gotResult(error, results) {
    if(error){
        console.lof(error);
    }
    console.log(results);
 }
 