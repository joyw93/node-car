<template>
  <v-container class="item-group">
    <v-card-text class="card-content">
      <h2>소중한 내 차, 어떤 점이 특별한지 알려주세요</h2>
      <h4>
        차량의 특징 및 장점을 남겨주시면 더 정확한 견적가를 받아보실 수
        있습니다.
      </h4>
      <v-textarea
        v-model="feature"
        hint="예) 최근 타이밍체인 교체 및 경정비 완료. 1인소유, 1인운행으로 깨끗하게 관리된 차량입니다."
        class="textarea"
        label="특징 및 장점 (최대 500자)"
        auto-grow
        outlined
        rows="6"
        row-height="25"
      ></v-textarea>
      <h3>최고가 딜러의 추천을 받으시겠어요?</h3>
      <v-radio-group column v-model="isRecommend">
        <v-radio label="네, 연락주세요" color="primary" value="true"></v-radio>
        <v-radio
          label="아니오, 직접 연락할게요."
          color="primary"
          value="false"
        ></v-radio>
      </v-radio-group>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      feature: "",
      isRecommend: "true",
    };
  },
  watch: {
    feature(newVal) {
      this.$store.dispatch("register_car/setFeature", {
        feature: newVal
      })
    },
    isRecommend(newVal) {
      this.$store.dispatch("register_car/setIsRecommend", {
        isRecommend: newVal
      })
    }
  }
};
</script>

<style scoped>
.card-content {
  margin-top: 30px;
  margin-left: 50px;
}

.header {
  margin-bottom: 10px;
}

.item-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.textarea {
  margin-top: 30px;
}

span {
  color: #2196f3;
}

h2 {
  margin-bottom: 10px;
}

#side-card {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
