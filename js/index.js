

const renderOverview = () => {
	const component = `
		<div class="welcome">
			<span>Hello, Welcome Back</span>
			<button>Import</button>
		</div>

		<div class="pills grid-4">
			<div class="pill neon grid-12">
				<i class="fa fa-arrow-circle-up" style="color: white; font-size: 55px"></i>
				<div>
					<p class="pill-heading">Total sales</p>
					<span class="pill-num">$400</span>
					<span>This Month</span>
				</div>
			</div>
			<div class="pill blue grid-12">
				<i class="fa fa-rupee-sign" style="color: white; font-size: 55px"></i>
				<div>
					<p class="pill-heading">Total sales</p>
					<span class="pill-num">$400</span>
					<span>This Month</span>
				</div>
			</div>
			<div class="pill pink grid-12">
				<i class="fa fa-receipt" style="color: white; font-size: 55px"></i>
				<div>
					<p class="pill-heading">Total sales</p>
					<span class="pill-num">$400</span>
					<span>This Month</span>
				</div>
			</div>
			<div class="pill ochre grid-12">
				<i class="fa fa-chart-bar" style="color: white; font-size: 55px"></i>
				<div>
					<p class="pill-heading">Total sales</p>
					<span class="pill-num">$400</span>
					<span>This Month</span>
				</div>
			</div>
		</div>

		<div class="stats-container grid-2">
			<div class="sales">
				<h4>Total Sales</h4>
				<p> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis vel magni enim placeat modi dignissimos. Eligendi aliquam quaerat qui!</p>
				
				<div class="sales-counter-container grid-4">
					<div>
						<h5>Revenue</h5>
						<h3>10,500</h3>
					</div>
					<div>
						<h5>Returns</h5>
						<h3>07,500</h3>
					</div>
					<div>
						<h5>Queries</h5>
						<h3>01,879</h3>
					</div>
					<div>
						<h5>Invoices</h5>
						<h3>02,643</h3>
					</div>
				</div>

				<div id="chart-sales" class="map-container">

				</div>
			</div>

			<div class="users">
				<div class="users-container grid-2">
					<div class="user-stats">
						<h5>Users</h5>
						<br>
						<span class="user-count">33,890</span>
						<span><i class="fa fa-arrow-down" style="color: #E83350;"></i></span>
						<span style="color: #E83350;">5.4%</span>
						<div id="user-chart-1" class="map-container">	</div>
					
					</div>

					<div class="user-stats">
						<h5>Growth</h5>
						<br>
						<span class="user-count">05,753</span>
						<span><i class="fa fa-arrow-up" style="color: #2ecc72;"></i></span>
						<span style="color: #2ecc72;">2.1%</span>
						<div id="user-chart-2" class="map-container">	</div>

					</div>
					
				</div>
				
				<div class="downloads">
	
					<div id="download-chart" ></div>
				</div>
				
			</div>
		</div>
		<div class="projects grid-21">
			<div class="tickets">
				<h4>Tickets</h4>

				<table>
					<tr>
						<th>Name</th>
						<th>Date</th>
						<th>Project</th>
					</tr>
					
					<tr>
						<td>Matt Hoss</td>
						<td>03/09/2020</td>
						<td>Crimson Solutions</td>
					</tr>
					<tr>
						<td>Robert Paulson</td>
						<td>03/02/2020</td>
						<td>Brew Cafe</td>
					</tr>
					<tr>
						<td>Katy Loraine</td>
						<td>03/09/2020</td>
						<td>Liberty Contractors</td>
					</tr>
					<tr>
						<td>Peter Mcginon </td>
						<td>22/07/2020</td>
						<td>Peterson Cemetery</td>
					</tr>
					<tr>
						<td>Orville Lambert</td>
						<td>25/08/2020</td>
						<td>Berkely Sports Center</td>
					</tr>
					
					<tr>
						<td>Lynda Houston</td>
						<td>03/01/2020</td>
						<td>Super Mart</td>
					</tr>
					
					<tr>
						<td>Paula Angelton</td>
						<td>02/02/2020</td>
						<td>Vadra Inc.</td>
					</tr>
					
				</table>
			
			</div>

			<div class="timeline-container">
				<h4>Updates</h4>

				<div class="timeline-item">
					<h4>User Bugs Solved</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, in nulla placeat illo suscipit voluptas provident omnis sint voluptates ea.</p>
					<br>
					<span><i class="fa fa-clock"></i></span>
					<span>3 Months Ago</span>
				</div>

				<div class="timeline-item">
					<h4>Liberty Payment Done</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, in nulla placeat illo suscipit voluptas provident omnis sint voluptates ea.</p>
					<br>
					<span><i class="fa fa-clock"></i></span>
					<span>5 Months Ago</span>
				</div>
				
			</div>
		</div>
		<div class="invoices">
			<table>
				<tr>
					<th>Invoice ID</th>
					<th>Date</th>
					<th>Client</th>
					<th>Amount</th>
					<th>Status</th>
				</tr>
				
				<tr>
					<td>501</td>
					<td>03/09/2020</td>
					<td>Crimson Solutions</td>
					<td>$50,000</td>
					<td class="ochre">On Hold</td>
				</tr>
				<tr>
					<td>502</td>
					<td>03/02/2020</td>
					<td>Brew Cafe</td>
					<td>$10,000</td>
					<td class="neon">Success</td>

				</tr>
				<tr>
					<td>503</td>
					<td>03/09/2020</td>
					<td>Liberty Contractors</td>
					<td>$2,800</td>
					<td class="ochre">On Hold</td>
				</tr>
				<tr>
					<td>504 </td>
					<td>22/07/2020</td>
					<td>Peterson Cemetery</td>
					<td>$3,000</td>
					<td class="pink">Dispute</td>
				</tr>
				<tr>
					<td>505</td>
					<td>25/08/2020</td>
					<td>Berkely Sports Center</td>
					<td>$50,000</td>
					<td class="ochre">On Hold</td>
				</tr>
				
				<tr>
					<td>506</td>
					<td>03/01/2020</td>
					<td>Super Mart</td>
					<td>$100,000</td>
					<td class="neon">Success</td>
				</tr>
				
				<tr>
					<td>507</td>
					<td>02/02/2020</td>
					<td>Vadra Inc.</td>
					<td>$50,000</td>
					<td class="ochre">On Hold</td>
				</tr>
				
			</table>
		</div>
	`

	$('#content').html('')
	$('#content').append(component)
}


const renderInvoices = () => {
	const component = `
		<div class="invoices">
			<table>
				<tr>
					<th>Invoice ID</th>
					<th>Date</th>
					<th>Client</th>
					<th>Amount</th>
					<th>Status</th>
				</tr>
				
				<tr>
					<td>501</td>
					<td>03/09/2020</td>
					<td>Crimson Solutions</td>
					<td>$50,000</td>
					<td class="ochre">On Hold</td>
				</tr>
				<tr>
					<td>502</td>
					<td>03/02/2020</td>
					<td>Brew Cafe</td>
					<td>$10,000</td>
					<td class="neon">Success</td>

				</tr>
				<tr>
					<td>503</td>
					<td>03/09/2020</td>
					<td>Liberty Contractors</td>
					<td>$2,800</td>
					<td class="ochre">On Hold</td>
				</tr>
				<tr>
					<td>504 </td>
					<td>22/07/2020</td>
					<td>Peterson Cemetery</td>
					<td>$3,000</td>
					<td class="pink">Dispute</td>
				</tr>
				<tr>
					<td>505</td>
					<td>25/08/2020</td>
					<td>Berkely Sports Center</td>
					<td>$50,000</td>
					<td class="ochre">On Hold</td>
				</tr>
				
				<tr>
					<td>506</td>
					<td>03/01/2020</td>
					<td>Super Mart</td>
					<td>$100,000</td>
					<td class="neon">Success</td>
				</tr>
				
				<tr>
					<td>507</td>
					<td>02/02/2020</td>
					<td>Vadra Inc.</td>
					<td>$50,000</td>
					<td class="ochre">On Hold</td>
				</tr>
				
			</table>
		</div>
	`

	$('#content').html('')
	$('#content').append(component)
}

const renderProject = () => {
	const component = `
		<div class="projects grid-21">
			<div class="tickets">
				<h4>Tickets</h4>

				<table>
					<tr>
						<th>Name</th>
						<th>Date</th>
						<th>Project</th>
					</tr>
					
					<tr>
						<td>Matt Hoss</td>
						<td>03/09/2020</td>
						<td>Crimson Solutions</td>
					</tr>
					<tr>
						<td>Robert Paulson</td>
						<td>03/02/2020</td>
						<td>Brew Cafe</td>
					</tr>
					<tr>
						<td>Katy Loraine</td>
						<td>03/09/2020</td>
						<td>Liberty Contractors</td>
					</tr>
					<tr>
						<td>Peter Mcginon </td>
						<td>22/07/2020</td>
						<td>Peterson Cemetery</td>
					</tr>
					<tr>
						<td>Orville Lambert</td>
						<td>25/08/2020</td>
						<td>Berkely Sports Center</td>
					</tr>
					
					<tr>
						<td>Lynda Houston</td>
						<td>03/01/2020</td>
						<td>Super Mart</td>
					</tr>
					
					<tr>
						<td>Paula Angelton</td>
						<td>02/02/2020</td>
						<td>Vadra Inc.</td>
					</tr>
					
				</table>
			
			</div>

			<div class="timeline-container">
				<h4>Updates</h4>

				<div class="timeline-item">
					<h4>User Bugs Solved</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, in nulla placeat illo suscipit voluptas provident omnis sint voluptates ea.</p>
					<br>
					<span><i class="fa fa-clock"></i></span>
					<span>3 Months Ago</span>
				</div>

				<div class="timeline-item">
					<h4>Liberty Payment Done</h4>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, in nulla placeat illo suscipit voluptas provident omnis sint voluptates ea.</p>
					<br>
					<span><i class="fa fa-clock"></i></span>
					<span>5 Months Ago</span>
				</div>
				
			</div>
		</div>
	`

	$('#content').html('')
	$('#content').append(component)

}


const renderGraphs = () => {
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

}

var page = 'overview'
renderOverview()
renderGraphs()
$('#overview').click( e => {
	renderOverview()
	setTimeout(() => renderGraphs(), 2000)
})

$('#invoices').click(e => {
	renderInvoices()
})

$('#projects').click(e => {
	renderProject()
})