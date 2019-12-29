<template>
  <div>
    <section class="section">
      <div class="container">
        <navbar></navbar>
        <h1 class="title">App</h1>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
export default {
  // import อย่า่งเดียวยังใช้ไม่ได้ ต้องมีการ Register ด้วยการ ใช้ components
  components: {
    navbar: Navbar
  },
  head: {
    title: { inner: "สวัสดีชาวโลก" },
    link: [
      {
        href: "https://fonts.googleapis.com/css?family=Kanit&display=swap",
        rel: "stylesheet"
      }
    ]
  }
};
</script>

<style>
/* ใช้ font นี้ ทั้ง page */
body {
  font-family: "Kanit";
}
</style>
