$(document).ready(function ($) {
	//AGE GATE

	$('#age-button').click(function(){
		$('#age-gate-2').show();
		$('#age-gate-1').slideUp(900);
		$('#big-wrap').css('overflow', 'visible')
	})

	// LOCALSCROLL

	    jQuery(function( $ ){
	        $.localScroll.defaults.axis = 'yx';
	        $.localScroll.hash({
	            target: 'wrapper', 
	            queue:true, 
	            duration:1000,
	        });
	        
	        $.localScroll({
	            target: '.wrapper', 
	            queue:true,
	            duration:1000,
	            hash:false,
	            onBefore:function( e, anchor, $target ){
	                    // The 'this' is the settings object, can be modified
	            },
	            onAfter:function( anchor, settings ){
	                    // The 'this' contains the scrolled element (#content)
	            }
	        });
	    });
	    $.localScroll();	
   	// $('.dropdown').hover(function(){
   	// 	$('.dropdown-content').slideDown()
   	// 	$(this).mouseout(function(){
   	// 		$('.dropdown-content').slideUp()
   	// 	})
   	// })

   	// CONTACT FORM
   	
   	// var frmvalidator = new Validator(“contactform”); frmvalidator.addValidation(“name”,”req”,”Please provide your name”); frmvalidator.addValidation(“email”,”req”,”Please provide your email”); frmvalidator.addValidation(“email”,”email”, “Please enter a valid email address”);

});