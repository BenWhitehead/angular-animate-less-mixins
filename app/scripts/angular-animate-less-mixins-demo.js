'use strict';

angular.module('angularAnimateLessMixins', ['ngAnimate'])
  .controller('AngularAnimateLessMixinsCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.testing = {
      opacity: {
        if: false,
        class: false,
        show: false,
        hide: false
      },
      rotate: {
        if: false,
        class: false,
        show: false,
        hide: false
      },
      rotateY: {
        if: false,
        class: false,
        show: false,
        hide: false
      },
      rotateX: {
        if: false,
        class: false,
        show: false,
        hide: false
      }
    };
    $scope.toggleAll = function(obj) {
      obj.if = !obj.if;
      obj.class = !obj.class;
      obj.show = !obj.show;
      obj.hide = !obj.hide;
    };
  }])
;
