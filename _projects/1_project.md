---
layout: page
title: US baby name popularity over time 
description: Flask Application (python, pandas, matplotlib)
img: assets/img/plot_baby_names_dave.png
importance: 1
category: fun
related_publications: true
---

During March/April of 2020, I suddenly had lots of freetime on the weekends to create my first web application. Using jupyter notebooks, pandas, and matplotlib, I had already been exploring US baby naming popularity trends over time, but I didn't have a way for friends and family to easily explore the data on their own. So, I spent those first few weekends of Covid lockdown learning Flask, built this app and deployed it at pythonanywhere.com

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/baby_names_landing_page.png" title="baby names app - landing page" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/baby_names_results_page.png" title="baby names app - results page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
     On the left, the landing page for the app. On the right, the app once I named is entered.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/plot_baby_names_john.jpg" title="baby names app - example plot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A close up of an example plot generated within the app.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
