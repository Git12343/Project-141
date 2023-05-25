song=""
function preload()
{
    song = loadsound("SpinMusic.mp3.ogg")

}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center(600,500);
    video = createCapture(VIDEO);
    video.hide();


}
function draw() {
    image(video,0,0,600,500);
    

}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}
