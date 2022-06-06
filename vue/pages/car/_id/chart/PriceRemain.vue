<template>
  <div>
    <div class="badge">
      <span id="badge"
        >{{carAge}}년 경과 /&nbsp;<span
          :style="{ fontSize: '22px', fontWeight: 'bolder', color: '#1565C0' }"
          >32%감가</span
        >
        
      </span>
    </div>
    <canvas id="residual-chart"></canvas>
    <div id="text-under">최초 실구매가로 산출된 신차가격</div>
  </div>
</template>

<script>
import ResidualChart from "chart.js";
export default {
  props: {
    price: Number,
    predictedPrice: Number,
    age: Number,
  },
  data() {
    return {
      residualChartData: {
        type: "bar",
        data: {
          labels: ["신차가격", "중고차가격"],
          datasets: [
            {
              label: "가격",
              data: [
                parseInt(this.predictedPrice * 1.8),
                parseInt(this.predictedPrice),
              ],
              backgroundColor: [
                "rgba(13, 71, 161, 0.8)",
                "rgba(233, 30, 99, 0.8)",
              ],
              borderColor: ["#0D47A1", "#E91E63"],
              borderWidth: 1,
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
                barPercentage: 0.3,
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
                  suggestedMin: 5000,
                  stepSize: 1000,
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
  computed: {
    carAge() {
      const now = new Date();
      const currentYear = now.getFullYear();
      return currentYear - this.age;
    },
  },
  mounted() {
    const ctx = document.getElementById("residual-chart");
    new ResidualChart(ctx, this.residualChartData);
  },
};
</script>
<style scoped>
.badge {
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#badge {
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  height: 45px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 30px;
}

#residual-chart {
  margin-top: 20px;
}

#text-under {
  font-size: 14px;
  text-align: center;
}
</style>
