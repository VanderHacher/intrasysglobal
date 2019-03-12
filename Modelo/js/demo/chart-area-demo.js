// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5",
	"Mar 6", "Mar 7", "Mar 8",
	"Mar 9", "Mar 10", "Mar 11",
	"Mar 12", "Mar 14" , "Mar 15" ,
	"Mar 16" , "Mar 17" , "Mar 19",
	"Mar 20", "Mar 21", "Mar 22", 
	"Mar 23", "Mar 24", "Mar 25", 
	"Mar 26", "Mar 27", "Mar 27",
	"Mar 29", "Mar 30"],
	
    datasets: [{
      
	 //verde
	 borderColor: "rgba(45, 234, 8, 1)",
	 backgroundColor: "rgba(45, 234, 8, 0.5)",
	 fillColor : "rgba(99,123,133,0.4)",
	 strokeColor : "rgba(220,220,220,1)",
	 pointColor : "rgba(220,220,220,1)",
	 pointStrokeColor : "#fff",
	 pointBackgroundColor: "rgba(45, 234, 8, 0.9)",
	 data: [0, 120,550,335,555],
 },
	  
    {
	 //vermelho
	 borderColor: "rgba(215, 11, 18, 0.5)",
	 fillColor : "rgba(5,217,171,1)",
	 backgroundColor: "rgba(215, 11, 18, 0.1)",
	 strokeColor : "rgba(220,220,220,1)",
	 pointColor : "rgba(220,220,220,0.3)",
	 pointBackgroundColor: "rgba(215, 11, 18, 0.3)",
	 pointStrokeColor : "#fff",
	 data: [120,120, 120,240, 360,480, 600, 720, 720,720, 840, 960, 1080,1200, 1200,1200, 1320,1440, 1560, 1680, 1800, 1800,1800,1920, 2040, 2160, 2280, 2400],
 	  
    },]
  },
  
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 30
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 3000,
          maxTicksLimit: 10
        },
        gridLines: {
          color: "rgba(0, 0, 0, .135)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
