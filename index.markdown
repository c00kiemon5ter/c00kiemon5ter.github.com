---
layout: default
title: c00kiemon5ter's masterplan
---
<div id="archive" markdown="1">
Archive
=======
{% for post in site.posts %}
{:.posts} 
* <span>{{ post.date | date_to_string }}</span> &#187; [{{ post.title }}]({{ post.url }})
{% endfor %}
</div>
