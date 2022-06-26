function preload() {
	world_start = loadSound("world_start.wav");
	character_jump_sound = loadSound("jump.wav");
	coin_collect_sound = loadSound("coin.wav");
	gameover_sound = loadSound("gameover.wav");
	kick_sound = loadSound("kick.wav");
	mario_die_sound = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(650,300);
	video.parent('console');

	poseNet = ml5.poseNet(video, modalLoaded);
	poseNet.on('pose', gotPoses);

	instializeInSetup(mario);
}

function modalLoaded() {
	console.log("PoseNet is loaded");
}


function gotPoses(results) {
	if(results.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

	}

}



function draw() {
	game()
}






