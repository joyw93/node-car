<template>
  <div>
    <canvas id="planet-chart" width="300" height="300"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  data() {
    return {
      planetChartData: {
        type: "line",
        data: {
          labels: ["2015", "2016", "2017", "2018", "2019"],
          datasets: [
            {
              label: "잔존가치",
              data: [0, 0, 0, 0, 0, 0, 0, 0],
              backgroundColor: "rgba(54,73,93,.5)",
              borderColor: "#36495d",
              borderWidth: 3,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
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
