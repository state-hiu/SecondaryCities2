---
layout: report3
title: Kharkiv, Ukraine (2015 - 2017)
author: Leo Bottrill of CrowdCover
date: August 15, 2019
data_source_name: Secondary Cities
data_source_url: https://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'https://secondarycities.geonode.state.gov/api/layers/?title__icontains=kharkiv'
imageurl: '/img/kharkiv/LopanStrelkaKharkov.jpg'
tweet_text: 'Check out the new 2C Kharkiv map data collected to help vulnerable populations %23Kharkiv %232CKharkiv %23SecondaryCities http://secondarycities.state.gov/kharkiv'
esri_story: true
esri_story_url: 'https://csurams.maps.arcgis.com/apps/MapJournal/index.html?appid=f06c1ad728e4447c841f1def56ae3c91'

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
    latlng: [49.98, 36.25]
    zoom: 11
    tile_layers:
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, exercitationem tempore. Ipsam itaque magnam expedita quibusdam, architecto maxime, repellat eveniet laborum quidem quam quia autem! Consequatur natus quia distinctio rem neque atque aliquam dignissimos perferendis iure quaerat dicta et tempora animi magni, sapiente officiis optio hic ratione ipsum. Delectus, eum accusantium rem quia repellat, pariatur. Libero voluptatibus sequi non! Fugiat ipsum deleniti nulla, quibusdam cum velit sed eaque dolores molestiae quas, et asperiores!

          Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.

---

### Summary
![kharkiv]( {{ site.baseurl }}/img/kharkiv/LopanStrelkaKharkov.jpg)

Kharkiv is the administrative capital of Kharkiv Oblast and the second largest city in Ukraine, with a population of 1.451 million people (2014).  Kharkiv is a center of excellence for educational and scientific advancement.  Located approximately 40 kilometers from the Russian border, Kharkiv continues to be influenced by its proximity to Russia and has a large ethnic Russian minority population, although the majority of its population is Ukrainian.  Russia’s ongoing aggression against Ukraine served as the context through which 2C Kharkiv examined human geography data as it relates to vulnerable populations.

The 2C Kharkiv project focused on the development of geospatial data related to safety and accessibility.  Data was created with a focus on vulnerable populations, including the elderly, people with disabilities, gender-based vulnerabilities, and internally-displaced persons.  The project organized a series of workshops that utilized open source tools and the Esri ArcGIS Online platform for data creation, dissemination, and analysis.

### Goals
The project built partnerships with local universities, government, NGOs, and the private sector to create geospatial data for Kharkiv.

- &bull;  The project strengthened collaboration both between Kharkiv universities and within the municipality.
- &bull;  Data generated on vulnerable populations provides the basis for enhancing city response to community needs.
- &bull;  Improved communication between project partners led to new geospatial projects based upon the identification of data gaps and community needs.

### Data
The Kharkiv Secondary City (2C) project developed geospatial data for local emergency preparedness.  Data was created with a focus on vulnerable populations, including the elderly, people with disabilities, gender-based vulnerabilities, and internally-displaced persons.

### Project Status
2C Kharkiv partners continue to conduct research using data created through the 2C Initiative. Of particular note was the generation of a geospatial data layer of urban springs that provide an informal water supply in times of need.

### Lead Partner
- [Association of American Geographers](http://www.aag.org/)

#### Supporting Partners
- [U.S. Embassy](http://www.usembassy.gov/)
- [Esri](http://www.esri.com/)
- [MapBox](http://www.mapbox.com/)
- [Kharkiv City Government & Information Center](http://www.city.kharkov.ua/en/o-xarkove/nagradyi-soveta-evropyi.html)
- [V.N. Karazin Kharkiv National University](http://www.univer.kharkov.ua/en)
- [Kharkiv University of Urban Economics](http://abit.kname.edu.ua/index.php/en/home)
- [Kharkiv National University of Radio Electronics](http://nure.ua/en/)
- [National University of Civil Protection of Ukraine](http://nuczu.edu.ua/eng/)
- [Kharkiv National Aerospace University](http://www.khai.edu/efc/)


