 // REVISAR ESTA FUNCIÓN Y RESCATAR VARIABLES
 var cunt_code = "";
 var num = ""
 var digit ="";
 function setCountry(code){
        if(code || code==''){
            var text = jQuery('a[cunt_code="'+code+'"]').html();
            $(".dropdown dt a span").html(text);
        }
    }
    $(document).ready(function() {
        // Esconder alertas y boton
        $('.alert_hide').hide();
        $('.btn-next').hide();
        $(".dropdown img.flag").addClass("flagvisibility");
        $(".dropdown dt a").click(function() {
            $(".dropdown dd ul").toggle();
        });
        $(".dropdown dd ul li a").click(function() {
            var text = $(this).html();
            $(".dropdown dt a span").html(text);
            $(".dropdown dd ul").hide();
            $("#result").html("Selected value is: " + getSelectedValue("country-select"));
        });
        function getSelectedValue(id) {
            return $("#" + id).find("dt a span.value").html();
        }
        $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("dropdown"))
                $(".dropdown dd ul").hide();
        });
        $("#flagSwitcher").click(function() {
            $(".dropdown img.flag").toggleClass("flagvisibility");
        });
        // Para que mostrar el valor del cunt-code en el input
        $('.dropdown li a').click(function(){
            cunt_code = $(this).attr('cunt_code');
            num = $(this).attr('num');
            $('.input-fono').val(cunt_code);
        });
        $(".input-fono").on('keyup', function(){
            $("#borrar").remove();
            digit = $('.input-fono').val();
            // var CelNum = digit + num;
            // calcular el string del numero telefonico total,
            // lo dejas en una variable
            total = parseInt(cunt_code.length) + parseInt(num);
            if( digit.length == total && isNaN(digit) == false){
                $('.alert_hide').hide();
                $('.btn-next').fadeIn('slow');
            } else{
                $('.alert_hide').fadeIn('slow');
                $('.btn-next').hide();
            }
        });
        var CelNum = digit + num;
        $(".btn-next").click(function(){
            $("#borrar").remove();
            // var CelNum = digit + num;
            // guardar el num telefonico al localStorage
            window.localStorage.setItem('Cel_number', CelNum);
            // generar código rándom
            var max = 1000;
            resultado = parseInt(Math.random()*max)
            window.localStorage.setItem('codeRandom', resultado);
            $(".alert_hide1").append('<span class="borrar alert_hide" >Your code is <strong>LAB-'+resultado+'</strong></span>');
        });
        var nameUser = "";
        var lastnameUser = "";
        var emailUser = "";
        // validar que estén correctos según las indicaciones
        $('#nameUser,#lastnameUser,#emailUser').on('keyup',function(){
            nameUser = $('#nameUser').val();
            lastnameUser = $('#lastnameUser').val();
            emailUser = $('#emailUser').val();
            $(".borrar").remove();
            if(nameUser == null || nameUser.length > 30 || /^\s+$/.test(nameUser)){
                $(".name-alert").append('<span class="borrar alert_hide" >Your name is invalid </span>');
                // $(".btn-next2").hide();
            } else if(lastnameUser == null || lastnameUser.length > 30 || /^\s+$/.test(lastnameUser)){
                $(".name-alert").append('<span class="borrar alert_hide" >Your lastname is invalid </span>')
            } else if(emailUser == null || emailUser.length > 50 || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(emailUser) != true){
                $(".name-alert").append('<span class="borrar alert_hide" >Your email is invalid </span>')
            } else{
                $(".btn-next2").fadeIn('slow');
            }
            window.localStorage.setItem('name-user', nameUser);
            window.localStorage.setItem('lastname-user', lastnameUser);
            window.localStorage.setItem('email-user', emailUser);

        });

 });

