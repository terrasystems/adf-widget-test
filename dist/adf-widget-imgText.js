(function(window, undefined) {'use strict';


angular.module('adf.widget.imgText', ['adf.provider'])
  .config(["dashboardProvider", function(dashboardProvider){
    dashboardProvider
      .widget('imgText', {
        title: 'Image with Text',
        description: 'Image with Text',
        templateUrl: '{widgetsPath}/imgText/src/view.html',
        edit: {
          templateUrl: '{widgetsPath}/imgText/src/edit.html'
        }
      });
  }]);

angular.module("adf.widget.imgText").run(["$templateCache", function($templateCache) {$templateCache.put("{widgetsPath}/imgText/src/edit.html","<form role=form><div class=form-group><label for=sample>Sample</label> <input type=text class=form-control id=sample ng-model=config.sample placeholder=\"Enter sample\"></div><div class=form-group><label for=sample>Url</label> <input type=url class=form-control id=sample ng-model=config.src placeholder=\"Enter image url\"></div></form>");
$templateCache.put("{widgetsPath}/imgText/src/view.html","<div style=\"background:url({{config.src}}) repeat center center fixed\"><h1>Widget view</h1><p>Content of {{config.sample}}</p></div>");}]);})(window);