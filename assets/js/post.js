Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
});
var post = new Vue({
  el: '#post',
  data: function () {
    return {
      post: 'not updated'
    }
  },
});
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
var postID = getUrlParameter('id');

var req = new XMLHttpRequest();
req.responseType = 'json';
req.onreadystatechange = function () {
  var t16 = [];
  var t17 = [];
  var t18 = [];
  var t19 = [];

  if (this.readyState == 4 && this.status == 200) {
    post.post = this.response;
    console.log(this.response);
  }
};
req.open("GET", "https://api.ascode.io/post/"+postID, true);
req.send();
