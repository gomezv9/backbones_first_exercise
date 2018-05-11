var M = Backbone.Model.extend(); // Create the model

var C = Backbone.Collection.extend();

var V = Backbone.View.extend({ // Create the view

	template: _.template($("#latlon-template").html()), // Looking for the template

	render: function(){
		// Assign the model to the template
		var el = $(this.el);
		el.append(this.template(this.model.toJSON())); 
		return this;
	}
});

// Create a model object with data
var model = new M({
	lat: "34",
	lon: "23"
});

var model2 = new M({
	lat: "343",
	lon: "234"
});

var collection = new C;

collection.add(model);
collection.add(model2);

collection.each(function(model) {
	// Assign the model data to the view
	var view = new V({model: model});
	// Render the view inside the div
	$('div#canvas').append(view.render().el);
	
});






