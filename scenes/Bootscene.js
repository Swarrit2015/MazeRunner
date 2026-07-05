export default class BootScene extends Phaser.Scene{

    constructor(){

        super("BootScene");

    }

    preload(){

        // Assets will be loaded here later

    }

    create(){

        this.scene.start("MenuScene");

    }

}