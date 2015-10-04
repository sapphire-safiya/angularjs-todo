var toDoApp = angular.module('toDoApp',["taskControllers"]);

var taskControllers = angular.module('taskControllers',['ngStorage']);

taskControllers.controller('taskController',['$scope','$localStorage',function($scope,$localStorage){
    
    $scope.storage =  $localStorage.$default({'tasks':['No tasks yet!']});
    $scope.priorities = ["low","medium","high"];
    $scope.title = '';
    
    $scope.addTask = function(){
      if($scope.title != '')
      {
        $scope.storage.tasks.push(task($scope.title,$scope.priority));
        $scope.priority = $scope.priorities[0];
        $scope.title = '';
      }
    };
    
    $scope.priority = $scope.priorities[0];
    
}]);