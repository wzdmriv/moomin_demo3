(function(){
    // 設定
    var testTimer;
    var interval =10000; // 切り替わりの間隔（ミリ秒）
    var fade_speed = 500;// フェード処理の早さ（ミリ秒）

    
    var changeImage = function(){
            var $active = $(".fade-img-box img.active");
            var $next = $active.next("img").length?$active.next("img"):$(".fade-img-box img:first");
            $active.fadeOut(fade_speed).removeClass("active");
            $next.fadeIn(fade_speed).addClass("active");
            if($next.attr("src")=="prt6.png"){
                stopTimer();
            }
    }

    function startTimer(){
        $("#img").hide();
        $(".fade-img-box img:first").addClass("active").show();
        testTimer=setInterval(changeImage, interval);
    }
    function stopTimer(){
        clearInterval(testTimer);
    }
    
    $(document).ready(startTimer());
}());

function closeStart(){
    $(".map").fadeIn("fast");
    $(".start").fadeOut("fast");
}

function abountlm(lm_index){
    $(".landmark,#modal-overlay_lm,#lm" + lm_index).fadeIn("fast");
    centeringLM(lm_index);
    $("#modal-overlay_lm").unbind().click(function(){
        deletelm(lm_index);
    });
}

function ifclicked(){
    console.log("hello")
}

function deletelm(lm_index){
    $(".landmark,#modal-overlay_lm,#lm" + lm_index).fadeOut("fast");
}

function gotoAR(){
    $(".map").fadeOut("fast");
    $( ".ar" ).css( {"visibility": "visible"} ) ;
}


function centeringContent() {

    var w = $( window ).width() ;
    var h = $( window ).height() ;

    $( "#star_11, #star_21" ).css( {"left": (h*0.48) + "px","top": (h*0.8) + "px","display":"inline"} ) ;
    $( "#star_12, #star_22" ).css( {"left": (h*0.48) + "px","top": (h*0.73) + "px","display":"inline"} ) ;
    $( "#star_13, #star_23" ).css( {"left": (h*0.38) + "px","top": (h*0.58) + "px","display":"inline"} ) ;
    $( "#star_14, #star_24" ).css( {"left": (h*0.62) + "px","top": (h*0.31) + "px","display":"inline"} ) ;
}

function centeringLM(lm_index) {
    var w = $( window ).width() ;
    var h = $( window ).height() ;
    var lmw = $( "#lm" + lm_index ).outerWidth();
    var lmh = $( "#lm" + lm_index ).outerHeight();
    $( "#lm" + lm_index ).css( {"left": ((w - lmw)/2) + "px","top": ((h - lmh)/2) + "px"} ) ;
}

$( window ).resize( centeringContent ) ;