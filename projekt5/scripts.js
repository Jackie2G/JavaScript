$(document).ready(function(){
    $("#nip_malzonka").hide();
    $("#rodzaj").hide();
    $("#rodzaj1").hide();
    $(".dane_malzonka").hide();
    $("#b1").click(function(){
        $("#nip_malzonka").show();
    });
    $("#b2").click(function(){
        $("input").each(function() {
            var element = $(this);
            if (element.val() == "") {
                $(this).css({"border" : "2px solid red"})
            }
            else{
                $(this).css({"border" : "2px solid green"})
            }
        });
    });
    $(".korekta").change(function(){
        $("#rodzaj").show();
        $("#rodzaj1").show();
    });
    $("#b3").click(function(){
        $(".dane_malzonka").show();
        $(".dane_malzonka").animate({width: "1100px", height: "1000px"});
    });
    $("#b4").click(function(){
        $("#kraj1").val($("#kraj").val());
        $("#woj1").val($("#woj").val());
        $("#pow1").val($("#pow").val());
        $("#gmin1").val($("#gmin").val());
        $("#ul1").val($("#ul").val());
        $("#nrd1").val($("#nrd").val());
        $("#nrl1").val($("#nrl").val());
        $("#miej1").val($("#miej").val());
        $("#kod1").val($("#kod").val());  
    });
});

