<template>
  <div>
    <h1 class="title">Home</h1>
    <h1>สวัสดี</h1>

    <p>
      <button @click="counter += 1" :class="'button' + className">update</button>
    </p>
    <div>
      <!-- 'progress' มองว่าเป็น string ธรรมดา ถ้าไม่ใส่ '' Vue อาจจะมองว่าเป็น computed หรือ state -->
      <progress :class="'progress' + className" :value="counter" max="20">{{ counter }} %</progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1
    };
  },
  computed: {
    className() {
      return this.counter % 2 ? " is-primary" : " is-danger";
    }
    // className2() {
    //   return this.counter % 2 ? "progress is-primary" : "progress is-danger";
    // }
  }
};
</script>
