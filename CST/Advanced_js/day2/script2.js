 function Rectangle(width,height){
    this.Rect_Width=width;
    this.Rect_Height=height;
    this.area= function(){
        return this.Rect_Height * this.Rect_Width;
    }
    this.preimeter= function(){
        return  2*(this.Rect_Height + this.Rect_Width);
    }
    this.DisplayInfo= function()
    {
        return "the width of rect is "+this.Rect_Width+ 
        "\nthe height of rect is "+this.Rect_Height+
        "\nthe area is "+ this.area()+"\nthe preimeter is "+
         this.preimeter()
    }

 }

 var rect1= new Rectangle(5,2);
 console.log(rect1.DisplayInfo());  //execute 
 //console.log(rect1.DisplayInfo);   //function itself  
 //function itself 
 // this.DisplayInfo= function()
    // {
    //     return "the width of rect is "+this.Rect_Width+ 
    //     "\nthe height of rect is "+this.Rect_Height+
    //     "\nthe area is "+ this.area()+"\nthe preimeter is "+
    //      this.preimeter()
    // }
 //console.log(rect1.area());  //10