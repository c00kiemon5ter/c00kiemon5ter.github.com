var lines;
var randnum;

$(document).ready(function() {
    $.get('/files/comic.list', function(data) {
        lines = data.split("\n");
        randnum = Math.floor(Math.random() * lines.length);
        $("#comic").prepend(lines[randnum]);
    });
});

function clickComic() {
    randnum = Math.floor(Math.random() * lines.length);
    $("#comic img").replaceWith(lines[randnum]);
}
// vim: nofoldenable
