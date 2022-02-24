import React,{useEffect,useState} from "react";
import Highcharts from "highcharts";
// Import our demo components
import Chart from "components/graph/Chart.js";
// Load Highcharts modules
require("highcharts/modules/exporting")(Highcharts);





const LoanGraph = ({amount,month}) => {
      console.log("amount-prop",amount) 
      console.log("month-prop",month) 



      const chartOptions = {


        chart: {
            zoomType: 'xy'
          },
          title: {
            text: 'Sales Details'
          },
    
          xAxis: [{
            categories: month,
            crosshair: true
          }],
          yAxis: [{ // Primary yAxis
            labels: {
              format: '{value}',
              style: {
                color: Highcharts.getOptions().colors[1]
              }
            },
            title: {
              text: 'Amount',
              style: {
                color: Highcharts.getOptions().colors[1]
              }
            }
          }, { // Secondary yAxis
            title: {
              text: "",
              style: {
                color: Highcharts.getOptions().colors[0]
              }
            },
            labels: {
              format: '{value} ',
              style: {
                color: Highcharts.getOptions().colors[0]
              }
            },
            opposite: true
          }],
          tooltip: {
            shared: true
          },
          legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
              Highcharts.defaultOptions.legend.backgroundColor || // theme
              'rgba(255,255,255,0.25)'
          },
          series: [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: amount
        
          }, {
            name: 'Amount',
            type: 'spline',
            data: amount
          }]
      };

return(
    <div>
    
      <h1>Loan Over View</h1>
      <h4>Loans Type</h4>    
      <Chart options={chartOptions} highcharts={Highcharts} />
    </div>
);

};

  export default LoanGraph;