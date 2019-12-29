<template>
  <div>
    <h1 class="title">Contact</h1>
    {{languages}}
    <!-- v-for ต้องมี :key ด้วย และต้องเป็น unique เนื่องจากอาจจะมีการทำบางอย่างกับ data ในภายหลัง -->
    <p v-for="each in languages" :key="each.text">{{each.text}}</p>

    <div class="list is-hoverable">
      <a v-for="each in languages" :key="each.text" class="list-item">{{each.text}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //state languages ที่เป็น array
      languages: [
        { text: "JavaScript" },
        { text: "PHP" },
        { text: "JAVA" },
        { text: "C#" },
        { text: "Python" }
      ]
    };
  }
};
</script>