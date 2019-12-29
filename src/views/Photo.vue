<template>
  <div>
    <h1>Photo</h1>
    <img :style="style" @click="isclick=!isclick" src="/photo.jpg" alt="Photo" />

    <p>{{isclick}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isclick: false,
      select: { border: "solid black 3px", cursor: "pointer" },
      deselect: { cursor: "pointer" }
    };
  },
  computed: {
    style() {
      return this.isclick ? this.select : this.deselect;
    }
  }
};
</script>