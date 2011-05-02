var lines;
$(document).ready(function() {
  $.get('/files/comic.list', function(data) {
    lines = data.split('\n');
    var imgurl = lines[Math.floor(Math.random() * lines.length)].split('\t');
    var imgttl = imgurl[1]; imgurl = imgurl[0];
    $("#comic").prepend($(document.createElement("img")).attr({ src: imgurl, alt: 'comic', title: imgttl}));
  });
});
function clickComic() {
  var imgurl = lines[Math.floor(Math.random() * lines.length)].split('\t');
  var imgttl = imgurl[1]; imgurl = imgurl[0];
  $("#comic img").attr({ src: imgurl, title: imgttl});
}
// vim: nofoldenable ts=2 sw=2
