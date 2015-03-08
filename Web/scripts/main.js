require.config({
  paths: {
    jquery: '../3p/jquery-2.1.3',
    underscore: '../3p/underscore',
    backbone: '../3p/backbone',
    text: '../3p/text'
  },
  
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});