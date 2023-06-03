img = "";
stats = "";
object = [];



function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {

    if(stats !="")
    {
        for (i = 0; i < object.length; i++)
        {
            document.getElementById("stats"),innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
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