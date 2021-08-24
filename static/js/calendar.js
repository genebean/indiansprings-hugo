$(document).ready(function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 

  if(mm<10) 
  {
      mm='0'+mm;
  } 
  today = yyyy+'-'+mm+'-'+dd;

  $('#calendar').fullCalendar({
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,basicWeek,basicDay'
    },
    defaultDate: today,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'School Night Month/Popcorn Sale',
        start: '2021-08-01',
        end: '2021-09-01'
      },
      {
        title: 'District Committee',
        start: '2021-08-05'
      },
      {
        title: 'OA LEC ©',
        start: '2021-08-08'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-12-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2016-12-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-12-11',
        end: '2016-12-13'
      },
      {
        title: 'Meeting',
        start: '2016-12-12T10:30:00',
        end: '2016-12-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2016-12-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2016-12-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2016-12-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2016-12-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2016-12-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'https://google.com/',
        start: '2016-12-28'
      }
    ]
  });
  
});
