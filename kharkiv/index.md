---
layout: report2
title: Kharkiv, Ukraine
author: Leo Bottrill of CrowdCover
date: January 20, 2015
data_source_name: Secondary Cities
data_source_url: http://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'http://secondarycities.geonode.state.gov/api/layers/?keywords__slug__in=kharkiv'
tweet_text: 'sample tweet text %23SecondaryCities'
esri_story: true

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

## Summary

![kharkiv]( {{ site.baseurl }}/img/kharkiv/LopanStrelkaKharkov.jpg)

Kharkiv was founded in 1654 and after a humble beginning as a small fortress grew to become a major centre of Ukrainian culture within the Russian Empire. Kharkiv became the first city in Ukraine occupied by Soviet troops in December 1917. It functioned as the first capital of the Ukrainian Soviet Socialist Republic until January 1935, after which the capital relocated to Kiev. Kharkiv is the administrative center of Kharkiv Oblast and of the surrounding Kharkiv district.

Kharkiv has a population of 1.451 million people (2014), the second largest in Ukraine. Although the majority of the population is Ukrainian both in nationality and ethnicity, Kharkiv’s largest minority is of Russian descent due to it’s history and proximity to Russia.

## Partners

[Kharkiv City Government](http://www.city.kharkov.ua/en/o-xarkove/nagradyi-soveta-evropyi.html)

[Kharkiv National University Government](http://www.univer.kharkov.ua/en)

## Upcoming Events

- 3rd Secondary Cities Workshop, September 2016



