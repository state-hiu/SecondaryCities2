---
layout: report3-pokhara
title: Pokhara, Nepal
author: Tom G of HIU
date: January 20, 2015
data_source_name: Secondary Cities
data_source_url: https://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
imageurl: '/img/pokhara/mountains.jpg'
api_url: 'https://secondarycities.geonode.state.gov/api/layers/?title__icontains=pokhara'
tweet_text: '2C Pokhara is devising methods for comprehensive data generation focusing on emergency preparedness %23SecondaryCities'
esri_story: true
esri_story_url: 'https://csurams.maps.arcgis.com/apps/MapJournal/index.html?appid=f10d43bc53dd4fe594c65ae10072dce2'

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

Pokhara is the second largest city in Nepal.  It is the seat of governance for the western extent of the country and through the 2C Pokhara project aims to be the center for emergency preparedness across the region.  Pokhara is a major tourist destination situated amidst the Himalayan mountain range. The population is 264,991 (2011) and annual growth rate between 2001 and 2011 was 6.952% (Nepal Census 2011).  

Following the April 2015 Nepal earthquake devastated central Nepal, the Pokhara team carried out a number of participatory mapping efforts to address community needs.  2C Pokhara is devising methods for comprehensive data generation that identify city services, community needs, and evacuation plans, focusing on emergency preparedness. 

### Goals

- &bull;  2C Pokhara uses open source tools for data generation, emphasizing OpenStreeMap (OSM) approaches.  The 2C project enhances the detail and coverage of data in Pokhara.
- &bull;  Multiple workshops and training sessions build local capacity in geospatial training with local schools, universities and community partners.  
- &bull;  2C Pokhara is poised to become a hub of geospatial expertise, providing support to other cities in creating robust disaster resilience approaches across the region.

### Lead Partner
- [Kathmandu Living Labs](http://www.kathmandulivinglabs.org/)

#### Supporting Partners
- [TU Institute of Engineering Paschimanchal Campus](https://gesanwrc.wordpress.com/)
- [Geomatics Engineering Students’ Association of Nepal](http://nrcskaski.org/)
- [Nepal Red Cross Society Kaski District Chapter](http://nrcskaski.org/)
- Nepal Scout Kaski
- Learning House
- Big Foot Software
- Rotoract Club of New Road, Pokhara









