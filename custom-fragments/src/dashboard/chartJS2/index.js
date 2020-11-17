var url = "https://cdn.jsdelivr.net/npm/chart.js@2.9.3";

var randomScalingFactor = function() { 
	return Math.round(Math.random() * 100);
};

$.getScript( url )
  .done(function( script, textStatus ) {
    
			var ctx = $("#myChart2");
		var myChart = new Chart(ctx, {
    type: 'pie',
			data: {
				datasets: [{
					data: [
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
						randomScalingFactor(),
					],
					backgroundColor: [
						'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Blue',
					'Yellow',
					'Green',
					'Purple'
				]
			},
			options: {
				responsive: true
			}
});
		

    console.log( textStatus );
  })
  .fail(function( jqxhr, settings, exception ) {
    $( "div.log" ).text( "Triggered ajaxError handler." );
});