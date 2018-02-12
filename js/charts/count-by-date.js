( function( ) {
	var posts = [{"Count":"15","Date":"2015-04"}, {"Count":"104","Date":"2015-05"}, {"Count":"151","Date":"2015-06"}, {"Count":"299","Date":"2015-07"}, {"Count":"230","Date":"2015-08"}, {"Count":"282","Date":"2015-09"}, {"Count":"282","Date":"2015-10"}, {"Count":"209","Date":"2015-11"}, {"Count":"223","Date":"2015-12"}, {"Count":"295","Date":"2016-01"}, {"Count":"279","Date":"2016-02"}, {"Count":"480","Date":"2016-03"}, {"Count":"528","Date":"2016-04"}, {"Count":"424","Date":"2016-05"}, {"Count":"640","Date":"2016-06"}, {"Count":"835","Date":"2016-07"}, {"Count":"631","Date":"2016-08"}, {"Count":"591","Date":"2016-09"}, {"Count":"663","Date":"2016-10"}, {"Count":"884","Date":"2016-11"}, {"Count":"799","Date":"2016-12"}, {"Count":"924","Date":"2017-01"}, {"Count":"800","Date":"2017-02"}, {"Count":"637","Date":"2017-03"}, {"Count":"650","Date":"2017-04"}, {"Count":"491","Date":"2017-05"}, {"Count":"449","Date":"2017-06"}, {"Count":"404","Date":"2017-07"}, {"Count":"416","Date":"2017-08"}, {"Count":"418","Date":"2017-09"}, {"Count":"467","Date":"2017-10"}, {"Count":"463","Date":"2017-11"}, {"Count":"431","Date":"2017-12"}, {"Count":"533","Date":"2018-01"}, {"Count":"129","Date":"2018-02"}];
	var comments = [{"Count":"61","Date":"2015-04"}, {"Count":"702","Date":"2015-05"}, {"Count":"1879","Date":"2015-06"}, {"Count":"4864","Date":"2015-07"}, {"Count":"4289","Date":"2015-08"}, {"Count":"5388","Date":"2015-09"}, {"Count":"4668","Date":"2015-10"}, {"Count":"4530","Date":"2015-11"}, {"Count":"4425","Date":"2015-12"}, {"Count":"5477","Date":"2016-01"}, {"Count":"4034","Date":"2016-02"}, {"Count":"6590","Date":"2016-03"}, {"Count":"6553","Date":"2016-04"}, {"Count":"5768","Date":"2016-05"}, {"Count":"6834","Date":"2016-06"}, {"Count":"8318","Date":"2016-07"}, {"Count":"6520","Date":"2016-08"}, {"Count":"5965","Date":"2016-09"}, {"Count":"6692","Date":"2016-10"}, {"Count":"8512","Date":"2016-11"}, {"Count":"10603","Date":"2016-12"}, {"Count":"15080","Date":"2017-01"}, {"Count":"12739","Date":"2017-02"}, {"Count":"11751","Date":"2017-03"}, {"Count":"8481","Date":"2017-04"}, {"Count":"7660","Date":"2017-05"}, {"Count":"5874","Date":"2017-06"}, {"Count":"6113","Date":"2017-07"}, {"Count":"5118","Date":"2017-08"}, {"Count":"6998","Date":"2017-09"}, {"Count":"7711","Date":"2017-10"}, {"Count":"9035","Date":"2017-11"}, {"Count":"7590","Date":"2017-12"}, {"Count":"8053","Date":"2018-01"}, {"Count":"2616","Date":"2018-02"}];

	posts.forEach( function( d ) {
		d.Count = +d.Count;
	} );

	comments.forEach( function( d ) {
		d.Count = +d.Count;
	} );

	var wrap = d3.select( '.count-by-date' );

	var margin = { top: 5, right: 50, bottom: 50, left: 50 };
	var width = 900 - margin.left - margin.right;
	var height = 300 - margin.top - margin.bottom;

	var svg = wrap.append( 'svg' )
			.attr( 'width', width + margin.left + margin.right )
			.attr( 'height', height + margin.top + margin.bottom )
		.append( 'g' )
			.attr( 'transform', 'translate( '+ [ margin.left, margin.top ] +' )' );

	var x = d3.scaleBand( ).rangeRound( [ 0, width ], 0.1 ).paddingInner( 0.25 ).domain( posts.map( function( d ) { return d.Date; } ) );
	var yp = d3.scaleLinear( ).range( [ height, 0 ] ).domain( [ 0, d3.max( posts, function( d ) { return d.Count; } ) ] );
	var yc = d3.scaleLinear( ).range( [ height, 0 ] ).domain( [ 0, d3.max( comments, function( d ) { return d.Count; } ) ] );

	var postsLine = d3.line( )
		.x( function( d ) { return x( d.Date ); } )
		.y( function( d ) { return yp( d.Count ); } );

	var commentsLine = d3.line( )
		.x( function( d ) { return x( d.Date ); } )
		.y( function( d ) { return yc( d.Count ); } );

	svg.append( 'path' )
		.data( [ posts ] )
		.attr( 'd', postsLine )
		.attr( 'stroke', '#d33' )
		.attr( 'stroke-width', '2px' )
		.attr( 'fill', 'none' );

	svg.append( 'path' )
		.data( [ comments ] )
		.attr( 'd', commentsLine )
		.attr( 'stroke', '#3d3' )
		.attr( 'stroke-width', '2px' )
		.attr( 'fill', 'none' );

	svg.append( 'g' )
		.selectAll( 'text' )
		.data( posts )
		.enter( )
		.append( 'text' )
			.attr( 'text-anchor', 'middle' )
			.attr( 'transform', function( d ) { return 'translate( ' + [ x( d.Date ), ( height + 20 ) ] + ')'; } )
			.text( function( d, i ) { return ( i % 3 ) ? '' : d.Date; } );

	var legend = svg.append( 'g' )
		.attr( 'transform', 'translate( ' + [ 0, 20 ] + ')' )
		.selectAll( 'g' )
			.data( [ [ '#d33', 'посты' ], [ '#3d3', 'комментарии' ] ] )
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
} )( );