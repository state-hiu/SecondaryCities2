---
layout: report3
title: Cusco, Peru (2015 – 2017)
author: 2C
date: January 20, 2015
data_source_name: Secondary Cities
data_source_url: https://secondarycities.geonode.state.gov/
banner_image: https://farm9.staticflickr.com/8578/16403038022_7ce6be2e6d.jpg
banner_image_caption: Small-scale mining operations by a subsidiary of the mining company MINECOM
banner_image_source: Menahem Kahana/Agence France-Presse — Getty Images
api_url: 'https://secondarycities.geonode.state.gov/api/layers/?title__icontains=cusco'
imageurl: '/img/cusco/cusco_plaza_de_armas.png'
tweet_text: '2C Cusco works on community-driven mapping and data collection at the neighborhood scale. %23SecondaryCities'
esri_story: true
esri_story_url: 'https://csurams.maps.arcgis.com/apps/MapJournal/index.html?appid=32901d0be6fa4afb8dab5dba01b8d4ff'

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

Cusco is the capital of the Cusco Region in Southern Peru. The population of Cusco is nearly 435,000 residents (2013) with informal community developments on the city periphery.  Cusco experiences sprawl and unplanned development which create challenges for transportation, water and waste management, and air quality.  Cusco’s physical location in a river valley makes it prone to natural disasters, particularly landslides and flooding.  The city of Cusco is composed of six different administrative units making both governance and geospatial data coordination challenging.  Due to its historical significance as the ancient capital of the Inca Empire and its designation as a UNESCO World Heritage Site, Cusco has development restrictions that preserve its historic design and layout.
 
2C Cusco focused on community-driven mapping and data creation at the neighborhood scale, with a focus on urban flow and waste management.  An initial workshop at the Universidad Nacional San Antonio Abad (National University of St. Anthony the Abbot) introduced participants to geospatial technologies by mapping neighborhoods adjacent to the university.  The 2C Cusco project partnered with [Ecocity Builders](http://ecocitybuilders.org/) to build local partnerships and teach participatory mapping and geospatial technology through the 2C [Urbinsight](https://ecocitybuilders.org/urbinsight/) curriculum.


### Goals

The goal of this project, as defined by local priorities, set out to map waste management issues and identify solutions for improving waste disposal.

- &bull;  Project partners trained participants to use multiple tools including surveys, field mapping techniques, and geospatial analysis.
- &bull;  New data provided a baseline for conducting analysis on urban flows for improved city design and management.
- &bull;  The project facilitated a community based solution to waste issues, enabling collaboration on a composting program across four neighborhoods.

### Data

Through local workshops, 2C Cusco fostered [data creation](https://secondarycities.geonode.state.gov/search/?title__icontains=Cusco&limit=100&offset=0) focused on the neighborhood scale by conducting multiple surveys on waste, water quality, and quality of life, as well as investigating building characteristics and potential locations for community composting. A [Cusco Map Book](https://secondarycities.geonode.state.gov/documents/2622) was prepared for the local government and an initial urban flows analysis of waste was conducted. These dual products led to the implementation of new strategies for waste management.

![2C_cusco_data]({{ site.baseurl }}/img/cusco/2C_cusco_data.png)

### Project Status

As a 2C graduated project, 2C Cusco continues through these activities:

- &bull;  An established partnership with the UN Environmental Program Sustainable Neighborhood Plan facilitated by Ecocity Builders to enhance land use maps, parcel maps, geographical demographic data, and resource consumption data.
- &bull;  A continued partnership with local government to implement a community reuse and recycling center to reduce waste production for neighborhoods within the Northwest region of Cusco. The neighborhood selection was based on 2C mapping of waste accumulation sites and 2C surveyed demographic data.
- &bull;  The 2C Cusco project motivated the continued teaching of GIS courses at the Environmental Engineering Department of Alas Peruanas University.

### Lead Partner
- [Ecocity Builders](https://www.ecocitybuilders.org/)

#### Supporting Partners
- [Cusco Bureau of Land Management](http://www.regioncusco.gob.pe/)
- [MINAM](http://www.minam.gob.pe/)
- [PREDES](http://www.predes.org.pe/)
- [Field Papers](http://fieldpapers.org/)
- [British Columbia Institute of Technology](http://www.bcit.ca/)
- Environmental Engineering Department of Alas Peruanas






