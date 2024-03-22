class Shape {
  
    constructor(width,height){
        // to be abstract class
        if(this.constructor === Shape){
            throw "creating instant from shape is not allowed";
        }else{
            this.width=width,
            this.height=height
            }

 }
}

class Rectangle extends Shape{
    constructor(width,height){
        super(width,height)     
    }
}
Rectangle.prototype.area=function(){
    return this.width*this.height;
}
Rectangle.prototype.perimeter=function(){
    return 2*(this.width+this.height);
}
Rectangle.prototype.toString=function(){
    return ` the width is ${this.width} ,
    \n the height is ${this.height},
    \nthe area is ${this.area()} ,
    \n the perimeter is  ${this.perimeter()} `;
}
var rect = new Rectangle(12,5);

console.log("the info for rect is :"+rect.toString());



/******************/ 
class Square extends Shape{
    constructor(side)  {
        super(side, side); // Pass side as both width and height
        this.side = side;// Initialize the side property in square class
    }
}

Square.prototype.area=function(){
    return this.side*this.side;
}
Square.prototype.perimeter=function(){
    return 4*(this.side);
}
Square.prototype.toString=function(){
    return ` the side is ${this.side} ,
    \nthe area is ${this.area()} 
    ,\nthe perimeter is  ${this.perimeter()} `;
}

var square1 = new Square(12);
console.log("the info for square is:"+square1.toString());


/******************/ 
class Circle extends Shape{
    #pi=3.14; //private
    constructor(radius){
        super(radius,radius) //w,h
        this.radius=radius ;
    }
    //needed to access #pi outside the class
    get Pi() {
        return this.#pi;
    }

}

Circle.prototype.area=function(){
    return 2*this.radius*this.Pi;
    // return 2*this.radius*this.#pi;// error as #pi private member 
}
Circle.prototype.perimeter=function(){
    return this.Pi*this.radius*this.radius;
}
Circle.prototype.toString=function(){
    return `the radius is ${this.radius},
    \nthe area is ${this.area()} ,
    \nthe perimeter is  ${this.perimeter()} `;
}

var Circle1 = new Circle(12);
console.log("the info for Circle is :"+Circle1.toString());






/************Right angle triangle******/ 
class Triangle extends Shape{
   
    constructor(base,height,side3){
        super(base,height) 
        this.base=base,
        // this.height=height,
        this.side3=side3
    }
}

Triangle.prototype.area=function(){
    return .5*this.base*this.height;
    // return 2*this.radius*this.#pi;// error as #pi private member 
}
Triangle.prototype.perimeter=function(){
    return this.base+this.height+this.side3;
}
Triangle.prototype.toString=function(){
    return `the base is ${this.base},\n the height is ${this.height},
    \n the side3 is ${this.side3},\nthe area is ${this.area()} ,
    \nthe perimeter is  ${this.perimeter()} `;
}

var Triangle1 = new Triangle(12,5,4);
console.log("the info for Triangle is :"+Triangle1.toString());


