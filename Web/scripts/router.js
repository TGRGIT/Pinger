// Filename: router.js
console.log("router entered");

define([
  'jquery',
  'underscore',
  'backbone',
  '../views/home',
  '../views/header'
], function($, _, Backbone, HomeView, HeaderView, ContactsView){
  console.log("inner");
  var AppRouter = Backbone.Router.extend({
    routes: {
      '' : 'home',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    
    app_router.on('route:home', function(){
      var headerView = new HeaderView();
      var homeView = new HomeView();
      headerView.render();
      homeView.render();
    });
                  
    app_router.on('defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      console.log('No route:', actions);
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});