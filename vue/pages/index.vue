<template>
  <div>
    <TestForm />
  </div>
</template>

<script>
import TestForm from "~/components/TestForm";
export default {
  data() {
    return {
      name: "nuxt2",
    };
  },
  components: {
    TestForm,
  },
};
</script>

<style></style>
