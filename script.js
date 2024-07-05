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
var DVD = new Cell(1,1,"blue",true,"dvd.png","cellEngine");
var xvel = 1;
var yvel = 1;
function tick()
{
    DVD.drawCell();
    DVD.move(xvel,yvel);
    if (DVD.bx == Columns){
        xvel = -1;
    }
    else if (DVD.bx == 1){
        xvel = 1;
    }
    if (DVD.by == Rows){
        yvel = -1;
    }
    else if (DVD.by == 1){
        yvel = 1;
    }
}
setup()
const ticks = setInterval(tick, 1000 / TicksPerSec)