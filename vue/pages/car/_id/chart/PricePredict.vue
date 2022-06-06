<template>
  <div>
    <canvas id="planet-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  props: {
    price: Number,
  },
  data() {
    return {
      planetChartData: {
        type: "line",
        data: {
          labels: ["현재", "6개월후", "1년뒤", "2년뒤"],
          datasets: [
            {
              label: "잔존가치",
              data: [this.price, parseInt(this.price * 0.9)],
              backgroundColor: "rgba(100, 181, 246, .5)",
              borderColor: "#448AFF",
              borderWidth: 3,
              pointRadius: 0,
              order: 3,
            },
            {
              label: "잔존가치",
              data: [
                this.price,
                parseInt(this.price * 0.9),
                parseInt(this.price * 0.7),
                parseInt(this.price * 0.4),
              ],
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
                  y: this.price,
                  r: 11,
                },
                {
                  y: parseInt(this.price * 0.9),
                  r: 11,
                },
                {
                  y: parseInt(this.price * 0.7),
                  r: 11,
                },
                {
                  y: parseInt(this.price * 0.4),
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
                  suggestedMax: parseInt(this.price*1.2),
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
