import React from "react";
import dynamic from 'next/dynamic'
const ReactApexChart = dynamic(() => import ("react-apexcharts"), {ssr:false});



class BestPractices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [100],
    
      options: {
        chart: {
          height: 150,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['BestPractices'],
        fill:{
          colors:['#00C897']
        }
      },
      
      
    
    };
  }



  render() {
    return (
      


<div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series}
 type="radialBar" height={200}  />
</div>



    );
  }
}




export default BestPractices;