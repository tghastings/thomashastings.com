//get username and password
$("#loginBtn").click(function () {
  let username = $( "#inputUsername" ).val();
  let password = $( "#inputPassword" ).val();
  let loginObj = '{ "Username": "'+username+'", "Password": "'+password+'" }';
  console.log(loginObj);
  getToken(loginObj);
});

function getToken(formData) {
  $.ajax({
    type: 'POST',
    url: "https://api.ascode.io/auth",
    // url: "http://dev.local:8090/auth",
    data: formData,
    dataType: "json",
    contentType: "text/plain",
    success: function (data, status, xhr) { 
      setCookie("token", data.Message, 5);
    },
    error: function(data) {getTokenError(data.responseText)}
  });
}

function getTokenError(errorMsg) {
  $( "#alert" ).html("<p>Error: "+errorMsg+"</p>");
}