interface IShape{
  getArea():number;
}
interface IRectangle{
  width:number;
  height:number;
}
interface ISquare{
  edge:number
}

class Rectangle implements IRectangle, IShape{
  public width: number;
  public height: number;
  constructor(width:number, height:number){
    this.width = width;
    this.height = height;
  }
  getArea(): number {
      return this.width*this.height;
  }
}

class Square implements ISquare, IShape{
  public edge: number;
  constructor(edge: number){
    this.edge = edge;
  }
  getArea(): number {
      return this.edge*this.edge;
  }
}
