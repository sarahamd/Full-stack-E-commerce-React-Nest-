class myFightTikects{
    Tikects = [];
    AddItem(SeatNum,FlightNum,AirPorts,TarvelDate){
        let NewTikects ={  SeatNum,FlightNum,AirPorts,TarvelDate
            //  SeatNum:SeatNum,
        //                     FlightNum:FlightNum ,
        //                     AirPorts:AirPorts,
        //                     TarvelDate:TarvelDate
                        };
        this.Tikects.push(NewTikects);
    }
    Display(){
        for(let i=0; i<this.Tikects.length;i++){
        // console.log("SeatNum :",this.Tikects[i].SeatNum);
        // console.log("FlightNum :",this.Tikects[i].FlightNum);
        // console.log("AirPorts :",this.Tikects[i].AirPorts);
        // console.log("TarvelDate :",this.Tikects[i].TarvelDate);
        console.log(this.Tikects[i]);
        }
    }
    getInfo(property,wantedObj){
        let i=wantedObj-1;
            for (let key in this.Tikects[i]) {
                    if(key==property){
                        // return  this.Tikects[i][key];   
                        console.log(`${property} : ${this.Tikects[i][key]}` );
                    }
            }
         
    }
    UpdateInfo(property,NewValue,wantedObj){
        let i=wantedObj-1;
            for (let key in this.Tikects[i]) {
                    if(key==property){
                      this.Tikects[i][key]=NewValue;  
                    //   return  this.Tikects[i][key]; 
                    console.log(`updated ${property} : ${this.Tikects[i][key]}` )
                    }
            }     
    }
}

module.exports = {
   myFightTikects
}

