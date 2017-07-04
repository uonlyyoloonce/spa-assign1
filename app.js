(function () {
'use strict';

angular.module('LunchCheckApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foods = '';
  $scope.msg = '';
  $scope.textStyle={};
  $scope.CheckStr=function (){
   var strtmp=$scope.foods;
   var strleng=strtmp.split(',').length;
   var counter=0;
   var emptyflag=false;
   for(var i=0;i<strleng;i++)
   {
      if (/\S/.test(strtmp.split(',')[i])) {
          counter++;  //check empty string or space
        }
        else if(strtmp.indexOf(',')>=0) emptyflag=true
   }
   if(counter>0 && counter<=3)
   {  $scope.textStyle={'color':'green'}
       $scope.boxStyle={
              'border-color':''
          }
       if(emptyflag) $scope.msg1=' do NOT consider and empty item, i.e., `, ,`';
      $scope.msg='enjoy';
    
   }else if (counter>3)
   {    $scope.textStyle={'color':'green'}
       $scope.boxStyle={
              'border-color':''
          }
      if(emptyflag) $scope.msg1=' do NOT consider and empty item, i.e., `, ,`';
          $scope.msg='Too much!';
         
   }
   else if (counter==0 )
   {
          $scope.textStyle={
              'color':'red'
          }
           $scope.boxStyle={
              'border-color':'red'
          }
       if(emptyflag) $scope.msg1=' do NOT consider and empty item, i.e., `, ,`';
          $scope.msg='Please enter data first';

     
         
   }
   
  }
}

})();
