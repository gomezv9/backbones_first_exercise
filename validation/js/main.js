
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
	validate: function(attrs){
		if (!attrs.title)
			return "Title is required";
	}
});

var song = new Song();

song.isValid();

var lastError = song.validationError;

console.log("Song Error: ",lastError);


var Model = Backbone.Model.extend({
	url: "/users",
	defaults: {
		first: "Jaime",
		last: "Gomez",
		email: "jg@gmail.com"
	},
	validate: function(atts,ops){
		if(atts.first === "Carl"){
			return "No Carl's allowed!";
		}
	}
});

var m = new Model({first:"Carl"});
console.log("Model Validation: ", m.isValid());
console.log("Model Error: ", m.validationError);