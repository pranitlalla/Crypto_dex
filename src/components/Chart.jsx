import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Chart = ({arr = [], currency, days}) => {
    const prices = []
    const date = []
    console.log(arr)

    for (let i = 0 ; i < arr.length ; i++) {
        if(days === '24hr')
        {
            date.push(new Date(arr[i][0]).toLocaleTimeString())
        }
        date.push(new Date(arr[i][0]).toLocaleDateString())
        prices.push(arr[i][1])
    }
  return (
    <div>
        <Line 
        options = {{
            responsive : true
        }}
        data = {{
            labels : date,
            datasets : [{
                label : `Price in ${currency}`,
                data : prices,
                borderColor: 'rgb(234, 99, 122)',
                backgroundColor : 'rgba(234,99,122, 0.4)'
            }
            ]
        }}>
        </Line>
    </div>
  )
}

export default Chart