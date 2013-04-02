'use strict';

/* Controllers */

function MyCtrl1() {
}
MyCtrl1.$inject = [];

function MyCtrl2() {
}
MyCtrl2.$inject = [];

function MyCtrl($scope) {

  $scope.myValue = 'Hello World!';
  $scope.myAlert = function() {
    alert('myValue is "' + $scope.myValue + '"');
  }

}