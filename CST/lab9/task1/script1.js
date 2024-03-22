var img=document.getElementsByTagName("img")[0].onclick=function(){
   
    var copyNode = document.body.getElementsByTagName("img")[0].cloneNode(true);
    document.body.appendChild(copyNode);

    document.getElementById("header").classList.add("c1");  // update old img
    document.getElementById("nav").classList.add("c2");



    //  document.getElementsByTagName("img")[0].remove();
}

