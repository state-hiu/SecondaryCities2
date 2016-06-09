$(document).foundation();

(function(){

  FastClick.attach(document.body);

  //The report object
  var report = {

    init: function(){

      L.mapbox.accessToken = 'pk.eyJ1IjoiaGl1IiwiYSI6InJWNGZJSzgifQ.xK1ndT3W8XL9lwVZrT6jvQ';
      report.map = L.mapbox.map('map', '', {
        attributionControl: false
      });

      // Use styleLayer to add a Mapbox style created in Mapbox Studio
      var baseLayer = L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v9',{
        center: pageConfig.latlng,
        zoom: pageConfig.zoom,
        minZoom: 4,
        maxZoom: 16,
        scrollWheelZoom: true,
        zoomControl: false // we'll add later
      }).addTo(this.map);

      function switchLayer(layer) {
          //L.mapbox.tileLayer('mapbox.light').addTo(report.map);
          L.mapbox.styleLayer('mapbox://styles/mapbox/' + layer + '-v9').addTo(report.map);
      }

      $("#data-tab").click(function() {
        switchLayer('light');
      });

      $("#story-tab").click(function() {
        switchLayer('light');
      });

      $("#about-tab").click(function() {
        switchLayer('streets');
      });

      //$(#about-tab).onclick = switchLayer('streets');

      // extend map object to contain reference to all layers
      var shareControl = L.control({position: 'topleft'});
      // https://developers.facebook.com/docs/sharing/reference/share-dialog
      shareControl.onAdd = function(){
        var controlHTML = $('<div>', {
          class: 'leaflet-bar leaflet-control',
        });
        var fbButton = $('<a>',{
          class: 'mapbox-icon mapbox-icon-facebook',
          href: 'http://www.facebook.com/sharer/sharer.php?u=' + pageConfig.fb_site
        })
        var twitterButton = $('<a>',{
          class: 'mapbox-icon mapbox-icon-twitter twitter-share-button',
          href: 'https://twitter.com/intent/tweet?text=' + pageConfig.tweet_text 
        })
        controlHTML.append(fbButton, twitterButton);
        return controlHTML[0];
      }

      var infoControl = L.mapbox.infoControl().addInfo('<strong>Map Data</strong> &copy; <a href="//www.openstreetmap.org/">OpenStreetMap</a>');
      if (pageConfig.source_name && pageConfig.source_url){
        infoControl.addInfo('<a href="' + pageConfig.source_url + '" target="_blank">' + pageConfig.source_name + '</a>');
      }else if(pageConfig.source_name){
        infoControl.addInfo(pageConfig.source_name);
      }

      // add additional object to map object to store references to layers
      $.extend(this.map, {
        // set baselayer z-index to -1, while you're at it
        reportLayers: {
          baseLayer: baseLayer.setZIndex(-1),
          dataLayers: {}
        },
        reportVectors: {},
        reportControls: {
          //zoom: L.control.zoom({position: 'topleft'}).addTo(this.map),
          scale: L.control.scale({position: 'bottomleft'}).addTo(this.map),
          infoControl: infoControl.addTo(this.map),
          share: shareControl.addTo(this.map)
        }
      });

      report.leaflet_hash = L.hash(this.map);

      this.map.legendControl.addLegend('<h3 class="center keyline-bottom">Legend</h3><div class="legend-contents"></div>');

      //L.easyPrint().addTo(this.map);

      //report.leaflet_hash.on('update', report.getLayerHash);
      //report.leaflet_hash.on('change', report.setLayerHash);
      //report.leaflet_hash.on('hash', report.updateExportLink);
      //report.updateExportLink(location.hash);

      // event handlers
      // helper function to return latlng on map click; useful for drafting stories--comment out at production
      this.map.on('click', function(e){
        console.log(e.latlng);
      });

      //jquery function, will make layers sortable in the Displayed Map Layers window
      $('.sortable').sortable({
        placeholder: "ui-state-highlight",
        helper: 'clone',
        update: this.layerSortedUpdate
      });

      $('#snap').on('click', this.mapCapture);
      $('.page-fade-link').on('click', this.fade2Page);

      /*This activates the slider*/
      $('.slider').on('click', 'a', this.slidePanel);

      var flag=0;

      $('#esri-story').on('click', function() {

          if(flag==0){
            console.log("esri story clicked!");
            //remove sidebar and map
            $( "#sidebar" ).hide();
            $( "#map" ).hide();
            //insert esri story map iframe
            $( "body").append( '<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" style="margin-top:74px;" src="http://csurams.maps.arcgis.com/apps/MapJournal/index.html?appid=4e3e6e624fd048718066294207008a75"></iframe>');
            flag=1;
            return;
          }
          if(flag==1){
            console.log("esri story clicked again!");
            $( "iframe").remove();
            $( "#sidebar" ).show();
            $( "#map" ).show();
            flag=0;
            return;
          }
        });

      $('#about-tab,#data-tab').on('click', function() {
          if(flag==1){
            //console.log("about or data tab clicked!");
            $( "iframe").remove();
            $( "#sidebar" ).show();
            $( "#map" ).show();
            flag=0;
            return;
          }
      });

      //create our deferred object
      //var globalapiJSONpromise = $.Deferred();

/*
      report.getAPIJSON(api_url).done(function(result) {
        console.log('API Returned: ');
        console.log(result);
      });
*/

      report.buildLayerJSON().done(function(layersList) {
        //console.log('layersList Returned: ');
        //console.log(layersList);

        $('.layer-ui li.layer-toggle').on('click', 'a', layersList, report.layerButtonClick);

/*
        $('#report section').waypoint(report.reportScroll(), {
          context: '#report',
          offset: '70%'
        });
*/

        //$('#report section').reportScroll(layersList,waypointSection);

        var waypointSection = $('#report section')

        report.reportScroll(layersList,waypointSection);

      });

      // refresh all Waypoints when window resizes
      // (docs say this happens automatically, but doesn't appear so: http://imakewebthings.com/waypoints/api/refresh-all/)
      $(window).on('resize', function(){
        Waypoint.refreshAll();
      });

      $('.navigate').on('click', 'a', this.navigate);

    },

    //report object methods declarations

    getAPIJSON: function (){
          //had to enable CORS in the GeoNode site by adding Header set Access-Control-Allow-Origin "*"
          //to the etc/apache2/sites-available/geonode.conf file
          //also had to install header module in apache2 by running "a2enmod headers"

          console.log('pageConfig api_url !!');
          console.log(pageConfig.api_url);
          console.log('pageConfig done !!');

          if(pageConfig.api_url) {

              return $.getJSON(pageConfig.api_url).then(function(data) {

              //resolve the deferred, passing it our custom data
              //globalapiJSONpromise.resolve(data);
              return data;

              });

          } else {

              return $.getJSON('http://secondarycities.geonode.state.gov/api/layers/?keywords__slug__in=pokhara').then(function(data) {

              //resolve the deferred, passing it our custom data
              //globalapiJSONpromise.resolve(data);
              return data;

              });

          }
          
      },

    buildLayerJSON: function() {

        return this.getAPIJSON().then(function(apiJSON) {

            var layersList = [];

            //This list will have the MapID as the key, and the other info as the values

            var myRegexp = /geonode%3A(.*)/;

            for (var i = 0; i < apiJSON.objects.length; i++) {

              var match = myRegexp.exec(apiJSON.objects[i].detail_url);

              console.log(match[1]);

              layersList.push({ mapID: 'scgn:' + match[1], title: apiJSON.objects[i].title, abstract: apiJSON.objects[i].abstract, categories: apiJSON.objects[i].category__gn_description, supplemental_information: apiJSON.objects[i].supplemental_information})
            }

            dataIndex = 1;

            for (var i = 0; i < layersList.length; i++) {

              var mapID = layersList[i].mapID;

              var title = layersList[i].title;

              var categories = layersList[i].categories;

              var html = [
              '<li class="layer-toggle"', 
              'data-index=' + String(dataIndex),
              'data-categories=' + categories, 
              'data-id="' + mapID + '"">',
              '<a class="keyline-bottom" href="#">' + title + '</a>', 
              '</li>'
              ].join("\n");

              $('.not-displayed').append(html);

              dataIndex++;
            }

            return layersList;

          });

        },

    layerButtonClick: function(e){
      e.preventDefault();
      e.stopPropagation();

      console.log('display layer info: ');
      console.log(e.data);

      report.changeLayer($(this).parent('li').data('id'),e.data);
    },

    reportScroll: function(layersList,waypointSection) {

      if (!layersList) {
        var layersList = 'none';
      }

      console.log('layersList from reportScroll: ');
      console.log(layersList);

      console.log('waypointSection: ');
      console.log(waypointSection);

      waypointSection.waypoint(function(direction){

            console.log(direction); // 0, "down"

            if(direction === 'down'){
                var $this = $(this.element);
                $this.prev().removeClass('active');
                $this.addClass('active');
            }else{
                var $this = $(this.element).prev();
                $this.next().removeClass('active');
                $this.addClass('active');
            }
            var nav = $this.data('nav'),
                newLayerIds = $this.data('tileid'),
                newVectorId = $this.data('vector'),
                displayedLayerIds = report.getLayers(),
                displayedVectorId = report.getVector();

            if(nav && nav.latlng.length === 2 && nav.zoom){
              report.map.setView(nav.latlng, nav.zoom);
            }else if(nav && nav.latlng.length === 2){
              report.map.panTo(nav.latlng);
            }else if(nav && nav.zoom){
              report.map.setZoom(nav.zoom);
            }

            if(newLayerIds){
              // for all existing layers, remove it unless it is present in newLayerIds
              newLayerIds = newLayerIds.split(',');

              for(i=0; i<displayedLayerIds.length; i++){
                var displayedLayerId = displayedLayerIds[i];
                if(newLayerIds.indexOf(displayedLayerId) === -1){
                  report.changeLayer(displayedLayerId,layersList);
                }
              }
              // add all newLayerIds unless they are already present
              for(i=0; i<newLayerIds.length; i++){
                var newLayerId = newLayerIds[i],
                    newTileLayer = report.map.reportLayers[newLayerId];
                if(! report.map.hasLayer(newTileLayer)){
                  report.changeLayer(newLayerId,layersList);
                }
              }
            }else{
              // if no newLayers, remove all displayed layers
              for(i=0; i<displayedLayerIds.length; i++){
                report.changeLayer(displayedLayerIds[i],layersList);
              }
            }

            if(newVectorId && newVectorId != displayedVectorId){
              report.changeVector(newVectorId);
            }else if(displayedVectorId){
              // if no new vector data to add, and existing vector data, remove existing vector data
              report.changeVector(displayedVectorId,layersList);
            }

        }, {
          context: '#report',
          offset: '70%'
        });

    },

    // map interaction functions
     navigate: function(e) {
       e.preventDefault();
       e.stopPropagation();

       var $this = $(this),
           lat = $this.data("nav")[0],
           lon = $this.data("nav")[1],
           zoom = $this.data("nav")[2];

       report.map.setView([lat, lon], zoom);

       $this.parent('li').siblings('li').children('a.active').removeClass('active');
       $this.addClass('active');
     },

    changeVector: function(newVectorId){
      if(! report.map.reportVectors[newVectorId]){
        // if not cached, cache and add
        $.getJSON('data/' + newVectorId + '.geojson', function(geojson){
          report.map.reportVectors[newVectorId] = L.mapbox.featureLayer(geojson).addTo(report.map);
        });
      }else{
        // else, add or remove
        if(report.map.hasLayer(report.map.reportVectors[newVectorId])){
          report.map.removeLayer(report.map.reportVectors[newVectorId]);
        }else{
          report.map.reportVectors[newVectorId].addTo(report.map);
        }
      }

    },

    layerSortedUpdate: function(e, ui){
      var displayedButtonContainer = $(this),
          layers = report.map.getLayers(),
          newTopButtonId = displayedButtonContainer.children('li:first').data('id');

/* see if possible to replace getLayerJSON with GeoNode catalog
      report.getLayerJSON(newTopButtonId).done(function(topLayerJSON){
        if(newTopButtonId !== layers[layers.length -1]){
          report.map.clearGrids();
          report.map.addGrid(newTopButtonId, topLayerJSON);
          report.map.showSummary(newTopButtonId, topLayerJSON);
        }

        orderedButtonIds = $.map(report.map.getDisplayedLayersButtons(), function(button, index){
          return $(button).data('id')
        }).reverse();
        report.map.setLayersZIndices(orderedButtonIds);
        report.map.leaflet_hash.trigger('move');
      });
*/

        if(newTopButtonId !== layers[layers.length -1]){
          report.map.clearGrids();
          report.map.addGrid(newTopButtonId, topLayerJSON);
          report.map.showSummary(newTopButtonId, topLayerJSON);
        }

        orderedButtonIds = $.map(report.map.getDisplayedLayersButtons(), function(button, index){
          return $(button).data('id')
        }).reverse();
        report.map.setLayersZIndices(orderedButtonIds);
        report.map.leaflet_hash.trigger('move');

    },

    changeLayer: function(layerId,layersList){
      // initiate everything that should happen when a map layer is added/removed

      console.log("changelayer function layersList data: ");
      console.log(layersList);

      // cache tileLayer in report.map.reportLayers[mapId]
      if(! report.map.reportLayers[layerId]){
        // construct tilelayer url template out of tileOrigins and newLayerId
        var tileOriginKey = layerId.split(":")[0],
            layerName = layerId.split(":")[1],
            tileOrigin = pageConfig.tileOrigins[tileOriginKey]

        if(! tileOrigin){
          console.log('tileOriginKey ' + tileOriginKey + 'is not valid');
          return false;
        }

        var tileUrl = tileOrigin.replace('{layerId}', layerName);
        report.map.reportLayers[layerId] = L.tileLayer(tileUrl, {tms: true});
      }
      var tileLayer = this.map.reportLayers[layerId];

      // if layer is present, run all remove layer actions
      if(this.map.hasLayer(tileLayer)){
        var layers = this.getLayers();
        // run all remove layer actions
        this.map.removeLayer(tileLayer);
        this.removeLayerButton(layerId);
        this.removeLegend(layerId);
        this.removeSummary();

        // if removed layer was highest layer, clear grids
        if(layerId === layers[layers.length -1]){
          this.clearGrids();
          // if 1+ more layers on map, add grid of the new top layer
          if(layers.length > 1){
            var nextLayerId = layers[layers.length -2];

            if(layersList != 'none') {

              this.getLayerJSON(nextLayerId,layersList).done(function(nextLayerJSON){
                report.addGrid(nextLayerId, nextLayerJSON);
                });
            }
          }
        }
      }else{
        // run all add layer actions:
        // add layer to map; add legend; move layer-ui button
        // show description summary; add grid; update hash

        // find zIndex of current top layer, or -1 if no current layers
        var layers = this.getLayers(),
            topLayerZIndex = this.getLayerZIndex(layers[layers.length -1]);

        this.map.addLayer(tileLayer);
        tileLayer.setZIndex(topLayerZIndex + 1);
        this.showLayerButton(layerId);

        if(layersList != 'none') {
            this.getLayerJSON(layerId,layersList).done(function(layerJSON){
              report.showLegend(layerId, layerJSON);
              report.showSummary(layerId, layerJSON);
              // not very smart: simply remove all grids and add for the new layer
              report.clearGrids();
              report.addGrid(layerId, layerJSON);
            });
        }
        
      }

      this.leaflet_hash.trigger('move');
    },

    getLayerJSON: function(inputMapId,layersList){
      // returns a promise object, that when resolved, contains JSON for mapId
      // assumes that map.moabiLayers.dataLayers[mapId] already exists and contains [mapId].tileLayer
      var JSONPromise = $.Deferred();
      if(! report.map.reportLayers[mapId].layerJSON){
        // run ajax request for layerJSON and when loaded, store in map.moabiLayers.dataLayers[mapId].layerJSON
        

/*
        $.ajax('/map_layers.json', {
          type: 'GET',
          dataType: 'json',
          contentType: 'application/json',
          success: function(layersJSON){
*/
            console.log("data from api");
            console.log(layersList);

            console.log("data from mapID");
            console.log(layersList[0].mapID);

            

            for (var i = 0; i < layersList.length; i++) {

              console.log('looping...');
              console.log(inputMapId);
              console.log("data from mapID 2");
              console.log(layersList[i].mapID);

              if (layersList[i].mapID == inputMapId) {
                console.log("inputMapId: ");
                console.log(inputMapId);


                // cache layerJSON in map.moabiLayers.dataLayers
                //report.map.reportLayers[mapId].layerJSON = layersJSON[mapId];

                // resolve promise object
                JSONPromise.resolve(layersList[i]);
              }
            }

        
      } else {
        JSONPromise.resolve(report.map.reportLayers[inputMapId].layerJSON);
      }
      return JSONPromise;
      // working with JSONPromise
      // moabi.getJSONPromise(mapId).done(function(result){
      //   console.log('returned layer name: ' + result.name);
      // }).fail(function(error){
      //   console.log('getJSON failed. Error: ' + error);
      // })
    },

    getVector: function(){
      // return id of vector featureLayer
        // currently, only one vector featureLayer can exist on the map
      reportVectors = report.map.reportVectors;
      for(mapId in reportVectors){
        if(report.map.hasLayer(reportVectors[mapId])){
          return mapId;
        }
      }
      return undefined;
    },

    getLayers: function(){
      // return an array of mapIds ordered by zIndex from lowest to highest
      // it is not guaranteed that a mapId's index in the array matches its zIndex
      var reportLayers = report.map.reportLayers,
          layersSortedByZIndex = [];

      for(mapId in reportLayers){
        var tileLayer = reportLayers[mapId];
        if(report.map.hasLayer(tileLayer)){
          layersSortedByZIndex[tileLayer.options.zIndex] = mapId;
        }
      }
      return layersSortedByZIndex.filter(function(n){
        return n != undefined;
      });
    },

    getLayerZIndex: function(mapId){
      // return mapId zIndex, or -1 if reportLayers doesn't contain mapId
      if(report.map.reportLayers[mapId]){
        return report.map.reportLayers[mapId].options.zIndex;
      }
      return -1;
    },

    setLayerZIndex: function(mapId, zIndex){
      report.map.reportLayers[mapId].setZIndex(zIndex);
    },

    setLayersZIndices: function(mapIds){
      var legendContents = $('.legend-contents');

      for(var i=0; i<mapIds.length; i++){
        // set zIndex for each mapId in array mapIds, arranged from lowest to highest
        report.map.setLayerZIndex(mapIds[i], i);

        // reorder legends
        legendContents.children('.report-legend[data-id="' + mapIds[i] + '"]')
                      .prependTo(legendContents);
      }
    },

    getDisplayedLayersButtons: function(){
      // return a jQuery object containing all layer buttons, sorted from bottom to top
      return $('.layer-ui ul.displayed li.layer-toggle');
    },

    getNotDisplayedLayersButtons: function(){
      return $('.layer-ui ul.not-displayed li.layer-toggle');
    },

    removeAllExcept: function(keepLayers) {
      // removes all layers from map, except for keepLayers (pass as array)
      // returns a list of removed layers
      if(! Array.isArray(keepLayers)){
        keepLayers = [keepLayers];
      }
      var displayedLayers = report.getLayers();
      return $.map(displayedLayers, function(removeLayer, index){
                report.keepLayers = keepLayers;
                report.removeLayer = removeLayer;

                if( keepLayers.indexOf(removeLayer) === -1){
                  report.changeLayer(removeLayer);
                  return removeLayer;
                }
              });
    },

    showLayerButton: function(mapId){
      // move layerButton from .not-displayed to .displayed
      var layerButton = report.getNotDisplayedLayersButtons().filter('[data-id="' + mapId + '"]'),
          displayed = $('.layer-ui .displayed');

      layerButton.addClass('active').prependTo(displayed);
    },

    showLegend: function(mapId, layerJSON){
      $('<div>', {
                  'class': 'report-legend space-bottom1',
                  'data-id': mapId,
                  html: layerJSON.legend
      }).prependTo('.map-legend .legend-contents');

      /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

});
    },

    removeLegend: function(mapId){
      $('.map-legend .moabi-legend[data-id="' + mapId + '"]').remove();
    },


    updateExportLink: function(hash) {
      // update map embed link and iD edit link
      $('#map-embed').val("<iframe src='///embed/" + hash + "' frameborder='0' width='900' height='700'></iframe>");

      if ($('#id-edit')) {
        var z_lat_lon = hash.split('&')[0].split('/'),
            zoom = z_lat_lon[0].replace("#", ""),
            lat = z_lat_lon[1],
            lon = z_lat_lon[2];

        $('#id-edit').attr('href', '//osm.moabi.org/edit?editor=id#map=' + zoom + '/' + lat + '/' + lon)
      }
    },

    // leaflet hash functions
    setLayerHash: function(hash) {
      return moabi.setQueryVariable(hash, "layers", moabi.getLayers().join(','));
    },

    getLayerHash: function() {
      var layers = moabi.getQueryVariable(location.hash, "layers");
      if (layers) {
        layers = layers.split(',');
        moabi.removeAllExcept([]); //could be smarter
        for (i=0; i<layers.length; i++){
          moabi.changeLayer(layers[i]);
        }
      }
    },


    removeLayerButton: function(mapId){
      // move layerButton from .displayed to where it was originally located in .not-displayed
      var layerButton = report.getDisplayedLayersButtons().filter('[data-id="' + mapId + '"]').removeClass('active'),
          layerButtonIndex = layerButton.data('index'),
          notDisplayedButtons = report.getNotDisplayedLayersButtons();
          console.log('notDisplayedButtons: ');
          console.log(notDisplayedButtons);
          console.log('length: ');
          console.log(notDisplayedButtons.length);

          // .eq is a jquery function that reduces the set of matched elements to the one at the specified index
          var notDisplayedButton = notDisplayedButtons.eq(i),
          notDisplayedButtonIndex = notDisplayedButton.data('index');

          if (notDisplayedButtons.length == 0) {
            console.log('hoorah');
            //notDisplayedButton.after(layerButton);
            $('.layer-ui ul.not-displayed ').append(layerButton);
          }

//need to imporove the logic here
      for(i=0; i<notDisplayedButtons.length; i++){
        
        // if button index is less than the smallest, insert at beginning
        if(i===0 && layerButtonIndex < notDisplayedButtonIndex){
          notDisplayedButton.before(layerButton);
          break;
        // else, if button index is greater than the largest, insert at end
        // this is what is inserting the layer in the available layers window
        }else if(i===notDisplayedButtons.length - 1 && layerButtonIndex > notDisplayedButtonIndex){
          notDisplayedButton.after(layerButton);
          break;
        // else, insert button before next-largest button index
        }else if(layerButtonIndex < notDisplayedButtonIndex){
          notDisplayedButton.before(layerButton);
          break;
        // else, if loop gets to end and hasn't broken, something's wrong
        }else if(i===notDisplayedButtons.length -1 && layerButtonIndex <= notDisplayedButtonIndex){
          console.log("WARNING: something's wrong with removeLayerButton()")
        }
      }

      console.log('end of function');

    },

     mapCapture: function(e) {
      e.preventDefault();
      e.stopPropagation();

      leafletImage(report.map, function(err, canvas) {
        var $imgContainer = $('#images'),
            download = document.getElementById('map-download');

        var mapCapture = document.createElement('img');
        mapImage = canvas.toDataURL();
        download.href = mapImage;
        mapCapture.src = mapImage;
        $imgContainer.children('img').remove();
        $imgContainer.append(mapCapture);
      });
    },


    slidePanel: function(e) {
          var $this = $(this),
              tabgroup = $this.parents('.tab-group'),
              index = $this.data('index'),
              oldIndex = $(this).siblings('.active').removeClass('active').data('index'),
              slidecontainer = $('.sliding');

          $this.addClass('active');
          slidecontainer.removeClass('active' + oldIndex).addClass('active' + index);
          return false;
        },

    showSummary: function(mapId, layerJSON){
      // remove existing summary, if exists


      report.removeSummary();

      var summary = ['<ul data-id="', mapId, '" class="layer-summary small keyline-all pad0x space-bottom2">',
        '<li class="pad0">', '<h3>', layerJSON.title, '</h3>', '</li>',
        '<li class="pad0 keyline-bottom">', layerJSON.abstract, '</li>',
        '<li class="pad0 keyline-bottom space">',
          '<strong class="quiet">Source: </strong>', //insert source_name and optionally source_url here
        '</li>',
      '</ul>'];

      if(layerJSON.source_url){
        var urlHTML = ['<a href="', layerJSON.source_url, '" class="micro">',
          layerJSON.source_name, '</a>']
      }else{
        var urlHTML = ['<span class="micro">', layerJSON.supplemental_information, '</span>'];
      }
      summary.splice(13, 0, urlHTML.join(''));

      $('.layer-ui').append(summary.join(''));
    },

    removeSummary: function(){
      $('.layer-ui ul.layer-summary').remove();
    },

    addGrid: function(mapId, layerJSON){
      if(! layerJSON.template){ return false; }
      var tilejson = {
        "tilejson":"2.1.0",
        "grids":["http://grids.osm.report.org/grids/" + mapId + "/{z}/{x}/{y}.json"],
        "template":layerJSON.template
      };
      report.gridLayer = L.mapbox.gridLayer(tilejson).addTo(report.map),
      report.gridControl = L.mapbox.gridControl(report.gridLayer).addTo(report.map);
    },

    clearGrids: function(){
      if (report.gridLayer){
        report.map.removeLayer(report.gridLayer);
      }
      $('.map-tooltip').remove();
    },

    updateExportLink: function(hash) {
      // update map embed link and iD edit link
      $('#map-embed').val("<iframe src='///embed/" + hash + "' frameborder='0' width='900' height='700'></iframe>");

      if ($('#id-edit')) {
        var z_lat_lon = hash.split('&')[0].split('/'),
            zoom = z_lat_lon[0].replace("#", ""),
            lat = z_lat_lon[1],
            lon = z_lat_lon[2];

        $('#id-edit').attr('href', '//osm.report.org/edit?editor=id#map=' + zoom + '/' + lat + '/' + lon)
      }
    },

    // leaflet hash functions
    setLayerHash: function(hash) {
      return report.setQueryVariable(hash, "layers", report.getLayers().join(','));
    },

    getLayerHash: function() {
      var layers = report.getQueryVariable(location.hash, "layers");
      if (layers) {
        layers = layers.split(',');
        report.removeAllExcept([]); //could be smarter
        for (i=0; i<layers.length; i++){
          report.changeLayer(layers[i]);
        }
      }
    },

    getQueryVariable: function(hash, variable) {
      var vars = hash.split("&");
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
      }
      return(false);
    },

    setQueryVariable: function(hash, key, value) {
      var vars = hash.split("&");
      var found = false;
      for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == key){
          vars[i] = key + "=" + value;
          found = true;
        }
      }
      if (! found) { vars.push(  key + "=" + value ); }
      return(vars.join("&"));
    },

     fade2Page: function(e) {
      // on link click, fade page out, then follow link
      e.preventDefault();
      var newPage = this.href;

      $('body').fadeOut(500, function(){
          window.location = newPage;
      });
    }


  };

  window.report = report;
  report.init();

})();
