//get username and password
$("#loginBtn").click(function () {
  let username = $( "#inputUsername" ).val();
  let password = $( "#inputPassword" ).val();
  let loginObj = '{ "Username": "'+username+'", "Password": "'+password+'" }';
  console.log(loginObj);
  login(loginObj);
});

function login(formData) {
  $.ajax({
    type: 'POST',
    url: "https://api.ascode.io/auth",
    data: formData,
    dataType: "json",
    contentType: "text/plain",
    success: function (data) { console.log(data); },
    failure: function(data) {console.log(data);}
  });
}