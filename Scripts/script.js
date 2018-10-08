var app = angular
  .module("Demo", ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "Templates/home.html",
        controller: "homeController"
      })
      .when("/courses", {
        templateUrl: "Templates/courses.html",
        controller: "coursesController"
      })
      .when("/students", {
        templateUrl: "Templates/students.html",
        controller: "studentsController"
      });
  })
  .controller("homeController", function($scope) {
    console.log("asdasd")
    $scope.message = "Home page";
  })
  .controller("coursesController", function($scope) {
    $scope.courses = ["c#", "java", "oops"];
  })
  .controller("studentsController", [
    "$scope",
    "$http",
    function($scope, $http) {
      $http
        .get("http://localhost:8000/students.json")
        .success(function(data) {
          $scope.students = data;
        });
    }
  ]);
