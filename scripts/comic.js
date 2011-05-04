var lines;
$(function() {
  $.get('/files/comic.list', function(data) {
    lines = data.split("\n"); clickComic();
    $('#comic').click(clickComic);
  });
});
function clickComic() {
  $("#comic").attr({src: '/images/load.gif', title: 'loading'});
  var line = lines[Math.floor(Math.random()*lines.length)].split("\t");
  var url = line.shift(), src = line.shift();
  $(document.createElement("img")).attr({src: src}).load(function() {
    $("#comic").attr({src: src, title: line});
    $(".meta a").attr({href: url});
  });
}
