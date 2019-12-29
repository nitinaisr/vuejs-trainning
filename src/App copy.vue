<template>
  <div>
    <h1>App</h1>
    <p>Thai Amount: {{ amount }}</p>
    <p>US Amount: {{ usAmountText }}</p>
    <div v-if="amount < 5">
      <button @click="amount += 1">Update</button>
    </div>
    <!-- <div v-else> -->
    <p v-else>Sorry</p>
    <!-- </div> -->
    <a href="https://google.com">google</a>
    <p></p>
    <a :href="'https://yahoo.com'">yahoo</a>

    <p v-if="counter < 5" class="red">Counter:{{ counter }}</p>
    <p v-else class="blue">Counter:{{ counter }}</p>

    <p :class="className">Counter: {{ counter }}</p>
    <button @click="updateCounter()">counter</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    updateAmount() {
      this.amount = 500;
    },
    poundAmount() {
      return 400;
    },
    updateCounter() {
      this.counter += 1;
      // if (this.counter > 5) {
      //   this.className = "blue";
      // }
    }
  },
  data() {
    return {
      url: "https://yahoo.com",
      amount: 1,
      counter: 1
      // className: "red"
    };
  },
  computed: {
    usAmount() {
      return this.amount / 35;
    },
    usAmountText() {
      return "$" + this.usAmount.toString();
    },
    className() {
      if (this.counter > 5) {
        return "blue";
      } else {
        return "red";
      }
    }
  }
};

import "bulma/css/bulma.min.css";
export default {};
</script>

<style>
.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
