$(document).ready(function(){
    $('#sname,#sclass,#scountry').focus(function(){
        $(this).css('background-color','lime');
    });
    $('#sname,#sclass,#scountry').blur(function(){
        $(this).css('background-color','');
    });
    $('#scountry').change(function(){
        $(this).css('background-color','pink');
    });
    $('#sname,#sclass').select(function(){
        $(this).css('background-color','yellow');
    });
    $('#sform').submit(function(){
       alert("Form Submited");
    });
});