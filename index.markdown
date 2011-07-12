---
layout: default
title: c00kiemon5ter's masterplan
---
Archive
=======
{% for post in site.posts %}
* <span>{{ post.date | date_to_string }}</span> &#187; [{{ post.title }}]({{ post.url }})
{:.posts}
{% endfor %}

Projects
--------
* &#187; [Fractal Image Compression][fic]
* &#187; [zipf law for the Greek language][zipf]
{:.posts}

  [fic]: http://c00kiemon5ter.github.com/Fractal-Image-Compression
  [zipf]: http://c00kiemon5ter.github.com/zipf/

<script type="text/javascript" src="/scripts/comic.js"></script>
![loading](/images/load.gif "downloading"){:#comic alt="comic"}
comic [source]()
{:.meta}
