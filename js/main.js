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

function gotoAR(ar_index){
    $(".map").fadeOut("fast");
    $( ".ar" ).css( {"visibility": "visible"} ) ;
    $("#lmfade_sub" + ar_index).fadeIn("fast");
    $("#img").hide();
    $("#fade_sub" + ar_index + "img:first").addClass("active").show();
    $('.ar').on('click', function() {
        var $active = $("#fade_sub" + ar_index + "img.active");
        var $next = $active.next("img").length?$active.next("img"):$("#fade_sub" + ar_index + "img:first");
        $active.fadeOut("fast").removeClass("active");
        $next.fadeIn("fast").addClass("active");
        }
    );
}


function centeringContent() {

    var w = $( window ).width() ;
    var h = $( window ).height() ;

    $( "#star_11, #star_21" ).css( {"left": (h*0.48) + "px","top": (h*0.8) + "px"} ) ;
    $( "#star_12, #star_22" ).css( {"left": (h*0.48) + "px","top": (h*0.73) + "px"} ) ;
    $( "#star_13, #star_23" ).css( {"left": (h*0.38) + "px","top": (h*0.58) + "px"} ) ;
    $( "#star_14, #star_24" ).css( {"left": (h*0.62) + "px","top": (h*0.31) + "px"} ) ;

    for (let star_index = 1;star_index < 5;star_index++){
        if ($.cookie('star'+star_index) == 'done'){
            $( "#star_1" + star_index ).css( {"display":"inline"} ) ;
        }else{
            $( "#star_2" + star_index ).css( {"display":"inline"} ) ;
        }
    }
}

function centeringLM(lm_index) {
    var w = $( window ).width() ;
    var h = $( window ).height() ;
    var lmw = $( "#lm" + lm_index ).outerWidth();
    var lmh = $( "#lm" + lm_index ).outerHeight();
    $( "#lm" + lm_index ).css( {"left": ((w - lmw)/2) + "px","top": ((h - lmh)/2) + "px"} ) ;
}

$( window ).resize( centeringContent ) ;