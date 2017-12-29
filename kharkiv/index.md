---
layout: report3
title: Kharkiv, Ukraine
author: Leo Bottrill of CrowdCover
date: January 20, 2015
data_source_name: Secondary Cities
data_source_url: https://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
imageurl: '/img/kharkiv/LopanStrelkaKharkov.jpg'
api_url: 'https://secondarycities.geonode.state.gov/api/layers/?title__icontains=kharkiv'
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
    url: https://secondarycities.geonode.state.gov:8080/geoserver/gwc/service/tms/1.0.0/geonode:{layerId}@EPSG:900913@png/{z}/{x}/{y}.png

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


  - title: Slide 3
    banner_image:
    banner_image_caption:
    banner_image_source:
    latlng: [5.2, -9.2]
    zoom: 7
    tile_layers: ['egn:lbr_rdsl_unmil', 'egn:lbr_hltfacp_undp']
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem impedit rem nulla omnis voluptatum porro possimus, fuga eos necessitatibus excepturi veniam. Natus et ex harum amet ad exercitationem voluptate necessitatibus quam, non odit nobis asperiores tenetur tempora ipsam neque aperiam ipsa culpa repellendus dolorum expedita maiores ut vitae.

          Explicabo distinctio facilis, dolorem nesciunt at. Accusamus eveniet quam fugit, laborum sed sapiente? In iure laborum harum aspernatur saepe itaque, ratione amet, id ipsa facere fugit quaerat quis earum dolorem quas! Reiciendis voluptates nobis itaque ad fuga quidem harum facere quasi exercitationem, repellendus delectus aperiam eveniet at tenetur soluta perspiciatis natus placeat cum aut, quibusdam, doloribus totam dignissimos? Dolorem ullam veniam rerum iste facilis facere perferendis harum! Quisquam possimus voluptate, officiis sed harum sint quasi magni animi voluptates, soluta atque quos!

  - title: Slide 4
    banner_image:
    banner_image_caption:
    banner_image_source:
    latlng: [6.9, -11.4]
    zoom: 9
    tile_layers: ['egn:lbr_lakeresa_lake_unmil']
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem impedit rem nulla omnis voluptatum porro possimus, fuga eos necessitatibus excepturi veniam. Natus et ex harum amet ad exercitationem voluptate necessitatibus quam, non odit nobis asperiores tenetur tempora ipsam neque aperiam ipsa culpa repellendus dolorum expedita maiores ut vitae.

          Explicabo distinctio facilis, dolorem nesciunt at. Accusamus eveniet quam fugit, laborum sed sapiente? In iure laborum harum aspernatur saepe itaque, ratione amet, id ipsa facere fugit quaerat quis earum dolorem quas! Reiciendis voluptates nobis itaque ad fuga quidem harum facere quasi exercitationem, repellendus delectus aperiam eveniet at tenetur soluta perspiciatis natus placeat cum aut, quibusdam, doloribus totam dignissimos? Dolorem ullam veniam rerum iste facilis facere perferendis harum! Quisquam possimus voluptate, officiis sed harum sint quasi magni animi voluptates, soluta atque quos!

  - title: "Slide 5: Freetown"
    banner_image:
    banner_image_caption:
    banner_image_source:
    latlng: [8.468285, -13.242686]
    zoom: 13
    tile_layers: ['egn:sle_heal_pt_unmeer_ebolacarefacilities','wfp:wld_trs_unhasroutes_wfp','wfp:wld_trs_ports_wfp','wfp:wld_poi_warehouses_wfp']
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem impedit rem nulla omnis voluptatum porro possimus, fuga eos necessitatibus excepturi veniam. Natus et ex harum amet ad exercitationem voluptate necessitatibus quam, non odit nobis asperiores tenetur tempora ipsam neque aperiam ipsa culpa repellendus dolorum expedita maiores ut vitae.
---

### Summary

![kharkiv]( {{ site.baseurl }}/img/kharkiv/LopanStrelkaKharkov.jpg)

Kharkiv is the administrative capital of Kharkiv Oblast and has a population of 1.451 million people (2014), the second largest city in Ukraine. It is a center of excellence for educational and scientific advancement.  Located approximately 40 kilometers from the Russian border, Kharkiv continues to be influenced by its proximity to Russia.  The ongoing border conflict provides the context from which to examine human geography data needs focusing on vulnerable populations. 

The 2C Kharkiv project focuses on the development of geospatial data related to safety and accessibility. Data are being collected for vulnerable populations, including the elderly, people with disabilities, gender-based vulnerabilities, and internally-displaced persons.  A series of workshops have utilized open source tools for data generation and the Esri ArcGIS Online platform for data dissemination and analysis.

### Goals

The project builds partnerships with local universities, government, NGOs and the private sector to create geospatial data for Kharkiv.

- &bull;  The project has strengthened collaboration between Kharkiv universities as well as the municipality.
- &bull;  Data generated on vulnerable populations provide the basis to enhance city response to community needs.
- &bull;  Improving communication between project partners has led to new geospatial projects based upon identification of data gaps and community needs.

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


