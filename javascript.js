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



