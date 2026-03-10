export class BallGame{
	constructor(id){
		this.id=id;
		this.$ball_game=$('#'+id);
		this.menu=new BallGameMenu(this);
		this.playground =new BallGamePlayground(this);

		this.start();
	}
	start(){

	}
}