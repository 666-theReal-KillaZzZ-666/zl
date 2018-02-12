( function( ) {
	var female_comments = [{"count":"30","date":"2015-04"}, {"count":"355","date":"2015-05"}, {"count":"760","date":"2015-06"}, {"count":"2197","date":"2015-07"}, {"count":"1477","date":"2015-08"}, {"count":"1766","date":"2015-09"}, {"count":"1622","date":"2015-10"}, {"count":"1841","date":"2015-11"}, {"count":"1542","date":"2015-12"}, {"count":"2096","date":"2016-01"}, {"count":"1415","date":"2016-02"}, {"count":"2193","date":"2016-03"}, {"count":"2231","date":"2016-04"}, {"count":"2137","date":"2016-05"}, {"count":"2641","date":"2016-06"}, {"count":"2918","date":"2016-07"}, {"count":"2306","date":"2016-08"}, {"count":"2053","date":"2016-09"}, {"count":"2068","date":"2016-10"}, {"count":"2918","date":"2016-11"}, {"count":"3450","date":"2016-12"}, {"count":"5131","date":"2017-01"}, {"count":"4263","date":"2017-02"}, {"count":"3730","date":"2017-03"}, {"count":"2537","date":"2017-04"}, {"count":"2318","date":"2017-05"}, {"count":"1734","date":"2017-06"}, {"count":"1911","date":"2017-07"}, {"count":"1787","date":"2017-08"}, {"count":"2053","date":"2017-09"}, {"count":"2554","date":"2017-10"}, {"count":"2527","date":"2017-11"}, {"count":"2001","date":"2017-12"}, {"count":"2199","date":"2018-01"}, {"count":"792","date":"2018-02"}];
	var male_comments = [{"count":"30","date":"2015-04"}, {"count":"340","date":"2015-05"}, {"count":"1115","date":"2015-06"}, {"count":"2656","date":"2015-07"}, {"count":"2802","date":"2015-08"}, {"count":"3596","date":"2015-09"}, {"count":"3023","date":"2015-10"}, {"count":"2680","date":"2015-11"}, {"count":"2852","date":"2015-12"}, {"count":"3362","date":"2016-01"}, {"count":"2586","date":"2016-02"}, {"count":"4341","date":"2016-03"}, {"count":"4290","date":"2016-04"}, {"count":"3623","date":"2016-05"}, {"count":"4170","date":"2016-06"}, {"count":"5364","date":"2016-07"}, {"count":"4199","date":"2016-08"}, {"count":"3902","date":"2016-09"}, {"count":"4614","date":"2016-10"}, {"count":"5568","date":"2016-11"}, {"count":"7106","date":"2016-12"}, {"count":"9915","date":"2017-01"}, {"count":"8464","date":"2017-02"}, {"count":"8008","date":"2017-03"}, {"count":"5942","date":"2017-04"}, {"count":"5333","date":"2017-05"}, {"count":"4138","date":"2017-06"}, {"count":"4177","date":"2017-07"}, {"count":"3317","date":"2017-08"}, {"count":"4927","date":"2017-09"}, {"count":"5140","date":"2017-10"}, {"count":"6497","date":"2017-11"}, {"count":"5589","date":"2017-12"}, {"count":"5846","date":"2018-01"}, {"count":"1823","date":"2018-02"}];

	var female_posts = [{"count":"6","date":"2015-04"}, {"count":"54","date":"2015-05"}, {"count":"73","date":"2015-06"}, {"count":"134","date":"2015-07"}, {"count":"93","date":"2015-08"}, {"count":"109","date":"2015-09"}, {"count":"118","date":"2015-10"}, {"count":"103","date":"2015-11"}, {"count":"96","date":"2015-12"}, {"count":"141","date":"2016-01"}, {"count":"128","date":"2016-02"}, {"count":"193","date":"2016-03"}, {"count":"228","date":"2016-04"}, {"count":"195","date":"2016-05"}, {"count":"269","date":"2016-06"}, {"count":"367","date":"2016-07"}, {"count":"287","date":"2016-08"}, {"count":"252","date":"2016-09"}, {"count":"290","date":"2016-10"}, {"count":"359","date":"2016-11"}, {"count":"299","date":"2016-12"}, {"count":"363","date":"2017-01"}, {"count":"290","date":"2017-02"}, {"count":"244","date":"2017-03"}, {"count":"250","date":"2017-04"}, {"count":"187","date":"2017-05"}, {"count":"197","date":"2017-06"}, {"count":"159","date":"2017-07"}, {"count":"162","date":"2017-08"}, {"count":"161","date":"2017-09"}, {"count":"187","date":"2017-10"}, {"count":"154","date":"2017-11"}, {"count":"143","date":"2017-12"}, {"count":"202","date":"2018-01"}, {"count":"50","date":"2018-02"}];
	var male_posts = [{"count":"9","date":"2015-04"}, {"count":"46","date":"2015-05"}, {"count":"65","date":"2015-06"}, {"count":"148","date":"2015-07"}, {"count":"128","date":"2015-08"}, {"count":"135","date":"2015-09"}, {"count":"147","date":"2015-10"}, {"count":"101","date":"2015-11"}, {"count":"115","date":"2015-12"}, {"count":"129","date":"2016-01"}, {"count":"125","date":"2016-02"}, {"count":"246","date":"2016-03"}, {"count":"267","date":"2016-04"}, {"count":"224","date":"2016-05"}, {"count":"347","date":"2016-06"}, {"count":"448","date":"2016-07"}, {"count":"327","date":"2016-08"}, {"count":"322","date":"2016-09"}, {"count":"347","date":"2016-10"}, {"count":"434","date":"2016-11"}, {"count":"415","date":"2016-12"}, {"count":"492","date":"2017-01"}, {"count":"430","date":"2017-02"}, {"count":"335","date":"2017-03"}, {"count":"356","date":"2017-04"}, {"count":"249","date":"2017-05"}, {"count":"228","date":"2017-06"}, {"count":"227","date":"2017-07"}, {"count":"222","date":"2017-08"}, {"count":"220","date":"2017-09"}, {"count":"257","date":"2017-10"}, {"count":"279","date":"2017-11"}, {"count":"258","date":"2017-12"}, {"count":"304","date":"2018-01"}, {"count":"78","date":"2018-02"}];


	var clear_data = function( d ) {
		d.count = +d.count;
	};

	female_comments.forEach( clear_data );
	male_comments.forEach( clear_data );
	female_posts.forEach( clear_data );
	male_posts.forEach( clear_data );

	var wrap = d3.select( '.sex-by-date' );

	var margin = { top: 0, right: 0, bottom: 50, left: 50 };
	var width = 900 - margin.left - margin.right;
	var height = 300 - margin.top - margin.bottom;

	var svg = wrap.append( 'svg' )
			.attr( 'width', width + margin.left + margin.right )
			.attr( 'height', height + margin.top + margin.bottom )
		.append( 'g' )
			.attr( 'transform', 'translate( '+ [ margin.left, margin.top ] +' )' );

	var x = d3.scaleBand( ).rangeRound( [ 0, width ], 0.1 ).paddingInner( 0.25 ).domain( male_posts.map( function( d ) { return d.date; } ) );

	var y_posts = d3.scaleLinear( ).range( [ height, 0 ] ).domain( [ 0, 
		Math.max( 
			d3.max( male_posts, function( d ) { return d.count; } ),
			d3.max( female_posts, function( d ) { return d.count; } )
		) 
	] );

	var y_comments = d3.scaleLinear( ).range( [ height, 0 ] ).domain( [ 0, 
		Math.max( 
			d3.max( male_comments, function( d ) { return d.count; } ),
			d3.max( female_comments, function( d ) { return d.count; } )
		) 
	] );

	var postsLine = d3.line( )
		.x( function( d ) { return x( d.date ); } )
		.y( function( d ) { return y_posts( d.count ); } );

	var commentsLine = d3.line( )
		.x( function( d ) { return x( d.date ); } )
		.y( function( d ) { return y_comments( d.count ); } );

	var female = svg.append( 'path' )
		.data( [ female_posts ] )
		.attr( 'd', postsLine )
		.attr( 'stroke', '#d33' )
		.attr( 'stroke-width', '2px' )
		.attr( 'fill', 'none' );

	var male = svg.append( 'path' )
		.data( [ male_posts ] )
		.attr( 'd', postsLine )
		.attr( 'stroke', '#3d3' )
		.attr( 'stroke-width', '2px' )
		.attr( 'fill', 'none' );

	var legend = svg.append( 'g' ).attr( 'opacity', 1 );
	legend.append( 'line' )
		.attr( 'x1', -20 )
		.attr( 'x2', 80 )
		.attr( 'y1', 285 )
		.attr( 'y2', 285 )
		.attr( 'stroke-width', 1 )
		.attr( 'stroke', '#fff' )
		.attr( 'marker-end', 'url(#arrow)' );

	legend.append( 'text' )
		.text( 'Время' )
		.attr( 'text-anchor', 'middle' )
		.attr( 'x', 0 )
		.attr( 'y', 280 );

	legend.append( 'line' )
		.attr( 'x1', -20 )
		.attr( 'x2', -20 )
		.attr( 'y1', 250 )
		.attr( 'y2', 150 )
		.attr( 'stroke-width', 1 )
		.attr( 'stroke', '#fff' )
		.attr( 'marker-end', 'url(#arrow)' );

	legend.selectAll( 'text' )
		.data( male_posts )
		.enter( )
			.append( 'text' )
				.attr( 'text-anchor', 'middle' )
				.attr( 'y', 250 )
				.attr( 'x', function( d ) { return x( d.date ); } )
				.text( function( d, i ) { return !( i % 3 ) ? d.date : ''; } );

	var t = legend.append( 'text' )
		.text( 'Анкеты' )
		.attr( 'transform', 'translate(-30, 250) rotate(-90)' );

	var line = legend.append( 'line' )
		.attr( 'x1', 150 )
		.attr( 'y1', 120 )
		.attr( 'x2', 205 )
		.attr( 'y2', 165 )
		.attr( 'stroke-width', 2 )
		.attr( 'stroke', '#fff' )
		.attr( 'opacity', 1 )
		.attr( 'marker-end', 'url(#arrow)' );

	var line2 = legend.append( 'line' )
		.attr( 'x1', 25 )
		.attr( 'y1', 120 )
		.attr( 'x2', 40 )
		.attr( 'y2', 185 )
		.attr( 'stroke-width', 2 )
		.attr( 'stroke', '#fff' )
		.attr( 'opacity', 1 )
		.attr( 'marker-end', 'url(#arrow)' );

	var legend = legend.append( 'g' )
		.attr( 'transform', 'translate( ' + [ 700, 10 ] + ')' )
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

	d3.select( '.sex-by-date input' ).on( 'change', function( ) {
		if( this.checked ) { // комментарии
			female.data( [ female_comments ] ).transition( ).attr( 'd', commentsLine );
			male.data( [ male_comments ] ).transition( ).attr( 'd', commentsLine );

			t.text( 'Комментарии' );
			line.transition( )
				.attr( 'x2', 150 )
				.attr( 'y2', 120 )
				.attr( 'opacity', 0 );
			line2.transition( )
				.attr( 'x2', 25 )
				.attr( 'y2', 120 )
				.attr( 'opacity', 0 );
		} else {
			female.data( [ female_posts ] ).transition( ).attr( 'd', postsLine );
			male.data( [ male_posts ] ).transition( ).attr( 'd', postsLine );

			t.text( 'Анкеты' );
			line.transition( )
				.attr( 'x2', 205 )
				.attr( 'y2', 165 )
				.attr( 'opacity', 1 );
			line2.transition( )
				.attr( 'x2', 40 )
				.attr( 'y2', 185 )
				.attr( 'opacity', 1 );
		}
	} );
} )( );