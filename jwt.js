$(document).ready(function() {
  $("#generate").click(function(event) {
    event.preventDefault();
    username = $("#username").val();
    var generate = $.post('http://localhost/demo_jwt/server.php?act=generate', { username: username });
    generate.done(function(data) {
      $("#output_generate").html(data);
      $("#output_generate").show();
    });
  });

  $("#check").click(function(event) {
    event.preventDefault();
    jwt = $("#jwt").val();
    var generate = $.post('http://localhost/demo_jwt/server.php?act=check', { payload : jwt });
    generate.done(function(data) {
      $("#output_check").html(data);
      $("#output_check").show();
    });
  });
});