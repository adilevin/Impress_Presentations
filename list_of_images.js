
function calc_base_url_of_this_script()
{
	var cur_url = window.location.protocol + "//" + window.location.host + '/' + window.location.pathname;
	var this_element = document.getElementsByTagName("script");
	var path_to_this_js_file = this_element [ this_element.length - 1 ].src  
	var path_parts = path_to_this_js_file.split('/');
	path_parts.pop();
	return path_parts.join('/');
}

base_url_for_images = calc_base_url_of_this_script();

var list_of_images = [
    "tenfalls/20140510_155408340_iOS.jpg", 
    "tenfalls/20140510_155602463_iOS.jpg", 
    "tenfalls/20140510_155632483_iOS.jpg", 
    "tenfalls/20140510_160230815_iOS.jpg", 
    "tenfalls/20140510_160556261_iOS.jpg", 
    "tenfalls/20140510_160601616_iOS.jpg", 
    "tenfalls/20140510_160608921_iOS.jpg", 
    "tenfalls/20140510_160706288_iOS.jpg", 
    "tenfalls/20140510_160850374_iOS.jpg", 
    "tenfalls/20140510_161749123_iOS.jpg", 
    "tenfalls/20140510_162312034_iOS.jpg", 
    "tenfalls/20140510_162419713_iOS.jpg", 
    "tenfalls/20140510_162706107_iOS.jpg", 
    "tenfalls/20140510_163040764_iOS.jpg", 
    "tenfalls/20140510_163052592_iOS.jpg", 
    "tenfalls/20140510_163519412_iOS.jpg", 
    "tenfalls/20140510_164245354_iOS.jpg", 
    "tenfalls/20140510_165240714_iOS.jpg", 
    "tenfalls/20140510_170248221_iOS.jpg", 
    "tenfalls/20140510_170617505_iOS.jpg", 
    "tenfalls/20140510_170816845_iOS.jpg", 
    "tenfalls/20140510_171012267_iOS.jpg", 
    "tenfalls/20140510_171225371_iOS.jpg", 
    "tenfalls/20140510_171240049_iOS.jpg", 
    "tenfalls/20140510_171817518_iOS.jpg", 
    "tenfalls/20140510_172126147_iOS.jpg", 
    "tenfalls/20140510_172157731_iOS.jpg", 
    "tenfalls/20140510_173028056_iOS.jpg", 
    "tenfalls/20140510_173103696_iOS.jpg", 
    "tenfalls/20140510_173335082_iOS.jpg", 
    "tenfalls/20140510_174019526_iOS.jpg", 
    "tenfalls/20140510_175425510_iOS.jpg", 
    "tenfalls/20140510_175436513_iOS.jpg", 
    "tenfalls/20140510_175749166_iOS.jpg", 
    "tenfalls/20140510_175904224_iOS.jpg", 
    "tenfalls/20140510_181226358_iOS.jpg", 
    "tenfalls/20140510_181247199_iOS.jpg", 
    "tenfalls/20140510_182446019_iOS.jpg", 
    "tenfalls/20140510_182454488_iOS.jpg", 
    "tenfalls/20140510_182636531_iOS.jpg", 
    "tenfalls/20140510_182707889_iOS.jpg", 
    "tenfalls/20140510_183255880_iOS.jpg", 
    "tenfalls/20140510_184051484_iOS.jpg", 
    "tenfalls/20140510_184056956_iOS.jpg", 
    "tenfalls/20140510_184137633_iOS.jpg", 
    "tenfalls/20140510_184144909_iOS.jpg", 
    "tenfalls/20140510_190117518_iOS.jpg", 
    "tenfalls/20140510_194100872_iOS.jpg", 
    "tenfalls/20140510_194148191_iOS.jpg", 
    "tenfalls/20140510_194446214_iOS.jpg", 
    "tenfalls/20140510_195548309_iOS.jpg"
]