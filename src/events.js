//initializing event handlers for both keydown and click events
$(document).ready(function(){
  $('#input').keydown(function(e) {
    if (e.keyCode === 13) {
      convert();
    }
  });
  $('#button').click(function() {
    convert();
  });
});

//convert function that calls changeMoney to output the desired results
function convert(){
  $("#output").empty();
  var types=["£2", "£1", "50p", "20p", "10p", "5p", "2p", "1p"];
  var coins=changeMoney($("#input").val());
  console.log(changeMoney($("#input").val()));
  if (coins!==null){
    for (var j=0;j<types.length;j++){
     if (coins[types[j]]!==undefined){
       //li element to be added for used coins
       $("#output").append('<li class="list-group-item text-success lead">'+
       types[j]+' coins <span class="text-right pull-right">'+coins[types[j]]+'</span></li>');
     }
     else{
       //li element to be added for unused coins
       $("#output").append('<li class="list-group-item text-warning lead">'+
       types[j]+' coins <span class="pull-right">--</span></li>');
     }
    }
  }
  else{
    //li element for invalid input
    $("#output").append('<li class="list-group-item text-danger lead">invalid input</li>');
  }
  //restore focus on input box even if using the button
  $('#input').focus();
}
