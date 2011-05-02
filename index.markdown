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

![loading]{:#comic alt="comic" onclick="clickComic()"}
comic [source]
{:.meta}
[loading]: /images/load.gif "loading"
[source]: http://www.explodingdog.com "exploding dog"
