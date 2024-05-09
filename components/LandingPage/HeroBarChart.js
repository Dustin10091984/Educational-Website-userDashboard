import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});


export default class HeroBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "ریاضی",
          data: [12, 15, 19, 18, 19, 20, 19.9, 21, 22],
        },
        {
          name: "شیمی",
          data: [10, 14, 14.2, 13, 14, 15, 18, 17, 16],
        },
        {
          name: "فیزیک",
          data: [7, 8, 10, 11, 12, 13, 13, 11, 12],
        },
        {
          name: "انگلیسی",
          data: [5.5, 4.1, 6, 6, 6.5, 6.8, 6.2, 7.3, 8],
        },
   
    
        {
          name: "زیست ",
          data: [3.5, 4.1, 3.6, 2.6, 4.5, 4.8, 5.2, 5.3, 4.4],
        },
    
 
      ],
      options: {
        chart: {
          type: "bar",
          height: 250,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "75%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["transparent"],
        },
        theme:{
          mode:'light'
        },
        xaxis: {
          categories: [
            "مهر",
            "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند",
            "فروردین",
            "اردیبهشت",
            "خرداد",
          ],
        },
        yaxis: {
          title: {
            text: "% ",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "% " + val + " ";
            },
          },
        },
      },
    };
  }
  render() {
    return (
      <div style={{width:'100%'}} id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={300}
          width={'100%'}
        />
      </div>
    );
  }
}
