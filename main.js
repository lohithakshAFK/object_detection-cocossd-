img = ""
portal = ""

function preload(){
      img = loadImage("dog_cat.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd",loaded);
    document.getElementById("status").innerHTML = "Status : Detecting";
}

function loaded(){
    console.log("cocossd LOADED");
    portal = true;
    object_detector.detect(img,gotResults)
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    noFill();
    stroke("red");
    text("Dog",35,75)
    rect(30,60,350,350)
    fill("red");
    stroke("red")
    noFill();
    text("Cat",305,75);
    rect(300,50,300,350);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}