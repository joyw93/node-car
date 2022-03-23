<template>
  <div>
    <v-chip text-color="white" color="indigo" small class="mb-5">
      잔존가치
    </v-chip>
    <canvas id="residual-chart" width="600" height="300"></canvas>
  </div>
</template>

<script>
import ResidualChart from "chart.js";
export default {
  data() {
    return {
      residualChartData: {
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
              label: "가격",
              data: [500, 450, 300, 250, 120, 40, 20, 10],
              backgroundColor: "rgba(33, 150, 243,.5)",
              borderColor: "#2196F3",
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
          tooltips: {
            mode: "index",
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
                  suggestedMin: 5,
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
    const ctx = document.getElementById("residual-chart");
    new ResidualChart(ctx, this.residualChartData);
  },
};
</script>
