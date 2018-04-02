$(document).ready(function(){
    $(".navtoggle").click(function() {
        toggleQuickNav();
    });
    $( window ).resize(function() {
        toggleQuickNav("opened");
    });

    $(".tooltip").hover(function(){
        tooltipShow(this);
    },
    function(){
        tooltipHide(this);
    });

    $(".tooltip").click(function(e){
        e.preventDefault();
        if ( $(this).hasClass('tooltip-on') ){
            tooltipHide(this);
        } else {
            tooltipShow(this);
        }
    });

    /**
    * changes open/closed status of menu on mobile
    * @param navstate optional, current state of nav, either 'opened' or 'closed'. Menu will be set to opposite of provided navstate.
    */
    function toggleQuickNav(navstate) {
        if ( !navstate ) {
            var navstate = $(".quicknav").data("state");
        }
        //console.log(navstate);
        //console.log($(".quicknav .navitems").height());
        switch(navstate) {
            case "opened":
                $(".quicknav").data("state","closed");
                $(".quicknav").removeAttr("style");
                $(".quicknav").removeClass("quicknav-opened");
                break;
            default:
                $(".quicknav").data("state","opened");
                $(".quicknav").css("height",$(".quicknav .navitems").height());
                $(".quicknav").addClass("quicknav-opened");
        }
    }

    function tooltipHide(target) {
        $(".tooltip-content").hide();
        $(target).removeClass("tooltip-on");
    }
    function tooltipShow(target) {
        $("a.tooltip").removeClass("tooltip-on");
        $(target).addClass("tooltip-on");
        $(".tooltip-content").show();
        var mypos = $(target).position();
        var newleft = mypos.left-280;
        var newtop = mypos.top+30;
        if (newleft < 0) {
            newleft = 0;
        }
        $(".tooltip-content p").text( $(target).data("content") );
        $(".tooltip-content").css('left', newleft);
        $(".tooltip-content").css('top', newtop);
        //$(".tooltip-content").css($(target).position());
    }

});
