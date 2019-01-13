Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('LL')
  }
});
var posts = new Vue({
  el: '#posts',
  data: function () {
    return {
      posts19: 'not updated',
      posts18: 'not updated',
      posts17: 'not updated',
      posts16: 'not updated'

    }
  },
});
var req = new XMLHttpRequest();
req.responseType = 'json';
req.onreadystatechange = function () {
  var t16 = [];
  var t17 = [];
  var t18 = [];
  var t19 = [];

  if (this.readyState == 4 && this.status == 200) {
    // app.posts = this.response;
    for (var i in this.response) {
      var post = this.response[i];
      var postDate = new Date(post.Date);
      var postYear = postDate.getYear();
      switch (postYear) {
        case 116:
          t16.push(post)
          break;
        case 117:
          t17.push(post)
          break;
        case 118:
          t18.push(post)
          break;
        case 119:
          t19.push(post)
          break;
        default:
        // code block
      }
    }
    if (t16.length > 0) posts.posts16 = t16;
    if (t17.length > 0) posts.posts17 = t17;
    if (t18.length > 0) posts.posts18 = t18;
    if (t19.length > 0) posts.posts19 = t19;
    // console.log(this.response);
  }
};
req.open("GET", "http://api.thomashastings.com/posts", true);
req.send();
