export default class MenuScene extends Phaser.Scene{

    constructor(){

        super("MenuScene");

    }

    create(){

        this.cameras.main.setBackgroundColor("#1c1c1c");

        this.add.text(640,120,"MAZE RUNNER",{

            fontSize:"64px",

            color:"#ffffff"

        }).setOrigin(0.5);

        const newGame=this.add.text(640,300,"▶ NEW GAME",{

            fontSize:"34px",

            color:"#00ff88"

        })
        .setOrigin(0.5)
        .setInteractive();

        newGame.on("pointerdown",()=>{

            this.scene.start("NameScene");

        });

    }

}