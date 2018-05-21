
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
// test
//more test
var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
	model: Song
});

var SongView = Backbone.View.extend({

	events: {
		"click .bookmark": "onClickBookmark"
	},

	onClickBookmark: function(e){
		e.stopPropagation();
		console.log("Bookmark Clicked");
	},

	render: function(){
		this.$el.append("<br><span>"+this.model.get("title")+"</span> <button class='bookmark'>Bookmark</button>");
		return this;
	}

});
var songs = new Songs([
	new Song({ title: "Blue in Green"}),
	new Song({ title: "So What"}),
	new Song({ title: "All Blues"})
]);

songs.each(function(model) {
	var songView = new SongView({ el: "#container", model: model});
	songView.render();
});



var found = songs.find(function(item){
	return item.get("title") === "So What";
});
console.log("find 1: ",found.toJSON());

var found2 = songs.findWhere({title: "So What"});
console.log("find 2: ",found2.toJSON());

songs.on('change', function(model) {
	console.log("Model Changed: ", model.toJSON());
});

found2.set("title","So What Changed");

console.log(songs);


