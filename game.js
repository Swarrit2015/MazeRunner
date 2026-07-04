const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 960;
canvas.height = 640;

const TILE = 40;

let level = 1;

const player = {
    x: 1,
    y: 1,
    size: 30,
    speed: 0.12,
    color: "#00aaff"
};

const keys = {};

document.addEventListener("keydown",(e)=>{
    keys[e.key]=true;
});

document.addEventListener("keyup",(e)=>{
    keys[e.key]=false;
});

let maze=[
"########################",
"#......................#",
"#.####################.#",
"#......................#",
"#.####################.#",
"#......................#",
"#.####################.#",
"#......................#",
"#.####################.#",
"#......................#",
"#.....................E#",
"########################"
];

function update(){

    let dx=0;
    let dy=0;

    if(keys["w"]||keys["ArrowUp"]) dy=-player.speed;
    if(keys["s"]||keys["ArrowDown"]) dy=player.speed;
    if(keys["a"]||keys["ArrowLeft"]) dx=-player.speed;
    if(keys["d"]||keys["ArrowRight"]) dx=player.speed;

    move(dx,dy);
}

function move(dx,dy){

    let nx=player.x+dx;
    let ny=player.y+dy;

    if(!wall(nx,player.y))
        player.x=nx;

    if(!wall(player.x,ny))
        player.y=ny;
}

function wall(x,y){

    let gx=Math.floor(x);
    let gy=Math.floor(y);

    if(maze[gy][gx]=="#")
        return true;

    return false;
}

function drawMaze(){

    for(let y=0;y<maze.length;y++){

        for(let x=0;x<maze[y].length;x++){

            if(maze[y][x]=="#"){

                ctx.fillStyle="#444";

            }else{

                ctx.fillStyle="#202020";

            }

            ctx.fillRect(
                x*TILE,
                y*TILE,
                TILE,
                TILE
            );

        }

    }

}

function drawPlayer(){

    ctx.fillStyle=player.color;

    ctx.fillRect(
        player.x*TILE+5,
        player.y*TILE+5,
        player.size,
        player.size
    );

}

function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    drawMaze();

    drawPlayer();

}

function gameLoop(){

    update();

    draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();