import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class Desend extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'تعداد ',
            data: [100, 40, 28, 70, 42, 80, 50 ]
          }, {
            name: 'تعداد  ',
            data: [10, 4, 5, 13, 7, 15, 6]
          }],
          options: {
            chart: {
              height: 400,
              type: 'area',
              background: 'transparent',
              toolbar: {
                show: false,
              }
            },
            theme:{
              mode:'dark'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-10T00:00:00.000Z", "2018-09-11T01:30:00.000Z", "2018-09-12T02:30:00.000Z", "2018-09-13T03:30:00.000Z", "2018-09-14T04:30:00.000Z", "2018-09-15T05:30:00.000Z", "2018-09-16T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
          },
        
        
        };
      }

    

      render() {
        return (
          


    <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={400} />
</div>
  


        );
      }
    }


export default Desend;