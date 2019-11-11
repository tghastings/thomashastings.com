var simplemde = new SimpleMDE({
  autosave: {
    enabled: true,
    uniqueId: "HastingsBlog",
    delay: 1000,
  },
  element: document.getElementById("markdown")
});

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

if (getCookie('token') !== "") {
  let gotToken = getCookie('token');
  let gotUsername = getCookie('username')
  getTokenSuccess(gotToken, gotUsername);
  
}

//get username and password
$("#loginBtn").click(function () {
  $("#alert").html("");
  let username = $("#inputUsername").val();
  let password = $("#inputPassword").val();
  let loginObj = '{ "Username": "' + username + '", "Password": "' + password + '" }';
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
    error: function (data) { getTokenError(data.responseText) }
  });
}

function getTokenError(errorMsg) {
  $("#alert").html("<p>Error: " + errorMsg + "</p>");
}

function getTokenSuccess(token, username) {
  setCookie("username", username, 5);
  setCookie("token", token, 5);
  $("#subNavUsername").html(username);
  $("#login").hide();
  $("#adminMenu").show();
  $("#newPost").show();
}


//Get info for new post
$("#SubmitNewPost").click(function () {
  simplemde.togglePreview();
  let token = getCookie('token');
  let author = getCookie('username');
  let title = $("#inputNewPostTitle").val();
  let content = $('.editor-preview').html()
  content = content.trim();
  content = escapeHtml(content);
  let date = moment().format('MMMM D, YYYY');
  let jsonString = '{ "Author": "' + author + '", "Title": "' + title + '", "Date": "' + date + '", "Content": "' + content + '" }';
  simplemde.clearAutosavedValue();
  postNewArticle(jsonString, token);
});


function postNewArticle(formData, token) {
  $.ajax({
    type: 'POST',
    headers: {
      "Authorization": token
    },
    url: "https://api.ascode.io/admin/post/create",
    // url: "http://dev.local:8090/admin/post/create",
    data: formData,
    dataType: "json",
    contentType: "text/plain",
    success: function (data, status, xhr) {
      alert("Message posted!")
    },
    error: function (data) { console.log("Error!") }
  });
}