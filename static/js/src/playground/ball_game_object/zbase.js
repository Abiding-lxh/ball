let BALL_GAME_OBJECTS=[];

class BallGameObject{
	constructor(){
		BALL_GAME_OBJECTS.push(this);
		this.has_called_start=false;
		this.timedelta=0;	//当前帧距离上一帧的时间间隔ms
	}

	start(){

	}

	update(){

	}

	on_destroy(){

	}

	destroy(){
		this.on_destroy();
		for(let i=0;i<BALL_GAME_OBJECTS.length;i++){
			if(BALL_GAME_OBJECTS[i]===this){
				BALL_GAME_OBJECTS.splice(i,1);
				break;
			}
		}

	}
}

let last_timestamp;
let BALL_GAME_ANIMATION=function(timestamp){
	for(let i=0;i<BALL_GAME_OBJECTS.length;i++){
		let obj=BALL_GAME_OBJECTS[i];
		if(!obj.has_called_start){
			obj.start();
			obj.has_called_start=true;
		}else{
			obj.timedelta=timestamp-last_timestamp;
			obj.update();
		}	
	}
	last_timestamp=timestamp;
	requestAnimationFrame(BALL_GAME_ANIMATION);
}
requestAnimationFrame(BALL_GAME_ANIMATION);
