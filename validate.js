$(document).ready(function(){
    var name="";
    var email="";
    var phone="";
    var subject="";


    $("#invalid-error").hide();
    $("#error-data-first").hide();
    $("#error-data-email").hide();
    $("#error-data-phone").hide();
    $("#error-data-subject").hide();

    $(document).on("focusin","#Name",function(){
        $("#error-data-first").hide();
    });
    $(document).on("focusout","#Name",function(){
        name = $(this).val();
        if(name === ""){
            $("#error-data-first").show();
        }
        else {
            $("#error-data-first").hide();
        }
    });

    
    $(document).on("focusin","#Email",function(){
        $("#error-data-email").hide();
    });
    $(document).on("focusout","#Email",function(){
        email = $(this).val();
        if(email === ""){
            $("#error-data-email").show();
        }
        else {
            $("#error-data-email").hide();
        }
    });

    $(document).on("focusin","#phone",function(){
        $("#error-data-phone").hide();
    });
    $(document).on("focusout","#phone",function(){
        phone = $(this).val();
        if(phone === ""){
            $("#error-data-phone").show();
        }
        else {
            $("#error-data-phone").hide();
        }
    });

    $(document).on("focusin","#subject",function(){
        $("#error-data-subject").hide();
    });
    $(document).on("focusout","#subject",function(){
        subject = $(this).val();
        if(subject === ""){
            $("#error-data-subject").show();
        }
        else {
            $("#error-data-subject").hide();
        }
    });

    $(document).on("keyup","#Email",function(){
        var input = $(this).val();
        var TestEmailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(TestEmailPattern.test(input)){
            $("#invalid-error").hide();
        }
        else {
            $("#invalid-error").show();
        }
    });
    
});

$(document).ready(function(){
    $("#button-register").click(function(){
        alert(" Form Submitted")
    });
});
