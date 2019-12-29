<template>
  <div class="box">
    <h1 class="title">Level 1</h1>
    <p>Counter (props) : {{ counter }}</p>
    <p><button @click="$emit('reset')">reset</button></p>
    <level2 :counter="counter"></level2>
  </div>
</template>
<script>
import Level2 from "./Level2";
export default {
  data() {
    return {};
  },
  components: {
    level2: Level2
  },
  props: ["counter"]
};
</script>
