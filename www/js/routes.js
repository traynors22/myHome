angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.accounts', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/accounts.html',
        controller: 'accountsCtrl'
      }
    }
  })

  .state('tabsController.help', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
      }
    }
  })

  .state('tabsController.myHome', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/myHome.html',
        controller: 'myHomeCtrl'
      }
    }
  })

  .state('tabsController.more', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/more.html',
        controller: 'moreCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')


});