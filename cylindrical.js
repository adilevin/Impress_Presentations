
// Class for positioning slides around aw cylinder.
function CylindricalArrangement() { 
	var slide_width = 1000;
	var slide_width_margin = 100;
	var slide_height = 800;
	var slide_height_margin = 100;
	var num_slides_per_turn = 6;
	var step_angle_degrees = 360 / num_slides_per_turn;
	var step_angle_radians = step_angle_degrees * 3.14159 / 180;
	var step_y = (slide_height + slide_height_margin) / num_slides_per_turn;
	var step_x = (slide_width + slide_width_margin) / num_slides_per_turn;
	var cylinder_radius = (slide_width + slide_width_margin) / step_angle_radians;
	
	this.position_step = function(element,index) {
		var c = Math.cos(step_angle_radians*index);
		var s = Math.sin(step_angle_radians*index);
		var z = (c-1)*cylinder_radius;
		var x = s*cylinder_radius;
		var y = step_y*index;
		var rotation_angle_y = Math.floor(step_angle_degrees*index) % 360;
		$(element).attr({"data-x":Math.floor(x),"data-y":Math.floor(y),"data-z":Math.floor(z),
			"data-rotate-y":rotation_angle_y});
	};
	
	return this;
}

// Arrange the steps around a cylinder
var steps = $(".step");
var cylindrical_arrangement = new CylindricalArrangement();
steps.each(function(index) {
	var s = cylindrical_arrangement.position_step(this,index);
});
