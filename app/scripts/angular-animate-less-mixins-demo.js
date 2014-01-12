'use strict';

angular.module('angularAnimateLessMixins', ['ngAnimate'])
  .controller('AngularAnimateLessMixinsCtrl', ['$scope', '$log', function($scope, $log) {
    var init = function(obj) {
      obj.if = false;
      obj.class = false;
      obj.show = false;
      obj.hide = false;
    };
    $scope.testing = {
      opacity: {},
      rotate: {},
      rotateY: {},
      rotateX: {},
      scale: {},
      skew: {}
    };
    init($scope.testing.opacity);
    init($scope.testing.rotate);
    init($scope.testing.rotateX);
    init($scope.testing.rotateY);
    init($scope.testing.scale);
    init($scope.testing.skew);

    $scope.toggleAll = function(obj) {
      obj.if = !obj.if;
      obj.class = !obj.class;
      obj.show = !obj.show;
      obj.hide = !obj.hide;
    };
  }])
;
