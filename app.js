angular.module('myApp', [])
   .controller('buttonCtrl', function($scope) {
    $scope.score = 0;
    $scope.total = 0;
    $scope.answer = false;
    $scope.isDisabled = false;
    $scope.choose = function() {
      var decisions = document.getElementsByName('Q1');
        if (decisions[1].checked === false) {
          $scope.total++;
          $scope.isDisabled = true;
          return $scope.display = "You've answered " + $scope.score + "/" + $scope.total + " correctly!";
        } else {
          $scope.score++;
          $scope.total++;
          $scope.isDisabled = true;
          return $scope.display = "You've answered " + $scope.score + "/" + $scope.total + " correctly!";
        }
    }
  });
  // .factory('levelUp', function($scope.answer, $scope.score, $scope.total) {
  //     var addToScore = function() {
  //       if ($scope.answer === true) {
  //         $scope.score++;
  //         $scope.total++;
  //         return $scope.display;
  //       } else {
  //         $scope.total++;
  //         return $scope.display;
  //       }
  //   };

  //   return {
  //     levelUp: levelUp
  //   };
  // });
