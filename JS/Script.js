/*
"JQUERY"
$(Elemento).Metodo o accion()
*/

$(document).ready(function(){
 Listo();
});

function Listo(){
    //Se solicita indicando que es una clase
    $(".hamb").click(function(e){
        e.preventDefault()
        $("header .container nav").toggleClass('open')
        $(".hamb i").toggleClass('fa-xmark')
    });

    $("header .container nav a").click(function(e){
        $("header .container nav").removeClass('open')
        $(".hamb i").removeClass('fa-xmark')
        e.preventDefault();
        let dev = $(this).attr("href");
        $("html,body").animate({
            "scrollTop": $(dev).offset().top - 76
        })
    })
}