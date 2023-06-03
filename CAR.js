img = "";
stats = "";
object = [];

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload() {
    img = loadImage('car.png');
}

function draw() {
image(img, 0, 0, 640, 420);
}

function modelLoaded() {
    console.log("model loaded!");
    stats = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}

function back() {
    onclick
}