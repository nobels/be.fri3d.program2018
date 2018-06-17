$(document).ready(function(){    

    
    function sort_li(a, b){
        var roll = Math.floor(Math.random() * Math.floor(2));
        return 1 == roll ? 1 : -1;    
    }

    function shuffle_blocks() {
        $(".teaser-blocks li").sort(sort_li) // sort elements
    .appendTo('.teaser-blocks'); // append again to the list
    // sort function callback
        $(".teaser-blocks li").removeClass("unsorted");
    }

    shuffle_blocks();

    $(".shuffle_blocks").click(function(){
        shuffle_blocks();
    });

});