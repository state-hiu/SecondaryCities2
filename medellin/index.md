---
layout: report3
title: Medellin, Colombia (2015 – 2017)
author: Leo Bottrill of CrowdCover
date: August 15, 2019
data_source_name: Secondary Cities
data_source_url: https://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'https://secondarycities.geonode.state.gov/api/layers/?title__icontains=medellin'
imageurl: '/img/medellin/medellin_hillside.png'
tweet_text: 'The 2C Medellín project focuses on urban flow and waste management %23SecondaryCities'
esri_story: true
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
    latlng: [6.2387, -75.5624]
    zoom: 12
    tile_layers:
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, exercitationem tempore. Ipsam itaque magnam expedita quibusdam, architecto maxime, repellat eveniet laborum quidem quam quia autem! Consequatur natus quia distinctio rem neque atque aliquam dignissimos perferendis iure quaerat dicta et tempora animi magni, sapiente officiis optio hic ratione ipsum. Delectus, eum accusantium rem quia repellat, pariatur. Libero voluptatibus sequi non! Fugiat ipsum deleniti nulla, quibusdam cum velit sed eaque dolores molestiae quas, et asperiores!

          Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.

---

### Summary

![Medellín]({{ site.baseurl }}/img/medellin/medellin_hillside.png)

The Municipality of Medellín is the second-largest city in Colombia and the capital of the state of Antioquia. The Rio Porce river runs through the center of the city. The metropolitan area of Medellin includes nine other cities with a combined population of 3.9 million people. Medellín is the second-largest urban agglomeration in Colombia in terms of population and economy.  Many citizens living in areas of informal housing lack access to running water, electricity, or waste collection services. These informal areas are prone to landslides and flooding and are identified as “risk zones.” 

The 2C Medellín project is similar to 2C Cusco, focusing on urban flow and waste management. Focusing on one neighborhood, 2C partner Ecocity Builders has introduced a process for mapping and analysis examining waste management and recycling. This approach has sparked the interest of the Subsecretario of Education who has expressed interest in integrating this approach into the Medellín school system.

### Goals

The 2C Medellin project explores the dynamics of resilient and healthy urban ecosystems by examining city neighborhoods in relation to urban flows, in particular – waste management.  The 2C Medellín project is developing methods for mapping local geospatial knowledge of the community.

- &bull;  Build local capacity in geospatial technology and sustainable urban design
- &bull;  Compile and disseminate existing geospatial data sets about the city
- &bull;  Implement ground-up, scalable approaches for mapping neighborhood waste flows.

### Data

Through local workshops, data collection focused on the neighborhood scale conducting multiple surveys on waste, water quality, building characteristics, potential locations for community composting, and quality of life. Mapping has focused on Comuna 8 where a strong community partnership has formed. A Medellin Map Book was prepared for the local government and an initial urban flows analysis of waste implemented leading to new strategies for recycling.

### Project Status

- &bull; The E2E Foundation has continued to work with the Comuna 8 communities to use the collected data to design waste management solutions.
- &bull; Waste collection routes and deposit locations were determined by mapping done in the 2C data collection activity in 2015.
- &bull; The 2C data partner with the municipality has developed Consejo de Datos Medellín (The Data Council Medellín) with the city, tasked with generating geospatial data and enhancing the availability and use of such data.

### Lead Partner

- [Ecocity Builders](https://www.ecocitybuilders.org/)

#### Supporting Partners

- [UNAL](http://unal.edu.co/en.html)
- [E2E Foundation](http://www.e2efundacion.org/)
- [Departamento Administrativo de Planeación - Alcaldía de Medellín](http://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://4121c26ad1714afe2e330a526eda1007)
- [EPM - Empresa de Servicios Públicos](http://www.epm.com.co/)
- Low Carbon Cities
- University of EAFIT





