var ses_mins = 25;
var break_mins = 5;

$("#break_down").click(function() {
  break_mins = parseInt($("#break").html());
  if (break_mins != 1) {
    break_mins -= 1;
    $("#break").html(break_mins);
  }
});

$("#break_up").click(function() {
  break_mins = parseInt($("#break").html());
  ++break_mins;
  $("#break").text(break_mins);
});

$("#session_down").click(function() {
  ses_mins = parseInt($("#session").html());
  if (ses_mins != 0) {
    ses_mins -= 5;
    $("#session").text(ses_mins);
  }
});

$("#session_up").click(function() {
  ses_mins = parseInt($("#session").html());
  ses_mins += 5;
  $("#session").text(ses_mins);
});

/* #############################*/
var interval, interval1;
var secs = 60;
/* #############################*/
$("#start").click(function() {
  $("#start").prop("disabled", true);
  ses_mins -= 1;

  interval = window.setInterval(timer, 1000);
});

function timer() {
  secs--;
  $("#timer_mins").text(ses_mins);
  $("#timer_secs").text(secs);
  if (secs == 0) {
    secs = 60;
    ses_mins -= 1;
    if (ses_mins === 0) {
      window.clearInterval(interval);
      secs = 60;
      break_mins -= 1;
      ses_mins = parseInt($("#session").html());
      $("#session_name").html("Break Time");
      interval1 = window.setInterval(break_time, 1000);
    }
  }

};

function break_time() {
  secs--;
  $("#timer_mins").text(break_mins);
  $("#timer_secs").text(secs);
  if (secs == 0) {
    secs = 60;
    break_mins -= 1;
    if (break_mins === 0) {
      window.clearInterval(interval1);
      secs = 60;
      ses_mins -= 1;
      break_mins = parseInt($("#break").html());
      $("#session_name").html("Session Time");
      interval = window.setInterval(timer, 1000);
    }
  }

};

$("#stop").click(function() {
  window.clearInterval(interval);
  window.clearInterval(interval1);
  $("#start").prop("disabled", false);
});

$("#reset").click(function() {
  $("#start").prop("disabled", false);
  window.clearInterval(interval);
  window.clearInterval(interval1);
  ses_mins = 25;
  break_mins = 5;
  secs = 60;
  $("#timer_mins").html(ses_mins);
  $("#timer_secs").html("00");
  $("#session").text(ses_mins);
  $("#break").text(break_mins);

});

$("#fname").hide();