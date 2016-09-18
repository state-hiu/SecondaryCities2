---
layout: report3-pokhara
title: Pokhara, Nepal
author: Tom G of HIU
date: January 20, 2015
data_source_name: Secondary Cities
data_source_url: http://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'http://secondarycities.geonode.state.gov/api/layers/?keywords__slug__in=pokhara'
tweet_text: 'sample tweet text %23SecondaryCities'
esri_story: false

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
    latlng: [28.219, 83.99]
    zoom: 14
    tile_layers:
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, exercitationem tempore. Ipsam itaque magnam expedita quibusdam, architecto maxime, repellat eveniet laborum quidem quam quia autem! Consequatur natus quia distinctio rem neque atque aliquam dignissimos perferendis iure quaerat dicta et tempora animi magni, sapiente officiis optio hic ratione ipsum. Delectus, eum accusantium rem quia repellat, pariatur. Libero voluptatibus sequi non! Fugiat ipsum deleniti nulla, quibusdam cum velit sed eaque dolores molestiae quas, et asperiores!

          Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.Tenetur nemo magnam cum pariatur nesciunt reprehenderit harum temporibus, autem cumque debitis animi quia provident incidunt, id. Cupiditate alias dolores voluptates voluptatibus, necessitatibus quasi quisquam quis veniam.

  - title: Slide 2
    banner_image: https://farm8.staticflickr.com/7385/16216317208_75fca9f8db.jpg
    banner_image_caption: From left, a Neanderthal skull, the Manot cranium and a complete modern human skull on display near the cave in Israel where the Manot cranium was found.
    banner_image_source: Jim Hollander/European Pressphoto Agency
    latlng: [28.232, 83.969]
    zoom: 13
    tile_layers: ['scgn:pokhara_schools']
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolores sint est beatae et quam consequuntur veniam ad nesciunt. Dolore officiis excepturi amet tempore tempora consequuntur et ducimus doloremque facere placeat debitis, ipsa recusandae voluptatibus rem natus magni laboriosam aliquid incidunt, nihil esse ex provident atque nobis a. Dolorem fugit vitae quis nam et, deleniti, odio unde dolores. Ipsam, nihil.

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolores sint est beatae et quam consequuntur veniam ad nesciunt. Dolore officiis excepturi amet tempore tempora consequuntur et ducimus doloremque facere placeat debitis, ipsa recusandae voluptatibus rem natus magni laboriosam aliquid incidunt, nihil esse ex provident atque nobis a.


  - title: Slide 3
    banner_image:
    banner_image_caption:
    banner_image_source:
    latlng: [28.232, 83.969]
    zoom: 11
    tile_layers: ['scgn:pokhara_landcover']
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
    zoom: 14
    tile_layers: ['egn:sle_heal_pt_unmeer_ebolacarefacilities','wfp:wld_trs_unhasroutes_wfp','wfp:wld_trs_ports_wfp','wfp:wld_poi_warehouses_wfp']
    vector_data:
    body: |
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, dolorem impedit rem nulla omnis voluptatum porro possimus, fuga eos necessitatibus excepturi veniam. Natus et ex harum amet ad exercitationem voluptate necessitatibus quam, non odit nobis asperiores tenetur tempora ipsam neque aperiam ipsa culpa repellendus dolorum expedita maiores ut vitae.
---

### Summary

![Pokhara]({{ site.baseurl }}/img/pokhara/mountains.jpg)

Pokhara Sub-metropolitan city is the second largest city of Nepal. The city currently acts as the Western Development Regional capital and is set to be one of only seven new provincial capitals of Nepal. Between 2001 and 2011 the city grew at an annual rate of 6.952 percent with its population in 2011 standing at 264,991 (Nepal Census 2011). If the same growth rate held then the city currently has an approximate population of 369,253 people. In the same time period the annual growth rate of the national population was only 1.35 percent.

Beyond the rapid urban growth and administrative importance to the region, Pokhara is also the preeminent tourist (both domestic and international) destination of Nepal. Its karst topography and sharp elevation rise has meant that Pokhara is bejeweled with lakes, caves, waterfalls, and gorges. Just a mere 30 km north as the crow flies lies the Dhaulagiri massif, a mountain range that includes the seventh and tenth highest mountains in the world.

### Goals

The 2C Pokhara project focuses on the development of disaster resilience and emergency management. Kathmandu Living Labs (KLL) is the local implementing partner of this project and works in cooperation with the American Association of Geographers and the United States Department of State.

The development of disaster resilience and emergency management is done by helping the local communities within the city of Pokhara to create a robust OSM data of their city and develop a community which is able to update and maintain the collected data. Long term, the 2C Pokhara team envisions the formation of a geographic information sensitized community that is able to use the collected OSM data to mobilise strategically, create applications and use tools such as Quakemap.org in the advent of a major disaster. 

### Partners

- [TU Institute of Engineering Paschimanchal Campus](https://gesanwrc.wordpress.com/)
- [Geomatics Engineering Students’ Association of Nepal](http://nrcskaski.org/)
- [Nepal Red Cross Society Kaski District Chapter](http://nrcskaski.org/)
- Nepal Scout Kaski
- Learning House
- Big Foot Software
- Rotoract Club of New Road, Pokhara





