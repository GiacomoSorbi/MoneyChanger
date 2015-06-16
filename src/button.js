

function convert(){
  $("#output").empty();
  var types=["£2", "£1", "50p", "20p", "10p", "5p", "2p", "1p"];
  var coins=changeMoney($("#input").val());
  console.log(changeMoney($("#input").val()));
  if (coins!==null){
    for (var j=0;j<types.length;j++){
     if (coins[types[j]]!==undefined){
       $("#output").append('<li class="list-group-item text-success lead">'+
       types[j]+' coins <span class="text-right pull-right">'+coins[types[j]]+'</span></li>');
     }
     else{
       $("#output").append('<li class="list-group-item text-warning lead">'+
       types[j]+' coins <span class="pull-right">--</span></li>');
     }
    }
  }
  else{
    $("#output").append('<li class="list-group-item text-danger lead">invalid input</li>');
  }
}
