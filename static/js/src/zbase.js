export class BallGame{
	constructor(id,BallOS){
		this.id=id;
		this.$ball_game=$('#'+id);
		this.BallOS=BallOS;
		this.settings=new Settings(this);
		this.menu=new BallGameMenu(this);
		this.playground =new BallGamePlayground(this);

		this.start();
	}
	start(){

	}
}