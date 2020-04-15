
var options = {
    height: 200,
	animationEnabled: true,  
	title:{
		text: "Sales"
	},
	axisX: {
		valueFormatString: "MMM"
	},
	axisY: {
		title: "Sales (in USD)",
		prefix: "$",
		includeZero: false
	},
	data: [{
		yValueFormatString: "$#,###",
		xValueFormatString: "MMMM",
		type: "spline",
		dataPoints: [
			{ x: new Date(2020, 0), y: 100 },
			{ x: new Date(2020, 1), y: 200 },
			{ x: new Date(2020, 2), y: 150 },
			{ x: new Date(2020, 3), y: 50 },
			{ x: new Date(2020, 4), y: 100 },
			
		]
	}]
};
$("#chart-sales").CanvasJSChart(options);


var options2 = {
	height: 100,
	animationEnabled: true,  

	axisY: {
		
		valueFormatString: "#0,,.",
	},
	data: [{
		type: "area",
		markerSize: 5,
		dataPoints: [
			{ x: new Date(2000, 0), y: 2289000 },
			{ x: new Date(2001, 0), y: 2830000 },
			{ x: new Date(2002, 0), y: 1009000 },
			{ x: new Date(2003, 0), y: 1840000 },
			{ x: new Date(2004, 0), y: 1396000 },
			{ x: new Date(2005, 0), y: 2613000 },
			{ x: new Date(2006, 0), y: 1821000 },
		]
	}]
};
$("#user-chart-1").CanvasJSChart(options2);
$("#user-chart-2").CanvasJSChart(options2);

var options3 = {
	height: 200,
	title: {
		text: "Download Share"
	},
	subtitles: [{
		text: "As of November, 2020"
	}],
	animationEnabled: true,
	data: [{
		type: "pie",
		startAngle: 40,
		toolTipContent: "<b>{label}</b>: {y}%",
		showInLegend: "true",
		legendText: "{label}",
		indexLabelFontSize: 16,
		indexLabel: "{label} - {y}%",
		dataPoints: [
			{ y: 64.72, label: "Android" },
			{ y: 36.28, label: "iOS" },
		]
	}]
};
$("#download-chart").CanvasJSChart(options3);
