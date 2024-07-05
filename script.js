const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "12px Arial";
ctx.textAlign = "center";

const CanvasHeight = 2 * OutlineSize + (Rows - 1) * BorderSize + Rows * CellHeight;
const CanvasWidth = 2 * OutlineSize + (Columns - 1) * BorderSize + Columns * CellWidth;
const SpacesOnGrid = Rows * Columns;
document.getElementById("canvas").width = CanvasWidth;
document.getElementById("canvas").height = CanvasHeight;
var Board = [];
var DVD = new Cell(1,1,"blue",true,"dvd1.png","cellEngine");
var xvel = 1;
var yvel = 1;
function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function tick()
{
    DVD.move(xvel,yvel);
    if (DVD.bx == Columns){
        xvel = -1;
        DVD.texture = "DVD"+RandomInt(1,4)+".png";
    }
    else if (DVD.bx == 1){
        xvel = 1;
        DVD.texture = "DVD"+RandomInt(1,4)+".png";
    }
    if (DVD.by == Rows){
        yvel = -1;
        DVD.texture = "DVD"+RandomInt(1,4)+".png";
    }
    else if (DVD.by == 1){
        yvel = 1;
        DVD.texture = "DVD"+RandomInt(1,4)+".png";
    }
    DVD.drawCell();
}
setup()
const ticks = setInterval(tick, 1000 / TicksPerSec)