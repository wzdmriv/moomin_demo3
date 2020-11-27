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
    var fade_speed = 500;
    $(".start").fadeOut(fade_speed);
}

function abountlm(lm_index){
    $(".landmark,#modal-overlay_lm,#lm" + lm_index).fadeIn("fast");
    centeringModalSyncer();
    $("#modal-overlay_lm").unbind().click(function(){
        deletelm();
    });
}

function ifclicked(){
    console.log("hello")
}

function deletelm(){
    $(".landmark,#modal-overlay_lm, #lm1").fadeOut("fast");
}

function gotoAR(){
    $(".map").fadeOut("fast");
    $( ".ar" ).css( {"visibility": "visible"} ) ;
}


function centeringModalSyncer() {

    //画面(ウィンドウ)の幅、高さを取得
    var w = $( window ).width() ;
    var h = $( window ).height() ;

    // コンテンツ(#modal-content)の幅、高さを取得
    // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
    //var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    //var ch = $( "#modal-content" ).outerHeight( {margin:true} );
    var lm1w = $( "#lm1" ).outerWidth();
	var lm1h = $( "#lm1" ).outerHeight();

    //センタリングを実行する
    $( "#star_11, #star_21" ).css( {"left": (h*0.48) + "px","top": (h*0.8) + "px","display":"inline"} ) ;
    $( "#star_12, #star_22" ).css( {"left": (h*0.48) + "px","top": (h*0.73) + "px","display":"inline"} ) ;
    $( "#star_13, #star_23" ).css( {"left": (h*0.38) + "px","top": (h*0.58) + "px","display":"inline"} ) ;
    $( "#star_14, #star_24" ).css( {"left": (h*0.62) + "px","top": (h*0.31) + "px","display":"inline"} ) ;
    $( "#lm1" ).css( {"left": ((w - lm1w)/2) + "px","top": ((h - lm1h)/2) + "px"} ) ;
}

$( window ).resize( centeringModalSyncer ) ;