 function myFunction() {
    var x = document.getElementById("myTopnav");
    x.classList.toggle("responsive");
}
// функция кнопки
function myFunction2() {
    var y = document.getElementById("snackbar");
    y.className = "show";
    setTimeout(function(){y.classList.toggle("show","");
        
    }, 3000);  

}

function fun1() {
    var rtl = document.getElementById("rtl").value;
    var rtr = document.getElementById("rtr").value;
    var rbr = document.getElementById("rbr").value;
    var rbl = document.getElementById("rbl").value;
    var ttl = document.getElementById("ttl").value;
    var ttr = document.getElementById("ttr").value;
    var tbr = document.getElementById("tbr").value;
    var tbl = document.getElementById("tbl").value;

    var block = document.getElementById("block");

    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;
    
    block.style.borderRadius = rtl+"px " +rtr + "px" +rbr +"px "+rbl+"px ";
}