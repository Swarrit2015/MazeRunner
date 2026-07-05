export default class GameScene extends Phaser.Scene{

    constructor(){

        super("GameScene");

    }

    create(){

        this.cameras.main.setBackgroundColor("#000");

        this.add.text(
            640,
            360,
            "Level 1",
            {
                fontSize:"50px"
            }
        ).setOrigin(0.5);

    }

}