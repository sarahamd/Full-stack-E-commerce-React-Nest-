//var value=+prompt("Enter a number");

MyObj={
    data:[{Val:1},{Val:3},{Val:4},{Val:5}],
    PushVal:function(value){
        if(this.data[this.data.length -1].Val<value)
        {
            this.data.push({Val:value});
        }
        else{
            throw "i can't push ,the value is not in the sequence "
        }
    },
    Insert_Val:function(value,index){
        if(value >this.data[index-1].Val && value< this.data[index].Val )
        {
            this.data.splice(index,0,{Val:value});
            //this.data.splice(index,0,this.data[index]={Val:value});
        }
        else{
            throw "i can't insert ,the value is not in the sequence "
        }
    },
    Pop_Val:function(){
        this.data.pop();
    },
    Remove_Val:function(value,index){
        //to check item is not found in the array of object
        var counter_len=0;
        for(var i in this.data){
            if(value!=this.data[i].Val)
            counter_len++;
        }
        if(counter_len==MyObj.data.length){
            throw "data not found"
        }
        else if(value>this.data[index-1].Val && value< this.data[index+1].Val )
        {
            this.data.splice(index,1);
        }
    },
    Dequeue:function(){
        this.data.shift();
    },
    Display:function(){
        this.data;
    }
}
// **************************test the methods *************************
// MyObj.PushVal(9);
// console.log(MyObj.data);

// MyObj.PushVal(9); // to test no dublication 
// console.log(MyObj.data);


// MyObj.PushVal(6); // to ensure no accept value which not in the sequence
// console.log(MyObj.data);

// MyObj.Insert_Val(2,1);
// console.log(MyObj.data);

// MyObj.Insert_Val(2,1);// to test no dublication 
// console.log(MyObj.data);

// MyObj.Pop_Val();
// console.log(MyObj.data);

// MyObj.Remove_Val(6,1);
// console.log(MyObj.data);

// MyObj.Dequeue();
// console.log(MyObj.data);

// MyObj.Display();
// console.log(MyObj.data);


















//usefull tries
// console.log(MyObj.data.length) //4
// console.log(MyObj.data[0]) //{val:1}
//console.log(MyObj.data[0].Val) //1
// MyObj.data.push({Val:6})  // so the data:[{Val:1},{Val:3},{Val:4},{Val:5},{Val:6}]
// console.log(Object.values(MyObj)) //[Array(4) ,f()]

//console.log(Object.values(MyObj.data));
// console.log(MyObj.data);

// for(var i in MyObj.data)
// {
//     Data_value_arr[i] =MyObj.data[i].Val;
// }

// for(var i in MyObj.data)
// { if(value==MyObj.data[i].Val)
//     throw "dublicated value"
// }


// console.log(Data_value_arr);
    


function phone() { 
    this.name="mariam",
 this.show=Function()    
{return this.name
}; 
}
let obj=new phone();
console.log(obj.show())





































