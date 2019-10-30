//get username and password
$("#loginBtn").click(function () {
  let username = $( "#login#inputUsername" ).val();
  alert(username);
});

function login(formData) {
  $.ajax({
    type: 'POST',
    url: "https://api.ascode.io/auth",
    data: formData,
    dataType: "json",
    success: function (resultData) { alert("Save Complete") }
  });
}