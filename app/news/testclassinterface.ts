class A{
  public y:number ;
  constructor(private x:number){
  this.y = 2000;
  }
  increment():void{
    var f = 1000;
    this.x++;
  }
  public print():void{
    console.log("x is ",this.x);
  }
}
let vv = 100;
let obj:A = new A(vv);
//obj.x = -9999;
obj.print();
interface Q{
  x:number;
  y:number;
  z:string;
}
let a:Q = {x:1200,y:900,z:'Hello'};
console.log("a is ",a);

