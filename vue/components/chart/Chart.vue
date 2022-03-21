<template>
  <div>
    <canvas id="planet-chart" width="600" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      planetChartData: {
        type: "bar",
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
              label: "잔존가치",
              data: [500, 450, 300, 250, 120, 40, 20, 10],
              backgroundColor: "rgba(54,73,93,.5)",
              borderColor: "#36495d",
              borderWidth: 3,
            },
            {
              label: "주행거리",
              data: [
                300,200,100,50,40,30,20,10
              ],
              backgroundColor: "rgba(33, 150, 243,.5)",
              borderColor: "#2196F3",
              borderWidth: 3,
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
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
  },
};
</script>
