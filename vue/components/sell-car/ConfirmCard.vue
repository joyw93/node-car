<template>
  <v-container>
    <v-card-text class="card-content">
      <h2><span>상세페이지</span></h2>
      <v-btn @click="onSubmit" x-large id="next-button">등록하기</v-btn>
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onSubmit() {
    },
  },
  watch: {},
};
</script>

<style scoped>
.card-selected {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.card {
  border: 2px solid #1565c0;
  border-radius: 15px;
}

.card-content {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
}

.header {
  margin-bottom: 10px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-group {
  margin-top: 50px;
}

span {
  color: #2196f3;
}

h2 {
  margin-bottom: 5px;
}

#side-card {
  display: flex;
  justify-content: center;
  align-items: center;
}

#option {
  display: flex;
  justify-content: center;
  align-items: center;
}

#next-button {
  margin-top: 40px;
  background-color: #364f7f;
  color: white;
}
</style>
