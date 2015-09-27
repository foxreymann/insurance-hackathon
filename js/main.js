var clients = [],
    emailTime = new Date(),
    q1Time = new Date(),
    fraud = false;


$( "#submit" ).click(function() {
  var client = {};

  function compare(element, index, array) {
    console.log(element);
    console.log(client);
    if (element.email !== client.email) {
      t1 = parseInt(element.time / 50);
      t2 = parseInt(client.time / 50);
console.log(t1,t2);

      if(t1 === t2) {
        fraud = true;
      }
    }
  }

  client.email = $("#email").val();
  client.time = q1Time.getTime() - emailTime.getTime();

  clients.forEach(compare);
  clients.push(client);
console.log(clients);
console.log(fraud);
});

$( "#email" ).keydown(function() {
  emailTime = new Date();
});

$( "#q1" ).change(function() {
  q1Time = new Date();
});
