export default class NameScene extends Phaser.Scene{

    constructor(){

        super("NameScene");

    }

    create(){

        this.cameras.main.setBackgroundColor("#202020");

        this.add.text(
            640,
            180,
            "Runner Name Screen\n(Coming Next)",
            {
                fontSize:"42px",
                align:"center"
            }
        ).setOrigin(0.5);

    }

}