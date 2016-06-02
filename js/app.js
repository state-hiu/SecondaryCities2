$(document).foundation();

(function(){

/*
  $('.slider').on('click', 'a', function() {
    console.log( "clicked" );
}); 
*/

  var report = {
    init: function(){
      L.mapbox.accessToken = 'pk.eyJ1IjoiaGl1IiwiYSI6InJWNGZJSzgifQ.xK1ndT3W8XL9lwVZrT6jvQ';
      report.map = L.mapbox.map('map', '', {
        attributionControl: false
      });


/*
      report.map = L.mapbox.map('map', 'james-lane-conkling.5630f970',{
        center: pageConfig.latlng,
        zoom: pageConfig.zoom,
        minZoom: 4,
        maxZoom: 16,
        scrollWheelZoom: true,
        attributionControl: false,
        zoomControl: false // we'll add later
      });
      */

      $('.layer-ui li.layer-toggle').on('click', 'a', this.layerButtonClick);
      //jquery function, will make layers sortable in the Displayed Map Layers window
/*
      $('.sortable').sortable({
        placeholder: "ui-state-highlight",
        helper: 'clone',
        update: this.layerSortedUpdate
      });
*/
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
            console.log("about or data tab clicked!");
            $( "iframe").remove();
            $( "#sidebar" ).show();
            $( "#map" ).show();
            flag=0;
            return;
          }
      });

      



      // Use styleLayer to add a Mapbox style created in Mapbox Studio
      L.mapbox.styleLayer('mapbox://styles/mapbox/light-v9',{
        center: pageConfig.latlng,
        zoom: pageConfig.zoom,
        minZoom: 4,
        maxZoom: 16,
        scrollWheelZoom: true,
        zoomControl: false // we'll add later
      }).addTo(this.map);

      // extend map object to contain reference to all layers
      var shareControl = L.control({position: 'topleft'});
      // https://developers.facebook.com/docs/sharing/reference/share-dialog
      shareControl.onAdd = function(){
        var controlHTML = $('<div>', {
          class: 'leaflet-bar leaflet-control',
        });
        var fbButton = $('<a>',{
          class: 'mapbox-icon mapbox-icon-facebook',
          href: '#'
        })
        var twitterButton = $('<a>',{
          class: 'mapbox-icon mapbox-icon-twitter',
          href: '#'
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

      $.extend(this.map, {
        reportLayers: {},
        reportVectors: {},
        reportControls: {
          //zoom: L.control.zoom({position: 'topleft'}).addTo(this.map),
          scale: L.control.scale({position: 'bottomleft'}).addTo(this.map),
          infoControl: infoControl.addTo(this.map),
          share: shareControl.addTo(this.map)
        }
      });

      // event handlers
      // helper function to return latlng on map click; useful for drafting stories--comment out at production
      this.map.on('click', function(e){
        console.log(e.latlng);
      });

      $('#report section').waypoint(this.reportScroll, {
        context: '#report',
        offset: '70%'
      });

      // $('.navigate').on('click', 'a', this.navigate);

      // refresh all Waypoints when window resizes
      // (docs say this happens automatically, but doesn't appear so: http://imakewebthings.com/waypoints/api/refresh-all/)
      $(window).on('resize', function(){
        Waypoint.refreshAll();
      });
    },

    reportScroll: function(direction) {
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
            report.changeLayer(displayedLayerId);
          }
        }
        // add all newLayerIds unless they are already present
        for(i=0; i<newLayerIds.length; i++){
          var newLayerId = newLayerIds[i],
              newTileLayer = report.map.reportLayers[newLayerId];
          if(! report.map.hasLayer(newTileLayer)){
            report.changeLayer(newLayerId);
          }
        }
      }else{
        // if no newLayers, remove all displayed layers
        for(i=0; i<displayedLayerIds.length; i++){
          report.changeLayer(displayedLayerIds[i]);
        }
      }

      if(newVectorId && newVectorId != displayedVectorId){
        report.changeVector(newVectorId);
      }else if(displayedVectorId){
        // if no new vector data to add, and existing vector data, remove existing vector data
        report.changeVector(displayedVectorId);
      }

    },

    // map interaction functions
    // navigate: function(e) {
    //   e.preventDefault();
    //   e.stopPropagation();

    //   var $this = $(this),
    //       lat = $this.data("nav")[0],
    //       lon = $this.data("nav")[1],
    //       zoom = $this.data("nav")[2];

    //   report.map.setView([lat, lon], zoom);

    //   $this.parent('li').siblings('li').children('a.active').removeClass('active');
    //   $this.addClass('active');
    // },

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

    layerButtonClick: function(e){
      e.preventDefault();
      e.stopPropagation();

      report.map.changeLayer($(this).parent('li').data('id'));
    },

    layerSortedUpdate: function(e, ui){
      var displayedButtonContainer = $(this),
          layers = report.map.getLayers(),
          newTopButtonId = displayedButtonContainer.children('li:first').data('id');

      moabi.getLayerJSON(newTopButtonId).done(function(topLayerJSON){
        // unless new top button is the same as the old top button, add grids and summary of new topButton
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
    },

    changeLayer: function(layerId){
      // initiate everything that should happen when a map layer is added/removed

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

      // if layer is present, remove layer
      if(this.map.hasLayer(tileLayer)){
        this.map.removeLayer(tileLayer);
      }else{
        // find zIndex of current top layer, or -1 if no current layers
        var layers = this.getLayers(),
            topLayerZIndex = this.getLayerZIndex(layers[layers.length -1]);

        this.map.addLayer(tileLayer);
        tileLayer.setZIndex(topLayerZIndex + 1);
      }

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
      var displayedLayers = moabi.getLayers();
      return $.map(displayedLayers, function(removeLayer, index){
                moabi.keepLayers = keepLayers;
                moabi.removeLayer = removeLayer;

                if( keepLayers.indexOf(removeLayer) === -1){
                  moabi.changeLayer(removeLayer);
                  return removeLayer;
                }
              });
    },

    showLayerButton: function(mapId){
      // move layerButton from .not-displayed to .displayed
      var layerButton = report.map.getNotDisplayedLayersButtons().filter('[data-id="' + mapId + '"]'),
          displayed = $('.layer-ui .displayed');

      layerButton.addClass('active').prependTo(displayed);
    },

    showLegend: function(mapId, layerJSON){
      $('<div>', {
                  'class': 'moabi-legend space-bottom1',
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

    removeLayerButton: function(mapId){
      // move layerButton from .displayed to where it was originally located in .not-displayed
      var layerButton = report.map.getDisplayedLayersButtons().filter('[data-id="' + mapId + '"]').removeClass('active'),
          layerButtonIndex = layerButton.data('index'),
          notDisplayedButtons = moabi.getNotDisplayedLayersButtons();

      for(i=0; i<notDisplayedButtons.length; i++){
        var notDisplayedButton = notDisplayedButtons.eq(i),
            notDisplayedButtonIndex = notDisplayedButton.data('index');
        // if button index is less than the smallest, insert at beginning
        if(i===0 && layerButtonIndex < notDisplayedButtonIndex){
          notDisplayedButton.before(layerButton);
          break;
        // else, if button index is greater than the largest, insert at end
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

    },

     mapCapture: function(e) {
      e.preventDefault();
      e.stopPropagation();

      leafletImage(moabi.map, function(err, canvas) {
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
      moabi.removeSummary();
      var summary = ['<ul data-id="', mapId, '" class="layer-summary small keyline-all pad0x space-bottom2">',
        '<li class="pad0">', '<h3>', layerJSON.name, '</h3>', '</li>',
        '<li class="pad0 keyline-bottom">', layerJSON.description, '</li>',
        '<li class="pad0 keyline-bottom space">',
          '<strong class="quiet">Source: </strong>', //insert source_name and optionally source_url here
        '</li>',
        '<li class="pad0 space">',
          '<strong class="quiet">Date:</strong> ',
          '<span class="micro">', layerJSON.date, '</span>',
        '</li>',
      '</ul>'];

      if(layerJSON.source_url){
        var urlHTML = ['<a href="', layerJSON.source_url, '" class="micro">',
          layerJSON.source_name, '</a>']
      }else{
        var urlHTML = ['<span class="micro">', layerJSON.source_name, '</span>'];
      }
      summary.splice(13, 0, urlHTML.join(''));

      $('.layer-ui').append(summary.join(''));
    },

    removeSummary: function(){
      $('.layer-ui ul.layer-summary').remove();
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
