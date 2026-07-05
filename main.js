import BootScene from "./scenes/BootScene.js";
import MenuScene from "./scenes/MenuScene.js";
import NameScene from "./scenes/NameScene.js";
import GameScene from "./scenes/GameScene.js";

const config = {

    type: Phaser.AUTO,

    parent:"game",

    width:1280,

    height:720,

    backgroundColor:"#181818",

    scene:[
        BootScene,
        MenuScene,
        NameScene,
        GameScene
    ]
};

new Phaser.Game(config);