$(document).ready(function(){
    $(".activities-list li").sort(sort_li) // sort elements
                  .appendTo('.activities-list'); // append again to the list
    // sort function callback
    function sort_li(a, b){
        return ($(b).data('starttime')) < ($(a).data('starttime')) ? 1 : -1;    
    }
});