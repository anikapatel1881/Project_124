function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(150, 100);

    canvas = createCanvas(500, 350);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){

}

function modelLoaded(){
    console.log("poseNet is AMAZING! Keep trying your best!");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
    }
}