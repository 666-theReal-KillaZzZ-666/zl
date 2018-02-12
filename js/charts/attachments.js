( function( ) {
	var data = [{"attachments":"0","count":"1927","likes":"7.2024","comments":"8.5703"}, {"attachments":"1","count":"3315","likes":"14.5629","comments":"14.0057"}, {"attachments":"2","count":"2860","likes":"16.9748","comments":"14.4066"}, {"attachments":"3","count":"1865","likes":"17.9464","comments":"14.5373"}, {"attachments":"4","count":"1371","likes":"18.3866","comments":"15.1152"}, {"attachments":"5","count":"1049","likes":"19.2307","comments":"15.1544"}, {"attachments":"6","count":"983","likes":"19.7192","comments":"14.8535"}, {"attachments":"7","count":"735","likes":"20.4612","comments":"16.3211"}, {"attachments":"8","count":"592","likes":"21.5929","comments":"16.2956"}, {"attachments":"9","count":"467","likes":"21.8694","comments":"17.3362"}, {"attachments":"10","count":"892","likes":"21.8587","comments":"17.1917"}];

	data.forEach( function( d ) {
		d.attachments = +d.attachments;
		d.count = +d.count;
		d.likes = +d.likes;
		d.comments = +d.comments;
	} );

	console.log( data );

	var wrap = d3.select( '.attachments' );

	var margin = { top: 50, right: 0, bottom: 50, left: 0 };
	var width = 900 - margin.left - margin.right;
	var height = 300 - margin.top - margin.bottom;

	var svg = wrap.append( 'svg' )
			.attr( 'width', width + margin.left + margin.right )
			.attr( 'height', height + margin.top + margin.bottom )
		.append( 'g' )
			.attr( 'transform', 'translate( '+ [ margin.left, margin.top ] +' )' );

	var x = d3.scaleLinear( ).range( [ 0, 150 ] ).domain( [ 0, d3.max( data, function( d ) { return Math.max( d.likes, d.comments ) } ) ] );
	var y = d3.scaleLinear( ).range( [ 0, height ] ).domain( [ 0, 11 ] );

	svg.append( 'g' ).selectAll( 'rect' )
			.data( data )
			.enter( )
		.append( 'rect' )
			.attr( 'opacity', 0.75 )
			.attr( 'fill', '#d33' )
			.attr( 'width', function( d ) { return x( d.likes ); } )
			.attr( 'height', 5 )
			.attr( 'x', width / 2 )
			.attr( 'y', function( d ) { return y( d.attachments ); } );

	svg.append( 'g' ).selectAll( 'rect' )
			.data( data )
			.enter( )
		.append( 'rect' )
			.attr( 'opacity', 0.75 )
			.attr( 'fill', '#3d3' )
			.attr( 'width', function( d ) { return x( d.comments ); } )
			.attr( 'height', 5 )
			.attr( 'x', function( d ) { return width / 2 - x( d.comments ); } )
			.attr( 'y', function( d ) { return y( d.attachments ); } );

	svg.append( 'g' ).selectAll( 'text' )
			.data( data )
			.enter( )
		.append( 'text' )
			.text( function( d ) { return Math.round( d.likes ); } )
			.attr( 'font-size', 12 )
			.attr( 'alignment-baseline', 'middle' )
			.attr( 'x', function( d ) { return width / 2 + x( d.likes ) + 5; } )
			.attr( 'y', function( d ) { return y( d.attachments ) + 2; } );

	svg.append( 'g' ).selectAll( 'text' )
			.data( data )
			.enter( )
		.append( 'text' )
			.text( function( d ) { return Math.round( d.comments ); } )
			.attr( 'font-size', 12 )
			.attr( 'alignment-baseline', 'middle' )
			.attr( 'text-anchor', 'end' )
			.attr( 'x', function( d ) { return width / 2 - x( d.comments ) - 5; } )
			.attr( 'y', function( d ) { return y( d.attachments ) + 2; } );

	svg.append( 'line' )
		.attr( 'x1', width / 2 )
		.attr( 'x2', width / 2 )
		.attr( 'y1', -10 )
		.attr( 'y2', height )
		.attr( 'stroke', '#777' );

	var legend = svg.append( 'g' );
	legend.selectAll( 'text' )
			.data( data )
			.enter( )
		.append( 'text' )
			.attr( 'fill', '#fff' )
			.text( function( d ) { return d.attachments; } )
			.attr( 'x', 210 )
			.attr( 'y', function( d ) { return y( d.attachments ); } );

	legend.append( 'line' )
		.attr( 'x1', 200 )
		.attr( 'x2', 200 )
		.attr( 'y1', 0 )
		.attr( 'y2', height )
		.attr( 'stroke-width', 1 )
		.attr( 'stroke', '#fff' )
		.attr( 'marker-end', 'url(#arrow)' );

	legend.append( 'text' )
		.text( 'Вложения' )
		.attr( 'text-anchor', 'middle' )
		.attr( 'transform', 'translate(190, 150) rotate(-90)' );

	legend.append( 'line' )
		.attr( 'x1', 475 )
		.attr( 'x2', 575 )
		.attr( 'y1', 220 )
		.attr( 'y2', 220 )
		.attr( 'stroke-width', 1 )
		.attr( 'stroke', '#fff' )
		.attr( 'marker-end', 'url(#arrow)' );

	legend.append( 'text' )
		.text( 'Лайки' )
		.attr( 'transform', 'translate(475, 210)' );

	legend.append( 'line' )
		.attr( 'x1', 425 )
		.attr( 'x2', 325 )
		.attr( 'y1', 220 )
		.attr( 'y2', 220 )
		.attr( 'stroke-width', 1 )
		.attr( 'stroke', '#fff' )
		.attr( 'marker-end', 'url(#arrow)' );

	legend.append( 'text' )
		.text( 'Комментарии' )
		.attr( 'text-anchor', 'end' )
		.attr( 'transform', 'translate(425, 210)' );
} )( );