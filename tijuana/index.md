---
layout: report3
title: Tijuana, Mexico
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
    latlng: [32.4965952,-117.0267731]
    zoom: 12
    tile_layers:
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, exercitationem tempore. Ipsam itaque magnam expedita quibusdam, architecto maxime, repellat eveniet laborum quidem quam quia autem! Consequatur natus quia distinctio rem neque atque aliquam dignissimos perferendis iure quaerat dicta et tempora animi magni, sapiente officiis optio hic ratione ipsum. Delectus, eum accusantium rem quia repellat, pariatur. Libero voluptatibus sequi non! Fugiat ipsum deleniti nulla, quibusdam cum velit sed eaque dolores molestiae quas, et asperiores!

          Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.

---

### Summary
Over the past 30 years, Tijuana has experienced tremendous population and industrial growth.  This has strained the city’s infrastructure.  The Mexican government estimates Tijuana’s population of 1.6 million is now growing at approximately 2.5% per year.  Tijuana is home to thousands of squatters who do not hold legal land titles, many of whom come from outside the state and likely do not figure in official population statistics.  Population growth has exacerbated poorly-enforced building codes, accelerated erosion, and illicit disposal of trash in both incorporated and unincorporated areas of the city, contributing to one of Tijuana’s most difficult problems: wastewater management.  The combination of homes lacking access to wastewater treatment and outdated sanitation infrastructure has led to substantial sewage spills affecting communities on both sides of the border.  The Tijuana River watershed therefore presents a complex transboundary challenge.

### Goals
This project aims to support and investigate the mitigation of waste in the Tijuana River watershed by expanding data creation and sharing. 

### Lead Partner
Universidad Autonoma de Baja California (UABC)

### Supporting Partners
- San Diego State University
- Tijuana Calidad de Vida

