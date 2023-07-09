function preload()
{

}

function setup()
{
canvas=createCanvas(550,550);
canvas.position(500,100);
video=createCapture(VIDEO);
video.size(550,550);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet has been intiallized');
}

function draw()
{
background("orange");
textSize(difference);
fill("turquoise")
text('Ilham',50,70)
}

leftWristX=0;
rightWristX=0;
difference=0;   

function gotPoses(results)
{
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
       rightWristX=results[0].pose.rightWrist.x;
       difference=floor(leftWristX-rightWristX);
    }
}