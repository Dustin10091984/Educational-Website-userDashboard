// components/HorizontalBarChart.js

// import React from 'react';
// import { AgChartsReact } from 'ag-charts-react';

// const LinePerformance = () => {
//   const options = {
//     theme: 'ag-default-dark',


//     background: {
//       fill: 'transparent', // Set the chart background to transparent
//     },
  
    
//     data: [
//       {
//         Course: "زیست",
//         میانگین: 18,
//         من: 20,
//       },
//       {
//         Course: "شیمی",
//         میانگین: 18,
//         من: 19,
    
//       },
//       {
//         Course: "ریاضی",
//         میانگین: 18,
//         من: 20,
   
//       },
//       {
//         Course: "ادبیات",
//         میانگین: 19,
//         من: 8,
   
//       },
//       {
//         Course: "فیزیک",
//         میانگین: 18,
//         من: 19,
        
     
//       },
//       {
//         Course: "انگلیسی",
//         میانگین :18,
//         من: 20,
     
//       },

//       {
//         Course: " ادبیات",
//         میانگین : 18,
//         من:20,
     
//       },

//     ],
//     series: [
//       {
//         type: "line",
//         // direction: "horizontal",
//         // fill: '#41a6c2',
//         xKey: "Course",
//         yKey: "میانگین",
//         yName: "میانگین",
//       },
//       {
//         type: "line",
//         // direction: "horizontal",
//         // fill: '#880a8885',
//         xKey: "Course",
//         yKey: "من",
//         yName: "من",
//       },
      
      
  
  
//     ],


  
    
  
    
//   };

//   return <AgChartsReact options={options} />;
// };

// export default LinePerformance;


// components/HorizontalBarChart.js

// import React from 'react';
// import { AgChartsReact } from 'ag-charts-react';

// const BarCourses = () => {
//   const options = {
//     theme: 'ag-default-dark',


//     background: {
//       fill: 'transparent', // Set the chart background to transparent
//     },
  
    
//     data: [
//       {
//         Course: "زیست",
//         کل: 24,
//         جاری: 6,
//       },
//       {
//         Course: "شیمی",
//         کل: 32,
//         جاری: 16,
    
//       },
//       {
//         Course: "ریاضی",
//         کل: 40,
//         جاری: 26,
   
//       },
//       {
//         Course: "ادبیات",
//         کل: 4,
//         جاری: 16,
   
//       },
//       {
//         Course: "فیزیک",
//         کل: 24,
//         جاری: 19,
        
     
//       },
//       {
//         Course: "انگلیسی",
//         کل : 20,
//         جاری: 16,
     
//       },

//       {
//         Course: " ادبیات",
//         کل : 20,
//         جاری: 16,
     
//       },

//     ],
//     series: [
//       {
//         type: "bar",
//         // direction: "horizontal",
//         // fill: '#41a6c2',
//         xKey: "Course",
//         yKey: "کل",
//         yName: "کل",
//       },
//       {
//         type: "bar",
//         // direction: "horizontal",
//         // fill: '#880a8885',
//         xKey: "Course",
//         yKey: "جاری",
//         yName: "جاری",
//       },
      
      
  
  
//     ],


  
    
  
    
//   };

//   return <AgChartsReact options={options} />;
// };

// export default BarCourses;




import React, { Component } from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});





class BarCourses extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: '  میانگین',
          data: [16, 18, 14, 16,8, 10, 12, 14, 16, 18, 14, 14, 18, 20, 17, 12,19,18]
        }],
        options: {
          chart: {
            height: 400,
            type: 'line',
            background: 'transparent',
            toolbar: {
              show: false,
            }
          },
          theme:{
            mode:'dark'
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
<ReactApexChart options={this.state.options} series={this.state.series} type="line" height={400} />
</div>



      );
    }
  }

export default BarCourses;