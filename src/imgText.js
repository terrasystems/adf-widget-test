'use strict';

angular.module('adf.widget.imgText', ['adf.provider'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('imgText', {
        title: 'Image with Text',
        description: 'Image with Text',
        templateUrl: '{widgetsPath}/imgText/src/view.html',
        edit: {
          templateUrl: '{widgetsPath}/imgText/src/edit.html'
        }
      });
  });
