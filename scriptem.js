

function sumesh(){
  var a = document.getElementById('name').value;
  var b = document.getElementById('email').value;
  var c = document.getElementById('message').value;
  // var o = document.getElementById('form').value;

if( a == "" || b == "" || c == ""){
  alert("all fields are mandatory");
  return false;
}else if( a.length<4){
  alert("name should be greater than 4 letters");
  return false;
}else if(c.length<15){
  alert("messege should contain minimum words");
  return false;
}
else{
  true;
  alert("form submitted")
}

}