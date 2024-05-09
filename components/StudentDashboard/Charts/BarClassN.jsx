// components/HorizontalBarChart.js

// import React from 'react';
// import { AgChartsReact } from 'ag-charts-react';

// const HorizontalBarChart = () => {
//   const options = {
//     theme: 'ag-default-dark',


//     background: {
//       fill: 'transparent', // Set the chart background to transparent
//     },
  
    
//     data: [
//       {
//         Course: "زیست",
//         کلاسی: 19,
//         پایانی: 6,
//       },
//       {
//         Course: "شیمی",
//         کلاسی: 2,
//         پایانی: 16,
    
//       },
//       {
//         Course: "ریاضی",
//         کلاسی: 12,
//         پایانی: 16,
   
//       },
//       {
//         Course: "فیزیک",
//         کلاسی: 16,
//         پایانی: 19,
        
     
//       },
//       {
//         Course: "انگلیسی",
//         کلاسی: 20,
//         پایانی: 16,
        
     
//       },

//     ],
//     series: [
//       {
//         type: "bar",
//         direction: "horizontal",
//         fill: '#41a6c2',
//         xKey: "Course",
//         yKey: "پایانی",
//         yName: "پایانی",
//       },
//       {
//         type: "bar",
//         direction: "horizontal",
//         fill: '#880a8885',
//         xKey: "Course",
//         yKey: "کلاسی",
//         yName: "کلاسی",
//       },
      
  
  
//     ],


  
    
  
    
//   };

//   return <AgChartsReact options={options} />;
// };

// export default HorizontalBarChart;


import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});


export default class BarClassN extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "ریاضی",
          data: [12, 15, 19, 18, 19, 20, 19.9, 18, 20],
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
          data: [15.5, 4.1, 13, 16, 12.5, 16.8, 16.2, 7.3, 8],
        },
   
    
        {
          name: "زیست ",
          data: [17.5, 14.1, 13.6, 12.6, 11.5, 14.8, 15.2, 15.3, 14.4],
        },
    
 
      ],
      options: {
        chart: {
          type: "bar",
          height: 400,
          background: 'transparent',
          toolbar: {
            show: false,
          }
          
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "65%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        theme:{
          mode:'dark'
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
            text: " ",
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "" + val + " ";
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
          height={400}
          width={'100%'}
        />
      </div>
    );
  }
}
