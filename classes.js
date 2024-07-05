class Cell
{
  constructor(x,y,color,addtexture,image,CellType,id)
  //id should only be used with cells of "empty" type
  {
    //bx and by stand for "board x/y" 
    //it stores the cell's x and y values
    //relative to the board not in pixels
    //also bp stands for "board position"
    this.bx = x;
    this.by = y;
    this.x = OutlineSize + (x - 1) * CellWidth + (x - 1) * BorderSize;
    this.y = OutlineSize + (y - 1) * CellHeight + (y - 1) * BorderSize;
    this.bp = x * 1 + (y - 1) * Columns;
    if (addtexture)
    {
      this.useTexture = true;
      this.texture = image;
    }
    else{
      this.useTexture = false;
    }
    if (CellType != "empty")
    {
    this.color = color;
    this.CellType = CellType;
    }
    else 
    {
      this.color = BackgroundColor;
      this.CellType = "empty";
      this.id = id;
    }
  }
  drawCell()
  {
    if (!this.useTexture)
    {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,CellWidth,CellHeight);
  }
  else{
    let img = document.createElement("img");
    img.src = this.texture;
    ctx.drawImage(img,this.x,this.y);
  }
  }
  move(x,y)
  {
    if (this.bx + x <= Columns && this.bx + x != 0 && this.by + y <= Rows && this.by + y != 0)
    {
    let ocolor = this.color;
    let otcolor = this.textColor;
    ctx.fillStyle = BackgroundColor;
    ctx.fillRect(this.x,this.y,CellWidth,CellHeight);
    this.color = ocolor;
    this.textColor = otcolor;
    this.bx += x;
    this.by += y;
    this.bp += x * 1 + y * Columns;
    this.x = OutlineSize + (this.bx - 1) * CellWidth + (this.bx - 1) * BorderSize;
    this.y = OutlineSize + (this.by - 1) * CellHeight + (this.by - 1) * BorderSize;
    this.drawCell();
    }
  }
    tp(x,y)
    {
      let ocolor = this.color;
      this.color = BackgroundColor;
      this.drawCell();
      this.color = ocolor;
      this.bx = x;
      this.by = y;
      this.bp = x * 1 + (y - 1) * Columns;
      this.x = OutlineSize + (this.bx - 1) * CellWidth + (this.bx - 1) * BorderSize;
      this.y = OutlineSize + (this.by - 1) * CellHeight + (this.by - 1) * BorderSize;
      this.drawCell();
    }
    changetype(to)
    {
      this.type = to;
    }
  }
function setup()
{
    let i = OutlineSize + CellWidth;
    let a = 1;
    let x = 1;
    let y = 1;
    ctx.fillStyle = OutlineColor;
    ctx.fillRect(0,0,CanvasWidth, CanvasHeight);
    ctx.fillStyle = BackgroundColor;
    ctx.fillRect(OutlineSize, OutlineSize, CanvasWidth - OutlineSize * 2,CanvasHeight - (OutlineSize * 2));
    ctx.fillStyle = BorderColor;
    while (a != Columns)
    {
        ctx.fillRect(i, OutlineSize, BorderSize, CanvasHeight - (OutlineSize * 2));
        i += CellWidth + BorderSize;
        a += 1;
    }
        i = OutlineSize + CellHeight;
        a = 1;
        while (a != Rows)
    {
        ctx.fillRect(OutlineSize, i, CanvasWidth - (OutlineSize * 2),BorderSize);
        i += CellHeight + BorderSize;
        a += 1;
    }
    i = 1;
    while (i != SpacesOnGrid + 1)
    {
      Board[i] = new Cell(x,y,BackgroundColor,i,"white","empty",i);
      Board[i].drawCell();
      if (dev)
      {
      Board[i].drawText();
      }
      if (x == Columns)
      {
        x = 1;
        y += 1;
      }
      else 
      {
        x += 1;
      }
      i += 1;
      
    }
}