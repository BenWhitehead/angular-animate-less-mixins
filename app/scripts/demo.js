/*!
 * Angular Animate LESS Mixins v0.1.1 by BenWhitehead
 * Copyright 2014 BenWhitehead
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

'use strict';

angular.module('angularAnimateLessMixins', ['ngAnimate'])
  .controller('AngularAnimateLessMixinsCtrl', ['$scope', function($scope) {
    var init = function(obj) {
      obj.if = false;
      obj.class = false;
      obj.show = false;
      obj.hide = false;
    };
    $scope.testing = {
      animation: {},
      opacity: {},
      perspective: {},
      rotate: {},
      rotateY: {},
      rotateX: {},
      scale: {},
      skew: {},
      translate: {},
      translate3d: {}
    };
    init($scope.testing.animation);
    init($scope.testing.opacity);
    init($scope.testing.perspective);
    init($scope.testing.rotate);
    init($scope.testing.rotateX);
    init($scope.testing.rotateY);
    init($scope.testing.scale);
    init($scope.testing.skew);
    init($scope.testing.translate);
    init($scope.testing.translate3d);

    $scope.toggleAll = function(obj) {
      obj.if = !obj.if;
      obj.class = !obj.class;
      obj.show = !obj.show;
      obj.hide = !obj.hide;
    };
    $scope.toggleEverything = function() {
      $scope.toggleAll($scope.testing.animation);
      $scope.toggleAll($scope.testing.opacity);
      $scope.toggleAll($scope.testing.perspective);
      $scope.toggleAll($scope.testing.rotate);
      $scope.toggleAll($scope.testing.rotateX);
      $scope.toggleAll($scope.testing.rotateY);
      $scope.toggleAll($scope.testing.scale);
      $scope.toggleAll($scope.testing.skew);
      $scope.toggleAll($scope.testing.translate);
      $scope.toggleAll($scope.testing.translate3d);
    };
  }])
;
