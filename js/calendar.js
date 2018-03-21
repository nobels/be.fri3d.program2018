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

        eventSources: [

            // your event source
            {
                url: '{{site.baseurl}}/track1.json', // use the `url` property
                //color: 'yellow',    // an option!
                className: 'track1',
                textColor: 'black' // an option!
            },
            {
                url: '{{site.baseurl}}/track2.json', // use the `url` property
                //color: 'green',    // an option!
                className: 'track2',
                textColor: 'black' // an option!
            },
            {
                url: '{{site.baseurl}}/track3.json', // use the `url` property
                //color: 'green',    // an option!
                className: 'track3',
                textColor: 'black' // an option!
            },
            {
                url: '{{site.baseurl}}/track4.json', // use the `url` property
                //color: 'green',    // an option!
                className: 'track4',
                textColor: 'black' // an option!
            },
            {
                url: '{{site.baseurl}}/track5.json', // use the `url` property
                //color: 'green',    // an option!
                className: 'track5',
                textColor: 'black' // an option!
            },
            {
                url: '{{site.baseurl}}/track6.json', // use the `url` property
                //color: 'green',    // an option!
                className: 'track6',
                textColor: 'black' // an option!
            },

            // any other sources...

        ],

        eventAfterAllRender: function() {
            if ( !$(".fc-day2-button").hasClass("fc-state-active") && !$(".fc-day3-button").hasClass("fc-state-active") ) {
                $(".fc-day1-button").addClass("fc-state-active");
            }
        },

        eventClick: function(calEvent, jsEvent, view) {

            $(".calendar-preview .desc").text(calEvent.desc);
            $(".calendar-preview h2").text(calEvent.title);
            $(".calendar-preview .location").text(calEvent.location);
            $(".calendar-preview .type").text(calEvent.type);
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
