import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class HeroChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: '  میانگین',
          data: [16, 18, 14, 16,8, 10, 12, 14, 16, 18, 14, 14, 18, 20, 17, 12,19,18]
        }],
        options: {
          chart: {
            height: 50,
            type: 'line',
          },
          forecastDataPoints: {
            count: 7
          },
          stroke: {
            width: 5,
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 6,
            labels: {
              formatter: function(value, timestamp, opts) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              }
            }
          },
          title: {
            text: '',
            align: 'left',
            style: {
              fontSize: "6px",
              color: '#ff00ea57'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              gradientToColors: [ '#ff00ea57'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            },
          },
          yaxis: {
            min: 0,
            max: 20
          }
        },
      
      
      };
    }

  

    render() {
      return (
        


  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300}  width={'100%'} />
</div>



      );
    }
  }

export default HeroChart;