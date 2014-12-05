/*
(100% FREE)
------------------------------------------------------------------------------------------
Script Name: infscroll.js  v1.0 2014
------------------------------------------------------------------------------------------
Usage : 
		in <head> Tag : 	<script type="text/javascript" src="jquery.js"></script>
							<script type="text/javascript" src="infscroll.min.js"></script>						 
-------------------------------------------------------------------------------------------
By : 	   Saeed Abdollahian
Gmail :    Saeed.es91@gmail.com
Website:   www.gowebdev.ir
------------------------------------------------------------------------------------------
infscroll.js (2.3 KB)
infscroll.min.js (864 Byte)
------------------------------------------------------------------------------------------
Test : [Google Chrome = OK ]
	   [Firefox = OK ]
	   [Internet Explorer 11 = OK ]
------------------------------------------------------------------------------------------
/* -------------------------------------------------------- */
$("#showloading").fadeOut();
/* Variables */
var max_scroll=0;
var current_scroll=0;
var tm=null;
// Use In Browser Console:
//window.pageYOffset
//window.innerHeight

/* -------------------------------------------------------- */
/* Functions */
function get_max_scroll(){
	max_scroll = Math.max( document.body.scrollHeight, document.body.offsetHeight,document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
}

function go_to_scroll(val_scrl=0){
	window.scrollTo(0, val_scrl);
}

function load_by_ajax() {
	$.ajax({
		url: 'loadajax.php',
		type: 'get',
		data: {q:12},
	beforeSend: function(){
 	// alert('Before Send Data');
	},
	success: function(response) {

		$('.divbody').append(response);
				$("#showloading").fadeOut();
				$('.divbody').css('opacity','1');
		// alert('Response : Ok !');
		}

	});

}

function check_scroll(){
//current_scroll = window.scrollY;  // Browser Support [Error]
current_scroll = $(window).scrollTop();

get_max_scroll();

if (current_scroll === max_scroll - $(window).height()) {
go_to_scroll(current_scroll);
$('.divbody').css('opacity','0.5');$("#showloading").fadeIn(1000,load_by_ajax);
}

}
window.onscroll = check_scroll;
