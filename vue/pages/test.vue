<template>
  <div>
    <v-btn @click="send">HTTP테스트버튼</v-btn>
  </div>
</template>

<script>
import axios from "axios";
const serverUrl = process.env.serverUrl;
const mlServerUrl = process.env.mlServerUr;
export default {
  methods: {
    send() {
      axios.post(
        `${serverUrl}/car/test`,
        { data: "hello server" },
        { withCredentials: true }
      );
    },
  },
};
</script>

<style scoped></style>
