---
layout: report3
title: Pemba, Mozambique
author: Leo Bottrill of CrowdCover
date: January 20, 2015
data_source_name: Secondary Cities
data_source_url: https://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'https://secondarycities.geonode.state.gov/api/layers/?title__icontains=pemba'
imageurl: '/img/medellin/medellin_hillside.png'
tweet_text: 'The 2C Pemba project focuses on creating a detailed georeferenced database of landscape features, urban land uses, and public infrastructure %23SecondaryCities'
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
    latlng: [-13.0139,40.5588]
    zoom: 12
    tile_layers:
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, exercitationem tempore. Ipsam itaque magnam expedita quibusdam, architecto maxime, repellat eveniet laborum quidem quam quia autem! Consequatur natus quia distinctio rem neque atque aliquam dignissimos perferendis iure quaerat dicta et tempora animi magni, sapiente officiis optio hic ratione ipsum. Delectus, eum accusantium rem quia repellat, pariatur. Libero voluptatibus sequi non! Fugiat ipsum deleniti nulla, quibusdam cum velit sed eaque dolores molestiae quas, et asperiores!

          Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.

---

### Summary

Pemba is a port city on Mozambique's northeastern coast and is the capital of Cabo Delgado Province.  The city has an estimated population of 250,000 (as of 2017), and is divided into 10 neighborhoods.  Pemba is a fast-growing secondary city with an annual population growth rate of ~4.75% (https://www.citypopulation.de, 2007-2016).  Pemba is near Mozambique’s Quirimbas National Park, which is a biodiversity hotspot.  Pemba serves as an economic hub for the rapidly expanding offshore natural gas industry.  Pemba is vulnerable to frequent extreme climate-related events such as cyclones, floods, erosion, and saltwater intrusion that threaten homes, businesses, farming and fishing areas, and the limited infrastructure.  This was made readily apparent when Cyclone Kenneth made landfall north of the city on April 25, 2019 and caused substantial wind and water damage.  Pemba is relatively data-poor and under-resourced; it is grappling with rapid development, unplanned growth, and is still lagging in the provision of many essential services.

### Goals

This project aims to conduct extensive field surveys with community participation in order to create a detailed georeferenced database of landscape features, urban land uses, and public infrastructure (e.g. schools, hospitals, police stations, pharmacies, churches, water supply, sanitation, roads, rivers, universities, etc.).

### Lead Partner
- Catholic University of Mozambique in Pemba

#### Supporting Partners

Pemba City Mayor’s Office, Office of Urban Land Management, Cadaster Sector, Pemba City Council, Mozambique’s Eduardo Mondlane University




