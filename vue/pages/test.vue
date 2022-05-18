<template>
  <div>
    <div id="text-block"></div>
    <div id="info-block">
      <div id="info"></div>
      <div id="img"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#text-block {
  display: inline-block;
  height: 200px;
  width: 400px;
  background-color: aqua;
}

#info-block {
  
  float: right;
}

#info {
  display: inline-block;
  width: 400px;
  height: 200px;
  background-color: rgb(43, 136, 74);
}

#img {
  display: inline-block;
  width: 400px;
  height: 200px;
  background-color: rgb(138, 37, 96);
}
</style>
