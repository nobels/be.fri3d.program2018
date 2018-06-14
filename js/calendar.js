---
layout: 'jsfile'
---
$(document).ready(function() {
    $('#calendar').fullCalendar({
        customButtons: {
            day1: {
                text: 'Zaterdag',
                click: function(e) {
                    $(".fc-day2-button").removeClass("fc-state-active");
                    $(".fc-day3-button").removeClass("fc-state-active");
                    $(e.target).addClass("fc-state-active");
                    $('#calendar').fullCalendar('getView');
                    $("#calendar").fullCalendar(
                        'changeView', $('#calendar').fullCalendar('getView').name, '2018-08-18'
                    );
                }
            },
            day2: {
                text: 'Zondag',
                click: function(e) {
                    $(".fc-day1-button").removeClass("fc-state-active");
                    $(".fc-day3-button").removeClass("fc-state-active");
                    $(e.target).addClass("fc-state-active");
                    $('#calendar').fullCalendar('getView');
                    $("#calendar").fullCalendar(
                        'changeView', $('#calendar').fullCalendar('getView').name, '2018-08-19'
                    );
                }
            },
            day3: {
                text: 'Maandag',
                click: function(e) {
                    $(".fc-day1-button").removeClass("fc-state-active");
                    $(".fc-day2-button").removeClass("fc-state-active");
                    $(e.target).addClass("fc-state-active");
                    $('#calendar').fullCalendar('getView');
                    $("#calendar").fullCalendar(
                        'changeView', $('#calendar').fullCalendar('getView').name, '2018-08-20'
                    );
                }
            }
        },
        header: {
            left: 'day1,day2,day3',
            center: 'title',
            right: 'agendaDay listDay'
        },
        allDaySlot: false,
        defaultDate: '2018-08-18',
        defaultView: 'agendaDay',
        minTime: '10:00:00',
        maxTime: '23:00:00',
        locale: 'nl-be',
        height: 'auto',
        groupByResource: true,
        buttonIcons: true, // show the prev/next text
        weekNumbers: false,
        navLinks: true, // can click day/week names to navigate views
        editable: false,
        eventLimit: true, // allow "more" link when too many events
  events: '{{site.baseurl}}/alltracks.json',
  resources: [
    { id: 'main-stage', title: 'Main Stage' },
    { id: 'content', title: 'Content' },
    { id: 'terrein', title: 'Terrein' },
    { id: 'berkenhof', title: 'Berkenhof' },
    { id: 'hardware-hacking-tent', title: 'Hardware Hacking Tent' },
    { id: 'knutselbaar', title: 'KnutselBaar' },
    { id: 'hoofdgebouw-refter', title: 'Hoofdgebouw Refter' },
    { id: 'hoofdgebouw-room-2', title: 'Hoofdgebouw Room 2' },
    { id: 'hoofdgebouw-room-3', title: 'Hoofdgebouw Room 3' },
    { id: 'hoofdgebouw-room-4', title: 'Hoofdgebouw Room 4' },
    { id: 'shelter', title: 'Shelter' },
  ],

        // eventSources: [

        //     // your event source
        //     {
        //         id: 'a',
        //         url: '{{site.baseurl}}/track1.json', // use the `url` property
        //         className: 'track1',
        //         //color: 'yellow',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track2.json', // use the `url` property
        //         className: 'track2',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track3.json', // use the `url` property
        //         className: 'track3',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track4.json', // use the `url` property
        //         className: 'track4',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track5.json', // use the `url` property
        //         className: 'track5',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track6.json', // use the `url` property
        //         className: 'track6',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track7.json', // use the `url` property
        //         className: 'track7',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track8.json', // use the `url` property
        //         className: 'track8',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track9.json', // use the `url` property
        //         className: 'track9',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track10.json', // use the `url` property
        //         className: 'track10',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },
        //     {
        //         url: '{{site.baseurl}}/track11.json', // use the `url` property
        //         className: 'track11',
        //         //color: 'green',    // an option!
        //         textColor: 'black' // an option!
        //     },

        //     // any other sources...

        // ],

        eventAfterAllRender: function() {
            if ( !$(".fc-day2-button").hasClass("fc-state-active") && !$(".fc-day3-button").hasClass("fc-state-active") ) {
                $(".fc-day1-button").addClass("fc-state-active");
            }
        },

        eventClick: function(calEvent, jsEvent, view) {

            $(".calendar-preview .desc").html( he.decode( calEvent.desc ) );
            $(".calendar-preview h2").text( calEvent.title );
            $(".calendar-preview .location a").text( calEvent.location );
            $(".calendar-preview .location a").attr("href","{{site.baseurl}}/locations/"+calEvent.location);
            $(".calendar-preview .type").text(calEvent.type);
            $(".calendar-preview .link").attr("href","{{site.baseurl}}/activities/"+calEvent.name);
            $(".popover-wrapper").show();
            $(".calendar-preview").show();

            $(this).addClass('calevent-selected');

        }
    });

    $(".popover-wrapper").click(function(e) {
        $(".popover-wrapper").hide();

        $(".fc-event").removeClass('calevent-selected');
    });

    $(".popover-wrapper").hide();

/*
    $(".toggletrack").hover(function(e) {
        if ( "visibility_off" != $(this).children(".material-icons").text() ) {
            $(this).children(".material-icons").text("visibility_off");
        } else {
            $(this).children(".material-icons").text("visibility");
        }
    });
*/
    $(".toggletrack").click(function(e) {
        e.preventDefault();
        var trackname = $(this).data('track');
        $(this).toggleClass("visible");
        if ( !$(this).hasClass("visible") ) {
            $("#calendar").fullCalendar('removeEventSource', '{{site.baseurl}}/'+trackname+'.json');
            //console.log($(this).children(".material-icons").text());
            $(this).children(".material-icons").text("visibility_off");
        } else {
            $("#calendar").fullCalendar('addEventSource', {
                url: '{{site.baseurl}}/'+trackname+'.json', // use the `url` property
                //color: 'blue',    // an option!
                className: trackname,
                textColor: 'black' // an option!
            });
            $(this).children(".material-icons").text("visibility");
        }
    });

});
