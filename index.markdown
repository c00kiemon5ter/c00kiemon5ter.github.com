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

<script type="text/javascript" src="/scripts/comic.js"></script>
![loading](/images/load.gif "loading"){:#comic alt="comic" onclick="clickComic()"}
comic [source]()
{:.meta}
