var lines;
$(function() {
  $.get('/files/comic.list', function(data) {
    lines = data.split("\n"); clickComic();
  });
});
function clickComic() {
  $("#comic").unbind().fadeOut('fast', function() {
    $("#comic").attr({src: '/images/load.gif', title: 'loading'}).fadeIn();
    var line = lines[Math.floor(Math.random()*lines.length)].split("\t");
    var url = line.shift(), src = line.shift();
    $(document.createElement("img")).attr({src: src}).load(function() {
      $("#comic").hide().attr({src: src, title: line}).fadeIn().click(clickComic);
      $(".meta a").attr({href: url});
    });
  });
}
