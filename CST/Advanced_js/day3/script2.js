var Box=function(width,height,length,material,content){
   //DataDescriptor
   Object.defineProperty(this, "width", {
    value: width,
    });
    //DataDescriptor
    Object.defineProperty(this, "height", {
        value: height,
    });
    //DataDescriptor
    Object.defineProperty(this, "length", {
        value: length,
    });
    //DataDescriptor
    Object.defineProperty(this, "material", {
        value: material,
    });
    //DataDescriptor
    Object.defineProperty(this, "content", {
        value: content,
    });



}

var Books = function(title,NumOfChapters,author,NumOfPages,publisher,NumOfCopies){
    
    //DataDescriptor
   Object.defineProperty(this, "title", {
    value: title,
    });
    //DataDescriptor
    Object.defineProperty(this, "NumOfChapters", {
        value: NumOfChapters,
    });
    //DataDescriptor
    Object.defineProperty(this, "author", {
        value: author,
    });
    //DataDescriptor
    Object.defineProperty(this, "NumOfPages", {
        value: NumOfPages,
    });
    //DataDescriptor
    Object.defineProperty(this, "publisher", {
        value: publisher,
    });
    Object.defineProperty(this, "NumOfCopies", {
        value: NumOfCopies,
    });
    Object.defineProperty(Books, "counts", {
        value: counts,
    });


}

var book1=new Books("book1",5,"mariam",100,2001,10);
var box=new Box(100,100,100,"fashion","women");