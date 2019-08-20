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

---

### Summary
![Pokhara]({{ site.baseurl }}/img/pokhara/mountains.jpg)

Pokhara is the second largest city in Nepal and one of the country’s seven new provincial capitals.  Pokhara has become a major tourist destination, and tourism’s contribution to the local and national economy is expected to increase with the opening of a new international airport, scheduled for completion in 2021.  From 2001 and 2011, the population of Pokhara grew at an annual rate of 6.95%; Nepal's national annual growth rate during this same period was only 1.35%.  In 2011, Pokhara's population was 264,991 (Nepal Census 2011). Assuming a constant growth rate, the city's approximate population today is 453,604 (U.S. Department of State, 2015). 

Due to its exposure to natural hazards and high population density, Western Nepal is considered one of the most disaster-prone regions in the world, and the city of Pokhara is particularly vulnerable to earthquakes and floods, with the Seti Gandaki River running through the city.

### Goals
The 2C Pokhara project aims to develop disaster resilience and emergency management capabilities.  This is accomplished by helping local communities create robust OpenStreetMap (OSM) data of their city and build local capacity to update and maintain the created data.

### Data
2C Pokhara has created baseline data on vital city services (banks, medical centers, schools, religious centers).  A 2C Pokhara Map Book has been published and disseminated to the city’s governing agency and local schools.

### Lead Partner
- [Kathmandu Living Labs](http://www.kathmandulivinglabs.org/)

#### Supporting Partners
- City of Pokhara
- Pokhara Engineering College
- Tribhuvan Univesity


