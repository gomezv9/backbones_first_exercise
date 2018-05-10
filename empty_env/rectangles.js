(function(){

	var Rectangle = Backbone.Model.extend({
		defaults: {
			'type': 'rectangle'
		}
	});

	var RectangleView = Backbone.View.extend({

		tagName: 'div',
		
		className: 'rectangle',

		events: {
			'click': 'move'
		},

		render: function(){
			this.setDimensions();
			this.setPosition();
			this.setColor();
			return this
		},

		setDimensions: function(){
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		setPosition: function(){
			var position = this.model.get('position');
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

		setColor: function(){
			this.$el.css({
				'background-color': this.model.get('color')
			});
		},

		move: function(){
			this.$el.css({
				'left': this.$el.position().left + 10
			});
			console.log(this.model.has('width')); // show the property has
		}

	});

	var  rectanglesModels = [];

	rectanglesModels = [

		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 100,
				y: 150
			},
			color: "#f34533"
		}),

		new Rectangle({
			width: 500,
			height: 30,
			position: {
				x: 200,
				y: 150
			},
			color: "#f00"
		}),

		new Rectangle({
			width: 50,
			height: 60,
			position: {
				x: 500,
				y: 150
			},
			color: "#000"
		})

	]; 

	_(rectanglesModels).each(function(model){
		var myView = new RectangleView({model:model});

		$('div#canvas').append(myView.render().el);
		console.log(model.get('type')); // show the default atributte
	});

	

})();