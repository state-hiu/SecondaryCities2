---
layout: report3
title: Medellín, Colombia
author: Leo Bottrill of CrowdCover
date: January 20, 2015
data_source_name: Secondary Cities
data_source_url: http://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'http://secondarycities.geonode.state.gov/api/layers/?keywords__slug__in=medellin'
tweet_text: 'sample tweet text %23SecondaryCities'
esri_story: true
esri_story_url: 'http://csurams.maps.arcgis.com/apps/MapJournal/index.html?appid=28634f58a83e487591e52af1ffaf3937'

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
    latlng: [6.2387, -75.5624]
    zoom: 12
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

![Medellín]({{ site.baseurl }}/img/medellin/medellin_hillside.png)

Medellín is the second-largest city in Colombia (2.44 million, 2014) and is the capital of the department of Antioquia.  Surrounded by 9 other major cities, Medellín is part of the second-largest urban agglomeration in Colombia in terms of both population and economy.  It is experiencing rapid change, increasing population, and unplanned development.

The 2C Medellín project is similar to 2C Cusco, focusing on urban flow and waste management.  Focusing on one neighborhood, 2C partner Ecocity Builders has introduced a process for mapping and analysis examining waste management and recycling. This approach has sparked the interest of the Subsecreatario of Education who has expressed interest in integrating this approach into the Medellín school system.

### Goals

The 2C Medellín project is developing methods for mapping local geospatial knowledge of the community.

- &bull;  Build local capacity in geospatial technology and sustainable urban design
- &bull;  Compile and disseminate existing geospatial data sets about the city
- &bull;  Implement ground-up, scalable approaches for mapping neighborhood waste flows.

### Partners

- [UNAL](http://unal.edu.co/en.html)
- [E2E Foundation](http://www.e2efundacion.org/)
- [Departamento Administrativo de Planeación - Alcaldía de Medellín](http://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://4121c26ad1714afe2e330a526eda1007)
- [EPM - Empresa de Servicios Públicos](http://www.epm.com.co/)

### Upcoming Events

##### Low Carbon City, October 11, Medellin
Kirstin Miller, 2C Medellin lead and Executive Director, Ecocity Builders, will participate on a panel entitled: [Urbanism to Tackle Climate Challenges](http://lowcarbon.city/es/)

##### U.S. Habitat: Quito Comes to You at Low Carbon City, October 12, Medellin 
Ian Klaus, U.S. Department of State, Senior Advisor for Global Cities and Kirstin Miller, 2C Medellin lead and Executive Director, Ecocity Builders, will lead a [workshop](http://lowcarbon.city/es/) and dialogue on what makes an environmentally and socially healthy city. 

##### Ecocity Focus Lab, November 7, Vancouver
2C Medellin will share their findings and conclusions from data and assessments on Medellin’s ecological footprint, greenhouse gas emissions data and average consumption of energy, materials and food. Diana Marce from the Medellin Planning Department is invited to make the presentation. (Host: British Colombia Institute of Technology, City of Vancouver, Ecocity Builders )


