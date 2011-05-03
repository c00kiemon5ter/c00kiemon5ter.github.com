var lines;
$(function() {
  $.get('/files/comic.list', function(data) {
    lines = data.split("\n"); clickComic();
  });
});
function clickComic() {
  var image = lines[Math.floor(Math.random()*lines.length)].split("\t");
  $(".meta a").attr({href: image.shift()});
  $("#comic").attr({src: image.shift(), title: image});
}
