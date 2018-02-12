( function( ) {
	var female_likes = [{"count":"71","likes":"0"}, {"count":"80","likes":"1"}, {"count":"150","likes":"2"}, {"count":"184","likes":"3"}, {"count":"173","likes":"4"}, {"count":"164","likes":"5"}, {"count":"197","likes":"6"}, {"count":"184","likes":"7"}, {"count":"205","likes":"8"}, {"count":"212","likes":"9"}, {"count":"224","likes":"10"}, {"count":"221","likes":"11"}, {"count":"193","likes":"12"}, {"count":"226","likes":"13"}, {"count":"235","likes":"14"}, {"count":"195","likes":"15"}, {"count":"211","likes":"16"}, {"count":"200","likes":"17"}, {"count":"182","likes":"18"}, {"count":"182","likes":"19"}, {"count":"181","likes":"20"}, {"count":"177","likes":"21"}, {"count":"147","likes":"22"}, {"count":"138","likes":"23"}, {"count":"148","likes":"24"}, {"count":"149","likes":"25"}, {"count":"121","likes":"26"}, {"count":"111","likes":"27"}, {"count":"114","likes":"28"}, {"count":"112","likes":"29"}, {"count":"88","likes":"30"}, {"count":"91","likes":"31"}, {"count":"87","likes":"32"}, {"count":"74","likes":"33"}, {"count":"75","likes":"34"}, {"count":"73","likes":"35"}, {"count":"68","likes":"36"}, {"count":"55","likes":"37"}, {"count":"57","likes":"38"}, {"count":"60","likes":"39"}, {"count":"42","likes":"40"}, {"count":"37","likes":"41"}, {"count":"53","likes":"42"}, {"count":"39","likes":"43"}, {"count":"29","likes":"44"}, {"count":"39","likes":"45"}, {"count":"19","likes":"46"}, {"count":"33","likes":"47"}, {"count":"25","likes":"48"}, {"count":"33","likes":"49"}, {"count":"22","likes":"50"}, {"count":"22","likes":"51"}, {"count":"32","likes":"52"}, {"count":"14","likes":"53"}, {"count":"23","likes":"54"}, {"count":"23","likes":"55"}, {"count":"23","likes":"56"}, {"count":"15","likes":"57"}, {"count":"15","likes":"58"}, {"count":"9","likes":"59"}, {"count":"7","likes":"60"}, {"count":"20","likes":"61"}, {"count":"10","likes":"62"}, {"count":"3","likes":"63"}, {"count":"10","likes":"64"}, {"count":"14","likes":"65"}, {"count":"6","likes":"66"}, {"count":"5","likes":"67"}, {"count":"7","likes":"68"}, {"count":"9","likes":"69"}, {"count":"9","likes":"70"}, {"count":"7","likes":"71"}, {"count":"4","likes":"72"}, {"count":"3","likes":"73"}, {"count":"5","likes":"74"}, {"count":"9","likes":"75"}, {"count":"7","likes":"76"}, {"count":"4","likes":"77"}, {"count":"3","likes":"78"}, {"count":"2","likes":"79"}, {"count":"4","likes":"80"}, {"count":"1","likes":"81"}, {"count":"1","likes":"82"}, {"count":"1","likes":"83"}, {"count":"1","likes":"84"}, {"count":"2","likes":"85"}, {"count":"1","likes":"86"}, {"count":"4","likes":"87"}, {"count":"2","likes":"88"}, {"count":"2","likes":"89"}, {"count":"1","likes":"90"}, {"count":"1","likes":"92"}, {"count":"4","likes":"96"}, {"count":"1","likes":"97"}, {"count":"1","likes":"101"}, {"count":"1","likes":"103"}, {"count":"2","likes":"104"}, {"count":"1","likes":"105"}, {"count":"1","likes":"108"}, {"count":"1","likes":"110"}, {"count":"1","likes":"114"}, {"count":"1","likes":"121"}, {"count":"1","likes":"122"}, {"count":"1","likes":"145"}];
	var male_likes = [{"count":"166","likes":"0"}, {"count":"286","likes":"1"}, {"count":"360","likes":"2"}, {"count":"380","likes":"3"}, {"count":"405","likes":"4"}, {"count":"413","likes":"5"}, {"count":"419","likes":"6"}, {"count":"430","likes":"7"}, {"count":"408","likes":"8"}, {"count":"427","likes":"9"}, {"count":"377","likes":"10"}, {"count":"344","likes":"11"}, {"count":"330","likes":"12"}, {"count":"310","likes":"13"}, {"count":"273","likes":"14"}, {"count":"270","likes":"15"}, {"count":"247","likes":"16"}, {"count":"233","likes":"17"}, {"count":"194","likes":"18"}, {"count":"163","likes":"19"}, {"count":"177","likes":"20"}, {"count":"153","likes":"21"}, {"count":"136","likes":"22"}, {"count":"129","likes":"23"}, {"count":"156","likes":"24"}, {"count":"123","likes":"25"}, {"count":"100","likes":"26"}, {"count":"110","likes":"27"}, {"count":"83","likes":"28"}, {"count":"54","likes":"29"}, {"count":"68","likes":"30"}, {"count":"65","likes":"31"}, {"count":"51","likes":"32"}, {"count":"56","likes":"33"}, {"count":"41","likes":"34"}, {"count":"46","likes":"35"}, {"count":"26","likes":"36"}, {"count":"39","likes":"37"}, {"count":"32","likes":"38"}, {"count":"35","likes":"39"}, {"count":"23","likes":"40"}, {"count":"23","likes":"41"}, {"count":"27","likes":"42"}, {"count":"19","likes":"43"}, {"count":"10","likes":"44"}, {"count":"23","likes":"45"}, {"count":"14","likes":"46"}, {"count":"13","likes":"47"}, {"count":"12","likes":"48"}, {"count":"12","likes":"49"}, {"count":"12","likes":"50"}, {"count":"9","likes":"51"}, {"count":"10","likes":"52"}, {"count":"19","likes":"53"}, {"count":"7","likes":"54"}, {"count":"10","likes":"55"}, {"count":"10","likes":"56"}, {"count":"6","likes":"57"}, {"count":"9","likes":"58"}, {"count":"7","likes":"59"}, {"count":"2","likes":"60"}, {"count":"5","likes":"61"}, {"count":"3","likes":"62"}, {"count":"3","likes":"63"}, {"count":"1","likes":"64"}, {"count":"6","likes":"65"}, {"count":"5","likes":"66"}, {"count":"4","likes":"67"}, {"count":"2","likes":"68"}, {"count":"5","likes":"69"}, {"count":"3","likes":"71"}, {"count":"1","likes":"72"}, {"count":"1","likes":"73"}, {"count":"2","likes":"74"}, {"count":"2","likes":"76"}, {"count":"2","likes":"77"}, {"count":"2","likes":"81"}, {"count":"1","likes":"84"}, {"count":"1","likes":"85"}, {"count":"1","likes":"87"}, {"count":"1","likes":"89"}, {"count":"2","likes":"90"}, {"count":"1","likes":"92"}, {"count":"1","likes":"93"}, {"count":"1","likes":"94"}, {"count":"1","likes":"96"}, {"count":"1","likes":"97"}, {"count":"1","likes":"100"}, {"count":"1","likes":"101"}, {"count":"1","likes":"107"}, {"count":"1","likes":"108"}, {"count":"1","likes":"111"}, {"count":"1","likes":"112"}, {"count":"1","likes":"118"}, {"count":"1","likes":"145"}, {"count":"1","likes":"149"}, {"count":"1","likes":"341"}];

	var female_comments = [{"count":"185","comments":"0"}, {"count":"173","comments":"1"}, {"count":"208","comments":"2"}, {"count":"243","comments":"3"}, {"count":"267","comments":"4"}, {"count":"259","comments":"5"}, {"count":"283","comments":"6"}, {"count":"288","comments":"7"}, {"count":"260","comments":"8"}, {"count":"285","comments":"9"}, {"count":"278","comments":"10"}, {"count":"238","comments":"11"}, {"count":"216","comments":"12"}, {"count":"222","comments":"13"}, {"count":"202","comments":"14"}, {"count":"182","comments":"15"}, {"count":"199","comments":"16"}, {"count":"187","comments":"17"}, {"count":"143","comments":"18"}, {"count":"143","comments":"19"}, {"count":"148","comments":"20"}, {"count":"120","comments":"21"}, {"count":"135","comments":"22"}, {"count":"117","comments":"23"}, {"count":"95","comments":"24"}, {"count":"97","comments":"25"}, {"count":"96","comments":"26"}, {"count":"78","comments":"27"}, {"count":"82","comments":"28"}, {"count":"73","comments":"29"}, {"count":"62","comments":"30"}, {"count":"76","comments":"31"}, {"count":"46","comments":"32"}, {"count":"55","comments":"33"}, {"count":"44","comments":"34"}, {"count":"41","comments":"35"}, {"count":"39","comments":"36"}, {"count":"31","comments":"37"}, {"count":"38","comments":"38"}, {"count":"38","comments":"39"}, {"count":"42","comments":"40"}, {"count":"32","comments":"41"}, {"count":"34","comments":"42"}, {"count":"33","comments":"43"}, {"count":"13","comments":"44"}, {"count":"22","comments":"45"}, {"count":"25","comments":"46"}, {"count":"14","comments":"47"}, {"count":"17","comments":"48"}, {"count":"11","comments":"49"}, {"count":"17","comments":"50"}, {"count":"24","comments":"51"}, {"count":"10","comments":"52"}, {"count":"17","comments":"53"}, {"count":"10","comments":"54"}, {"count":"10","comments":"55"}, {"count":"12","comments":"56"}, {"count":"11","comments":"57"}, {"count":"17","comments":"58"}, {"count":"13","comments":"59"}, {"count":"6","comments":"60"}, {"count":"12","comments":"61"}, {"count":"8","comments":"62"}, {"count":"13","comments":"63"}, {"count":"4","comments":"64"}, {"count":"5","comments":"65"}, {"count":"2","comments":"66"}, {"count":"6","comments":"67"}, {"count":"6","comments":"68"}, {"count":"5","comments":"69"}, {"count":"3","comments":"70"}, {"count":"4","comments":"71"}, {"count":"3","comments":"72"}, {"count":"3","comments":"73"}, {"count":"3","comments":"74"}, {"count":"2","comments":"75"}, {"count":"4","comments":"76"}, {"count":"6","comments":"77"}, {"count":"2","comments":"78"}, {"count":"5","comments":"79"}, {"count":"3","comments":"80"}, {"count":"3","comments":"81"}, {"count":"5","comments":"82"}, {"count":"4","comments":"83"}, {"count":"1","comments":"84"}, {"count":"4","comments":"85"}, {"count":"3","comments":"86"}, {"count":"2","comments":"88"}, {"count":"1","comments":"89"}, {"count":"3","comments":"90"}, {"count":"2","comments":"91"}, {"count":"1","comments":"94"}, {"count":"2","comments":"95"}, {"count":"3","comments":"97"}, {"count":"1","comments":"98"}, {"count":"2","comments":"99"}, {"count":"1","comments":"100"}, {"count":"1","comments":"104"}, {"count":"2","comments":"107"}, {"count":"2","comments":"108"}, {"count":"2","comments":"109"}, {"count":"5","comments":"112"}, {"count":"1","comments":"113"}, {"count":"1","comments":"114"}, {"count":"2","comments":"116"}, {"count":"1","comments":"119"}, {"count":"1","comments":"120"}, {"count":"1","comments":"121"}, {"count":"1","comments":"124"}, {"count":"1","comments":"126"}, {"count":"1","comments":"128"}, {"count":"1","comments":"130"}, {"count":"1","comments":"133"}, {"count":"1","comments":"137"}, {"count":"1","comments":"141"}, {"count":"1","comments":"144"}, {"count":"1","comments":"148"}, {"count":"1","comments":"150"}, {"count":"1","comments":"152"}, {"count":"1","comments":"155"}, {"count":"1","comments":"159"}, {"count":"1","comments":"163"}, {"count":"2","comments":"167"}, {"count":"1","comments":"168"}, {"count":"1","comments":"169"}, {"count":"1","comments":"176"}, {"count":"1","comments":"185"}, {"count":"1","comments":"187"}, {"count":"1","comments":"194"}, {"count":"1","comments":"221"}, {"count":"1","comments":"224"}, {"count":"1","comments":"244"}];
	var male_comments = [{"count":"504","comments":"0"}, {"count":"399","comments":"1"}, {"count":"461","comments":"2"}, {"count":"522","comments":"3"}, {"count":"501","comments":"4"}, {"count":"477","comments":"5"}, {"count":"496","comments":"6"}, {"count":"436","comments":"7"}, {"count":"438","comments":"8"}, {"count":"412","comments":"9"}, {"count":"341","comments":"10"}, {"count":"320","comments":"11"}, {"count":"270","comments":"12"}, {"count":"269","comments":"13"}, {"count":"254","comments":"14"}, {"count":"203","comments":"15"}, {"count":"185","comments":"16"}, {"count":"192","comments":"17"}, {"count":"163","comments":"18"}, {"count":"157","comments":"19"}, {"count":"108","comments":"20"}, {"count":"118","comments":"21"}, {"count":"89","comments":"22"}, {"count":"90","comments":"23"}, {"count":"82","comments":"24"}, {"count":"70","comments":"25"}, {"count":"71","comments":"26"}, {"count":"62","comments":"27"}, {"count":"51","comments":"28"}, {"count":"49","comments":"29"}, {"count":"49","comments":"30"}, {"count":"42","comments":"31"}, {"count":"53","comments":"32"}, {"count":"37","comments":"33"}, {"count":"37","comments":"34"}, {"count":"35","comments":"35"}, {"count":"36","comments":"36"}, {"count":"22","comments":"37"}, {"count":"19","comments":"38"}, {"count":"20","comments":"39"}, {"count":"17","comments":"40"}, {"count":"22","comments":"41"}, {"count":"26","comments":"42"}, {"count":"17","comments":"43"}, {"count":"14","comments":"44"}, {"count":"22","comments":"45"}, {"count":"16","comments":"46"}, {"count":"14","comments":"47"}, {"count":"10","comments":"48"}, {"count":"8","comments":"49"}, {"count":"10","comments":"50"}, {"count":"10","comments":"51"}, {"count":"5","comments":"52"}, {"count":"5","comments":"53"}, {"count":"5","comments":"54"}, {"count":"4","comments":"55"}, {"count":"5","comments":"56"}, {"count":"6","comments":"57"}, {"count":"3","comments":"58"}, {"count":"4","comments":"59"}, {"count":"4","comments":"60"}, {"count":"4","comments":"61"}, {"count":"3","comments":"62"}, {"count":"1","comments":"63"}, {"count":"6","comments":"64"}, {"count":"6","comments":"65"}, {"count":"3","comments":"66"}, {"count":"2","comments":"67"}, {"count":"3","comments":"68"}, {"count":"3","comments":"69"}, {"count":"2","comments":"70"}, {"count":"3","comments":"71"}, {"count":"3","comments":"72"}, {"count":"2","comments":"73"}, {"count":"1","comments":"74"}, {"count":"3","comments":"76"}, {"count":"1","comments":"77"}, {"count":"2","comments":"79"}, {"count":"1","comments":"80"}, {"count":"2","comments":"81"}, {"count":"2","comments":"82"}, {"count":"3","comments":"83"}, {"count":"4","comments":"84"}, {"count":"2","comments":"85"}, {"count":"2","comments":"87"}, {"count":"1","comments":"88"}, {"count":"1","comments":"89"}, {"count":"1","comments":"91"}, {"count":"2","comments":"92"}, {"count":"1","comments":"95"}, {"count":"1","comments":"96"}, {"count":"2","comments":"97"}, {"count":"1","comments":"100"}, {"count":"1","comments":"101"}, {"count":"3","comments":"103"}, {"count":"1","comments":"104"}, {"count":"1","comments":"105"}, {"count":"1","comments":"107"}, {"count":"1","comments":"109"}, {"count":"1","comments":"114"}, {"count":"1","comments":"115"}, {"count":"1","comments":"119"}, {"count":"1","comments":"125"}, {"count":"1","comments":"127"}, {"count":"1","comments":"129"}, {"count":"1","comments":"142"}, {"count":"1","comments":"149"}, {"count":"1","comments":"152"}, {"count":"1","comments":"173"}, {"count":"1","comments":"190"}];

	var clear_data = function( d ) {
		d.count = +d.count;
		d.likes = +d.likes;
		d.comments = +d.comments;
	};

	female_likes.forEach( clear_data );
	male_likes.forEach( clear_data );

	female_comments.forEach( clear_data );
	male_comments.forEach( clear_data );

	var wrap = d3.select( '.posts-sex' );

	var margin = { top: 150, right: 0, bottom: 0, left: 60 };
	var width = 900 - margin.left - margin.right;
	var height = 300 - margin.top - margin.bottom;

	var svg = wrap.append( 'svg' )
			.attr( 'width', width + margin.left + margin.right )
			.attr( 'height', height + margin.top + margin.bottom )
		.append( 'g' )
			.attr( 'transform', 'translate( '+ [ margin.left, margin.top ] +' )' );

	var x = d3.scaleLinear( )
				.range( [ 0, width / 10 ] )
				.domain( [ 0, 80 ] );

	var y_fl = d3.scaleLinear( ).range( [ 0, 150 ] ).domain( [ 0, d3.max( female_likes, function( d ) { return d.count; } ) ] );
	var y_ml = d3.scaleLinear( ).range( [ 0, 150 ] ).domain( [ 0, d3.max( male_likes, function( d ) { return d.count; } ) ] );

	var y_fc = d3.scaleLinear( ).range( [ 0, 150 ] ).domain( [ 0, d3.max( female_comments, function( d ) { return d.count; } ) ] );
	var y_mc = d3.scaleLinear( ).range( [ 0, 150 ] ).domain( [ 0, d3.max( male_comments, function( d ) { return d.count; } ) ] );

	var female = svg.append( 'g' )
			.selectAll( 'rect' )
			.data( female_likes )
			.enter( )
		.append( 'rect' )
			.attr( 'fill', '#d33' )
			.attr( 'opacity', 0.75 )
			.attr( 'width', '8' )
			.attr( 'height', function( d ) { return y_fl( d.count ); } )
			.attr( 'x', function( d ) { return 10 * x( d.likes ); } )
			.attr( 'y', 0 );

	var male = svg.append( 'g' )
			.attr( 'transform', 'scale(1,-1)' )
			.selectAll( 'rect' )
			.data( male_likes )
			.enter( )
		.append( 'rect' )
			.attr( 'fill', '#3d3' )
			.attr( 'opacity', 0.75 )
			.attr( 'width', '8' )
			.attr( 'height', function( d ) { return y_ml( d.count ); } )
			.attr( 'x', function( d ) { return 10 * x( d.likes ); } )
			.attr( 'y', 0 );

	svg.append( 'line' )
		.attr( 'x1', 0 )
		.attr( 'x2', width )
		.attr( 'y1', 0.5 )
		.attr( 'y2', 0.5 )
		.attr( 'stroke', '#777' );

	svg.append( 'g' )
			.selectAll( 'text' )
			.data( male_likes )
			.enter( )
		.append( 'text' )
			.text( function( d, i ) { 
				if( !( d.likes % 5 ) ) {
					return d.likes;
				} else {
					return '';
				}
			} )
			.attr( 'text-anchor', 'middle' )
			.attr( 'x', function( d ) { return 10 * x( d.likes ); } )
			.attr( 'y', 150 );

	var legend = svg.append( 'g' ).attr( 'opacity', 1 );

	svg.append( 'svg:defs' )
		.append( 'marker' )
		.attr( 'id', 'arrow' )
		.attr( 'viewBox', '0 -5 10 10' )
		.attr( 'refX', 5 )
		.attr( 'refY', 0 )
		.attr( 'markerWidth', 8 )
		.attr( 'markerHeight', 8 )
		.attr( 'orient', 'auto' )
		.append( 'path' )
			.attr( 'fill', '#fff' )
			.attr( 'd', 'M0,-5L10,0L0,5' );

	var l_text = legend.append( 'text' )
		.text( 'Лайки' )
		.attr( 'x', 0 )
		.attr( 'y', 120 );

	legend.append( 'line' )
		.attr( 'x1', 0 )
		.attr( 'x2', 100 )
		.attr( 'y1', 125 )
		.attr( 'y2', 125 )
		.attr( 'stroke-width', 1 )
		.attr( 'stroke', '#fff' )
		.attr( 'marker-end', 'url(#arrow)' );

	legend.append( 'line' )
		.attr( 'x1', -15 )
		.attr( 'x2', -15 )
		.attr( 'y1', 15 )
		.attr( 'y2', 90 )
		.attr( 'stroke-width', 1 )
		.attr( 'stroke', '#fff' )
		.attr( 'marker-end', 'url(#arrow)' );

	legend.append( 'line' )
		.attr( 'x1', -15 )
		.attr( 'x2', -15 )
		.attr( 'y1', -15 )
		.attr( 'y2', -90 )
		.attr( 'stroke-width', 1 )
		.attr( 'stroke', '#fff' )
		.attr( 'marker-end', 'url(#arrow)' );

	legend.append( 'text' )
		.text( 'Анкеты' )
		.attr( 'text-anchor', 'middle' )
		.attr( 'transform', 'rotate(-90) translate(0, -25)' );

	var legend = legend.append( 'g' )
		.attr( 'transform', 'translate( ' + [ 600, -150 ] + ')' )
		.selectAll( 'g' )
			.data( [ [ '#3d3', 'мужчины' ], [ '#d33', 'женщины' ]	 ] )
			.enter( )
				.append( 'g' ) 
					.attr( 'transform', function( d, i ) { return 'translate( ' + [ 0, 20 * i ] + ')'; } );

	legend.append( 'rect' )
		.attr( 'width', '10px' )
		.attr( 'height', '10px' )
		.attr( 'fill', function( d ) { return d[ 0 ]; } );

	legend.append( 'text' )
		.attr( 'transform', 'translate( ' + [ 20, 5 ] + ')' )
		.attr( 'alignment-baseline', 'middle' )
		.text( function( d ) { return d[ 1 ]; } );

	wrap.select( 'input' ).on( 'change', function( ) {
		if( this.checked ) { // Комментарии
			male.data( male_comments ).transition( ).attr( 'height', function( d ) { return y_mc( d.count ); } );
			female.data( female_comments ).transition( ).attr( 'height', function( d ) { return y_fc( d.count ); } );
			l_text.text( 'Комментарии' );
		} else {
			male.data( male_likes ).transition( ).attr( 'height', function( d ) { return y_ml( d.count ); } );
			female.data( female_likes ).transition( ).attr( 'height', function( d ) { return y_fl( d.count ); } );
			l_text.text( 'Лайки' );
		}
	} );
} )( );