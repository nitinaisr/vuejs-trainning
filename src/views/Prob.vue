<template>
  <div class="box">
    <h1 class="title">Prob</h1>
    <!-- เรียกใช้ ตัวลูก แล้วส่ง prop ชื่อ :counter="counter" -->
    <level1 @reset="reset()" :counter="counter"></level1>

    <p>Counter: {{ counter }}</p>
    <p>
      <button @click="counter += 1">Update</button>
    </p>

    <p>
      <button @click="$store.commit('updateNumber')" class="button">
        Update Number
      </button>
    </p>
  </div>
</template>
<script>
import Level1 from "../components/Level1";
export default {
  data() {
    return {
      counter: 1
    };
  },
  components: {
    level1: Level1
  },
  methods: {
    reset() {
      this.counter = 1;
    }
  }
};
</script>
