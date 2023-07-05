video = "";
function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(480 , 3800);
    canvas.center();
}

function draw() {
    image(video , 0, 0 ,480,380 );
}

function start() {
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    Document.getElementById("status").innerHTML = "status : Detecting objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}