//get username and password
$("#login").click(function () {
  alert("Handler for .click() called.");
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