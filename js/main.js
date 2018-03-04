$(document).ready(function(){
    $(".navtoggle").click(function() {
        toggleQuickNav();
    });
    $( window ).resize(function() {
        toggleQuickNav("opened");
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

});
