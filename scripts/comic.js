var lines;
$(document).ready(function() {
  $.get('/files/comic.list', function(data) {
    lines = data.split('\n'); clickComic();
  });
});
function clickComic() {
  var imgurl = lines[Math.floor(Math.random() * lines.length)].split('\t');
  var imgttl = imgurl[1]; imgurl = imgurl[0];
  $("#comic").attr({ src: imgurl, title: imgttl});
}
// vim: nofoldenable ts=2 sw=2
