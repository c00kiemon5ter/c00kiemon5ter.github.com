var lines;
$(function() {
  $.get('/files/comic.list', function(data) {
    lines = data.split("\n"); clickComic();
    $('#comic').click(clickComic);
  });
});
function clickComic() {
  changeImg('/images/load.gif', 'loading');
  var line = lines[Math.floor(Math.random()*lines.length)].split("\t");
  var url = line.shift(), src = line.shift();
  $(document.createElement("img")).attr({src: src}).load(function() {
    $(".meta a").attr({href: url});
    changeImg(src, line);
  });
}
function changeImg(source, title) {
  $("#comic").fadeOut('fast', function() {
    $("#comic").attr({src: source, title: title}).fadeIn();
  });
}
