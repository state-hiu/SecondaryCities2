---
layout: report3
title: Port Harcourt, Nigeria
author:
date: September 3, 2019
data_source_name: Secondary Cities
data_source_url: https://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'https://secondarycities.geonode.state.gov/api/layers/?title__icontains=santa_fe'
imageurl: '/img/tijuana/tijuana.jpg'
tweet_text: 'The 2C Santiago project focuses on urban flow and waste management %23SecondaryCities'
esri_story: false
esri_story_url: 'https://csurams.maps.arcgis.com/apps/MapJournal/index.html?appid=28634f58a83e487591e52af1ffaf3937'

footer: |
        This report is an entirely fictional example case study intended to demonstrate report editing capabilities.

# map service tileOrigin url(s)
  # add '{layerId}' to denote the layer's id
  # find the layers here: http://ebolageonode.org:8080/geoserver/gwc/service/tms/1.0.0/

tileOrigins:
  - name: scgn
    url: http://secondarycities.geonode.state.gov/geoserver/gwc/service/tms/1.0.0/geonode%3A{layerId}@EPSG:3857/{z}/{x}/{-y}.png
#    url: https://secondarycities.geonode.state.gov/geoserver/gwc/service/tms/1.0.0/geonode:{layerId}/{z}/{x}/{y}.png
#    url: https://secondarycities.geonode.state.gov:8080/geoserver/gwc/service/tms/1.0.0/geonode:{layerId}@EPSG:900913@png/{z}/{x}/{y}.png

  - name: egn
    url: http://ebolageonode.org:8080/geoserver/gwc/service/tms/1.0.0/geonode:{layerId}@EPSG:900913@png/{z}/{x}/{y}.png

  - name: wfp
    url: http://geonode.wfp.org/geoserver/gwc/service/tms/1.0.0/geonode:{layerId}@EPSG:900913@png/{z}/{x}/{y}.png

about_tab_data:
  - tile_layers: 
    vector_data:
    
sections:
  - title:
    banner_image:
    banner_image_caption:
    banner_image_source:
    latlng: [4.8186013,7.010985]
    zoom: 12
    tile_layers:
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, exercitationem tempore. Ipsam itaque magnam expedita quibusdam, architecto maxime, repellat eveniet laborum quidem quam quia autem! Consequatur natus quia distinctio rem neque atque aliquam dignissimos perferendis iure quaerat dicta et tempora animi magni, sapiente officiis optio hic ratione ipsum. Delectus, eum accusantium rem quia repellat, pariatur. Libero voluptatibus sequi non! Fugiat ipsum deleniti nulla, quibusdam cum velit sed eaque dolores molestiae quas, et asperiores!

          Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.

---

### Summary
Port Harcourt is Nigeria’s fifth largest urban area and extends 360 square kilometers. Characterized by unplanned urban development and sprawl, the city's population is 2,227,133 (U.S. Department of State, 2015). The Greater Port Harcourt Development Authority implemented an expansion plan of the city, which encompasses six more local government areas.  Annual flooding is attributed to the poor drainage networks throughout the city.  The Bonny River runs through the city creating a network of streams throughout the city that joins the coastal area. Storm drains and closed canals are in development, but with only four months of dry season, Port Harcourt consistently experiences water level rises in the peak of the rainy season.

The civil society sector has undertaken several programs to “map the unmapped” as a way to incorporate them into the city government’s vision. The project lead, Port Harcourt-based Stakeholder Democracy Network has worked with city residents on community mapping projects in the past.  In April 2016, an initiative of local civil society Chicoco Radio and developing cities architecture practice NLÉ, ran a pilot program using basic technologies to create a geotagged dataset of household demographics.  2C Port Harcourt project builds on these activities.

### Goals
The Port Harcourt initiative’s focus is threefold:
1. Make ongoing participatory mapping programs in Port Harcourt sustainable
2. Build the city government’s capacity to incorporate these programs into future urban planning efforts
3. Sustainable, city-wide participatory mapping program that produces high-quality, accurate, geo-tagged datasets of informal areas for government consumption. 

### Data
The Stakeholder Democracy Network partnered with local government and River State University.  2C Port Harcourt collected data across the city on basic services for emergency preparedness.  This baseline data of the city is needed to develop the basis for geospatial infrastructure.  Data on roads, schools, emergency services, and open spaces were collected.



