function setup()
{
   canvas=createCanvas(400, 400);
   canvas.position(500,200);

   video=createCapture(VIDEO);
   video.size(450, 400);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on("pose" , gotPoses);
}

function modelLoaded() 
{
   console.log('PoseNet Is Initialized');
}

function draw()
{
  background("#cb95c4")
}

function gotPoses(results)
{
   if (results.length > 0)
   {
      console.log(results);
   } 
}