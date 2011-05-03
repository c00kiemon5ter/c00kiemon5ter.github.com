var lines;
$(function() {
  $.get('/files/comic.list', function(data) {
    lines = data.split("\n"); clickComic();
  });
});
function clickComic() {
  var imgttl = lines[Math.floor(Math.random()*lines.length)].split("\t");
  var comicsrc = imgttl.shift(), imgurl = imgttl.shift();
  $(".meta a").attr({href: comicsrc});
  $("#comic").attr({src: imgurl, title: imgttl});
}
