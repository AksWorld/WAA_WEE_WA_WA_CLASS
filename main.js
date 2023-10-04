Nose_for_ClownX=0;
Nose_for_ClownY=0;
function preload(){
   Nose=loadImage("https://i.postimg.cc/5tpfjCLs/CLOWN-NOSE-removebg-preview.png");
}
function setup(){
    Canvas=createCanvas(300,300);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modeLoaded);
    poseNet.on('pose',gotPoses);
}
function modeLoaded(){
 console.log("Skibidi Skibidi PoseNet Skibidi Dop Initialized");
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        Nose_for_ClownX= results[0].pose.nose.x;
        Nose_for_ClownY= results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}
function draw(){
 image(video,0,0,300,300);

 
 image(Nose,Nose_for_ClownX-15,Nose_for_ClownY-15,30,30)
}
function Operation_Camera_Man(){
    save("Camera_man_filters.png");
}
