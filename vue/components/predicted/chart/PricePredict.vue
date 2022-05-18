<template>
  <div>
    <canvas id="planet-chart"></canvas>
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
          labels: ["현재", "6개월후", "1년뒤", "2년뒤"],
          datasets: [
            {
              label: "잔존가치",
              data: [5890, 5536],
              backgroundColor: "rgba(100, 181, 246, .5)",
              borderColor: "#448AFF",
              borderWidth: 3,
              pointRadius: 0,
              order: 3,
            },
            {
              label: "잔존가치",
              data: [5890, 5536, 5337, 4593],
              backgroundColor: "rgba(100, 181, 246, .5)",
              borderColor: "#448AFF",
              borderWidth: 3,
              pointRadius: 0,
              order: 2,
            },
            {
              label: "잔존가치",
              type: "bubble",
              data: [
                {
                  y: 5890,
                  r: 11,
                },
                {
                  y: 5536,
                  r: 11,
                },
                {
                  y: 5337,
                  r: 11,
                },
                {
                  y: 4593,
                  r: 11,
                },
              ],
              backgroundColor: "rgba(255,255,255,1)",
              borderWidth: 2,
              hoverRadius: 2.5,
              borderColor: "#448AFF",
              order: 1,
            },
          ],
        },
        options: {
          legend: {
            display: false,
          },
          responsive: true,
          lineTension: 1,
          tooltips: {
            mode: "single",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: "",
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                ticks: {
                  suggestedMin: 4000,
                  stepSize: 500,
                  padding: 25,
                },
                scaleLabel: {
                  display: false,
                  labelString: "(만원)",
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
<style scoped>
#planet-chart {
  margin-top: 30px;
}
</style>
