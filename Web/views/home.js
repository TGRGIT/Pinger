// Filename: views/home.js
define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!../templates/home.html',
  'text!../templates/messager.html',
  'text!../templates/contacts.html'
], function($, _, Backbone, homepageTemplate, messagerTemplate, contactsTemplate){
  var HomeView = Backbone.View.extend({
    el: $('#activityPlain'),
    render: function(){
      var messager = _.template( messagerTemplate);
      var contacts = _.template( contactsTemplate);
      
      var template = _.template( homepageTemplate);
      // Append our compiled template to this Views "el"
      this.$el.append(template({messager: messager(), contacts: contacts()}));
    }
  });
  // Our module now returns our view
  return HomeView;
});