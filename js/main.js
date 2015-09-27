var clients = [],
    emailTime = new Date(),
    q1Time = new Date();


$( "#submit" ).click(function() {
  var client = {};
  client.email = $("#email").val();
  client.time = q1Time.getTime() - emailTime.getTime();
  clients.push(client);
console.log(clients);
});

$( "#email" ).keydown(function() {
  emailTime = new Date();
});

$( "#q1" ).change(function() {
  q1Time = new Date();
});
