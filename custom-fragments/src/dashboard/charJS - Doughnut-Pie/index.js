var chart = fragmentElement.getElementsByClassName("myChart")[0];
var ctx = chart.getContext('2d');

var myPieChart = new Chart(ctx, {
    type: configuration.chartType.toLowerCase(),
			data: {
				datasets: [{
					data: [
						90,10
					],
					backgroundColor: JSON.parse('{"colors": [' + configuration.backgroundColors + ']}').colors,
					label: 'Dataset 1'
				}],
				labels: JSON.parse('{"labels": [' + configuration.labels + ']}').labels,
			},
			options: {
				responsive: true
			}
});