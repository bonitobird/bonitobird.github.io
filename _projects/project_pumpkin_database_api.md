---
layout: page
title: Giant Pumpkin Dashboard
description: PostgreSQL Database, Google Maps API, Grafana Dashboard Development
img: assets/img/gpc_top100ag_locations.png
importance: 3
category: data
related_publications: false
---

<a href = "https://gpc1.shinyapps.io/24ww45/"> Giant Pumpkin Commonwealth App </a>

One of my hobbies is growing giant pumpkins. As a data enthusiast, I couldn't wait to take the skills I was learning in class and apply them to my favorite data set. This project led me to learn many new skills: PostgreSQL, pulling data using APIs, and dashboard developmemt

This project is unique from the <a href = "http://localhost:8080/projects/project_pumpkin_shiny_app/"> App </a> in that this time, while using the same scrapped data from <a href = "http://bigpumpkins.com"> bigpumpkins.com </a>, we used the Google Maps API to pull latitude and longitude data which allowed us to plot where the various pumpkins were grown globally. 

Author Donald Langevin published a book "How-To-Grow World Class Giant Pumpkins the All-Organic Way" in 2009 that claimed that the optimal growing location for Atlantic Giant pumpkins is between the 40&deg; and 50&deg; latitude in both the northern and southern hemispheres. In collecting this data, we were able to show that the top 100 heaviest pumpkins ever grown have almost entirely been grown between those two latitudes in the northern hemisphere, but in the southern hemisphere, the largest pumpkins are grown a little farther from the pole (aka in th 30&deg; - 40&deg; latitude range).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gpc_top100ag_locations.png" title="baby names app - landing page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Locations where the top 100 heaviest pumpkins have been grown (as of 2024). The orange band highlights the 40&deg; and 50&deg; latitude band that author Donald Langevin claimed was the optimal growing region for Giant Pumpkins.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/gpc_southernhemi_locations.png" title="baby names app - results page" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Locations where all the Atlantic Giant Pumpkins have been grown in the southern hemisphere. The orange band highlights the -40&deg; and -50&deg; latitude band that author Donald Langevin claimed was the optimal growing region for Giant Pumpkins.
</div>


