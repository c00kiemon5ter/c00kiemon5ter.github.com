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

![](){:#comic alt="comic" onclick="clickComic()"}
comic [source]
{:.meta}
[source]: http://www.explodingdog.com "exploding dog"
