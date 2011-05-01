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

comic [source]
{:.meta #comic onclick="clickComic()"}
[source]: http://www.explodingdog.com "exploding dog"
