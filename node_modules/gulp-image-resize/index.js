/*
 * grunt-image-resize
 * https://github.com/scalableminds/gulp-image-resize
 *
 * Copyright (c) 2014 Norman Rzepka
 * Licensed under the MIT license.
 */

var gm          = require("gulp-gm");
var async       = require("async");
var _           = require("lodash");

module.exports = function imageResizer(_options) {

  _options = _.defaults(_options, {
    overwrite   : true,
    upscale     : false,
    crop        : false,
    gravity     : "Center",
    quality     : 1,
    sharpen     : false,
    imageMagick : false,
    format      : null
  });

  return gm(function(gmfile, done) {

    async.waterfall([

      function (callback) {
        gmfile.size(callback);
      },

      function (size, callback) {

        var options = JSON.parse(JSON.stringify(_options)); // fix: we must make a copy, because we will change it!

        if (options.filter != null) {
          gmfile = gmfile.filter(options.filter);
        }

        if (options.height != null || options.width != null) {

          // if upscale is not requested, restrict size 
          if(!options.upscale){
            // Math.min(undefined, 5) will return NaN, so it can stay undefined
            options.width  = Math.min(options.width, size.width); 
            options.height = Math.min(options.height, size.height);
          }
          
          // if one dimension is not set - we fill it proportionally
          if (!options.height) {
            if (options.crop) {
              options.height = size.height;
            } else {
              options.height = Math.ceil((options.width / size.width) * size.height);
            }
          }
          if (!options.width) {
            if (options.crop) { 
              options.width = size.width;
            } else {
              options.width = Math.ceil((options.height / size.height) * size.width);
            }
          }

          if (options.crop) {
            gmfile = gmfile
              .resize(options.width, options.height, "^")
              .gravity(options.gravity)
              .crop(options.width, options.height);
          } else {
            gmfile = gmfile
              .resize(options.width, options.height);
          }

        }

        if (options.format) {
          gmfile = gmfile
            .setFormat(options.format);
        }

        if (options.quality !== 1) {
          gmfile = gmfile.quality(Math.floor(options.quality * 100));
        }


        if (options.samplingFactor != null) {
          gmfile = gmfile
            .samplingFactor(options.samplingFactor[0], options.samplingFactor[1]);
        }

        if (options.sharpen) {
          options.sharpen = (typeof options.sharpen === 'string') ?  options.sharpen : '1.5x1+0.7+0.02';
          gmfile = gmfile.unsharp(options.sharpen);
        }

        if (options.background) {
          gmfile = gmfile.background(options.background);
        }

        callback(null, gmfile);
      }

    ], done);

  }, { imageMagick : _options.imageMagick });

};

