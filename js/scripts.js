$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
  const eventname = $("form#name").val();
  const eventdescription = $("form#description").val();
  const eventdate = $("form#date").val();
  const eventtime = $("form#time").val();
  $("div#confirmbooking").append("<p>Booking Successful.</p>");
  });
});
