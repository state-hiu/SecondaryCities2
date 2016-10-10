---
layout: report3
title: Cusco, Peru
author: Leo Bottrill of CrowdCover
date: January 20, 2015
data_source_name: Secondary Cities
data_source_url: http://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'http://secondarycities.geonode.state.gov/api/layers/?keywords__slug__in=cusco'
tweet_text: 'sample tweet text %23SecondaryCities'
esri_story: true
esri_story_url: 'http://csurams.maps.arcgis.com/apps/MapJournal/index.html?appid=32901d0be6fa4afb8dab5dba01b8d4ff'

footer: |
        This report is an entirely fictional example case study intended to demonstrate report editing capabilities.

# map service tileOrigin url(s)
  # add '{layerId}' to denote the layer's id
  # find the layers here: http://ebolageonode.org:8080/geoserver/gwc/service/tms/1.0.0/

tileOrigins:
  - name: scgn
    url: http://secondarycities.geonode.state.gov:8080/geoserver/gwc/service/tms/1.0.0/geonode:{layerId}@EPSG:900913@png/{z}/{x}/{y}.png

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
    latlng: [-13.5259, -71.9399]
    zoom: 13
    tile_layers:
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, exercitationem tempore. Ipsam itaque magnam expedita quibusdam, architecto maxime, repellat eveniet laborum quidem quam quia autem! Consequatur natus quia distinctio rem neque atque aliquam dignissimos perferendis iure quaerat dicta et tempora animi magni, sapiente officiis optio hic ratione ipsum. Delectus, eum accusantium rem quia repellat, pariatur. Libero voluptatibus sequi non! Fugiat ipsum deleniti nulla, quibusdam cum velit sed eaque dolores molestiae quas, et asperiores!

          Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.

  - title: Slide 2
    banner_image: https://farm8.staticflickr.com/7385/16216317208_75fca9f8db.jpg
    banner_image_caption: From left, a Neanderthal skull, the Manot cranium and a complete modern human skull on display near the cave in Israel where the Manot cranium was found.
    banner_image_source: Jim Hollander/European Pressphoto Agency
    latlng: [5.8, -9.3]
    zoom: 6
    tile_layers: ['egn:lbr_telc_pt_misc_transmissiontowers', 'egn:lbr_policestnp_undp']
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolores sint est beatae et quam consequuntur veniam ad nesciunt. Dolore officiis excepturi amet tempore tempora consequuntur et ducimus doloremque facere placeat debitis, ipsa recusandae voluptatibus rem natus magni laboriosam aliquid incidunt, nihil esse ex provident atque nobis a. Dolorem fugit vitae quis nam et, deleniti, odio unde dolores. Ipsam, nihil.

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolores sint est beatae et quam consequuntur veniam ad nesciunt. Dolore officiis excepturi amet tempore tempora consequuntur et ducimus doloremque facere placeat debitis, ipsa recusandae voluptatibus rem natus magni laboriosam aliquid incidunt, nihil esse ex provident atque nobis a.

---

### Summary

![Cusco]({{ site.baseurl }}/img/cusco/cusco_plaza_de_armas.png)

Cusco is the capital of the Cusco region in southern Peru.  It has a population of 350,000 (2007) with informal community developments on the city periphery.  As the ancient Incan capital and a UNESCO World Heritage Site, the city experiences a high volume of tourist visitation.  Its topographic setting makes Cusco prone to natural disasters, particularly landslides and flooding.  The city of Cusco is composed of six different administrative units making both governance and geospatial data coordination challenging.

2C Cusco works on community-driven mapping and data collection at the neighborhood scale, with a focus on waste management. An initial workshop at the National University of St. Anthony the Abbot introduced participants to geospatial technologies for mapping neighborhoods adjacent to the university.  Since then, 2C Partner EcoCity Builders has continued to build local partnerships and teach participatory mapping in geospatial technology through the EcoCompass curriculum.

### Goals

The goal of this project is to map waste management issues and identify solutions for improving waste disposal.

- &bull;  Participants use multiple tools including surveys, field mapping techniques, and analysis.  
- &bull;  The project facilitates the establishment of composting sites and programs in the neighborhood.  
- &bull;  This base line information provides the basis for conducting analysis on urban flows for improved city design and management.


### Partners

- [Universidad Alas Peruanas](http://www.uap.edu.pe/)
- [Cusco Bureau of Land Management](http://www.regioncusco.gob.pe/)
- [MINAM](http://www.minam.gob.pe/)
- [PREDES](http://www.predes.org.pe/)
- [Field Papers](http://fieldpapers.org/)
- [British Columbia Institute of Technology](http://www.bcit.ca/)

### Workshop Materials

[insert text]

### Upcoming Events

##### Ecocity Focus Lab, November 7, Vancouver
2C Cusco will share their findings and conclusions from data and assessments on San Pedro's ecological footprint, greenhouse gas emissions data and average consumption of energy, materials and food. Santos Mera and the 2C interns from Universidad Alas Peruanas will make the presentation. (location: British Colombia Institute of Technology, City of Vancouver) 





