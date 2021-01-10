var chart = fragmentElement.getElementsByClassName("myChart")[0];
var ctx = chart.getContext('2d');

var myPieChart = new Chart(ctx, {
    type: 'doughnut',
			data: {
				datasets: [{
					data: [
						90,10
					],
					backgroundColor: [
						"red",
						"orange"
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Red',
					'Orange'
				]
			},
			options: {
				responsive: true
			}
});