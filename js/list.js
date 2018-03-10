var options = {
  valueNames: [ 'act-ttl', 'act-desc', 'act-time', 'act-timestamp', 'act-location', 'act-type' ]
};

var userList = new List('programma', options);
$(".nrfound .count").text(userList.matchingItems.length);

userList.on('updated',function(){
    $(".nrfound .count").text(userList.matchingItems.length);
    if (0 == userList.matchingItems.length) {
        $(".noresults").show();
        $(".programma-tbl").hide();
    } else {
        $(".noresults").hide();
        $(".programma-tbl").show();
    }
});
