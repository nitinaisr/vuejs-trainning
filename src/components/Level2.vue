<template>
  <div class="box">
    <h1 class="title">Level 2</h1>
    <p>Counter (props) {{ counter }}</p>
    <p>Number: {{ number }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["counter"],
  computed: {
    number() {
      return this.$store.state.number;
    }
  }
};
</script>
