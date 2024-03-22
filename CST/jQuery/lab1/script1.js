$(document).ready(function () {
    $("#about").hide();
    $("#gallary").hide();
    $("#services").hide();
    $("#complain").hide();
    $("#final_result").hide();

    $("#ABOUT").click(function () {
        $("#about").show();
        $("#gallary").hide();
        $("#services").hide();
        $("#complain").hide();
        $("#final_result").hide();
    });
    $("#GALLERY").click(function () {
        $("#gallary").show();
        $("#about").hide();
        $("#services").hide();
        $("#complain").hide();
        $("#final_result").hide();
    });
    $("#SERVICES").click(function () {
        $("#services").show();
        $("#about").hide();
        $("#gallary").hide();
        $("#complain").hide();
        $("#final_result").hide();
    });
    $("#COMPLAIN").click(function () {
        $("#complain").show();
        $("#about").hide();
        $("#gallary").hide();
        $("#services").hide();
        $("#final_result").hide();
    });
});

// console.log($("img")[0]);

var gallery=["jQuery/1.jpg","jQuery/2.jpg","jQuery/3.jpg","jQuery/4.jpg","jQuery/5.jpg","jQuery/6.jpg"];
var i=1;
function nextfunc(){
    if(i<gallery.length)
    {  
        $("img")[1].src=gallery[i];
        i++;
        }
       // console.log(i);
}


function prevfunc(){
    if(i==gallery.length)
    {
        i-=1;  //to reduce counter as it increased from perviours for
        $("img")[1].src=gallery[i-1];
        i-=1;
    }
    else if(i>1)
    {
        $("img")[1].src=gallery[i-1];
        i-=1;
    }
    else if(i==1)
    {
        $("img")[1].src=gallery[0];
    }
}


$("#send").on("click", function (event) {
  
    var username = $("#uname").get(0).value;
    var email = $("#email").get(0).value;
    var phone = $("#phone").get(0).value;
    var complain = $("#txtarea").get(0).value;
    $("#final_result").html("<p>Name: " +username +
                        "</p> <p>Email: " + email +
                        "</p> <p> phone:" +phone +
                        " </p> " +"<p> complain :" + complain + "</p>"
    );
    $("#complain").hide();
    $("#about").hide();
    $("#gallary").hide();
    $("#services").hide();
    $("#final_result").show();
  });
  