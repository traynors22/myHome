// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

.config(function($ionicConfigProvider, $sceDelegateProvider){

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",  
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });
      
      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});

var devKey ="e73af7a07f5347dda1f4779eca3ae604";
var bearer= "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE1MjM3NTU2NTYsIm5iZiI6MTUyMzc1MjA1NiwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2Q1Zjg1NjgyLWY2N2EtNDQ0NC05MzY5LTJjNWVjMWEwZThjZC92Mi4wLyIsInN1YiI6IjQ5MTcyMjgzLWNhOTUtNGYxYy04YmI1LWY3YTI1ZDQ2MDZlYyIsImF1ZCI6IjQwOTU3YjljLTYzYmMtNGFiNC05ZWNiLTY3YjU0M2M4ZTRjYSIsIm5vbmNlIjoiZGVmYXVsdE5vbmNlIiwiaWF0IjoxNTIzNzUyMDU2LCJhdXRoX3RpbWUiOjE1MjM3NTIwNTYsIm9pZCI6IjQ5MTcyMjgzLWNhOTUtNGYxYy04YmI1LWY3YTI1ZDQ2MDZlYyIsIm5hbWUiOiJ0cmF5bm9yczIyIiwiZmFtaWx5X25hbWUiOiJUcmF5bm9yIiwiZ2l2ZW5fbmFtZSI6IlN0ZXBoZW4iLCJlbWFpbHMiOlsidHJheW5vcnMyMkBnbWFpbC5jb20iXSwidGZwIjoiQjJDXzFfQmx1ZUJhbmtTVVNJIn0.ELCEvvwYt1meOXcZ9bKlo4M2D4UMPTCS6HSXEpa5P-Q6b8HGObRLStEU7bvI7nPgK7foMTlqcSpSyDGOuew8F0AEJXZPFwveUJhdP5RQedFQNYDpqK2beCn6Odlc1OCJyv81VOPLTsFbRbkBbJ3-L0blDdDItUentfVuXbTcRBK49QA920wbjhnf7z548wQn8V6diPcL-gqmytOJi2n1W5--lESW0tZy9GsnFEYDjuAsemck2Fvsb-JnrLdd1lIcCXO3PEkcOmXap1GiViPpPJcsJKIgzN8RukFBy-A8XDms69-R_7LqiiesHwftu8K8GONi14jNPY022tk8Nwd8kQ"
var url1 = "https://bluebank.azure-api.net/api/v0.7/";
var accountID = "0361d0ec-959f-4ce3-970c-a05a77a2609c";
var customerID = "49172283-ca95-4f1c-8bb5-f7a25d4606ec";
//var urlGetAccountDetails = "https://bluebank.azure-api.net/api/v0.7/accounts/0361d0ec-959f-4ce3-970c-a05a77a2609c";
//var urlGetTransations ="https://bluebank.azure-api.net/api/v0.7/accounts/0361d0ec-959f-4ce3-970c-a05a77a2609c/transactions";
var urlGetAccountDetails = url1+"accounts/"+accountID;
var urlGetTransations =url1+"accounts/"+accountID+"/transactions";
var urlGetCustomer = url1+"customers";
//var urlGetCustomer = "https://bluebank.azure-api.net/api/v0.7/customers";
var urlGetCustomerID = urlGetCustomer+"/"+customerID;
var urlGetAllAccounts= urlGetCustomerID +"/accounts";




function showMyOffer() {
    // getAccountDetails(urlGetAccountDetails); 
     //getCustomerDetails(urlGetCustomerID);  
     getTransactionDetails(); 
     //getAllAccounts();     
}

function getAccountDetails(url) {
              

$.ajax({
              url: url,beforeSend: function(xhrObj){
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",devKey);
                    xhrObj.setRequestHeader("Authorization",bearer);
                        },
                        type: "GET",
                        })
                         .done(function(data) {
                          console.log('get request on bluebank API'); 
                                                //Got a customers response
                                                //var customerId=data.id;
                                                var currency="";
                                                if( data.accountCurrency=="GBP"){
                                                currency="£";
                                                }else if( data.accountCurrency=="USD"){
                                                currency="$";
                                                }else if( data.accountCurrency=="EUR"){
                                                currency="€";
                                                }else{
                                                currency="£"
                                                }
                                               
                                                console.log("Your %s balance is: %s%s", data.accountFriendlyName ,currency ,data.accountBalance);




                                                })
}

function getCustomerDetails(url) {
              

$.ajax({
              url: url,beforeSend: function(xhrObj){
                    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",devKey);
                    xhrObj.setRequestHeader("Authorization",bearer);
                        },
                        type: "GET",
                        })
                         .done(function(data) {
                          console.log('get customer details via bluebank API'); 
                          $("#TestInput").append(data.address1);
                                                
                                               
                                                console.log("Your address is: %s , %s , %s", data.address1 ,data.county ,data.postCode);




                                                })
}

function getTransactionDetails(){

$.ajax({
  url: urlGetTransations+"?sortOrder=-transactionDateTime&limit=20",
  beforeSend: function(xhrObj){
                                                                                                                // Request headers
    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",devKey);
    xhrObj.setRequestHeader("Authorization",bearer);
         },
           type: "GET",
            })
            .done(function(data) {
             //Got an accounts/{id}/transactions response
              console.log("Most recent 20 transactions:");
 
  var data = $.parseJSON(JSON.stringify(data));
            console.log(data);
                            $.each(data.results, function(i, post) {
                                //content += '<li>' + post.post_title + '</li>';
                                console.log("Transaction: "+post.transactionDescription);
                            });
              //Dump out transactions to the console
              //for (var key in data) {
                  //if (data.hasOwnProperty(key)) {
                    //var element = data[key];
                    //}
                    //console.log("    %s    Amount=%s    Balance=%s",element.transactionDateTime,element.transactionAmount,element.accountBalance);
                      //}



                      })
                      .fail(function(err) {
                       //Didn't get an accounts/{id}/transactions response
                        console.log("No response from GET /accounts/{id}/transactions");
                        console.dir(err);
                         });
}

function getAllAccounts(){

$.ajax({
  url: urlGetAllAccounts,
  beforeSend: function(xhrObj){
                                                                                                                // Request headers
    xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key",devKey);
    xhrObj.setRequestHeader("Authorization",bearer);
         },
           type: "GET",
            })
            .done(function(data) {
             //Got an accounts/{id}/transactions response
              console.log("got all account details"+data.results);
 
            var data = $.parseJSON(JSON.stringify(data));
            console.log(data);
                            $.each(data.results, function(i, post) {
                                //content += '<li>' + post.post_title + '</li>';
                                console.log("Account: "+post.accountFriendlyName);
                            });
                      })
                      .fail(function(err) {
                       //Didn't get an accounts/{id}/transactions response
                        console.log("No response from GET customers/{id}/accounts");
                        console.dir(err);
                         });
}

