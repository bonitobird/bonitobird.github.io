---
layout: page
title: Demographic Analysis of Medication Pricing
description: R, SQL, Machine Learning, AWS, Hypothesis Testing
img: assets/img/capstone_medication_maps_cropped.png
importance: 1
category: data
related_publications: false
---

<a href = "https://wu-msds-capstones.github.io/Medication_Pricing_Demographic_Analysis/"> Demographic Analysis of Medicare Medication Pricing </a>

Escalating pharmaceutical prices in the United States present a significant barrier to healthcare access and exacerbate financial strain on patients. This study investigates geographic and demographic disparities in prescription drug costs by analyzing Medicare Part D plan pricing at the county level. To manage and analyze over 100 GB of complex data, we developed a scalable data engineering pipeline utilizing AWS S3, DuckDB, and the Parquet file format. The pipeline integrates datasets from the Centers for Medicare & Medicaid Services (CMS), the U.S. Census Bureau, and the Food and Drug Administration (FDA). We applied statistical analysis and machine learning techniques to examine how demographic and market factors influence drug pricing. Our findings reveal that the number of available Medicare plans in a county is the most influential predictor of price for the majority of drugs studied, underscoring the impact of market dynamics over direct demographic characteristics. While certain demographic variables, such as median income, education level, and racial composition, showed predictive relevance for specific medications, no single demographic factor consistently explained price variation across all drugs. Although our analysis does not conclusively demonstrate disproportionate pricing impacts on any one demographic group, it highlights a complex and inequitable pricing landscape. These insights challenge the efficacy of current Medicare price negotiation mechanisms and suggest that federal and state policymakers should pursue price normalization strategies. Ensuring that the lowest negotiated drug prices are broadly accessible could enhance transparency and affordability for all Medicare beneficiaries.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/capstone_medication_maps.png" title="baby names app - example plot" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A faceted plot of the maximum (dark color) and minimum (light color) median price for a 30-day supply of specific drugs for Medicare patients within a given county
</div>


