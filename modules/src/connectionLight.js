function init(startCol, startRow, url) {

	var id = MKON.FNC.randomString(5)	
	var req = ['p.paused', 'v.name'];

	// register a new module
	var mod = new MKON.module('Connection Status', 'Screen', id, req,

	function() {   

		var t = $('#'+this.id);	
		var i = t.find('.data-indicator');
		var s = t.find('.data-status');

		var p =  MKON.CONTENT.getVariable(req[0]) || 0;
		var l = s.attr('data-last'); 

		// if the cached status differs from the retrieved one
		if (p != l) {

		// strip existing indicator colours
		i.removeClass('red green orange');

			if (p == 0) {

				// game playing
				i.addClass('green');

			} else if (p == 1) { //

				// game paused
				i.addClass('orange');
				
			} else if (p == 3) { //

				// no connection
				i.addClass('red');
				
			} else { // no power or no antenna	


			}

			s.attr('data-last', p);

		}
		




		// var oV = MKON.CONTENT.getVariable(req[1]) || 0;
		// var alt = MKON.CONTENT.getVariable(req[2]) || 0;

		// oV = MKON.FNC.toFixed( oV , 1);
		// sV = MKON.FNC.toFixed( sV , 1);

		

		// if (alt > 35000) {
		// 	t.find('.data-v').html(oV + 'm/s');
		// 	t.find('.data-title').html('ORBIT');
		// } else {
		// 	t.find('.data-v').html(sV + 'm/s');
		// 	t.find('.data-title').html('SURFACE');
		
		// }

	} );

	// content for insertion to gridster
	var content =   '<li id="' + id + '" data-row="1" data-col="1" data-link="' + url + '" data-sizex="1" data-sizey="1">\
					<div class="options"><div class="remove"><i class="fa fa-times"></i></div></div>\
					<div class="content"><div class="connection screen"><div class="indicator green data-indicator"><span class="inner"><span class="highlight"></span></span></div></div></li>';

	content = { html: content, x: 1, y: 1, col: startCol, row: startRow };

	MKON.CONTENT.addModule(mod, content);


	// for (var i=0; i<req.length; i++) {
	// 	addVariables( [ mod.req[i] ] );
	// }

	//updateAPIString();
}
