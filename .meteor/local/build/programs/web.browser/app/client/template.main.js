(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.Raw("<h1>Welcome to Meteor!</h1>");
}));
Meteor.startup(Template.body.renderToDocument);

}).call(this);
