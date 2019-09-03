---
layout: report3
title: Indore, India
author:
date: September 3, 2019
data_source_name: Secondary Cities
data_source_url: https://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'https://secondarycities.geonode.state.gov/api/layers/?title__icontains=santa_fe'
imageurl: '/img/medellin/medellin_hillside.png'
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
    latlng: [22.7194651,75.8324231]
    zoom: 12
    tile_layers:
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, exercitationem tempore. Ipsam itaque magnam expedita quibusdam, architecto maxime, repellat eveniet laborum quidem quam quia autem! Consequatur natus quia distinctio rem neque atque aliquam dignissimos perferendis iure quaerat dicta et tempora animi magni, sapiente officiis optio hic ratione ipsum. Delectus, eum accusantium rem quia repellat, pariatur. Libero voluptatibus sequi non! Fugiat ipsum deleniti nulla, quibusdam cum velit sed eaque dolores molestiae quas, et asperiores!

          Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.

---

### Summary
Indore, Madhya Pradesh, is home to 2.1 million people.  The city is a regional economic center, rivaling the capital city Bhopal as the most important city in the state.  Indore has been selected as one of the central government’s 100 Smart Cities and is among India’s 10 cities with planned infrastructure and connectivity developments in the Delhi Mumbai Industrial Corridor.  By 2010, Indore’s population density reached 10,000 per square kilometer, making it the most densely populated municipality in Madhya Pradesh.  Indore is also the center of the region in India which is most-affected by malaria.

### Goals
This project aims to improve access to health services for the urban poor and help fight the tide of malaria and other vector-borne illnesses through the creation of geo-referenced human geography data.

### Lead Partner
Kathmandu Living Labs

### Supporting Partners
- IIT-Indore
- Acropolis Institute of Technology & Research

