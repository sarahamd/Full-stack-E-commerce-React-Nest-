var myModule = require("./module") ;// class myFightTikects

var Tikect1= new myModule.myFightTikects(); //instance of myModule.myFightTikects

Tikect1.AddItem(10,100,"alex","10:15 pm"); //{}
Tikect1.AddItem(110,1100,"cairo","12:15 am");//{}
Tikect1.Display();//[{},{}]

Tikect1.getInfo("SeatNum",1);
Tikect1.getInfo("TarvelDate",2);

Tikect1.UpdateInfo("TarvelDate","11:11pm",1);
Tikect1.Display();

Tikect1.UpdateInfo("TarvelDate","12:11pm",2);
Tikect1.Display();