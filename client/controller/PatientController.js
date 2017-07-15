angular.module('tatluApp').controller('PatientController', function($scope, $http,fileUpload,$location,$rootScope) {
  var socket=io();

  $scope.dataSourcead1 =  { "chart": { "caption": "New Patient", "captionFontBold": "0", "captionFontSize": "20", "xAxisName": "Month",
   "xAxisNameFontSize": "15", "xAxisNameFontBold": "0",  "yAxisNameFontSize": "15", "yAxisNameFontBold": "0", "paletteColors": "#03A9F4",
    "plotFillAlpha": "80", "usePlotGradientColor": "0",  "bgcolor": "#", "bgalpha": "95", "canvasbgalpha": "0",
     "basefontcolor": "000002", "showAlternateHGridColor": "0", "divlinealpha": "50", "divlinedashed": "0", "toolTipBgColor": "#000",
      "toolTipPadding": "10", "toolTipBorderRadius": "5", "toolTipBorderThickness": "2", "toolTipBgAlpha": "62", "toolTipBorderColor": "#BBB",
       "rotateyaxisname": "1", "canvasbordercolor": "#000000", "canvasborderthickness": ".3", "canvasborderalpha": "100", "showValues": "0",
        "plotSpacePercent": "12" }, "data": [{ "label": "Jan", "value": "42" }, { "label": "Feb", "value": "81" },

         { "label": "Jun", "value": "51" }, { "label": "Jul", "value": "60" }, { "label": "Aug", "value": "62" },
          { "label": "Sep", "value": "61" }, { "label": "Oct", "value": "40" }, { "label": "Nov", "value": "90" },
           { "label": "Dec", "value": "73" }]}

     $scope.dataSourcead2 =  { "chart": { "caption": "TATLU Revenue", "captionFontBold": "0", "captionFontSize": "20", "xAxisName": "Month",
      "xAxisNameFontSize": "15", "xAxisNameFontBold": "0",  "yAxisNameFontSize": "15", "yAxisNameFontBold": "0", "paletteColors": "#8e44ad",
     "plotFillAlpha": "80", "usePlotGradientColor": "0",  "bgcolor": "#", "bgalpha": "95", "canvasbgalpha": "0",
      "basefontcolor": "000002", "showAlternateHGridColor": "0", "divlinealpha": "50", "divlinedashed": "0", "toolTipBgColor": "#000",
       "toolTipPadding": "10", "toolTipBorderRadius": "5", "toolTipBorderThickness": "2", "toolTipBgAlpha": "62", "toolTipBorderColor": "#BBB",
      "rotateyaxisname": "1", "canvasbordercolor": "#000000", "canvasborderthickness": ".3", "canvasborderalpha": "100", "showValues": "0",
     "plotSpacePercent": "12" }, "data": [{ "label": "Jan", "value": "42" }, { "label": "Feb", "value": "81" },

      { "label": "Jun", "value": "51" }, { "label": "Jul", "value": "60" }, { "label": "Aug", "value": "62" },
       { "label": "Sep", "value": "61" }, { "label": "Oct", "value": "40" }, { "label": "Nov", "value": "90" },
          { "label": "Dec", "value": "73" }]}
      $scope.dataSource =  { "chart": { "caption": "Your Health Goal", "captionFontBold": "0", "captionFontSize": "20", "xAxisName": "Month",
   "xAxisNameFontSize": "15", "xAxisNameFontBold": "0",  "yAxisNameFontSize": "15", "yAxisNameFontBold": "0", "paletteColors": "#2ECC71",
    "plotFillAlpha": "80", "usePlotGradientColor": "0",  "bgcolor": "#", "bgalpha": "95", "canvasbgalpha": "0",
    "basefontcolor": "000002", "showAlternateHGridColor": "0", "divlinealpha": "50", "divlinedashed": "0", "toolTipBgColor": "#000",
  "toolTipPadding": "10", "toolTipBorderRadius": "5", "toolTipBorderThickness": "2", "toolTipBgAlpha": "62", "toolTipBorderColor": "#BBB",
       "rotateyaxisname": "1", "canvasbordercolor": "#000000", "canvasborderthickness": ".3", "canvasborderalpha": "100", "showValues": "0",
    "plotSpacePercent": "12" }, "data": [{ "label": "Jan", "value": "42" }, { "label": "Feb", "value": "81" },

       { "label": "Jun", "value": "51" }, { "label": "Jul", "value": "60" }, { "label": "Aug", "value": "62" },
        { "label": "Sep", "value": "61" }, { "label": "Oct", "value": "40" }, { "label": "Nov", "value": "90" },
       { "label": "Dec", "value": "73" }]}

     $scope.dataSource1 =  { "chart": { "caption": "Your Risk Assessment", "captionFontBold": "0", "captionFontSize": "20", "xAxisName": "Month",
        "xAxisNameFontSize": "15", "xAxisNameFontBold": "0",  "yAxisNameFontSize": "15", "yAxisNameFontBold": "0", "paletteColors": "#DB0A5B",
           "plotFillAlpha": "80", "usePlotGradientColor": "0",  "bgcolor": "#", "bgalpha": "95", "canvasbgalpha": "0",
            "basefontcolor": "000002", "showAlternateHGridColor": "0", "divlinealpha": "50", "divlinedashed": "0", "toolTipBgColor": "#000",
       "toolTipPadding": "10", "toolTipBorderRadius": "5", "toolTipBorderThickness": "2", "toolTipBgAlpha": "62", "toolTipBorderColor": "#BBB",
            "rotateyaxisname": "1", "canvasbordercolor": "#000000", "canvasborderthickness": ".3", "canvasborderalpha": "100", "showValues": "0",
         "plotSpacePercent": "12" }, "data": [{ "label": "Jan", "value": "42" }, { "label": "Feb", "value": "81" },

        { "label": "Jun", "value": "51" }, { "label": "Jul", "value": "60" }, { "label": "Aug", "value": "62" },
         { "label": "Sep", "value": "61" }, { "label": "Oct", "value": "40" }, { "label": "Nov", "value": "90" },
          { "label": "Dec", "value": "73" }]}

$scope.refreshpat=function(){
  $http.get('/patient/patient').success(function (response) {
      $scope.patientList = response;
      $scope.patient={};

  });
}

$scope.refreshpat();


   $scope.refreshfacility = function () {
      $http.get('/facilityadm/facilityadm').success(function (response) {
          console.log(' READ IS SUCCESSFUL');
          $scope.FacilityList = response;
        });
      };
       $scope.refreshfacility();

  $scope.refreshdoctor = function () {
        $http.get('/doctor/doctor').success(function (response) {
            console.log(' READ IS SUCCESSFUL');
            $scope.doctorlist = response;
            $scope.doctor = "";
        });
    };


  $scope.refreshdoctor();

    $scope.refreshnurse = function () {
          $http.get('/nurse/nurse').success(function (response) {
              console.log(' READ IS SUCCESSFUL');
              $scope.nurselist = response;
              $scope.nurse="";
          });
      };

      $scope.refreshnurse();

      $scope.refreshncal = function () {
            $http.get('/cal/cal').success(function (response) {
                console.log(' READ IS SUCCESSFUL');
                $scope.callist = response;
                $scope.nurse="";
            });
        };

        $scope.refreshncal();
  $scope.refreshFrontdesk = function () {
      $http.get('/front/front').success(function (response) {
          console.log(' READ IS SUCCESSFUL');
          $scope.frontlist = response;
        });
      };
      $scope.refreshFrontdesk();


$scope.datepickerConfig = {
         allowFuture: false,
         dateFormat: 'DD/MM/YYYY'
     };

$scope.gender = ['Male', 'Female'];
$scope.resetpatient = function() {
  $scope.patient =


  {
    patientname: "",
    age: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    profileimage: "",
    userName: "",
    Password: "",
    cPassword: ""

  }



};
$scope.resetpatient();


var id;


$scope.showid=true;

$scope.genId=function(){

  var name = $scope.patient.firstName.substr(0, 4);

  if(name.length==4){

    id=name+ Math.random().toString(10).substr(2,4);

  } else if(name.length==3){

    id=name+"0"+ Math.random().toString(10).substr(2,4);

  } else if(name.length==2){

    id=name+"00"+ Math.random().toString(10).substr(2,4);
  }


  $scope.patient.id=id;

}


$scope.addpatient=function(){
      if($scope.patient.Password===$scope.patient.cPassword){

              var file =$scope.myFile;
              var uploadUrl = "/savedata";
              fileUpload.uploadFileToUrl(file, uploadUrl);

        $scope.patient.profileImage=$scope.myFile.name;
        $scope.patient.membershipType="No-Member";
        $scope.patient.UserType="Patient";

        $http.post('/patient/patient', $scope.patient).success(function (response) {
        console.log(response);

$rootScope.petientDetails=response;

        alert($scope.patient.id+"Registration completed!!!!");
        $location.path('/login');
        });

        $http.post('/api/signup', $scope.patient).then(function(response) {
                alert('patient Registration Successful');
            });
            $http.post('/online/online', $scope.patient).then(function(response) {
                });
      }else{

      alert("Your password is not matching...Try again");

      }

}









});
