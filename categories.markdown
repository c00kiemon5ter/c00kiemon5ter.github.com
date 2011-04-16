---
layout: default
title: c00kiemon5ter's masterplan
cats:
    - id: foo
      url: /foo/
    - id: music
      url: /music/
    - id: society
      url: /society/
    - id: code
      url: /code/
---
Archive :: categories {#archive}
=====================
{% for cat in page.cats %}
[{{ cat.id }}]({{ cat.url }}){:.category}
-----------------------------
{% for post in site.categories[cat.id] %}
{:.posts} 
* <span>{{ post.date | date_to_string }}</span> &#187; [{{ post.title }}]({{ post.url }})
{% endfor %}
{% endfor %}
