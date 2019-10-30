//get username and password
$("#loginBtn").click(function () {
  let username = $( "#inputUsername" ).val();
  let password = $( "#inputPassword" ).val();
  let loginObj = JSON.parse('{ "username": "'+username+'", "password": "'+password+'" }');
  login(loginObj);
});

function login(formData) {
  $.ajax({
    type: 'POST',
    url: "https://api.ascode.io/auth",
    data: formData,
    dataType: "json",
    success: function (data) { console.log(data); }
  });
}