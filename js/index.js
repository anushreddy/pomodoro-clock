var init_break = 5, init_session = 25;
var secs = 60;
var ses_mins = init_session;
var break_mins = init_break;


$("#break_down").click(function(){
   --break_mins;
  $("#break").text(break_mins);
});
$("#break_up").click(function(){
   ++break_mins;
  $("#break").text(break_mins);
});
$("#session_down").click(function(){
   --ses_mins;
  $("#session").text(ses_mins);
});
$("#session_up").click(function(){
   ++ses_mins;
  $("#session").text(ses_mins);
});

/* #############################*/
var interval,interval1;
$("#start").click(function(){
  $("#start").prop("disabled",true);
  
   interval = window.setInterval( timer, 1000 ); 
});
secs = 60;
  ses_mins = ses_mins - 1;
  break_mins = break_mins - 1;

function timer(){
    secs--;
    console.log(secs);
    $("#timer_mins").text(ses_mins);
    $("#timer_secs").text(secs);
    if(secs == 0 ){
      secs = 60;
      ses_mins -= 1;
    }
  if(ses_mins < 1){
    window.clearInterval(interval);
    secs = 60;
     interval1 = window.setInterval(break_time,1000);
  } 
  };

function break_time(){
    secs--;
    console.log(secs);
  $("#session_name").text("Break Time");
    $("#timer_mins").text(break_mins);
    $("#timer_secs").text(secs);
    if(secs == 0 ){
      secs = 60;
      break_mins--;
    }
    if(break_mins < 1){
      window.clearInterval(interval1);
      secs = 60;
    interval = window.setInterval( timer, 1000 );
    }
  };


$("#stop").click(function(){
  window.clearInterval(interval);
  window.clearInterval(interval1);
  $("#start").prop("disabled",false);
});

$("#reset").click(function(){
  $("#start").prop("disabled",false);
  ses_mins = 25;
  window.clearInterval(interval);
  window.clearInterval(interval1);
  $("#timer_mins").html(ses_mins);
  $("#timer_secs").html("00");
  $("#session").text(ses_mins);
  
});