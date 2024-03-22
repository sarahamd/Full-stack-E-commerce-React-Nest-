var Sequence= function(start,end,step){
    //DataDescriptor
    Object.defineProperty(this, "start", {
        value: start,
        writable: true,
        configurable:false,
        enumerable:false,
    })
    //DataDescriptor
    Object.defineProperty(this, "step", {
        value: step,
        writable: true,
        configurable:false,
        enumerable:false,
    })
    //DataDescriptor
    Object.defineProperty(this, "end", {
        value: end,
        writable: true,
        configurable:false,
        enumerable:false,
    })
    
    // this.start = start;
    // this.end=end;
    // this.step=step;
//private member
    var data_seq=[];
//private method
    function fill_seq(){
        for (var i = this.start; i <=  this.end; i +=  this.step) {
            data_seq.push(i);    
    }}

    // to be able to call fill_seq "private method" out scope of ctor
    this.fill_seq_EXC=function(){
        return fill_seq_exc();
    }
    // to bind this to instant of sequence ctor
    var fill_seq_exc=fill_seq.bind(this);


    // to get private member "data seq"
    this.get_data_seq=function(){
        return data_seq;
    }

    //set data_seq with [] for new start
    this.set_data_seq=function(new_start,new_end,new_step){
        data_seq=[];
        this.start=new_start;
        this.end=new_end;
        this.step=new_step;
        // fill_seq();
    }


// append => push
    function Append(val){      
        if(val==data_seq[data_seq.length-1]+this.step){
            data_seq.push(val);
        }
        else{
            throw "appended value out of sequence"
        }

    }
     // to be able to call Append "private method" out scope of ctor
     this.Append_EXC=function(val){
        return Append_exc(val);
    }
    // to bind this to instant of sequence ctor
    var Append_exc=Append.bind(this);
    


// preappend => unshift
    function Preappend(val){      
        if(val==data_seq[0]-this.step){
            data_seq.unshift(val);
        }
        else{
            throw "preappended value out of sequence"
        }
    }
     // to be able to call preAppend "private method" out scope of ctor
     this.Preappend_EXC=function(val){
        return Preappend_exc(val);
    }
    // to bind this to instant of sequence ctor
    var Preappend_exc=Preappend.bind(this);



    // pop 
    function pop(){      
        // not give throw if data_seq empty!!!!!!!
        if(data_seq==[]){
            throw "empty data_seq array"
        }
        else{
            data_seq.pop();
        }
    }
     // to be able to call pOP "private method" out scope of ctor
     this.pop_EXC=function(){
        return pop_exc();
    }
    // to bind this to instant of sequence ctor
    var pop_exc=pop.bind(this);




    // dequeue 
    function Dequeue(){      
        // not give throw if data_seq empty!!!!!!!
        if(data_seq==[]){
            throw "empty data_seq array"
        }
        else{
            data_seq.shift();
        }
    }
     // to be able to call Dequeue "private method" out scope of ctor
     this.Dequeue_EXC=function(){
        return Dequeue_exc();
    }
    // to bind this to instant of sequence ctor
    var Dequeue_exc=Dequeue.bind(this);

}
Sequence.prototype.toString = function(){
    console.log("the list is "+ this.get_data_seq()) ;
}

var obj1 = new Sequence(4,16,4);



console.log(obj1.fill_seq_EXC())
console.log(obj1.get_data_seq())
obj1.Append_EXC(16)
obj1.Append_EXC(20)
console.log(obj1.get_data_seq())
obj1.Preappend_EXC(4)
obj1.Preappend_EXC(0)
obj1.Dequeue_EXC()
console.log(obj1.get_data_seq())


//for new sequence
obj1.set_data_seq(2,10,2)
obj1.fill_seq_EXC()
obj1.get_data_seq() //[2, 4, 6, 8, 10]




obj1.toString();
