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
            console.log("hello")
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


function centeringModalSyncer() {

    //画面(ウィンドウ)の幅、高さを取得
    var w = $( window ).width() ;
    var h = $( window ).height() ;

    // コンテンツ(#modal-content)の幅、高さを取得
    // jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
    //var cw = $( "#modal-content" ).outerWidth( {margin:true} );
    //var ch = $( "#modal-content" ).outerHeight( {margin:true} );
    var cw = $( "#modal-content" ).outerWidth();
	var ch = $( "#modal-content" ).outerHeight();
	var ccw = $( "#howtopop" ).outerWidth();
	var cch = $( "#howtopop" ).outerHeight();
	var cccw = $( "#passwordconf" ).outerWidth();
    var ccch = $( "#passwordconf" ).outerHeight();

    //センタリングを実行する
    $( "#star_11, #star_21" ).css( {"left": (h*0.48) + "px","top": (h*0.8) + "px"} ) ;
    $( "#star_12, #star_22" ).css( {"left": (h*0.48) + "px","top": (h*0.73) + "px"} ) ;
    $( "#star_13, #star_23" ).css( {"left": (h*0.38) + "px","top": (h*0.58) + "px"} ) ;
    $( "#star_14, #star_24" ).css( {"left": (h*0.62) + "px","top": (h*0.31) + "px"} ) ;
}

$( window ).resize( centeringModalSyncer ) ;