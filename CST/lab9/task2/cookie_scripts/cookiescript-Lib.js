//library
function setCookie(cookieName, cookiValue, expDate) {
    
    if (expDate)
        document.cookie = cookieName + "=" + cookiValue + ";expires=" + expDate;
    else
        document.cookie = cookieName + "=" + cookiValue;

        //error message
    if(arguments.length==0){
        throw "no parameter has been based to function"
    }
    else if(arguments.length==1){
        throw "only one parameter has been based to function "
    }
    else if(arguments.length>3){
        throw "more than one parameter has been based to function"
    }
}


   function getCookie(name) {
    
    var cookieArr = document.cookie.split(";");

    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    //error message
    if(arguments.length==0){
        throw "no parameter has been based to function"
    }
    else if(arguments.length>1){
        throw "more than one parameter has been based to function"
    }
    // Return null if not found
    return null;
}



function deleteCookie(cookieName) {
    document.cookie = cookieName + "=; expires=Thu, 01 Jan 1966 00:00:00 UTC; path=/;";

          //error message
        if(arguments.length==0){
            throw "no parameter has been based to function"
        }
       
}




function getAllCookies() {
    const cookies = {};
    const cookieString = document.cookie;

    if (cookieString !== "") {
        const cookieArray = cookieString.split(";");

        for (var i = 0; i < cookieArray.length; i++) {
            const cookie = cookieArray[i].trim();
            const [name, value] = cookie.split("=");
            cookies[name] = decodeURIComponent(value);
        }
    }

    return cookies;
}



function hasCookie(cookieName) {
    const cookieArray = document.cookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        if (cookie.indexOf(cookieName + "=") === 0) {
            return true;
        }
    }

        //error message
    if(arguments.length==0){
        throw "no parameter has been based to function"
    }

    return false;
}



