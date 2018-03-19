$(document).ready(function() {
    $(".popover-wrapper").click(function(e){
        $(".popover-wrapper").hide();
    });
    $(".popover-wrapper").hide();
    $("button.save").click(
        function(e){
            e.preventDefault();
            $(".popover-wrapper").show();
            $(".saved-popup").show();
        }
    );
});
