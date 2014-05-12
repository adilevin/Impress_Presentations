// Add one step per image*
// Assumes that list_of_images is a list of valid image urls.
for(var i=list_of_images.length-1;i>=0;--i) { $("#impress").prepend('<div class="step" data-img-index="' + String(i) + '"></div>'); }
var steps = $(".step");
	
function create_image_loader(index)
{
	return function() {
		var i = index;
		var step = steps[i];
		var b = $(step).find('.img_container');
		if (b.length>0) {
			return;
		}
		var div = $('<div class="img_container"></div>').appendTo(steps[i]);
		var img_path=list_of_images[i];
		div.css("background-image",'url(file:///'+img_path+')');
	};
}

$("#impress").on("impress:stepgoto",
	function(event)
	{
		var img_index = Number($(event.target).data('img-index'));
		create_image_loader(img_index+1)();
		create_image_loader(img_index)();
		create_image_loader(img_index-1)();
	}
);