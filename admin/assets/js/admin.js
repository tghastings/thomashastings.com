//get username and password
$("#loginBtn").click(function () {
  $( "#alert" ).html("");
  let username = $( "#inputUsername" ).val();
  let password = $( "#inputPassword" ).val();
  let loginObj = '{ "Username": "'+username+'", "Password": "'+password+'" }';
  getToken(loginObj, username);
});

function getToken(formData, username) {
  $.ajax({
    type: 'POST',
    url: "https://api.ascode.io/auth",
    // url: "http://dev.local:8090/auth",
    data: formData,
    dataType: "json",
    contentType: "text/plain",
    success: function (data, status, xhr) {
      getTokenSuccess(data.Message, username)
    },
    error: function(data) {getTokenError(data.responseText)}
  });
}

function getTokenError(errorMsg) {
  $( "#alert" ).html("<p>Error: "+errorMsg+"</p>");
}

function getTokenSuccess(token, username) {
  setCookie("username", username, 5);
  setCookie("token", token, 5);
  $("#login").hide();
}