<template>
  <div>
    <canvas id="bubbleChartData" width="600" height="300"></canvas>
  </div>
</template>

<script>
import BubbleChart from "chart.js";
export default {
  data() {
    return {
      bubbleChartData: {
        type: "line",
        data: {
          labels: [
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
          ],
          datasets: [
            {
              label: "적정가격",
              data: [0, 100, 200, 300, 400, 500, 600, 700],
              backgroundColor: "rgba(33, 150, 243,.0)",
              borderColor: "#2196F3",
              borderWidth: 3,
            },
            {
              label: "매물가격",
              type: "bubble",
              data: [
                {
                  x: 2015,
                  y: 110,
                  r: 10,
                },
                {
                  x: 2016,
                  y: 200,
                  r: 10,
                },
                {
                  x: 2017,
                  y: 180,
                  r: 10,
                },
                {
                  x: 2018,
                  y: 400,
                  r: 10,
                },
                {
                  x: 2019,
                  y: 350,
                  r: 10,
                },
                {
                  x: 2020,
                  y: 400,
                  r: 10,
                },
              ],
              backgroundColor: "rgba(233, 30, 99,.5)",
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("bubbleChartData");
    new BubbleChart(ctx, this.bubbleChartData);
  },
};
</script>
