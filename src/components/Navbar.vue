<template>
  <div>
    <h1 class="title">Navbar</h1>
    <!-- ใช้ <a href=""></a>  ไม่ได้เนื่องจากว่ามันจะมีการ Refresh หน้า-->
    <!-- ถ้าต้องการให้ลิ้งค์ไปที่ เว็บไซต์อื่นให้ใช้ <a></a> -->

    <nav class="navbar">
      <div class="navbar-brand">
        <a
          @click="ToggleActive()"
          :class="'navbar-burger burger' + classHambergerMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div :class="`navbar-menu  ${classHambergerMenu}`">
        <router-link
          v-for="each in links"
          :key="each.to"
          :to="each.to"
          class="navbar-item"
          @click.native="ToggleActive()"
          >{{ each.text }}</router-link
        >
        <!-- <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="/about" class="navbar-item">About</router-link>
        <router-link to="/contact" class="navbar-item">Contact</router-link>
        <router-link to="/form" class="navbar-item">Form</router-link>
        <router-link to="/photo" class="navbar-item">Photo</router-link>
        <router-link to="/user" class="navbar-item">User</router-link>-->
      </div>
    </nav>

    <a href></a>
  </div>
</template>
<script>
export default {
  methods: {
    ToggleActive() {
      return (this.isActive = !this.isActive);
    }
  },
  data() {
    return {
      isActive: false,
      links: [
        {
          to: "/",
          text: "Home"
        },
        {
          to: "/about",
          text: "About"
        },
        {
          to: "/contact",
          text: "Contact"
        },
        {
          to: "/form",
          text: "Form"
        },
        {
          to: "/photo",
          text: "Photo"
        },
        {
          to: "/user",
          text: "User"
        },
        {
          to: "/search",
          text: "Search"
        },
        {
          to: "/prob",
          text: "Prob"
        }
      ]
    };
  },
  computed: {
    classHambergerMenu() {
      return this.isActive ? " is-active" : "";
    }
  }
};
</script>
