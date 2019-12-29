<template>
  <div>
    <h1>About</h1>
    <div :class="classModal">
      <div class="modal-background" @click="show=false"></div>
      <div class="modal-content">
        <!-- Any other Bulma elements you want -->

        <div class="box">
          <h1 class="title">Modal Window</h1>
        </div>
      </div>
      <button @click="show=false" class="modal-close is-large" aria-label="close"></button>
    </div>

    <hr />
    <button @click="show=true" class="button is-primary">Show Modal</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    classModal() {
      return this.show ? "modal is-active" : "modal ";
    }
  }
};
</script>
