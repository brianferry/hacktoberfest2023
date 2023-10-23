---
layout: layout-basic.njk
title: Patterns
summaries:
  example: Example Description
---

{# NOTE: all images in this view need to be 340 by 200 px in order to maintain same ratio. #}

{% section %}
  ## Overview
  Patterns compose elements and tokens with content and validation rules to 
  create uniform, accessible experiences.
{% endsection %}

<div class="multi-column--min-400-wide margin-top--10">
{%- for pattern in collections.pattern -%}
  {%- set slug = pattern.fileSlug -%}
  {%- set summary = pattern.description -%}
  {% if not summary %}
    {%- set summary = summaries[slug] -%}
  {% endif %}
  <div class="padding-stacked">
    <a href="{{ pattern.url }}">
      {% example palette="descriptive",
                 width=340,
                 alt=pattern.data.title,
                 src=('/assets/patterns/' + slug + '.png') %}
    </a>
    <a href="{{ pattern.url }}"><h3>{{ pattern.data.title }}</h3></a>
    <p>{{ summary }}</p>
  </div>
{% endfor %}
</div>

{% section %}
  ## Make a request
  To request a new element or if updates need to be made to an existing element, 
  [contact us](mailto:digital-design-system@redhat.com).
{% endsection %}

{% include 'feedback.html' %}
