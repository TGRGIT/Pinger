// Filename: views/header.js
define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!../templates/header.html'
], function($, _, Backbone, headerTemplate){
  var HeaderView = Backbone.View.extend({
    el: $('#header'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {projectName: 'Pinger'};
      var template = _.template( headerTemplate);
      // Append our compiled template to this Views "el"
      this.$el.append( template( data ));
    }
  });
  // Our module now returns our view
  return HeaderView;
});