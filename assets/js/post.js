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

$.ajax('https://api.ascode.io/post/' + postID,   // request url
  {
    success: function (data, status, xhr) {
      var t16 = [];
      var t17 = [];
      var t18 = [];
      var t19 = [];
      console.log(data);
      post.post = data;
    }
  });