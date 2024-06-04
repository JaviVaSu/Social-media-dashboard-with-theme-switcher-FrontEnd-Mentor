$(document).ready(function() {
    let clicks = 0;
    $("#checkbox").click(function(){
        switch(clicks){
            case 0:
                $("#body").css("background-color", "White");
                $(".box-followers").css("background-color", "var(--Light-Grayish-Blue-Card-BG)");
                $(".box-stadistics").css("background-color", "var(--Light-Grayish-Blue-Card-BG)");
                $(".titulo").css("color", "black");
                $(".number-stadistics").css("color", "black");
                $(".number").css("color", "black");
                $(".titulo2").css("color", "black");
                $(".total").css("color", "var(--Dark-Grayish-Blue-Text)");
                $(".mode").css("color", "var(--Dark-Grayish-Blue-Text)");
                $(".nameuser").css("color", "var(--Dark-Grayish-Blue-Text)");
                $(".type").css("color", "var(--Dark-Grayish-Blue-Text)");
                $(".views").css("color", "var(--Dark-Grayish-Blue-Text)");
                clicks = 1;
                break;
            case 1:
                $("#body").css("background-color", "var(--Very-Dark-Blue-BG)");
                $(".box-followers").css("background-color", "var(--Dark-Desaturated-Blue-Card-BG)");
                $(".box-stadistics").css("background-color", "var(--Dark-Desaturated-Blue-Card-BG)");
                $(".titulo").css("color", "var(--White-Text)");
                $(".number-stadistics").css("color", "var(--White-Text)");
                $(".number").css("color", "var(--White-Text)");
                $(".titulo2").css("color", "var(--White-Text)");
                $(".total").css("color", "var(--Desaturated-Blue-Text)");
                $(".mode").css("color", "var(--Desaturated-Blue-Text)");
                $(".nameuser").css("color", "var(--Desaturated-Blue-Text)");
                $(".type").css("color", "var(--Desaturated-Blue-Text)");
                $(".views").css("color", "var(--Desaturated-Blue-Text)");
                clicks = 0;
        }
    });
});