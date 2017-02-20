var pictures = [
    "url(img/r0.jpg)",
    "url(img/r1.jpg)",
    "url(img/r2.jpg)",
    "url(img/r3.jpg)",
    "url(img/r4.jpg)",
    "url(img/r5.jpg)",
    "url(img/r6.jpg)",
    "url(img/r7.jpg)",
    "url(img/r8.jpg)",
    "url(img/r9.jpg)",
    "url(img/r10.jpg)",
    "url(img/r11.jpg)",
    "url(img/r12.jpg)",
    "url(img/r13.jpg)",
];


var visible = [0, 1, 2, 3, 4];
var tmpID = "";
var flag = 1;
var formCollapsed = false;



$(document).ready(function(){


    // HEADER ANIMATION
    $("header").mouseenter(function(){
        $(".header-gradient").stop();
        var strPic = "url(img/sky" + flag + ".jpg)";
        flag = flag < 6 ? flag + 1 : 1;
        $(".header-picture").css("background-image", strPic);
        $(".header-gradient").fadeOut(2000);
    });

    $("header").mouseleave(function(){
        $(".header-picture").stop();
        $(".header-gradient").stop();
        $(".header-gradient").fadeIn("slow");
        $(".header-picture").stop();
        });


    // MENU
    $(".menu__terminal").click(function(){
        $(".toggle").hide();
        var str = $(this).attr('id');
        if (str) {
            tmpID =str.replace("show-", ".");
        } else { tmpID = ".menu3"; }

        $(tmpID).css('display', 'flex');
    });

    $(".dropdown__2").click(function(){
        $(".dropdown-content__level2").css('display', 'block');
    });
    $(".dropdown-content__level2").click(function(){
        $(".dropdown-content__level2").css('display', 'none');
    });


    // MY CAROSEL
    $("#go-left").click(function(){
        for (var i=0; i<5; i++) {
            tmpID = "#pic-" + i;
            if (visible[i] == "13") {
                visible[i] = 0;
            } else {
                visible[i] += 1;
            }
            $(tmpID).css("backgroundImage", pictures[visible[i]]);
        }
    });

    $("#go-right").click(function(){
        for (var i=0; i<5; i++) {
            tmpID = "#pic-" + i;
            if (visible[i] == "0") {
                visible[i] = 13;
            } else {
                visible[i] -= 1;
            }
            $(tmpID).css("backgroundImage", pictures[visible[i]]);
        }
    });

    $(".toucheble").click(function(){
        touched = $(this).attr('id').substr(4,1);
        visible[2] = visible[touched]*1;
        $("#pic-2").css("backgroundImage", pictures[visible[2]]);
        visible[1] = (visible[2] - 1) < 0 ? 13 : visible[2] - 1;
        $("#pic-1").css("backgroundImage", pictures[visible[1]]);
        visible[0] = visible[1] - 1 < 0 ? 13 : visible[1] - 1;
        $("#pic-0").css("backgroundImage", pictures[visible[0]]);
        visible[3] = (visible[2] + 1) > 13 ? 0 : visible[2] + 1;
        $("#pic-3").css("backgroundImage", pictures[visible[3]]);
        visible[4] = visible[3] + 1 > 13 ? 0 : visible[3] + 1;
        $("#pic-4").css("backgroundImage", pictures[visible[4]]);
    });

    $("#form_collapse").click(function(){
        if (formCollapsed == false) {
            $(".form__wrapper").css({
                "height": "10px",
                "width": "70px",
                "border-radius": "3px"
            });
            $(".form__togglable").css({
                "display": "none",
            });
            $("#form_collapse").text("Параметры");
            formCollapsed = true;
        } else {
            $(".form__wrapper").css({
                "height": "180px",
                "width": "200px",
                "border-radius": "10px"
            });
            $(".form__togglable").css({
                "display": "block",
            });
            $("#form_collapse").text("Свернуть");
            formCollapsed = false;
        }


    });

    $(".button-on").click(function(){
        var bgColor = $(".background").val();
        var headerColor = $(".my-select").val();
        $("body").css({ "background-color": bgColor });
        $(".header-gradient").css({
            "background-color": headerColor,
        });
        if($(".cat").attr("checked")) {
            $(".pic1").css({ "display": "inline", });
        } else {
            $(".pic1").css({ "display": "none", });
        }
        if($(".spider").attr("checked")) {
            $(".pic2").css({ "display": "inline", });
        } else {
            $(".pic2").css({ "display": "none", });
        }
    });

    $(".button-default").click(function(){
        $("body").css({ "background-color": "white", });
        $(".header-gradient").css({ "background-color": "#004755", });
        $(".pic1").css({ "display": "none", });
        $(".pic2").css({ "display": "none", });

    });


    jQuery(".niceCheck").mousedown(
        /* при клике на чекбоксе меняем его вид и значение */
        function() {

            changeCheck(jQuery(this));

        });


        jQuery(".niceCheck").each(
            /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
            function() {

                changeCheckStart(jQuery(this));

            });
});




function changeCheck(el)
/*
	функция смены вида и значения чекбокса
	el - span контейнер дял обычного чекбокса
	input - чекбокс
*/
{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -17px");
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");
		input.attr("checked", false)
	}
     return true;
}

function changeCheckStart(el)
/*
	если установлен атрибут checked, меняем вид чекбокса
*/
{
var el = el,
		input = el.find("input").eq(0);
      if(input.attr("checked")) {
		el.css("background-position","0 -17px");
		}
     return true;
}
