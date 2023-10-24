//This is where you can change the settings for your calendar.

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {

        //Custom Button to add task
        customButtons: {
            FMNewTask: {
                text: '+ Add Task',
                click: 
                    function() { 
                        var focus		= calendar.getDate().toISOString();
                        doThis		= NewTask(focus, 'NewTask');
                    }
                }
            },

      height: '100%',
      expandRows: true,
      slotMinTime: '00:00',
      slotMaxTime: '24:00',
      scrollTime: '06:00:00',
      headerToolbar: {
        left: 'FMNewTask',
        center: 'title',
        right: 'prev,next today'
      },
      initialView: '**VIEW**',
      initialDate: '**DefaultDate**',
      navLinks: false, // can click day/week names to navigate views
      editable: true,
      selectable: true,
      nowIndicator: true,
      weekends:true,
      dayMaxEvents: true, // allow "more" link when too many events
      businessHours: true,
      businessHours: {
            start: '08:00', 				// a start time (8am in this example)
            end: '17:00',				// an end time (5pm in this example)
            dow: [ 0, 1, 2, 3, 4, 5, 6 ]		// days of week. an array of zero-based day of week integers (0=Sunday)
      },

      firstDay: 0,
      timeZone: 'local',
      locale: 'en',					//To change the locale enter the code here.  Examples: en-gb, fr, zh-tw

      events: [
            **EVENTS**
      ],

				eventResize: function( e ) {
					var event	= e.event;
					var id		= event.id;
					var focus	= calendar.getDate().toISOString();
					var start	= event.start.toISOString();
					var end	= event.end.toISOString();
             				var allDay	= event.allDay;
					var params	= [id,start,end,allDay,focus];
					doThis	= UpdateTask(id,start,end,allDay,focus, 'UpdateTask');
				},

				eventDrop: function( e ) {
					var event	= e.event;
					var id		= event.id;
					var focus	= calendar.getDate().toISOString();
					var start	= event.start.toISOString();
					if(!event.end){
						var endDate = event.start;
						var end = endDate.toISOString();
					} else {
						var end = event.end.toISOString();
					}
             				var allDay	= event.allDay;
					doThis	= UpdateTask(id,start,end,allDay,focus, 'UpdateTask');
				},

				eventClick: function( e ) { 
						var event	= e.event;
						var id		= event.id;
						var focus	= calendar.getDate().toISOString();
						doThis	= ShowTask(id,focus, 'ShowTask');
				}

    });

    calendar.render();
  });