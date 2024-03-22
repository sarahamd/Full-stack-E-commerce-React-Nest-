function reg() {
    var usrname = document.getElementById('usrname').value;
    var age = document.getElementById('age').value;

    var selectedradio=document.querySelector('input[name="gender"]:checked');
    if (selectedradio ) {
      var  selectedvalue= selectedradio.value;
      console.log(selectedvalue);
      console.log(selectedradio);
    } else 
    {
        console.log("no gender selected");
    }

    var color = document.getElementById('ColorSel').value;

    // Set cookies with the user's information
    setCookie('username', usrname);
    setCookie('userage', age);
    setCookie('usergender', selectedvalue);
    setCookie('usercolor', color);

    console.log("Cookies set successfully!");
    location.assign('task1(page2).html');

}